import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/app/components/FadeIn";
import PageHero from "@/app/components/PageHero";
import { localizedHref, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return { title: dict.metadata.exhibition.title };
}

export default async function ExhibitionPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const t = dict.exhibition;

  return (
    <main>
      <PageHero label={t.hero.label} title={t.hero.title} subtitle={t.hero.subtitle} />

      <section className="section">
        <div className="container">
          <div className="split-section">
            <div className="split-section__text">
              <FadeIn>
                <h2 className="section__title">{t.intro.title}</h2>
                <p className="section__text">{t.intro.text}</p>
              </FadeIn>
            </div>
            <div className="split-section__image">
              <FadeIn>
                <Image src="/exhibition-hero.png" alt={t.intro.imageAlt} width={600} height={400} style={{ width: "100%", height: "auto", borderRadius: "4px" }} />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <FadeIn>
            <p className="section__label">{t.services.label}</p>
            <h2 className="section__title">{t.services.title}</h2>
          </FadeIn>
          <div className="services-list">
            {t.services.items.map((item, i) => (
              <FadeIn key={i}>
                <div className="services-list__item">
                  <h3 className="services-list__title">{item.title}</h3>
                  <p className="services-list__text">{item.text}</p>
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
              <h2 className="section__title">{t.cta.title}</h2>
              <p className="section__text" style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto" }}>{t.cta.text}</p>
              <Link href={localizedHref("/contact", locale)} className="contact__cta" style={{ color: "var(--text-on-dark)", borderColor: "var(--text-on-dark)" }}>
                {t.cta.button}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
