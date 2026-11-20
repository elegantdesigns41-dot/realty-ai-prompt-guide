import { useEffect, useRef, type ReactNode } from "react";
import { toast } from "sonner";
import { ArrowRight, CircleCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

/** Every page in the funnel, in the order a buyer walks through it. */
export const FUNNEL_ROUTES = ["/", "/upsell-1", "/upsell-2", "/downsell-1"] as const;

export type FunnelRoute = (typeof FUNNEL_ROUTES)[number];

/**
 * Where a buyer goes when they turn an offer down.
 * The last page has no next offer, so it stays `null`.
 */
export const NEXT_FUNNEL_ROUTE: Record<FunnelRoute, FunnelRoute | null> = {
  "/": "/upsell-1",
  "/upsell-1": "/upsell-2",
  "/upsell-2": "/downsell-1",
  "/downsell-1": null,
};

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

const FUNNEL_STEPS: { label: string; to: FunnelRoute }[] = [
  { label: "Guide", to: "/" },
  { label: "Vault", to: "/upsell-1" },
  { label: "Chatbot", to: "/upsell-2" },
  { label: "Lite", to: "/downsell-1" },
];

/** Top bar shown on every funnel page; `current` is the 0-based active step. Steps link to their page. */
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
          {FUNNEL_STEPS.map((s, i) => (
            <li key={s.to} className="flex items-center gap-2">
              {i > 0 && <span className="h-px w-5 bg-ink-foreground/30" aria-hidden />}
              <Link
                to={s.to}
                className={
                  i === current
                    ? "text-ember"
                    : "text-ink-muted underline-offset-4 hover:text-ink-foreground hover:underline"
                }
              >
                {i + 1} · {s.label}
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
    window.location.href = url;
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
  /** When set, the decline link goes to this funnel page instead of firing `onDecline`. */
  declineTo?: FunnelRoute | null;
  /** When set, the decline link opens this external URL (e.g. the WarriorPlus no-thanks page). */
  declineUrl?: string;
  /** When true, the WarriorPlus site disclaimer sits right under the buy button. */
  showDisclaimer?: boolean;
  /** Hidden WarriorPlus button-tracking pixel rendered beside the buy button. */
  pixelUrl?: string;
  dark?: boolean;
}) {
  const declineClass = `text-sm underline underline-offset-4 ${
    dark ? "text-ink-muted hover:text-ink-foreground" : "text-muted-foreground hover:text-foreground"
  }`;

  return (
    <div className="flex flex-col items-start gap-4">
      <Button variant="ember" size="xl" onClick={onBuy} className="h-auto whitespace-normal py-4 text-left">
        {label}
        <ArrowRight />
      </Button>
      {pixelUrl && (
        <img
          src={pixelUrl}
          height={1}
          width={1}
          alt=""
          aria-hidden="true"
          style={{ visibility: "hidden", position: "absolute" }}
        />
      )}
      {declineUrl ? (
        <a href={declineUrl} className={declineClass}>
          {declineLabel}
        </a>
      ) : declineTo ? (
        <Link to={declineTo} className={declineClass}>
          {declineLabel}
        </Link>
      ) : (
        <button type="button" onClick={onDecline} className={declineClass}>
          {declineLabel}
        </button>
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

/** Support inbox shown on the support page. */
export const SUPPORT_EMAIL = "nadiamichelle308@gmail.com";

/** Support and legal links shared by every page footer. */
export function FooterLinks() {
  const linkClass = "underline underline-offset-4 hover:text-foreground";
  return (
    <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
      <Link to="/support" className={linkClass}>
        Support
      </Link>
      <Link to="/privacy" className={linkClass}>
        Privacy Policy
      </Link>
      <Link to="/income-disclaimer" className={linkClass}>
        Income Disclaimer
      </Link>
    </nav>
  );
}

/**
 * WarriorPlus fills this div with its required site disclaimer.
 * Rendered right under the buy button on each offer page, at the page's normal
 * text size and on no background of its own (see the .wplus_spdisclaimer rules
 * in src/styles.css).
 */
export function WarriorPlusDisclaimer({
  dark = false,
  className = "",
}: {
  dark?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // WarriorPlus fills the disclaimer only when its script runs, which happens
  // once per full page load. After an in-app navigation (or if hydration
  // cleared the text) the div is empty, so load the script again. TanStack
  // Router may not leave the current route's head script in the document, so
  // explicitly include the home sales page script whenever its disclaimer mounts.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (!ref.current || ref.current.textContent?.trim()) return;
      const sources = new Set(
        Array.from(document.querySelectorAll<HTMLScriptElement>('script[src*="warriorplus.com/o2/js/"]')).map(
          (el) => el.src,
        ),
      );
      if (window.location.pathname === "/") {
        sources.add("https://warriorplus.com/o2/js/s4zkjk");
      }
      sources.forEach((src) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        document.body.appendChild(script);
      });
    }, 300);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      ref={ref}
      suppressHydrationWarning
      className={`wplus_spdisclaimer text-base leading-relaxed ${
        dark ? "text-ink-muted" : "text-muted-foreground"
      } ${className}`}
    />
  );
}
