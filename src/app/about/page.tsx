import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "../components/FadeIn";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        label="About Us"
        title="Bridging Japan and Latin America"
        subtitle="We connect the world's importers with hidden producers and extraordinary products."
      />

      <section className="section">
        <div className="container">
          <div className="split-section">
            <div className="split-section__image">
              <FadeIn>
                <Image
                  src="/hero-shoji.png"
                  alt="Japanese shoji doors opening to an agricultural landscape"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
              </FadeIn>
            </div>
            <div className="split-section__text">
              <FadeIn>
                <p className="section__label">Our Story</p>
                <h2 className="section__title">
                  A Company Built on Two Worlds
                </h2>
                <p className="section__text">
                  Japan Trading was founded with a singular conviction: that
                  exceptional producers in Latin America deserve a direct path to
                  the world&apos;s most discerning markets. Our founder — with deep
                  roots in both Japan and Latin America — recognised that
                  cultural understanding, not just logistics, is the foundation
                  of meaningful trade.
                </p>
                <p className="section__text" style={{ marginTop: "1.5rem" }}>
                  From our base in Tokyo&apos;s Azabu-Juban, we operate at the
                  intersection of Japanese refinement and Latin American
                  abundance — building relationships that honour both traditions.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container--narrow">
          <FadeIn>
            <div style={{ textAlign: "center" }}>
              <p className="section__label">Philosophy</p>
              <h2 className="section__title">
                Behind Every Product, a Story Worth Telling
              </h2>
              <div
                className="section__divider"
                style={{ margin: "0 auto var(--space-xl)" }}
              />
              <p
                className="section__text"
                style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto" }}
              >
                We believe in trade that creates value for all parties. By
                introducing the provenance, philosophy, and craft of each
                producer, we transform transactions into lasting partnerships.
                Our work is grounded in trust, transparency, and a deep respect
                for the people who cultivate the land and sea.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: "center" }}>
              <p className="section__label">Our Difference</p>
              <h2 className="section__title">Why Japan Trading</h2>
            </div>
          </FadeIn>
          <div className="why__grid why__grid--light">
            <FadeIn>
              <div className="why__item">
                <h3 className="why__item-title" style={{ color: "var(--text-primary)" }}>
                  Bicultural Fluency
                </h3>
                <p className="why__item-text" style={{ color: "var(--text-secondary)" }}>
                  Native understanding of both Japanese and Latin American
                  business cultures, languages, and expectations.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="why__item">
                <h3 className="why__item-title" style={{ color: "var(--text-primary)" }}>
                  Curated Sourcing
                </h3>
                <p className="why__item-text" style={{ color: "var(--text-secondary)" }}>
                  We do not aggregate — we curate. Every producer and product on
                  our platform meets our standards for quality and authenticity.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="why__item">
                <h3 className="why__item-title" style={{ color: "var(--text-primary)" }}>
                  Integrated Services
                </h3>
                <p className="why__item-text" style={{ color: "var(--text-secondary)" }}>
                  From first introduction to market establishment, we offer a
                  seamless continuum of trade, matching, and consulting services.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
