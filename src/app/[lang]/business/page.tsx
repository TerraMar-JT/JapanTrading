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
  return { title: dict.metadata.business.title };
}

export default async function BusinessPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const t = dict.business;
  const href = (path: string) => localizedHref(path, locale);

  return (
    <main>
      <PageHero label={t.hero.label} title={t.hero.title} subtitle={t.hero.subtitle} />

      {/* Trading */}
      <section className="section">
        <div className="container">
          <div className="split-section">
            <div className="split-section__text">
              <FadeIn>
                <p className="business-card__number">{t.trading.number}</p>
                <h2 className="section__title">{t.trading.title}</h2>
                <p className="section__text">{t.trading.text1}</p>
                <p className="section__text" style={{ marginTop: "1.5rem" }}>{t.trading.text2}</p>
              </FadeIn>
            </div>
            <div className="split-section__image">
              <FadeIn>
                <Image src="/marine-farm.png" alt={t.trading.imageAlt} width={600} height={400} style={{ width: "100%", height: "auto", borderRadius: "4px" }} />
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
                <Image src="/terramar-hero.png" alt={t.terramar.imageAlt} width={600} height={400} style={{ width: "100%", height: "auto", borderRadius: "4px" }} />
              </FadeIn>
            </div>
            <div className="split-section__text">
              <FadeIn>
                <p className="business-card__number">{t.terramar.number}</p>
                <h2 className="section__title">{t.terramar.title}</h2>
                <p className="section__text">{t.terramar.text}</p>
                <Link href={href("/terramar")} className="section__cta">{t.terramar.cta}</Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibition */}
      <section className="section">
        <div className="container">
          <div className="split-section">
            <div className="split-section__text">
              <FadeIn>
                <p className="business-card__number">{t.exhibition.number}</p>
                <h2 className="section__title">{t.exhibition.title}</h2>
                <p className="section__text">{t.exhibition.text}</p>
                <Link href={href("/exhibition")} className="section__cta">{t.exhibition.cta}</Link>
              </FadeIn>
            </div>
            <div className="split-section__image">
              <FadeIn>
                <Image src="/exhibition-hero.png" alt={t.exhibition.imageAlt} width={600} height={400} style={{ width: "100%", height: "auto", borderRadius: "4px" }} />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Corridor */}
      <section className="section section--dark">
        <div className="container">
          <div className="corridor">
            <div className="corridor__text">
              <FadeIn>
                <p className="section__label">{t.corridor.label}</p>
                <h2 className="section__title">{t.corridor.title}</h2>
                <p className="section__text">{t.corridor.text1}</p>
                <p className="section__text" style={{ marginTop: "1.5rem" }}>{t.corridor.text2}</p>
                <div className="corridor__highlight">
                  <p>{t.corridor.highlight}</p>
                </div>
              </FadeIn>
            </div>
            <div className="corridor__map">
              <FadeIn>
                <img src="/latin_america_transparent.png" alt={t.corridor.mapAlt} className="corridor__map-img" />
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
                <Image src="/tokyo-skyline.png" alt={t.consulting.imageAlt} width={600} height={400} style={{ width: "100%", height: "auto", borderRadius: "4px" }} />
              </FadeIn>
            </div>
            <div className="split-section__text">
              <FadeIn>
                <p className="business-card__number">{t.consulting.number}</p>
                <h2 className="section__title">{t.consulting.title}</h2>
                <p className="section__text">{t.consulting.text}</p>
                <Link href={href("/consulting")} className="section__cta">{t.consulting.cta}</Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
