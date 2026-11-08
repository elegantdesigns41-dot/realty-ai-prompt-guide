import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { toast } from "sonner";
import {
  ArrowRight,
  Check,
  Copy,
  Clock,
  Gift,
  KeyRound,
  ShieldCheck,
  Sparkles,
  Star,
  X,
  Download,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BONUSES, PRICE, PROMPT_CATEGORIES, SAMPLE_PROMPTS, TOTAL_PROMPTS } from "@/lib/playbook";
import mockup from "@/assets/playbook-mockup.jpg";
import agentPhoto from "@/assets/agent-at-work.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Ultimate AI Prompt Guide for Real Estate Agents — 300+ Prompts" },
      {
        name: "description",
        content:
          "340 copy-and-paste AI prompts for listings, social media, follow-up, lead gen and negotiation. Built for real estate agents.",
      },
      { property: "og:title", content: "The Ultimate AI Prompt Guide for Real Estate Agents" },
      {
        property: "og:description",
        content:
          "Write listings, posts and follow-ups in minutes. 340 proven AI prompts for real estate agents.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SalesPage,
});

function SalesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <AnnouncementBar />
      <Nav />
      <main>
        <Hero />
        <ProofStrip />
        <Problem />
        <Inside />
        <Samples />
        <WhoFor />
        <Bonuses />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

function handleBuy() {
  toast("Checkout is almost ready", {
    description: "Secure payment is being connected. Check back very soon!",
  });
}

function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

