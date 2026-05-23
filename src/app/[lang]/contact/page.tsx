import type { Metadata } from "next";
import FadeIn from "@/app/components/FadeIn";
import PageHero from "@/app/components/PageHero";
import ContactForm from "./ContactForm";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return { title: dict.metadata.contact.title };
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const t = dict.contact;

  return (
    <main>
      <PageHero label={t.hero.label} title={t.hero.title} subtitle={t.hero.subtitle} />

      <section className="section">
        <div className="container--narrow">
          <FadeIn>
            <p className="section__text" style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto var(--space-2xl)" }}>
              {t.intro}
            </p>
          </FadeIn>

          <FadeIn>
            <ContactForm form={t.form} />
          </FadeIn>

          {t.office.value && (
            <FadeIn>
              <div className="company__table company__table--light" style={{ maxWidth: "700px", margin: "var(--space-3xl) auto 0" }}>
                <div className="company__row company__row--light">
                  <p className="company__label company__label--light">{t.office.label}</p>
                  <p className="company__value company__value--light">{t.office.value}</p>
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </section>
    </main>
  );
}
