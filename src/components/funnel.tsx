import type { ReactNode } from "react";
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
    </div>
  );
}

export function FunnelFooter() {
  return (
    <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} The Ultimate AI Prompt Guide for Real Estate Agents
    </footer>
  );
}

/**
 * WarriorPlus fills this div with its required site disclaimer.
 * Rendered once in the root route, so every page carries it.
 */
export function WarriorPlusDisclaimer() {
  return (
    <Container className="py-6 text-center text-xs leading-relaxed text-muted-foreground">
      <div className="wplus_spdisclaimer" />
    </Container>
  );
}
