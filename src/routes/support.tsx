import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";

import { Container, FunnelFooter, SUPPORT_EMAIL } from "@/components/funnel";

const SITE_NAME = "The Ultimate AI Prompt Guide for Real Estate Agents";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: `Support — ${SITE_NAME}` },
      {
        name: "description",
        content: `Get help with your ${SITE_NAME} purchase, downloads or refunds.`,
      },
    ],
  }),
  component: SupportPage,
});

function SupportPage() {
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
              <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Support</h1>
              <p className="leading-relaxed text-muted-foreground">
                Questions about your order, trouble accessing your download, or need help with a refund?
                Send us an email and we&apos;ll get back to you as soon as we can.
              </p>
            </header>

            <section className="flex flex-col gap-4 rounded-lg border border-border p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold sm:text-2xl">Email support</h2>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="flex items-center gap-2 break-all text-lg font-semibold text-ember underline underline-offset-4"
              >
                <Mail className="size-5 shrink-0" />
                {SUPPORT_EMAIL}
              </a>
              <p className="text-sm leading-relaxed text-muted-foreground">
                To help us resolve your request quickly, please include the email address you used at
                checkout and your order or transaction ID from your receipt.
              </p>
            </section>
          </article>
        </Container>
      </main>

      <FunnelFooter />
    </div>
  );
}