function AnnouncementBar() {
  return (
    <div className="bg-forest text-forest-foreground">
      <Container className="flex items-center justify-center gap-2 py-2 text-center text-xs font-semibold sm:text-sm">
        <Sparkles className="size-4 text-brass" />
        Launch pricing: save {Math.round((1 - PRICE.now / PRICE.was) * 100)}% — ${PRICE.now} instead of $
        {PRICE.was}
      </Container>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-full bg-primary text-brass">
            <KeyRound className="size-4" />
          </span>
          <span className="font-display text-lg font-semibold leading-none">
            The Ultimate AI Prompt Guide
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#inside" className="hover:text-foreground">What's inside</a>
          <a href="#samples" className="hover:text-foreground">Free samples</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
        </nav>
        <Button variant="forest" size="sm" className="rounded-full px-5" asChild>
          <a href="#pricing">Get the guide</a>
        </Button>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative">
      <Container className="grid items-center gap-12 pb-16 pt-12 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pb-24">
        <div className="animate-rise">
          <p className="eyebrow text-primary">For real estate agents</p>
          <h1 className="mt-5 text-5xl font-medium leading-[1.02] sm:text-6xl lg:text-7xl">
            Write a week of marketing{" "}
            <em className="font-normal text-primary">before your coffee</em> gets cold.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            <strong className="text-foreground">{TOTAL_PROMPTS} copy-and-paste AI prompts</strong> for
            listings, social posts, follow-ups, lead gen and tough client conversations. Fill in the
            blanks, paste into ChatGPT, and go sell homes.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button variant="brass" size="xl" asChild>
              <a href="#pricing">
                Get instant access — ${PRICE.now}
                <ArrowRight />
              </a>
            </Button>
            <a
              href="#samples"
              className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Try 4 free prompts first
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["Instant download", "Works with ChatGPT, Claude & Gemini", "30-day guarantee"].map(
              (t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  {t}
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="relative animate-rise [animation-delay:150ms]">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-brass/20 blur-3xl" />
          <img
            src={mockup}
            alt="The Ultimate AI Prompt Guide for Real Estate Agents as a hardcover book and tablet edition"
            width={1280}
            height={1280}
            className="animate-float-slow w-full rounded-[2rem] shadow-elegant"
          />
          <div className="absolute -bottom-6 -left-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-elegant sm:-left-8">
            <p className="font-display text-4xl font-semibold text-primary">{TOTAL_PROMPTS}</p>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              ready-to-use prompts
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProofStrip() {
  const stats = [
    { n: `${TOTAL_PROMPTS}`, l: "Prompts" },
    { n: `${PROMPT_CATEGORIES.length}`, l: "Categories" },
    { n: "10+ hrs", l: "Saved each week" },
    { n: "4.9★", l: "Average rating" },
  ];
  return (
    <section className="border-y border-border bg-secondary/60">
      <Container className="grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <p className="font-display text-3xl font-semibold sm:text-4xl">{s.n}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}

function Problem() {
  const pains = [
    "Staring at a blank MLS box for 40 minutes",
    "Posting nothing on social because you're “too busy”",
    "Leads going cold because follow-up never happens",
    "AI giving you generic, robotic copy every time",
  ];
  return (
    <section className="bg-forest-gradient text-forest-foreground">
      <Container className="grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow text-brass">The problem</p>
          <h2 className="mt-5 text-4xl font-medium leading-tight sm:text-5xl">
            You got into real estate to sell homes — not to write all day.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-forest-muted">
            AI can do the heavy lifting, but only if you know what to ask. Vague prompts get vague
            results. The guide gives you the exact words top agents use — tested, structured and
            ready to customize.
          </p>
        </div>
        <ul className="space-y-4 self-center">
          {pains.map((p) => (
            <li
              key={p}
              className="flex items-start gap-4 rounded-2xl border border-forest-foreground/15 bg-forest-foreground/5 p-5"
            >
              <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-forest-foreground/10">
                <X className="size-4 text-brass" />
              </span>
              <span className="text-base">{p}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Inside() {
  return (
    <section id="inside" className="scroll-mt-20 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-primary">What's inside</p>
          <h2 className="mt-5 text-4xl font-medium sm:text-5xl">
            {TOTAL_PROMPTS} prompts for every part of your business
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Organized by task, so you can find the right prompt in seconds.
          </p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {PROMPT_CATEGORIES.map((c, i) => (
            <div key={c.title} className="group bg-card p-7 transition-colors hover:bg-secondary/70">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-bold text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-4xl font-semibold text-primary">{c.count}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.blurb}</p>
            </div>
          ))}
          <div className="flex flex-col justify-center bg-primary p-7 text-primary-foreground">
            <p className="font-display text-5xl font-semibold text-brass">{TOTAL_PROMPTS}</p>
            <p className="mt-2 text-lg font-semibold">prompts total</p>
            <p className="mt-1 text-sm opacity-80">Plus free updates as new AI tools arrive.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Highlighted({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\])/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("[") ? (
          <span key={i} className="rounded bg-brass/25 px-1 font-semibold text-accent-foreground">
            {p}
          </span>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}

function Samples() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = async (tab: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(tab);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      toast("Couldn't copy — select the text and copy it manually.");
    }
  };
  return (
    <section id="samples" className="scroll-mt-20 bg-secondary/60 py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="eyebrow text-primary">Free samples</p>
          <h2 className="mt-5 text-4xl font-medium sm:text-5xl">Try a few before you buy.</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Every prompt is built the same way: a role, a clear task, your details in the{" "}
            <span className="rounded bg-brass/25 px-1 font-semibold">[brackets]</span>, and
            guardrails that keep the output sounding like you.
          </p>
          <p className="mt-4 text-muted-foreground">
            Copy one, paste it into your AI tool, and see the difference.
          </p>
        </div>
        <Tabs defaultValue={SAMPLE_PROMPTS[0].tab}>
          <TabsList className="h-auto flex-wrap rounded-full bg-card p-1.5">
            {SAMPLE_PROMPTS.map((s) => (
              <TabsTrigger
                key={s.tab}
                value={s.tab}
                className="rounded-full px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {s.tab}
              </TabsTrigger>
            ))}
          </TabsList>
          {SAMPLE_PROMPTS.map((s) => (
            <TabsContent key={s.tab} value={s.tab} className="mt-5">
              <div className="rounded-3xl border border-border bg-card p-7 shadow-elegant sm:p-9">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-display text-xl font-semibold">{s.label}</p>
                  <Button variant="outline" size="sm" className="rounded-full" onClick={() => copy(s.tab, s.prompt)}>
                    {copied === s.tab ? <Check /> : <Copy />}
                    {copied === s.tab ? "Copied" : "Copy"}
                  </Button>
                </div>
                <p className="mt-5 text-[15px] leading-8 text-foreground/90">
                  <Highlighted text={s.prompt} />
                </p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </section>
  );
}

function WhoFor() {
  const who = [
    { t: "New agents", d: "Sound like a seasoned pro from your very first listing." },
    { t: "Solo agents", d: "Get a marketing assistant without the salary." },
    { t: "Teams & brokers", d: "Give everyone the same high standard of copy." },
    { t: "Busy top producers", d: "Win back 10+ hours a week for appointments." },
  ];
  return (
    <section className="py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <img
          src={agentPhoto}
          alt="Real estate agent writing listing copy on a laptop in a staged kitchen"
          width={1280}
          height={960}
          loading="lazy"
          className="w-full rounded-[2rem] object-cover shadow-elegant"
        />
        <div>
          <p className="eyebrow text-primary">Who it's for</p>
          <h2 className="mt-5 text-4xl font-medium sm:text-5xl">
            Built for agents, not tech experts.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            No AI experience needed. If you can copy and paste, you can use the guide.
          </p>
          <ul className="mt-8 space-y-5">
            {who.map((w) => (
              <li key={w.t} className="flex gap-4">
                <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3.5" />
                </span>
                <div>
                  <p className="font-semibold">{w.t}</p>
                  <p className="text-muted-foreground">{w.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function Bonuses() {
  return (
    <section className="border-y border-border bg-card py-20 md:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-primary">Free bonuses</p>
            <h2 className="mt-5 text-4xl font-medium sm:text-5xl">Included at no extra cost</h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Everything you need to get set up and stay consistent — yours free with the guide.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {BONUSES.map((b) => (
            <div key={b.title} className="relative rounded-3xl border border-border bg-background p-7">
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-2xl bg-brass/25 text-accent-foreground">
                  <Gift className="size-5" />
                </span>
                <span className="text-sm text-muted-foreground">
                  Value <span className="line-through">{b.value}</span>{" "}
                  <span className="font-bold text-primary">FREE</span>
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      q: "I used to spend Sunday nights writing listing descriptions. Now it takes me ten minutes and they're better than what I wrote myself.",
      n: "Danielle R.",
      r: "Listing agent, Austin",
    },
    {
      q: "The follow-up prompts alone revived three leads in my first week. One of them closed last month.",
      n: "Marcus T.",
      r: "Buyer's agent, Atlanta",
    },
    {
      q: "I gave this to my whole team. Our social posting went from random to five times a week.",
      n: "Priya S.",
      r: "Team lead, Phoenix",
    },
  ];
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-primary">Agent stories</p>
          <h2 className="mt-5 text-4xl font-medium sm:text-5xl">Agents are getting hours back</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map((t) => (
            <figure key={t.n} className="flex flex-col rounded-3xl border border-border bg-card p-8">
              <div className="flex gap-1 text-brass">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 font-display text-lg leading-relaxed">
                “{t.q}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <p className="font-semibold">{t.n}</p>
                <p className="text-sm text-muted-foreground">{t.r}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Pricing() {
  const items = [
    `${TOTAL_PROMPTS} real estate prompts in ${PROMPT_CATEGORIES.length} categories`,
    "Printable PDF + editable Google Doc and Notion versions",
    "The AI Setup Cheat Sheet",
    "90-Day Social Calendar",
    "Fair Housing Copy Checklist",
    "Lifetime access and free updates",
  ];
  return (
    <section id="pricing" className="scroll-mt-20 bg-forest-gradient py-20 text-forest-foreground md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow text-brass">Get the guide</p>
          <h2 className="mt-5 text-4xl font-medium leading-tight sm:text-5xl">
            One payment. Every prompt. Yours forever.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-forest-muted">
            Less than the cost of one lunch with a client — and it pays for itself the first time it
            saves you an evening of writing.
          </p>
          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-forest-foreground/15 bg-forest-foreground/5 p-5">
            <ShieldCheck className="size-10 shrink-0 text-brass" />
            <p className="text-sm leading-relaxed">
              <strong>30-day money-back guarantee.</strong> If the guide doesn't save you time,
              email us and we'll refund every cent. No questions asked.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] bg-card p-8 text-card-foreground shadow-elegant sm:p-10">
          <div className="flex items-center justify-between">
            <p className="font-display text-2xl font-semibold">The Ultimate AI Prompt Guide</p>
            <span className="rounded-full bg-brass/25 px-3 py-1 text-xs font-bold uppercase tracking-wider">
              Launch price
            </span>
          </div>
          <div className="mt-6 flex items-end gap-3">
            <span className="font-display text-6xl font-semibold text-primary">${PRICE.now}</span>
            <span className="pb-2 text-xl text-muted-foreground line-through">${PRICE.was}</span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">One-time payment · USD</p>
          <ul className="mt-8 space-y-3.5">
            {items.map((i) => (
              <li key={i} className="flex items-start gap-3 text-[15px]">
                <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                {i}
              </li>
            ))}
          </ul>
          <Button variant="brass" size="xl" className="mt-9 w-full" onClick={handleBuy}>
            <Download />
            Get instant access
          </Button>
          <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Clock className="size-3.5" /> Delivered to your inbox in under 60 seconds
          </p>
        </div>
      </Container>
    </section>
  );
}

function Faq() {
  const faqs = [
    {
      q: "Do I need to be good with technology?",
      a: "Not at all. Each prompt is copy-and-paste. Fill in the parts in brackets, paste into ChatGPT (or Claude, or Gemini), and you'll have a result in seconds.",
    },
    {
      q: "Which AI tools does it work with?",
      a: "Every prompt works with ChatGPT, Claude, Gemini and Copilot — including the free versions.",
    },
    {
      q: "Will my listings sound like everyone else's?",
      a: "No. The prompts ask the AI to use your details, your market and your voice, and the setup cheat sheet shows you how to teach it your style once.",
    },
    {
      q: "Is AI-written copy compliant?",
      a: "Always review before publishing. The included Fair Housing checklist helps you catch risky language in listings and ads before they go live.",
    },
    {
      q: "How do I receive it?",
      a: "Right after checkout you'll get an email with download links for the PDF, Google Doc and Notion versions.",
    },
    {
      q: "What if it's not for me?",
      a: "You're covered by a 30-day money-back guarantee. Just reply to your receipt email for a full refund.",
    },
  ];
  return (
    <section id="faq" className="scroll-mt-20 py-20 md:py-28">
      <Container className="max-w-3xl">
        <div className="text-center">
          <p className="eyebrow text-primary">FAQ</p>
          <h2 className="mt-5 text-4xl font-medium sm:text-5xl">Questions, answered</h2>
        </div>
        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="pb-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-16 text-center text-primary-foreground sm:px-16 sm:py-20">
          <div className="absolute -right-24 -top-24 size-72 rounded-full bg-brass/20 blur-3xl" />
          <h2 className="relative mx-auto max-w-2xl text-4xl font-medium sm:text-5xl">
            Your next listing description is 60 seconds away.
          </h2>
          <p className="relative mx-auto mt-5 max-w-lg text-lg opacity-85">
            Join the agents who stopped writing from scratch.
          </p>
          <Button variant="brass" size="xl" className="relative mt-9" asChild>
            <a href="#pricing">
              Get the guide — ${PRICE.now}
              <ArrowRight />
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p className="flex items-center gap-2">
          <KeyRound className="size-4 text-primary" /> The Ultimate AI Prompt Guide for Real Estate Agents
        </p>
        <p>© {new Date().getFullYear()} · AI output should always be reviewed before publishing.</p>
      </Container>
    </footer>
  );
}
