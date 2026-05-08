import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "../components/FadeIn";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Consulting",
};

export default function ConsultingPage() {
  return (
    <main>
      <PageHero
        label="Consulting"
        title="Japan Market Entry & Expansion"
        subtitle="Strategic consulting for Latin American companies entering the Japanese market."
      />

      <section className="section">
        <div className="container">
          <div className="split-section">
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
                <p className="section__text">
                  Entering the Japanese market requires more than ambition — it
                  requires deep local knowledge, cultural fluency, and a trusted
                  partner on the ground. Japan Trading provides comprehensive
                  consulting services that guide Latin American companies through
                  every stage of market entry and growth.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <FadeIn>
            <p className="section__label">Services</p>
            <h2 className="section__title">How We Support You</h2>
          </FadeIn>
          <div className="consulting__grid">
            <FadeIn>
              <div className="consulting__card">
                <h4 className="consulting__card-title">Company Formation</h4>
                <p className="consulting__card-text">
                  End-to-end support for establishing a legal entity in Japan,
                  including incorporation, registered office, and compliance
                  requirements.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="consulting__card">
                <h4 className="consulting__card-title">Market Research</h4>
                <p className="consulting__card-text">
                  In-depth analysis of the Japanese market landscape, consumer
                  preferences, competitive environment, and regulatory
                  considerations.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="consulting__card">
                <h4 className="consulting__card-title">
                  Sales Channel Development
                </h4>
                <p className="consulting__card-text">
                  Identification and development of distribution channels, retail
                  partnerships, and wholesale relationships across Japan.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="consulting__card">
                <h4 className="consulting__card-title">Partner Selection</h4>
                <p className="consulting__card-text">
                  Careful identification and vetting of local partners,
                  distributors, and agents aligned with your brand values and
                  commercial objectives.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="consulting__card">
                <h4 className="consulting__card-title">
                  Business Development
                </h4>
                <p className="consulting__card-text">
                  Ongoing support for market positioning, client acquisition, and
                  strategic growth within the Japanese food and agriculture
                  sector.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="consulting__card">
                <h4 className="consulting__card-title">Local Entity Setup</h4>
                <p className="consulting__card-text">
                  Practical support for office establishment, staffing, banking,
                  and day-to-day operational infrastructure in Japan.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container--narrow">
          <FadeIn>
            <div style={{ textAlign: "center" }}>
              <h2 className="section__title">Start Your Japan Journey</h2>
              <p
                className="section__text"
                style={{
                  textAlign: "center",
                  maxWidth: "560px",
                  margin: "0 auto",
                }}
              >
                Every successful market entry begins with a conversation. Let us
                understand your goals and design a path forward.
              </p>
              <Link href="/contact" className="contact__cta">
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
