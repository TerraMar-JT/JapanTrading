import type { Metadata } from "next";
import FadeIn from "../components/FadeIn";
import PageHero from "../components/PageHero";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        label="Get in Touch"
        title="Contact"
        subtitle="We welcome the opportunity to connect."
      />

      <section className="section">
        <div className="container--narrow">
          <FadeIn>
            <p className="section__text" style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto var(--space-2xl)" }}>
              Whether you are a producer seeking access to new markets, a
              buyer looking for exceptional Latin American products, or a
              company exploring entry into the Japanese market — we would be
              glad to hear from you.
            </p>
          </FadeIn>

          <FadeIn>
            <ContactForm />
          </FadeIn>

          <FadeIn>
            <div
              className="company__table company__table--light"
              style={{ maxWidth: "700px", margin: "var(--space-3xl) auto 0" }}
            >
              <div className="company__row company__row--light">
                <p className="company__label company__label--light">Office</p>
                <p className="company__value company__value--light">
                  4F Atlas Bldg. 1-5-10 AzabuJuban, Minato-ku, Tokyo
                  <br />
                  東京都港区麻布十番1丁目5−10 アトラスビル4F
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
