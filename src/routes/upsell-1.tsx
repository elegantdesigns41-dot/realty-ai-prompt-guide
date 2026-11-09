import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { toast } from "sonner";
import {
  ArrowRight,
  Check,
  Clapperboard,
  LayoutTemplate,
  Mail,
  CircleCheck,
  ClipboardPaste,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NEWSLETTER_TEMPLATE_COUNT,
  SEQUENCE_EMAIL_COUNT,
  VAULT_BUY_URL,
  VAULT_DECLINE_URL,
  VAULT_MODULES,
  VAULT_PRICE_LABEL,
} from "@/lib/vault";
import vaultMockup from "@/assets/vault-mockup.jpg";

export const Route = createFileRoute("/upsell-1")({
  head: () => ({
    meta: [
      { title: "Copy & Paste Marketing Vault — Add It to Your Order" },
      {
        name: "description",
        content:
          "12 Canva template blueprints, 12 video scripts and 6 email packs for real estate agents. Finished marketing you can copy, paste and post.",
      },
      { property: "og:title", content: "The Copy & Paste Marketing Vault for Real Estate Agents" },
      {
        property: "og:description",
        content:
          "Canva blueprints, video scripts and email sequences — ready to copy, paste and post.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: UpsellPage,
});

const MODULE_ICONS: Record<string, typeof LayoutTemplate> = {
  canva: LayoutTemplate,
  video: Clapperboard,
  email: Mail,
};

function handleBuy() {
  if (VAULT_BUY_URL) {
    window.location.href = VAULT_BUY_URL;
    return;
  }
  toast("Checkout is almost ready", {
    description: "Secure payment is being connected. Check back very soon!",
  });
}

function handleDecline() {
  if (VAULT_DECLINE_URL) {
    window.location.href = VAULT_DECLINE_URL;
    return;
  }
  toast("Your guide is on its way", {
    description: "Check your inbox for your download details.",
  });
}

function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

function UpsellPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <OrderBar />
      <main>
        <Hero />
        <Gap />
        <Modules />
        <Anatomy />
        <EmailPacks />
        <Pairing />
        <Decision />
      </main>
      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} The Ultimate AI Prompt Guide for Real Estate Agents
      </footer>
    </div>
  );
}

function OrderBar() {
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
          <li className="text-ink-muted">1 · Guide</li>
          <li className="h-px w-6 bg-ink-foreground/30" aria-hidden />
          <li className="text-ember">2 · Upgrade</li>
          <li className="h-px w-6 bg-ink-foreground/30" aria-hidden />
          <li className="text-ink-muted">3 · Access</li>
        </ol>
      </Container>
    </div>
  );
}

