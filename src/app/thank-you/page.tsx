import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import FadeIn from "../components/FadeIn";

export const metadata: Metadata = {
  title: "Thank You",
};

export default function ThankYouPage() {
  return (
    <main>
      <PageHero
        label="Message Sent"
        title="Thank You"
        subtitle="Your message has been received."
      />

      <section className="section">
        <div className="container--narrow">
          <FadeIn>
            <div style={{ textAlign: "center" }}>
              <p
                className="section__text"
                style={{
                  textAlign: "center",
                  maxWidth: "560px",
                  margin: "0 auto",
                }}
              >
                Thank you for reaching out. We will review your message and get
                back to you as soon as possible.
              </p>
              <Link
                href="/"
                className="contact__cta"
                style={{ marginTop: "var(--space-2xl)", display: "inline-block" }}
              >
                Back to Home
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
