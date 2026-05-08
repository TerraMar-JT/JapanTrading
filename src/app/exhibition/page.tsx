import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "../components/FadeIn";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Exhibition Support",
};

export default function ExhibitionPage() {
  return (
    <main>
      <PageHero
        label="Exhibition Support"
        title="Your Partner at Japan's Leading Food Trade Shows"
        subtitle="Comprehensive support for Latin American companies exhibiting in Japan."
      />

      <section className="section">
        <div className="container">
          <div className="split-section">
            <div className="split-section__text">
              <FadeIn>
                <h2 className="section__title">
                  Making Your Exhibition a Success
                </h2>
                <p className="section__text">
                  Exhibiting at a Japanese food trade show is one of the most
                  effective ways to enter the market — but it requires local
                  knowledge, cultural fluency, and meticulous preparation. Japan
                  Trading provides end-to-end exhibition support so you can focus
                  on what matters most: presenting your products.
                </p>
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

      <section className="section section--warm">
        <div className="container">
          <FadeIn>
            <p className="section__label">Our Services</p>
            <h2 className="section__title">What We Provide</h2>
          </FadeIn>
          <div className="services-list">
            <FadeIn>
              <div className="services-list__item">
                <h3 className="services-list__title">Pre-Show Preparation</h3>
                <p className="services-list__text">
                  Booth planning, design coordination, logistics management, and
                  product documentation for the Japanese market. We handle
                  regulatory and labelling requirements.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="services-list__item">
                <h3 className="services-list__title">Buyer Engagement</h3>
                <p className="services-list__text">
                  Pre-show buyer outreach, appointment scheduling, and targeted
                  invitations to relevant trading companies and importers.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="services-list__item">
                <h3 className="services-list__title">On-Site Support</h3>
                <p className="services-list__text">
                  On-site interpretation, negotiation support, product
                  presentation, and tasting coordination throughout the event.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="services-list__item">
                <h3 className="services-list__title">Post-Show Follow-Up</h3>
                <p className="services-list__text">
                  Lead management, follow-up correspondence, sample
                  coordination, and introduction to next steps for interested
                  buyers.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container--narrow">
          <FadeIn>
            <div style={{ textAlign: "center" }}>
              <h2 className="section__title">Ready to Exhibit in Japan?</h2>
              <p
                className="section__text"
                style={{
                  textAlign: "center",
                  maxWidth: "560px",
                  margin: "0 auto",
                }}
              >
                Let us help you make the most of your presence at Japan&apos;s
                leading food industry events.
              </p>
              <Link
                href="/contact"
                className="contact__cta"
                style={{
                  color: "var(--text-on-dark)",
                  borderColor: "var(--text-on-dark)",
                }}
              >
                Get in Touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