function BuyBlock({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-col items-start gap-4">
      <Button variant="ember" size="xl" onClick={handleBuy} className="h-auto whitespace-normal py-4 text-left">
        Yes! Add the Vault to my order — {VAULT_PRICE_LABEL}
        <ArrowRight />
      </Button>
      <button
        type="button"
        onClick={handleDecline}
        className={`text-sm underline underline-offset-4 ${
          dark ? "text-ink-muted hover:text-ink-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        No thanks — I'll write and design my own marketing from scratch.
      </button>
    </div>
  );
}

function Hero() {
  return (
    <section>
      <Container className="grid items-center gap-12 pb-16 pt-12 md:pt-16 lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:pb-24">
        <div className="animate-rise">
          <p className="eyebrow text-primary">Wait — one upgrade for new guide owners</p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.06] sm:text-5xl lg:text-6xl">
            You've got the prompts.{" "}
            <span className="text-ember">Now get the finished marketing.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            The <strong className="text-foreground">Copy & Paste Marketing Vault</strong> hands you
            Canva designs, video scripts and email sequences that are already planned and written.
            Fill in your details, paste, and post.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              "12 Canva template blueprints",
              "12 short video scripts",
              `6 email packs — ${SEQUENCE_EMAIL_COUNT} sequence emails plus a newsletter template`,
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3" />
                </span>
                {t}
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
            alt="The Copy & Paste Marketing Vault shown as a box set with a tablet of social templates, a phone with a video script and a laptop with an email sequence"
            width={1280}
            height={1024}
            className="w-full rounded-[2rem] shadow-elegant"
          />
        </div>
      </Container>
    </section>
  );
}

function Gap() {
  return (
    <section className="bg-ink-gradient text-ink-foreground">
      <Container className="grid gap-10 py-20 md:py-24 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow text-ember">The next step</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
            Prompts write the words. The Vault ships the whole post.
          </h2>
        </div>
        <div className="space-y-5 self-center text-lg leading-relaxed text-ink-muted">
          <p>
            Your guide gets you a strong first draft. But a caption still needs a design. A video
            idea still needs a hook, a shot list and something to say on camera. And one good email
            isn't a follow-up system.
          </p>
          <p className="text-ink-foreground">
            The Vault fills that gap — so you go from{" "}
            <span className="text-ember">"what should I post?"</span> to posted, filmed and sent.
          </p>
        </div>
      </Container>
    </section>
  );
}

function Modules() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-primary">What's inside the Vault</p>
          <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">Three modules. Zero blank pages.</h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {VAULT_MODULES.map((m, i) => {
            const Icon = MODULE_ICONS[m.key] ?? ClipboardPaste;
            return (
              <article
                key={m.key}
                className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-elegant"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-primary text-ember">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Module {i + 1}
                  </span>
                </div>
                <p className="mt-7 font-display text-6xl font-semibold text-ember">{m.count}</p>
                <h3 className="mt-2 text-2xl font-semibold">{m.title}</h3>
                <p className="mt-3 text-muted-foreground">{m.blurb}</p>
                <p className="mt-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {m.key === "email" ? "The packs" : "Each one gives you"}
                </p>
                <ul className="mt-3 space-y-2.5">
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

function Anatomy() {
  return (
    <section className="border-y border-border bg-secondary/60 py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="eyebrow text-primary">How each piece is built</p>
          <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">Nothing left to figure out.</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Every blueprint and script follows the same layout, so you can grab one and go.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="flex items-center gap-3">
              <LayoutTemplate className="size-5 text-ember" />
              <p className="font-display text-xl font-semibold">A Canva blueprint</p>
            </div>
            <ol className="mt-6 space-y-4">
              {[
                { t: "Canvas size", d: "The exact dimensions to open in Canva, so it fits the platform." },
                { t: "Layout", d: "Where every headline, photo and detail goes, block by block." },
                { t: "Paste-ready copy blocks", d: "The words for each block, written and ready to drop in." },
              ].map((s, i) => (
                <AnatomyStep key={s.t} n={i + 1} title={s.t} desc={s.d} />
              ))}
            </ol>
          </div>
          <div className="rounded-3xl bg-primary p-8 text-primary-foreground shadow-elegant">
            <div className="flex items-center gap-3">
              <Clapperboard className="size-5 text-ember" />
              <p className="font-display text-xl font-semibold">A video script</p>
            </div>
            <ol className="mt-6 space-y-4">
              {[
                { t: "Hook options", d: "Several openers to choose from, so you stop the scroll." },
                { t: "On-screen text", d: "The captions to show while you talk." },
                { t: "Shot list", d: "What to film, in order, so you're never guessing." },
                { t: "Call to action", d: "How to end it so viewers reach out." },
              ].map((s, i) => (
                <AnatomyStep key={s.t} n={i + 1} title={s.t} desc={s.d} dark />
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}

function AnatomyStep({
  n,
  title,
  desc,
  dark = false,
}: {
  n: number;
  title: string;
  desc: string;
  dark?: boolean;
}) {
  return (
    <li className="flex gap-4">
      <span className="font-display text-2xl font-semibold text-ember">{n}</span>
      <div>
        <p className="font-semibold">{title}</p>
        <p className={`text-sm leading-relaxed ${dark ? "opacity-75" : "text-muted-foreground"}`}>
          {desc}
        </p>
      </div>
    </li>
  );
}

function EmailPacks() {
  const packs = VAULT_MODULES.find((m) => m.key === "email")?.includes ?? [];
  return (
    <section className="py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="eyebrow text-primary">The email packs</p>
          <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">
            Your follow-up, written for the whole client journey.
          </h2>
          <div className="mt-8 flex gap-8">
            <div>
              <p className="font-display text-5xl font-semibold text-ember">{SEQUENCE_EMAIL_COUNT}</p>
              <p className="mt-1 text-sm text-muted-foreground">sequence emails</p>
            </div>
            <div>
              <p className="font-display text-5xl font-semibold text-ember">+{NEWSLETTER_TEMPLATE_COUNT}</p>
              <p className="mt-1 text-sm text-muted-foreground">newsletter template</p>
            </div>
          </div>
        </div>
        <ol className="grid gap-px self-center overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
          {packs.map((p, i) => (
            <li key={p} className="flex items-center gap-4 bg-card p-6">
              <span className="text-xs font-bold text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-lg font-semibold">{p}</span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function Pairing() {
  const rows = [
    { need: "A listing post", guide: "Writes the caption", vault: "Gives you the design to put it on" },
    { need: "A video", guide: "Brainstorms the idea", vault: "Hands you hooks, shots and on-screen text" },
    { need: "Follow-up", guide: "Drafts one email", vault: "Gives you the whole sequence" },
  ];
  return (
    <section className="border-y border-border bg-card py-20 md:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-primary">Better together</p>
          <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">Your guide + the Vault</h2>
        </div>
        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-border">
          <div className="grid grid-cols-3 bg-secondary/70 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            <p className="p-4 sm:p-5">You need</p>
            <p className="p-4 sm:p-5">The guide</p>
            <p className="p-4 text-ember sm:p-5">The Vault</p>
          </div>
          {rows.map((r) => (
            <div key={r.need} className="grid grid-cols-3 border-t border-border text-sm sm:text-base">
              <p className="p-4 font-semibold sm:p-5">{r.need}</p>
              <p className="p-4 text-muted-foreground sm:p-5">{r.guide}</p>
              <p className="p-4 sm:p-5">{r.vault}</p>
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
          <p className="eyebrow text-ember">Add it now</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
            Stop starting from scratch every week.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
            One click adds the Copy & Paste Marketing Vault to today's order. You'll get it with your
            guide.
          </p>
          <div className="mt-9">
            <BuyBlock dark />
          </div>
        </div>
        <div className="rounded-3xl border border-ink-foreground/15 bg-ink-foreground/5 p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-ember">Everything in the Vault</p>
          <ul className="mt-6 space-y-4">
            {VAULT_MODULES.map((m) => (
              <li key={m.key} className="flex items-baseline justify-between gap-4 border-b border-ink-foreground/10 pb-4 last:border-0 last:pb-0">
                <span>{m.title}</span>
                <span className="font-display text-2xl font-semibold">{m.count}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex items-baseline justify-between border-t border-ink-foreground/20 pt-6">
            <span className="text-ink-muted">One payment</span>
            <span className="font-display text-4xl font-semibold text-ember">{VAULT_PRICE_LABEL}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
