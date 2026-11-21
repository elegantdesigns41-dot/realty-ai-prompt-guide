import { useEffect, useRef, type ReactNode } from "react";
import { toast } from "sonner";
import { ArrowRight, CircleCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export const FUNNEL_ROUTES = ["/", "/upsell-1", "/upsell-2", "/downsell-1"] as const;
export type FunnelRoute = (typeof FUNNEL_ROUTES)[number];

export const NEXT_FUNNEL_ROUTE: Record<FunnelRoute, FunnelRoute | null> = {
  "/": "/upsell-1",
  "/upsell-1": "/upsell-2",
  "/upsell-2": "/downsell-1",
  "/downsell-1": null,
};

/** Each offer page must use its own WarriorPlus Sales Page Code. */
const DISCLAIMER_SCRIPTS: Record<FunnelRoute, string> = {
  "/": "https://warriorplus.com/o2/js/s4zkjk",
  "/upsell-1": "https://warriorplus.com/o2/js/rdw2pv",
  "/upsell-2": "https://warriorplus.com/o2/js/s660hn",
  "/downsell-1": "https://warriorplus.com/o2/js/blq8mw",
};

/** WarriorPlus scans for real anchor links; an onClick redirect isn't a buy-button link. */
const BUY_URL_BY_PIXEL: Record<string, string> = {
  "https://warriorplus.com/o2/btn/pn110011001/v19ymw/s4zkjk/479033":
    "https://warriorplus.com/o2/buy/v19ymw/s4zkjk/q66n51",
  "https://warriorplus.com/o2/btn/pn100011001/v19ymw/rdw2pv/480931":
    "https://warriorplus.com/o2/buy/v19ymw/rdw2pv/x569q2",
  "https://warriorplus.com/o2/btn/pn100011001/v19ymw/s660hn/480935":
    "https://warriorplus.com/o2/buy/v19ymw/s660hn/thq2lh",
  "https://warriorplus.com/o2/btn/pn100011001/v19ymw/blq8mw/480941":
    "https://warriorplus.com/o2/buy/v19ymw/blq8mw/hbc676",
};

const disclaimerLoads = new Map<string, Promise<void>>();

function normalizePath(pathname: string) {
  return (pathname.replace(/\/$/, "") || "/") as FunnelRoute;
}

/** Load after the disclaimer containers exist; a script that ran in <head> won't rerun if moved. */
function ensureDisclaimerScript(src: string) {
  const existingLoad = disclaimerLoads.get(src);
  if (existingLoad) return existingLoad;

  const existingScripts = Array.from(document.querySelectorAll<HTMLScriptElement>("script[src]"))
    .filter((script) => script.src === src);

  // Remove route-head copies: they may have executed before React mounted the disclaimer element.
  for (const script of existingScripts) script.remove();

  const load = new Promise<void>((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.dataset.warriorplusDisclaimer = "true";
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => resolve(), { once: true });
    document.body.appendChild(script);
  });

  disclaimerLoads.set(src, load);
  return load;
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

const FUNNEL_STEPS: { label: string; to: FunnelRoute }[] = [
  { label: "Guide", to: "/" },
  { label: "Vault", to: "/upsell-1" },
  { label: "Chatbot", to: "/upsell-2" },
  { label: "Lite", to: "/downsell-1" },
];

export function OrderBar({ current }: { current: number }) {
  return (
    <div className="bg-ink text-ink-foreground">
      <Container className="flex flex-col items-center justify-between gap-3 py-3 text-sm sm:flex-row">
        <p className="flex items-center gap-2">
          <CircleCheck className="size-4 text-ember" />
          <span>
            <strong>Your guide is confirmed.</strong>{" "}
            <span className="text-ink-muted">Please don't close this page yet.</span>
          </span>
        </p>
        <ol className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest">
          {FUNNEL_STEPS.map((step, index) => (
            <li key={step.to} className="flex items-center gap-2">
              {index > 0 && <span className="h-px w-5 bg-ink-foreground/30" aria-hidden />}
              <Link
                to={step.to}
                reloadDocument
                className={index === current ? "text-ember" : "text-ink-muted underline-offset-4 hover:text-ink-foreground hover:underline"}
              >
                {index + 1} · {step.label}
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </div>
  );
}

export function goOrNotify(url: string, title: string, description: string) {
  if (url) {
    window.location.assign(url);
    return;
  }
  toast(title, { description });
}

export function BuyBlock({
  label,
  declineLabel,
  onBuy,
  onDecline,
  declineTo,
  declineUrl,
  showDisclaimer = false,
  pixelUrl,
  dark = false,
}: {
  label: string;
  declineLabel: string;
  onBuy: () => void;
  onDecline?: () => void;
  declineTo?: FunnelRoute | null;
  declineUrl?: string;
  showDisclaimer?: boolean;
  pixelUrl?: string;
  dark?: boolean;
}) {
  const declineClass = `text-sm underline underline-offset-4 ${dark ? "text-ink-muted hover:text-ink-foreground" : "text-muted-foreground hover:text-foreground"}`;
  const buyUrl = pixelUrl ? BUY_URL_BY_PIXEL[pixelUrl] : undefined;

  return (
    <div className="flex flex-col items-start gap-4">
      {buyUrl ? (
        <Button variant="ember" size="xl" asChild className="h-auto whitespace-normal py-4 text-left">
          <a href={buyUrl}>
            {label}<ArrowRight />
          </a>
        </Button>
      ) : (
        <Button variant="ember" size="xl" onClick={onBuy} className="h-auto whitespace-normal py-4 text-left">
          {label}<ArrowRight />
        </Button>
      )}
      {pixelUrl && <img src={pixelUrl} height={1} width={1} alt="" aria-hidden="true" style={{ visibility: "hidden", position: "absolute" }} />}
      {declineUrl ? <a href={declineUrl} className={declineClass}>{declineLabel}</a> : declineTo ? (
        <Link to={declineTo} className={declineClass}>{declineLabel}</Link>
      ) : (
        <button type="button" onClick={onDecline} className={declineClass}>{declineLabel}</button>
      )}
      {showDisclaimer && <WarriorPlusDisclaimer dark={dark} className="mt-2 max-w-xl" />}
    </div>
  );
}

export function FunnelFooter() {
  return (
    <footer className="flex flex-col items-center gap-2 border-t border-border py-8 text-center text-xs text-muted-foreground">
      <p>© {new Date().getFullYear()} The Ultimate AI Prompt Guide for Real Estate Agents</p>
      <FooterLinks />
    </footer>
  );
}

export const SUPPORT_EMAIL = "nadiamichelle308@gmail.com";

export function FooterLinks() {
  const linkClass = "underline underline-offset-4 hover:text-foreground";
  return (
    <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
      <Link to="/support" className={linkClass}>Support</Link>
      <Link to="/privacy" className={linkClass}>Privacy Policy</Link>
      <Link to="/income-disclaimer" className={linkClass}>Income Disclaimer</Link>
    </nav>
  );
}

export function WarriorPlusDisclaimer({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const src = DISCLAIMER_SCRIPTS[normalizePath(window.location.pathname)];
    if (src) void ensureDisclaimerScript(src);
  }, []);

  return (
    <div
      ref={ref}
      suppressHydrationWarning
      className={`wplus_spdisclaimer text-base leading-relaxed ${dark ? "text-ink-muted" : "text-muted-foreground"} ${className}`}
    />
  );
}
