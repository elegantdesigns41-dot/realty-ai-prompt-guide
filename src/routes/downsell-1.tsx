import { createFileRoute } from "@tanstack/react-router";
import { Check, ClipboardList, LayoutTemplate, Mail } from "lucide-react";

import { BuyBlock as FunnelBuyBlock, Container, FunnelFooter, OrderBar, goOrNotify } from "@/components/funnel";
import {
  LITE_BUY_URL,
  LITE_DECLINE_URL,
  LITE_MODULES,
  LITE_PRICE_LABEL,
} from "@/lib/vault-lite";
import vaultMockup from "@/assets/vault-mockup.jpg";

export const Route = createFileRoute("/downsell-1")({
  head: () => ({
    meta: [
      { title: "Marketing Vault Lite — A Smaller Way to Start" },
      {
        name: "description",
        content:
          "13 Canva template blueprints, 2 starter email packs and 2 design worksheets for real estate agents. The essentials from the Marketing Vault, at a lower price.",
      },
      { property: "og:title", content: "Marketing Vault Lite for Real Estate Agents" },
      {
        property: "og:description",
        content: "The essential Canva blueprints, starter emails and design worksheets — copy, paste and post.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: DownsellPage,
});

const MODULE_ICONS: Record<string, typeof LayoutTemplate> = {
  canva: LayoutTemplate,
  email: Mail,
  worksheets: ClipboardList,
};

const handleBuy = () =>
  goOrNotify(LITE_BUY_URL, "Checkout is almost ready", "Secure payment is being connected. Check back very soon!");
const handleDecline = () =>
  goOrNotify(LITE_DECLINE_URL, "Your guide is on its way", "Check your inbox for your download details.");

function DownsellPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <OrderBar current={1} />
      <main>
        <Hero />
        <Modules />
        <Compare />
        <Decision />
      </main>
      <FunnelFooter />
    </div>
  );
}

function BuyBlock({ dark = false }: { dark?: boolean }) {
  return (
    <FunnelBuyBlock
      dark={dark}
      label={`Yes! Add Marketing Vault Lite to my order — ${LITE_PRICE_LABEL}`}
      declineLabel="No thanks — I'll pass on the Vault completely."
      onBuy={handleBuy}
      onDecline={handleDecline}
    />
  );
}

function Hero() {
  return (
    <section>
      <Container className="grid items-center gap-12 pb-16 pt-12 md:pt-16 lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:pb-24">
        <div className="animate-rise">
          <p className="eyebrow text-primary">Before you go — a smaller option</p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.06] sm:text-5xl lg:text-6xl">
            Not the full Vault? <span className="text-ember">Start with the essentials.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Marketing Vault Lite</strong> gives you the core
            pieces from the Copy & Paste Marketing Vault — the designs, the starter emails and the
            worksheets — without the full price.
          </p>
          <ul className="mt-7 space-y-3">
            {LITE_MODULES.map((m) => (
              <li key={m.key} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3" />
                </span>
                {m.count} {m.title.charAt(0).toLowerCase() + m.title.slice(1)}
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <BuyBlock />
          </div>
        </div>
        <div className="relative animate-rise [animation-delay:150ms]">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-ember/20 blur-3xl" />
          <img
            src={vaultMockup}
            alt="Marketing Vault Lite shown as a box set with a tablet of social templates, a phone and a laptop"
            width={1280}
            height={1024}
            className="w-full rounded-[2rem] shadow-elegant"
          />
        </div>
      </Container>
    </section>
  );
}

function Modules() {
  return (
    <section className="border-y border-border bg-secondary/60 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-primary">What's inside Lite</p>
          <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">The essentials, nothing extra.</h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {LITE_MODULES.map((m) => {
            const Icon = MODULE_ICONS[m.key] ?? LayoutTemplate;
            return (
              <article
                key={m.key}
                className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-elegant"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-primary text-ember">
                  <Icon className="size-5" />
                </span>
                <p className="mt-7 font-display text-6xl font-semibold text-ember">{m.count}</p>
                <h3 className="mt-2 text-2xl font-semibold">{m.title}</h3>
                <p className="mt-3 text-muted-foreground">{m.blurb}</p>
                <ul className="mt-6 space-y-2.5">
                  {m.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-ember" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function Compare() {
  const rows = [
    { item: "Canva template blueprints", vault: "13", lite: "13" },
    { item: "Video scripts", vault: "15", lite: "—" },
    { item: "Email packs", vault: "6 packs (21 emails + newsletter)", lite: "2 starter packs" },
    { item: "Design worksheets", vault: "—", lite: "2" },
  ];
  return (
    <section className="py-20 md:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-primary">Lite vs. the full Vault</p>
          <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">See exactly what you get.</h2>
        </div>
        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-border">
          <div className="grid grid-cols-3 bg-secondary/70 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            <p className="p-4 sm:p-5">What's inside</p>
            <p className="p-4 sm:p-5">Full Vault</p>
            <p className="p-4 text-ember sm:p-5">Lite</p>
          </div>
          {rows.map((r) => (
            <div key={r.item} className="grid grid-cols-3 border-t border-border text-sm sm:text-base">
              <p className="p-4 font-semibold sm:p-5">{r.item}</p>
              <p className="p-4 text-muted-foreground sm:p-5">{r.vault}</p>
              <p className="p-4 sm:p-5">{r.lite}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Decision() {
  return (
    <section className="bg-ink-gradient text-ink-foreground">
      <Container className="grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow text-ember">One last offer</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
            Get the essentials for less.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
            One click adds Marketing Vault Lite to today's order. You'll get it with your guide.
          </p>
          <div className="mt-9">
            <BuyBlock dark />
          </div>
        </div>
        <div className="rounded-3xl border border-ink-foreground/15 bg-ink-foreground/5 p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-ember">Everything in Lite</p>
          <ul className="mt-6 space-y-4">
            {LITE_MODULES.map((m) => (
              <li
                key={m.key}
                className="flex items-baseline justify-between gap-4 border-b border-ink-foreground/10 pb-4 last:border-0 last:pb-0"
              >
                <span>{m.title}</span>
                <span className="font-display text-2xl font-semibold">{m.count}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex items-baseline justify-between border-t border-ink-foreground/20 pt-6">
            <span className="text-ink-muted">One payment</span>
            <span className="font-display text-4xl font-semibold text-ember">{LITE_PRICE_LABEL}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
