import type { Metadata } from "next";
import FadeIn from "@/app/components/FadeIn";
import PageHero from "@/app/components/PageHero";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return { title: dict.metadata.company.title };
}

export default async function CompanyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const t = dict.company;

  return (
    <main>
      <PageHero label={t.hero.label} title={t.hero.title} subtitle={t.hero.subtitle} />

      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="company__table company__table--light">
              {/* Company Name */}
              <div className="company__row company__row--light">
                <p className="company__label company__label--light">{t.companyName.label}</p>
                <p className="company__value company__value--light">
                  {t.companyName.value.split("\n").map((line, i) => (
                    <span key={i}>{line}{i < t.companyName.value.split("\n").length - 1 && <br />}</span>
                  ))}
                </p>
              </div>

              {/* Head Office */}
              <div className="company__row company__row--light">
                <p className="company__label company__label--light">{t.headOffice.label}</p>
                <p className="company__value company__value--light">{t.headOffice.value}</p>
              </div>

              {/* Map */}
              <div className="company__row company__row--light company__row--map">
                <p className="company__label company__label--light"></p>
                <div className="company__value company__value--light">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.2!2d139.7367!3d35.6537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b9b4475a521%3A0x7e0dd6b3b7e6a3e0!2z6bq75biD5Y2B55Wq6aeF!5e0!3m2!1sja!2sjp!4v1"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: "4px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Japan Trading Head Office Location"
                  />
                </div>
              </div>

              {/* Established */}
              <div className="company__row company__row--light">
                <p className="company__label company__label--light">{t.established.label}</p>
                <p className="company__value company__value--light">{t.established.value}</p>
              </div>

              {/* Business Lines */}
              <div className="company__row company__row--light">
                <p className="company__label company__label--light">{t.businessLines.label}</p>
                <p className="company__value company__value--light">
                  {t.businessLines.value.split("\n").map((line, i) => (
                    <span key={i}>{line}{i < t.businessLines.value.split("\n").length - 1 && <br />}</span>
                  ))}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
