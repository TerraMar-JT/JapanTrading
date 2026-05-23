"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/app/components/FadeIn";
import { localizedHref, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";

const slides = [
  { src: "/slide-1.jpeg", alt: "Hero image 1" },
  { src: "/slide-2.jpeg", alt: "Hero image 2" },
  { src: "/slide-3.jpg", alt: "Hero image 3" },
  { src: "/slide-4.jpeg", alt: "Hero image 4" },
  { src: "/slide-5.jpeg", alt: "Hero image 5" },
  { src: "/slide-7.jpeg", alt: "Hero image 7" },
  { src: "/slide-8.jpeg", alt: "Hero image 8" },
];

const HORIZONTAL_PANEL_COUNT = 5;

export default function Home({
  params: paramsPromise,
}: {
  params: Promise<{ lang: string }>;
}) {
  const [current, setCurrent] = useState(0);
  const [lang, setLang] = useState<Locale>("en");
  const [dict, setDict] = useState<Dictionary | null>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    paramsPromise.then(({ lang: l }) => {
      setLang(l as Locale);
      import(`@/i18n/dictionaries/${l}`).then((m) => setDict(m.default));
    });
  }, [paramsPromise]);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    const outer = horizontalRef.current;
    const track = trackRef.current;
    if (!outer || !track) return;

    const onScroll = () => {
      const rect = outer.getBoundingClientRect();
      const outerHeight = outer.offsetHeight;
      const viewportH = window.innerHeight;
      const scrollable = outerHeight - viewportH;
      if (scrollable <= 0) return;
      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 1);
      const maxTranslate = track.scrollWidth - window.innerWidth;
      track.style.transform = `translateX(${-progress * maxTranslate}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!dict) return null;

  const h = dict.home;
  const href = (path: string) => localizedHref(path, lang);

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        {slides.map((slide, i) => (
          <div key={slide.src} className={`hero__slide ${i === current ? "hero__slide--active" : ""}`}>
            <Image src={slide.src} alt={slide.alt} fill priority={i === 0} sizes="100vw" style={{ objectFit: "cover", objectPosition: "center center" }} />
          </div>
        ))}
        <div className="hero__content hero__content--visible">
          <p className="hero__tagline">{h.heroTagline}</p>
        </div>
        <div className="hero__scroll hero__scroll--visible">
          <span>{h.scroll}</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ===== MISSION ===== */}
      <section className="section mission" id="mission">
        <div className="container--narrow">
          <FadeIn>
            <div className="section__divider" style={{ margin: "0 auto var(--space-xl)" }} />
            <p className="section__label" style={{ textAlign: "center" }}>{h.mission.label}</p>
            <blockquote className="mission__quote">{h.mission.quote}</blockquote>
            <p className="mission__description">{h.mission.description}</p>
          </FadeIn>
        </div>
      </section>

      {/* ===== HORIZONTAL SCROLL ===== */}
      <div ref={horizontalRef} className="hscroll" style={{ height: `${HORIZONTAL_PANEL_COUNT * 100}vh` }}>
        <div className="hscroll__sticky">
          <div ref={trackRef} className="hscroll__track">

            {/* Panel 1: Business */}
            <section className="hscroll__panel hscroll__panel--warm" id="business">
              <div className="hscroll__panel-inner">
                <p className="section__label">{h.business.label}</p>
                <h2 className="section__title">{h.business.title}</h2>
                <p className="section__subtitle">{h.business.subtitle}</p>
                <div className="business-grid">
                  {[
                    { href: "/business", card: h.business.cards[0] },
                    { href: "/terramar", card: h.business.cards[1] },
                    { href: "/exhibition", card: h.business.cards[2] },
                    { href: "/consulting", card: h.business.cards[3] },
                  ].map(({ href: path, card }) => (
                    <Link key={path} href={href(path)} className="business-card fade-card">
                      <p className="business-card__number">{card.number}</p>
                      <h3 className="business-card__title">{card.title}</h3>
                      <p className="business-card__text">{card.text}</p>
                      <span className="business-card__link">{card.link}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            {/* Panel 2: Corridor */}
            <section className="hscroll__panel hscroll__panel--dark" id="corridor">
              <div className="hscroll__panel-inner">
                <div className="corridor corridor--horizontal">
                  <div className="corridor__text">
                    <p className="section__label">{h.corridor.label}</p>
                    <h2 className="section__title">{h.corridor.title}</h2>
                    <p className="section__text">{h.corridor.text1}</p>
                    <p className="section__text" style={{ marginTop: "1.5rem" }}>{h.corridor.text2}</p>
                    <div className="corridor__highlight">
                      <p>{h.corridor.highlight}</p>
                    </div>
                  </div>
                  <div className="corridor__map">
                    <img src="/latin_america_transparent.png" alt={h.corridor.mapAlt} className="corridor__map-img" />
                  </div>
                </div>
              </div>
            </section>

            {/* Panel 3: TerraMar */}
            <section className="hscroll__panel hscroll__panel--light" id="terramar-highlight">
              <div className="hscroll__panel-inner">
                <div className="split-section split-section--horizontal">
                  <div className="split-section__image">
                    <Image src="/terramar-hero.png" alt={h.terramar.imageAlt} width={600} height={400} style={{ width: "100%", height: "auto", display: "block", borderRadius: "4px" }} />
                  </div>
                  <div className="split-section__text">
                    <div className="terramar__badge">{h.terramar.badge}</div>
                    <h2 className="section__title">{h.terramar.title}</h2>
                    <p className="section__text">{h.terramar.text}</p>
                    <Link href={href("/terramar")} className="section__cta">{h.terramar.cta}</Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Panel 4: Why */}
            <section className="hscroll__panel hscroll__panel--dark" id="why">
              <div className="hscroll__panel-inner">
                <div style={{ textAlign: "center", marginBottom: "var(--space-xl)" }}>
                  <p className="section__label">{h.why.label}</p>
                  <h2 className="section__title">{h.why.title}</h2>
                  <div className="section__divider" style={{ margin: "0 auto var(--space-xl)" }} />
                </div>
                <div className="why__grid why__grid--horizontal">
                  {[
                    <svg key="i1" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1" opacity="0.4" /><path d="M24 8 L24 40 M8 24 L40 24" stroke="currentColor" strokeWidth="0.8" opacity="0.3" /><circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="1" opacity="0.6" /></svg>,
                    <svg key="i2" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 36 L24 12 L36 36" stroke="currentColor" strokeWidth="1" opacity="0.4" /><path d="M16 28 L24 16 L32 28" stroke="currentColor" strokeWidth="1" opacity="0.6" /><line x1="8" y1="36" x2="40" y2="36" stroke="currentColor" strokeWidth="0.8" opacity="0.3" /></svg>,
                    <svg key="i3" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="28" height="28" stroke="currentColor" strokeWidth="1" opacity="0.4" /><rect x="16" y="16" width="16" height="16" stroke="currentColor" strokeWidth="1" opacity="0.6" /><rect x="21" y="21" width="6" height="6" stroke="currentColor" strokeWidth="1" opacity="0.4" /></svg>,
                  ].map((icon, i) => (
                    <div className="why__item" key={i}>
                      <div className="why__item-icon">{icon}</div>
                      <h3 className="why__item-title">{h.why.items[i].title}</h3>
                      <p className="why__item-text">{h.why.items[i].text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Panel 5: Contact CTA */}
            <section className="hscroll__panel hscroll__panel--light" id="contact-cta">
              <div className="hscroll__panel-inner" style={{ textAlign: "center" }}>
                <p className="section__label">{h.contact.label}</p>
                <h2 className="section__title">{h.contact.title}</h2>
                <p className="section__text" style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto" }}>{h.contact.text}</p>
                <Link href={href("/contact")} className="contact__cta">{h.contact.cta}</Link>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
