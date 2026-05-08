import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "../components/FadeIn";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "TerraMar",
};

export default function TerraMarPage() {
  return (
    <main>
      <PageHero
        label="Platform"
        title="TerraMar"
        subtitle="Discover producers the world has yet to find."
      />

      {/* Introduction */}
      <section className="section">
        <div className="container">
          <div className="split-section">
            <div className="split-section__image">
              <FadeIn>
                <Image
                  src="/terramar-hero.png"
                  alt="Worker hand-picking ripe coffee cherries on a Latin American plantation"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto", borderRadius: "4px" }}
                />
              </FadeIn>
            </div>
            <div className="split-section__text">
              <FadeIn>
                <div className="terramar__badge">TerraMar</div>
                <h2 className="section__title">
                  Terra &amp; Mar — Land &amp; Sea
                </h2>
                <p className="section__text">
                  TerraMar is Japan Trading&apos;s proprietary business matching
                  platform — a curated space where global buyers discover Latin
                  American agricultural and marine products, and the remarkable
                  producers behind them.
                </p>
                <p className="section__text" style={{ marginTop: "1.5rem" }}>
                  Unlike conventional product directories, TerraMar is designed
                  for discovery. Buyers encounter products and producers they
                  would not find through traditional sourcing channels — each
                  presented with the context, story, and quality credentials that
                  matter.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section section--warm">
        <div className="container">
          <FadeIn>
            <p className="section__label">What Makes TerraMar Different</p>
            <h2 className="section__title">Beyond the Catalogue</h2>
          </FadeIn>
          <div className="terramar-features-grid">
            <FadeIn>
              <div className="terramar-feature-card">
                <span className="terramar-feature-card__number">01</span>
                <h3 className="terramar-feature-card__title">
                  Producer Stories
                </h3>
                <p className="terramar-feature-card__text">
                  Every listing introduces the producer — their history,
                  philosophy, commitment to quality, and what makes their land
                  and craft unique. Buyers connect with provenance, not just
                  product specifications.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="terramar-feature-card">
                <span className="terramar-feature-card__number">02</span>
                <h3 className="terramar-feature-card__title">
                  Curated Discovery
                </h3>
                <p className="terramar-feature-card__text">
                  TerraMar surfaces producers and products that match the
                  buyer&apos;s quality standards and values. Search by product
                  category, raw material, region, or production method.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="terramar-feature-card">
                <span className="terramar-feature-card__number">03</span>
                <h3 className="terramar-feature-card__title">
                  Quality Verification
                </h3>
                <p className="terramar-feature-card__text">
                  Every producer on TerraMar has been personally vetted by our
                  team. We verify quality standards, production methods, and
                  export readiness before any listing goes live.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="terramar-feature-card">
                <span className="terramar-feature-card__number">04</span>
                <h3 className="terramar-feature-card__title">
                  Direct Connection
                </h3>
                <p className="terramar-feature-card__text">
                  TerraMar facilitates direct connections between producers and
                  buyers, with Japan Trading providing support throughout the
                  introduction and negotiation process.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="section section--dark">
        <div className="container--narrow">
          <FadeIn>
            <div style={{ textAlign: "center" }}>
              <p className="section__label">Scope</p>
              <h2 className="section__title">
                Agricultural &amp; Marine Products
              </h2>
              <div
                className="section__divider"
                style={{ margin: "0 auto var(--space-xl)" }}
              />
              <p
                className="section__text"
                style={{
                  textAlign: "center",
                  maxWidth: "640px",
                  margin: "0 auto",
                }}
              >
                From specialty coffee and cacao to sustainably harvested seafood,
                exotic fruits, and artisanal ingredients — TerraMar covers a wide
                spectrum of Latin American agricultural and marine products, all
                selected for their exceptional quality and the integrity of their
                producers.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
