import type { ReactNode } from "react";
import { toast } from "sonner";
import { ArrowRight, CircleCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

const FUNNEL_STEPS = ["Guide", "Vault", "Chatbot", "Access"];

/** Top bar shown on every upsell page; `current` is the 0-based active step. */
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
            <li key={s} className="flex items-center gap-2">
              {i > 0 && <span className="h-px w-5 bg-ink-foreground/30" aria-hidden />}
              <span className={i === current ? "text-ember" : "text-ink-muted"}>
                {i + 1} · {s}
              </span>
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
  dark = false,
}: {
  label: string;
  declineLabel: string;
  onBuy: () => void;
  onDecline: () => void;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col items-start gap-4">
      <Button variant="ember" size="xl" onClick={onBuy} className="h-auto whitespace-normal py-4 text-left">
        {label}
        <ArrowRight />
      </Button>
      <button
        type="button"
        onClick={onDecline}
        className={`text-sm underline underline-offset-4 ${
          dark ? "text-ink-muted hover:text-ink-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {declineLabel}
      </button>
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
