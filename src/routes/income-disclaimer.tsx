import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { Container, FunnelFooter } from "@/components/funnel";

const LAST_UPDATED = "November 20, 2026";
const SITE_NAME = "The Ultimate AI Prompt Guide for Real Estate Agents";

export const Route = createFileRoute("/income-disclaimer")({
  head: () => ({
    meta: [
      { title: `Income Disclaimer — ${SITE_NAME}` },
      {
        name: "description",
        content: `Income and earnings disclaimer for ${SITE_NAME}. Results are not typical or guaranteed.`,
      },
    ],
  }),
  component: IncomeDisclaimerPage,
});

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">{title}</h2>
      <div className="flex flex-col gap-3 leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function IncomeDisclaimerPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border py-5">
        <Container>
          <Link to="/" className="text-sm font-semibold text-foreground hover:underline underline-offset-4">
            ← Back to {SITE_NAME}
          </Link>
        </Container>
      </header>

      <main className="py-12 sm:py-16">
        <Container className="max-w-3xl">
          <article className="flex flex-col gap-10">
            <header className="flex flex-col gap-3">
              <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                Income Disclaimer
              </h1>
              <p className="text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
              <p className="leading-relaxed text-muted-foreground">
                This Income Disclaimer applies to {SITE_NAME} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;),
                this website and every product sold through it, including any upgrades and add-ons. Please read
                it carefully before making a purchase.
              </p>
            </header>

            <Section title="No earnings guarantee">
              <p>
                Our products are educational tools designed to help real estate professionals create marketing
                content more efficiently. We make no promise, representation or guarantee that you will earn any
                money, gain any clients, close any transactions or achieve any specific results by using our
                products or following any information on this site.
              </p>
            </Section>

            <Section title="Results vary">
              <p>
                Any examples, scenarios, time savings or outcomes mentioned on this site are illustrations only
                and are not typical. Your results depend on many factors outside our control, including your
                experience, skills, effort, local market conditions, the quality of your listings, your budget
                and how you apply the material. Many people who purchase educational products do not achieve
                meaningful results.
              </p>
            </Section>

            <Section title="Forward-looking statements">
              <p>
                Statements on this site about what our products can help you do are forward-looking and reflect
                our opinion only. They are not promises of actual performance, and actual results may differ
                materially.
              </p>
            </Section>

            <Section title="AI-generated content">
              <p>
                Our prompts are designed for use with third-party AI tools. Output from those tools can be
                inaccurate, incomplete or unsuitable for your purpose. You are solely responsible for reviewing,
                editing and verifying all content before publishing it, and for making sure it complies with
                fair housing laws, advertising rules, MLS policies and your brokerage&apos;s requirements.
              </p>
            </Section>

            <Section title="Not professional advice">
              <p>
                Nothing on this site or in our products is legal, financial, tax or investment advice. Consult a
                qualified professional before making business decisions based on any information we provide.
              </p>
            </Section>

            <Section title="Affiliate relationships">
              <p>
                Some links on this site or in our products may be affiliate links, and we or our partners may
                earn a commission if you make a purchase through them, at no extra cost to you.
              </p>
            </Section>

            <Section title="Your responsibility">
              <p>
                By using this site and our products, you accept full responsibility for your actions and results,
                and you agree that we are not liable for any decisions you make or any outcomes, including
                losses, that result from using the information provided.
              </p>
            </Section>

            <Section title="Contact us">
              <p>
                If you have questions about this Income Disclaimer, please reach out through our{" "}
                <Link to="/support" className="text-foreground underline underline-offset-4">
                  Support page
                </Link>
                .
              </p>
            </Section>
          </article>
        </Container>
      </main>

      <FunnelFooter />
    </div>
  );
}
