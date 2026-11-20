import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { Container, FunnelFooter } from "@/components/funnel";

const LAST_UPDATED = "November 20, 2026";
const SITE_NAME = "The Ultimate AI Prompt Guide for Real Estate Agents";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy — ${SITE_NAME}` },
      {
        name: "description",
        content: `How ${SITE_NAME} collects, uses and protects your personal information.`,
      },
    ],
  }),
  component: PrivacyPage,
});

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">{title}</h2>
      <div className="flex flex-col gap-3 leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function PrivacyPage() {
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
              <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Privacy Policy</h1>
              <p className="text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
              <p className="leading-relaxed text-muted-foreground">
                This Privacy Policy explains how {SITE_NAME} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
                collects, uses and protects information when you visit this website or purchase any of our
                products. By using this site, you agree to the practices described below.
              </p>
            </header>

            <Section title="Information we collect">
              <p>We collect only the information needed to deliver your purchase and support you:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-foreground">Purchase information</strong> such as your name, email
                  address and order details, provided when you buy through our checkout.
                </li>
                <li>
                  <strong className="text-foreground">Usage information</strong> such as browser type, device,
                  pages viewed and referring links, collected automatically through cookies and similar
                  technologies.
                </li>
                <li>
                  <strong className="text-foreground">Communications</strong> you send us, such as support
                  requests or questions.
                </li>
              </ul>
              <p>
                We do not collect or store your credit card or payment details. All payments are processed
                securely by our third-party payment and checkout providers.
              </p>
            </Section>

            <Section title="How we use your information">
              <ul className="list-disc space-y-2 pl-5">
                <li>To process your order and deliver the products you purchased.</li>
                <li>To send purchase receipts, download access and product updates.</li>
                <li>To respond to support requests and refund inquiries.</li>
                <li>To understand how visitors use the site so we can improve it.</li>
                <li>
                  To send occasional marketing emails, if you have opted in. You can unsubscribe at any time
                  using the link in any email.
                </li>
              </ul>
            </Section>

            <Section title="Third-party services">
              <p>
                Sales on this site are managed through WarriorPlus, which facilitates checkout, order
                tracking and product delivery. Payments are processed by the payment provider selected at
                checkout (such as PayPal or Stripe). These services collect and process your information
                according to their own privacy policies, which we encourage you to review.
              </p>
              <p>
                This site also loads tracking scripts and pixels from WarriorPlus to record visits and
                purchases for order and affiliate tracking.
              </p>
            </Section>

            <Section title="Cookies">
              <p>
                We and our partners use cookies to keep the site working, remember your progress through
                checkout and measure sales and affiliate referrals. You can block or delete cookies in your
                browser settings, though some features of the site and checkout may not work properly
                without them.
              </p>
            </Section>

            <Section title="How we share your information">
              <p>
                We do not sell or rent your personal information. We share it only with service providers
                who help us run the site and fulfill orders, when required by law, or to protect our rights
                and prevent fraud.
              </p>
            </Section>

            <Section title="Data security and retention">
              <p>
                We use reasonable administrative and technical measures to protect your information. No
                method of transmission over the internet is completely secure, so we cannot guarantee
                absolute security. We keep your information only as long as needed to provide our products,
                meet legal and accounting obligations, and resolve disputes.
              </p>
            </Section>

            <Section title="Your rights">
              <p>
                Depending on where you live, you may have the right to access, correct, delete or restrict
                the use of your personal information, and to opt out of marketing communications. To make a
                request, contact us using the support details included in your purchase receipt.
              </p>
            </Section>

            <Section title="Children's privacy">
              <p>
                This site and our products are intended for real estate professionals and are not directed
                to anyone under the age of 18. We do not knowingly collect information from children.
              </p>
            </Section>

            <Section title="Changes to this policy">
              <p>
                We may update this Privacy Policy from time to time. Changes take effect when posted on this
                page, and the &quot;Last updated&quot; date above will reflect the latest revision.
              </p>
            </Section>

            <Section title="Contact us">
              <p>
                If you have questions about this Privacy Policy or how your information is handled, please
                reach out using the support contact provided in your purchase receipt email.
              </p>
            </Section>
          </article>
        </Container>
      </main>

      <FunnelFooter />
    </div>
  );
}
