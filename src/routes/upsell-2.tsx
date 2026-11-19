import { createFileRoute } from "@tanstack/react-router";
import { Check, FileText, Info, ListChecks, ShieldAlert, X } from "lucide-react";

import {
  BuyBlock,
  Container,
  FunnelFooter,
  NEXT_FUNNEL_ROUTE,
  OrderBar,
  goOrNotify,
} from "@/components/funnel";
import {
  CAN_DO,
  CANT_DO,
  CHATBOT_BUY_URL,
  CHATBOT_CHECKLISTS,
  CHATBOT_DECLINE_URL,
  CHATBOT_PRICE_LABEL,
  INSTRUCTION_TEMPLATES,
  TEST_QUESTION_COUNT,
} from "@/lib/chatbot";
import chatbotMockup from "@/assets/chatbot-mockup.jpg";

export const Route = createFileRoute("/upsell-2")({
  head: () => ({
    meta: [
      { title: "Custom AI Chatbot Checklists — Add It to Your Order" },
      {
        name: "description",
        content:
          "7 step-by-step checklists, 3 instruction templates and 30 test questions to build your own custom AI chatbot, loaded with your market summaries, neighborhood guides and FAQs.",
      },
      { property: "og:title", content: "Custom AI Chatbot Checklists for Real Estate Agents" },
      {
        property: "og:description",
        content:
          "Build a custom AI chatbot loaded with your own market know-how — with an honest look at what it can and can't do.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, nofollow" },
    ],
    scripts: [{ src: "https://warriorplus.com/o2/js/s660hn", defer: true }],
  }),
  component: UpsellTwoPage,
});

const buy = () =>
  goOrNotify(CHATBOT_BUY_URL, "Checkout is almost ready", "Secure payment is being connected. Check back very soon!");

function Buy({ dark = false }: { dark?: boolean }) {
  return (
    <BuyBlock
      dark={dark}
      label={`Yes! Add the Chatbot Checklists — ${CHATBOT_PRICE_LABEL}`}
      declineLabel="No thanks — I'll skip building my own chatbot."
      onBuy={buy}
      declineTo={NEXT_FUNNEL_ROUTE["/upsell-2"]}
      declineUrl={CHATBOT_DECLINE_URL}
    />
  );
}

function UpsellTwoPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <OrderBar current={2} />
      <main>
        <Hero />
        <LoadedWith />
        <Checklists />
        <Templates />
        <CanCant />
        <MlsWarning />
        <Decision />
      </main>
      <FunnelFooter />
    </div>
  );
}

function Hero() {
  return (
    <section>
      <Container className="grid items-center gap-12 pb-16 pt-12 md:pt-16 lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:pb-24">
        <div className="animate-rise">
          <p className="eyebrow text-primary">One last upgrade</p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.06] sm:text-5xl lg:text-6xl">
            Build your own AI chatbot,{" "}
            <span className="text-ember">loaded with your market know-how.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Custom AI Chatbot Checklists</strong> walk you through
            setting up a custom GPT that follows your instructions and draws on your own market
            summaries, neighborhood guides and FAQs. No coding — just tick each box.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              "7 step-by-step checklists",
              "3 ready-to-use instruction templates",
              "30 test questions to check its answers",
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
            <Buy />
          </div>
        </div>
        <div className="relative animate-rise [animation-delay:150ms]">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-ember/20 blur-3xl" />
          <img
            src={chatbotMockup}
            alt="Custom AI Chatbot Checklists booklet beside a clipboard checklist and a laptop showing a chat assistant"
            width={1280}
            height={1024}
            className="w-full rounded-[2rem] shadow-elegant"
          />
        </div>
      </Container>
    </section>
  );
}

function LoadedWith() {
  return (
    <section className="bg-ink-gradient text-ink-foreground">
      <Container className="grid gap-10 py-20 md:py-24 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow text-ember">How it actually works</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
            Loaded with your know-how. Not "trained" on it.
          </h2>
        </div>
        <div className="space-y-5 self-center text-lg leading-relaxed text-ink-muted">
          <p>
            A custom GPT isn't retrained on your data. It{" "}
            <span className="text-ink-foreground">follows the instructions you write</span> and{" "}
            <span className="text-ink-foreground">draws on the files you upload</span>.
          </p>
          <p>
            That's good news: you can set it up in an afternoon, and update it any time by editing its
            instructions or swapping in a fresh file.
          </p>
          <p className="text-ink-foreground">
            The edge is simple — <span className="text-ember">a chatbot that knows your market the way you've written it down</span>, and a process you can repeat.
          </p>
        </div>
      </Container>
    </section>
  );
}

