import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/app/components/FadeIn";
import PageHero from "@/app/components/PageHero";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return { title: dict.metadata.terramar.title };
}

export default async function TerraMarPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const t = dict.terramar;

  return (
    <main>
      <PageHero label={t.hero.label} title={t.hero.title} subtitle={t.hero.subtitle} />

      <section className="section">
        <div className="container">
          <div className="split-section">
            <div className="split-section__image">
              <FadeIn>
                <Image src="/terramar-hero.png" alt={t.intro.imageAlt} width={600} height={400} style={{ width: "100%", height: "auto", borderRadius: "4px" }} />
              </FadeIn>
            </div>
            <div className="split-section__text">
              <FadeIn>
                <div className="terramar__badge">{t.intro.badge}</div>
                <h2 className="section__title">{t.intro.title}</h2>
                <p className="section__text">{t.intro.text1}</p>
                <p className="section__text" style={{ marginTop: "1.5rem" }}>{t.intro.text2}</p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <FadeIn>
            <p className="section__label">{t.features.label}</p>
            <h2 className="section__title">{t.features.title}</h2>
          </FadeIn>
          <div className="terramar-features-grid">
            {t.features.items.map((item, i) => (
              <FadeIn key={i}>
                <div className="terramar-feature-card">
                  <span className="terramar-feature-card__number">{item.number}</span>
                  <h3 className="terramar-feature-card__title">{item.title}</h3>
                  <p className="terramar-feature-card__text">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container--narrow">
          <FadeIn>
            <div style={{ textAlign: "center" }}>
              <p className="section__label">{t.scope.label}</p>
              <h2 className="section__title">{t.scope.title}</h2>
              <div className="section__divider" style={{ margin: "0 auto var(--space-xl)" }} />
              <p className="section__text" style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto" }}>{t.scope.text}</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
