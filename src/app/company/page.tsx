import type { Metadata } from "next";
import FadeIn from "../components/FadeIn";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Company",
};

export default function CompanyPage() {
  return (
    <main>
      <PageHero
        label="Corporate Information"
        title="Company"
        subtitle="Japan Trading株式会社"
      />

      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="company__table company__table--light">
              <div className="company__row company__row--light">
                <p className="company__label company__label--light">
                  Company Name
                </p>
                <p className="company__value company__value--light">
                  Japan Trading株式会社
                  <br />
                  Japan Trading Ltd.
                </p>
              </div>
              <div className="company__row company__row--light">
                <p className="company__label company__label--light">
                  Head Office
                </p>
                <p className="company__value company__value--light">
                  東京都港区麻布十番1丁目5−10 アトラスビル4F
                  <br />
                  4F Atlas Bldg. 1-5-10 AzabuJuban, Minato-ku, Tokyo
                </p>
              </div>
              <div className="company__row company__row--light">
                <p className="company__label company__label--light">
                  Established
                </p>
                <p className="company__value company__value--light">
                  May 1, 2026
                </p>
              </div>
              <div className="company__row company__row--light">
                <p className="company__label company__label--light">
                  Business Lines
                </p>
                <p className="company__value company__value--light">
                  International trading of agricultural and marine products
                  <br />
                  Business matching platform (TerraMar)
                  <br />
                  Food exhibition support in Japan
                  <br />
                  Japan market entry consulting
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
