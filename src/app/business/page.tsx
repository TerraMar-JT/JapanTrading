import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "../components/FadeIn";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Business",
};

export default function BusinessPage() {
  return (
    <main>
      <PageHero
        label="Our Business"
        title="Trading with Purpose"
        subtitle="Four integrated pillars connecting Latin American producers with global markets."
      />

      {/* Trading */}
      <section className="section">
        <div className="container">
          <div className="split-section">
            <div className="split-section__text">
              <FadeIn>
                <p className="business-card__number">01</p>
                <h2 className="section__title">Trading</h2>
                <p className="section__text">
                  At the core of Japan Trading is our international trading
                  business. We connect Latin American agricultural and marine
                  products with trading houses and food importers around the
                  world.
                </p>
                <p className="section__text" style={{ marginTop: "1.5rem" }}>
                  From sourcing and quality verification to logistics,
                  documentation, and regulatory compliance, we manage every stage
                  of the trade cycle with precision. Our deep relationships with
                  producers across Latin America allow us to source products of
                  exceptional quality — many of which remain unknown to
                  conventional supply chains.
                </p>
              </FadeIn>
            </div>
            <div className="split-section__image">
              <FadeIn>
                <Image
                  src="/marine-farm.png"
                  alt="Marine fish farm with circular net pens in coastal waters"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto", borderRadius: "4px" }}
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* TerraMar */}
      <section className="section section--warm">
        <div className="container">
          <div className="split-section split-section--reverse">
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
                <p className="business-card__number">02</p>
                <h2 className="section__title">TerraMar Platform</h2>
                <p className="section__text">
                  Our proprietary business matching platform connects Latin
                  American producers directly with global buyers. TerraMar goes
                  beyond simple product listings — it introduces producers, their
                  philosophy, and what makes each product exceptional.
                </p>
                <Link href="/terramar" className="section__cta">
                  Learn about TerraMar
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibition Support */}
      <section className="section">
        <div className="container">
          <div className="split-section">
            <div className="split-section__text">
              <FadeIn>
                <p className="business-card__number">03</p>
                <h2 className="section__title">Exhibition Support</h2>
                <p className="section__text">
                  Full-service support for Latin American companies exhibiting at
                  major Japanese food trade shows, including FOODEX Japan and the
                  Supermarket Trade Show. From booth coordination and buyer
                  outreach to on-site interpretation and post-show follow-up.
                </p>
                <Link href="/exhibition" className="section__cta">
                  Learn about Exhibition Support
                </Link>
              </FadeIn>
            </div>
            <div className="split-section__image">
              <FadeIn>
                <Image
                  src="/exhibition-hero.png"
                  alt="Aerial view of a bustling food trade show exhibition floor"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto", borderRadius: "4px" }}
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Latin America Corridor */}
      <section className="section section--dark">
        <div className="container">
          <div className="corridor">
            <div className="corridor__text">
              <FadeIn>
                <p className="section__label">Our Supply Region</p>
                <h2 className="section__title">
                  A Vast 10,000 km Supply Corridor
                </h2>
                <p className="section__text">
                  Latin America stretches approximately 10,000 kilometres from
                  north to south — more than 25 times the length of the Japanese
                  archipelago. This extraordinary span crosses nearly every
                  climate zone on earth.
                </p>
                <p className="section__text" style={{ marginTop: "1.5rem" }}>
                  From arid deserts and tropical rainforests to temperate
                  grasslands and subpolar waters, this diversity of environments
                  produces an unmatched range of agricultural and marine
                  products — available year-round.
                </p>
                <div className="corridor__highlight">
                  <p>
                    Year-round supply powered by Latin America&apos;s diverse
                    climates and waters.
                  </p>
                </div>
              </FadeIn>
            </div>
            <div className="corridor__map">
              <FadeIn>
                <img
                  src="/latin_america_transparent.png"
                  alt="Map of Latin America spanning 10,000 km from Mexico to Tierra del Fuego"
                  className="corridor__map-img"
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting */}
      <section className="section section--cream">
        <div className="container">
          <div className="split-section split-section--reverse">
            <div className="split-section__image">
              <FadeIn>
                <Image
                  src="/tokyo-skyline.png"
                  alt="Tokyo skyline at dusk with Tokyo Tower illuminated"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto", borderRadius: "4px" }}
                />
              </FadeIn>
            </div>
            <div className="split-section__text">
              <FadeIn>
                <p className="business-card__number">04</p>
                <h2 className="section__title">Japan Market Consulting</h2>
                <p className="section__text">
                  Strategic consulting for Latin American companies seeking to
                  establish and grow their presence in the Japanese market. From
                  company formation and market research to partner selection and
                  business development.
                </p>
                <Link href="/consulting" className="section__cta">
                  Learn about Consulting
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