function Checklists() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-primary">What's inside</p>
          <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">From blank page to working chatbot.</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Seven checklists, in the order you'll use them.
          </p>
        </div>
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CHATBOT_CHECKLISTS.map((c, i) => (
            <li key={c.title} className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-elegant">
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-2xl bg-primary text-ember">
                  <ListChecks className="size-5" />
                </span>
                <span className="font-display text-3xl font-semibold text-ember">{i + 1}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
              <ul className="mt-5 space-y-2.5">
                {c.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-ember" />
                    {it}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function Templates() {
  return (
    <section className="border-t border-border bg-card py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-primary">Plus</p>
          <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">
            3 instruction templates. 30 test questions.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Don't start from a blank page — start from a template, then prove it works.
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {INSTRUCTION_TEMPLATES.map((t) => (
            <article
              key={t.title}
              className="flex flex-col rounded-3xl border border-border bg-background p-8 shadow-elegant"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-primary text-ember">
                <FileText className="size-5" />
              </span>
              <h3 className="mt-6 text-xl font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.blurb}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 flex max-w-3xl items-center gap-6 rounded-3xl bg-primary p-8 text-primary-foreground shadow-elegant">
          <p className="font-display text-6xl font-semibold text-ember">{TEST_QUESTION_COUNT}</p>
          <p className="text-lg leading-relaxed">
            test questions to run against your chatbot before you rely on it — so wrong or made-up
            answers never reach a client.
          </p>
        </div>
      </Container>
    </section>
  );
}

function CanCant() {
  return (
    <section className="border-y border-border bg-secondary/60 py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="eyebrow text-primary">Straight talk</p>
          <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">What this can and can't do.</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            So you know exactly what you're getting before you buy.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-primary p-8 text-primary-foreground shadow-elegant">
            <p className="text-sm font-bold uppercase tracking-widest text-ember">It can</p>
            <ul className="mt-6 space-y-4">
              {CAN_DO.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-ember" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8">
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">It can't</p>
            <ul className="mt-6 space-y-4">
              {CANT_DO.map((t) => (
                <li key={t} className="flex items-start gap-3 text-muted-foreground">
                  <X className="mt-0.5 size-5 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
          <Info className="mt-0.5 size-4 shrink-0" />
          Creating a custom GPT needs a ChatGPT plan that includes it. Check your plan before you start.
        </p>
      </Container>
    </section>
  );
}

function MlsWarning() {
  const safe = ["Your own market summaries", "Your neighborhood guides", "Your buyer and seller FAQs", "Your process and service documents"];
  return (
    <section className="py-20 md:py-24">
      <Container>
        <div className="grid gap-10 rounded-[2rem] border-2 border-ember/40 bg-ember/10 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <ShieldAlert className="size-6 text-ember" />
              <p className="eyebrow text-ember">Before you upload anything</p>
            </div>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Check your MLS rules first.</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Many MLSs restrict uploading their data to outside tools — including AI chatbots. Check
              your MLS's rules before you upload any listing data.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              That's why the checklists build your chatbot from information{" "}
              <strong className="text-foreground">you're free to share</strong>.
            </p>
          </div>
          <div className="self-center rounded-3xl bg-card p-7">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              What you'll load it with
            </p>
            <ul className="mt-5 space-y-3">
              {safe.map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <FileText className="size-4 shrink-0 text-ember" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
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
            Your market know-how, on call whenever you need it.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
            One click adds Custom AI Chatbot Checklists to today's order. You'll get it with your guide.
          </p>
          <div className="mt-9">
            <Buy dark />
          </div>
        </div>
        <div className="rounded-3xl border border-ink-foreground/15 bg-ink-foreground/5 p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-ember">You'll get</p>
          <ul className="mt-6 space-y-4">
            {CHATBOT_CHECKLISTS.map((c, i) => (
              <li key={c.title} className="flex items-baseline gap-4 border-b border-ink-foreground/10 pb-4">
                <span className="font-display text-lg font-semibold text-ember">{i + 1}</span>
                <span>{c.title}</span>
              </li>
            ))}
            <li className="flex items-baseline justify-between gap-4 border-b border-ink-foreground/10 pb-4">
              <span>Instruction templates</span>
              <span className="font-display text-lg font-semibold text-ember">{INSTRUCTION_TEMPLATES.length}</span>
            </li>
            <li className="flex items-baseline justify-between gap-4">
              <span>Test questions</span>
              <span className="font-display text-lg font-semibold text-ember">{TEST_QUESTION_COUNT}</span>
            </li>
          </ul>
          <div className="mt-8 flex items-baseline justify-between border-t border-ink-foreground/20 pt-6">
            <span className="text-ink-muted">One payment</span>
            <span className="font-display text-4xl font-semibold text-ember">{CHATBOT_PRICE_LABEL}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
