import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/app/components/FadeIn";
import PageHero from "@/app/components/PageHero";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return { title: dict.metadata.about.title };
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const t = dict.about;

  return (
    <main>
      <PageHero label={t.hero.label} title={t.hero.title} subtitle={t.hero.subtitle} />

      <section className="section">
        <div className="container">
          <div className="split-section">
            <div className="split-section__image">
              <FadeIn>
                <Image src="/hero-shoji.png" alt={t.story.imageAlt} width={600} height={400} style={{ width: "100%", height: "auto" }} />
              </FadeIn>
            </div>
            <div className="split-section__text">
              <FadeIn>
                <p className="section__label">{t.story.label}</p>
                <h2 className="section__title">{t.story.title}</h2>
                <p className="section__text">{t.story.text1}</p>
                <p className="section__text" style={{ marginTop: "1.5rem" }}>{t.story.text2}</p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container--narrow">
          <FadeIn>
            <div style={{ textAlign: "center" }}>
              <p className="section__label">{t.philosophy.label}</p>
              <h2 className="section__title">{t.philosophy.title}</h2>
              <div className="section__divider" style={{ margin: "0 auto var(--space-xl)" }} />
              <p className="section__text" style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto" }}>{t.philosophy.text}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: "center" }}>
              <p className="section__label">{t.why.label}</p>
              <h2 className="section__title">{t.why.title}</h2>
            </div>
          </FadeIn>
          <div className="why__grid why__grid--light">
            {t.why.items.map((item, i) => (
              <FadeIn key={i}>
                <div className="why__item">
                  <h3 className="why__item-title" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                  <p className="why__item-text" style={{ color: "var(--text-secondary)" }}>{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
