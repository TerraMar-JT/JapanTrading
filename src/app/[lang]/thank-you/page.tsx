import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import FadeIn from "@/app/components/FadeIn";
import { localizedHref, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return { title: dict.metadata.thankYou.title };
}

export default async function ThankYouPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const t = dict.thankYou;

  return (
    <main>
      <PageHero label={t.hero.label} title={t.hero.title} subtitle={t.hero.subtitle} />

      <section className="section">
        <div className="container--narrow">
          <FadeIn>
            <div style={{ textAlign: "center" }}>
              <p className="section__text" style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto" }}>
                {t.text}
              </p>
              <Link href={localizedHref("/", locale)} className="contact__cta" style={{ marginTop: "var(--space-2xl)", display: "inline-block" }}>
                {t.button}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
