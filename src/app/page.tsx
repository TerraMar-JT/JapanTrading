"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "./components/FadeIn";

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

export default function Home() {
  const [current, setCurrent] = useState(0);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  /* Horizontal scroll driven by vertical scroll position */
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

      /* How far the sticky container has been scrolled through (0 → 1) */
      const progress = Math.min(
        Math.max(-rect.top / scrollable, 0),
        1
      );

      const maxTranslate = track.scrollWidth - window.innerWidth;
      track.style.transform = `translateX(${-progress * maxTranslate}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main>
      {/* ===== HERO — FULL-SCREEN SLIDESHOW ===== */}
      <section className="hero" id="hero">

        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`hero__slide ${i === current ? "hero__slide--active" : ""}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
          </div>
        ))}

        {/* Text overlay */}
        <div className="hero__content hero__content--visible">
          <p className="hero__tagline">
            Connecting the World with Hidden Excellence
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll hero__scroll--visible">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>

      </section>

      {/* ===== MISSION ===== */}
      <section className="section mission" id="mission">
        <div className="container--narrow">
          <FadeIn>
            <div
              className="section__divider"
              style={{ margin: "0 auto var(--space-xl)" }}
            />
            <p className="section__label" style={{ textAlign: "center" }}>
              Our Mission
            </p>
            <blockquote className="mission__quote">
              Connecting the world&apos;s importers with hidden producers and
              extraordinary products.
            </blockquote>
            <p className="mission__description">
              Japan Trading bridges the distance between exceptional Latin
              American agricultural and marine producers and the global importers
              who seek them. We believe that behind every outstanding product
              lies a story of dedication, land, and craft — and that story
              deserves to be told.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== HORIZONTAL SCROLL ZONE ===== */}
      <div
        ref={horizontalRef}
        className="hscroll"
        style={{ height: `${HORIZONTAL_PANEL_COUNT * 100}vh` }}
      >
        <div className="hscroll__sticky">
          <div ref={trackRef} className="hscroll__track">

            {/* --- Panel 1: Business Overview --- */}
            <section className="hscroll__panel hscroll__panel--warm" id="business">
              <div className="hscroll__panel-inner">
                <p className="section__label">What We Do</p>
                <h2 className="section__title">Our Business</h2>
                <p className="section__subtitle">
                  Four integrated pillars that connect Latin American producers with
                  global markets — with Japan at the centre.
                </p>
                <div className="business-grid">
                  <Link href="/business" className="business-card fade-card">
                    <p className="business-card__number">01</p>
                    <h3 className="business-card__title">Trading</h3>
                    <p className="business-card__text">
                      Connecting Latin American agricultural and marine products with
                      trading houses and food importers worldwide.
                    </p>
                    <span className="business-card__link">Learn more</span>
                  </Link>
                  <Link href="/terramar" className="business-card fade-card">
                    <p className="business-card__number">02</p>
                    <h3 className="business-card__title">TerraMar Platform</h3>
                    <p className="business-card__text">
                      A business matching platform connecting Latin American
                      producers directly with global buyers — telling the story
                      behind every product.
                    </p>
                    <span className="business-card__link">Learn more</span>
                  </Link>
                  <Link href="/exhibition" className="business-card fade-card">
                    <p className="business-card__number">03</p>
                    <h3 className="business-card__title">Exhibition Support</h3>
                    <p className="business-card__text">
                      Full-service support for Latin American companies exhibiting at
                      FOODEX Japan, the Supermarket Trade Show, and more.
                    </p>
                    <span className="business-card__link">Learn more</span>
                  </Link>
                  <Link href="/consulting" className="business-card fade-card">
                    <p className="business-card__number">04</p>
                    <h3 className="business-card__title">
                      Japan Market Consulting
                    </h3>
                    <p className="business-card__text">
                      Comprehensive consulting for Latin American companies entering
                      the Japanese market — from company formation to expansion.
                    </p>
                    <span className="business-card__link">Learn more</span>
                  </Link>
                </div>
              </div>
            </section>

            {/* --- Panel 2: Supply Region --- */}
            <section className="hscroll__panel hscroll__panel--dark" id="corridor">
              <div className="hscroll__panel-inner">
                <div className="corridor corridor--horizontal">
                  <div className="corridor__text">
                    <p className="section__label">Our Supply Region</p>
                    <h2 className="section__title">
                      A Vast 10,000 km Supply Corridor
                    </h2>
                    <p className="section__text">
                      Latin America stretches approximately 10,000 kilometres from
                      north to south — more than 25 times the length of the Japanese
                      archipelago. This extraordinary span crosses nearly every
                      climate zone on earth.
                    </p>
                    <p className="section__text" style={{ marginTop: "1.5rem" }}>
                      From arid deserts and tropical rainforests to temperate
                      grasslands and subpolar waters, this diversity of environments
                      produces an unmatched range of agricultural and marine
                      products — available year-round.
                    </p>
                    <div className="corridor__highlight">
                      <p>
                        Year-round supply powered by Latin America&apos;s diverse
                        climates and waters.
                      </p>
                    </div>
                  </div>
                  <div className="corridor__map">
                    <img
                      src="/latin_america_transparent.png"
                      alt="Map of Latin America spanning 10,000 km from Mexico to Tierra del Fuego"
                      className="corridor__map-img"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* --- Panel 2: TerraMar --- */}
            <section className="hscroll__panel hscroll__panel--light" id="terramar-highlight">
              <div className="hscroll__panel-inner">
                <div className="split-section split-section--horizontal">
                  <div className="split-section__image">
                    <Image
                      src="/terramar-hero.png"
                      alt="Worker hand-picking ripe coffee cherries on a Latin American plantation"
                      width={600}
                      height={400}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        borderRadius: "4px",
                      }}
                    />
                  </div>
                  <div className="split-section__text">
                    <div className="terramar__badge">TerraMar</div>
                    <h2 className="section__title">
                      Discover Producers the World Has Yet to Find
                    </h2>
                    <p className="section__text">
                      TerraMar is our business matching platform — a curated space
                      where global buyers discover Latin American agricultural and
                      marine products, and the remarkable producers behind them. Each
                      listing goes beyond simple specifications to share the story,
                      craft, and commitment of the producer.
                    </p>
                    <Link href="/terramar" className="section__cta">
                      Explore TerraMar
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* --- Panel 3: Why Japan Trading --- */}
            <section className="hscroll__panel hscroll__panel--dark" id="why">
              <div className="hscroll__panel-inner">
                <div style={{ textAlign: "center", marginBottom: "var(--space-xl)" }}>
                  <p className="section__label">Our Difference</p>
                  <h2 className="section__title">Why Japan Trading</h2>
                  <div
                    className="section__divider"
                    style={{ margin: "0 auto var(--space-xl)" }}
                  />
                </div>
                <div className="why__grid why__grid--horizontal">
                  <div className="why__item">
                    <div className="why__item-icon">
                      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                        <path d="M24 8 L24 40 M8 24 L40 24" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
                        <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="1" opacity="0.6" />
                      </svg>
                    </div>
                    <h3 className="why__item-title">Bicultural Perspective</h3>
                    <p className="why__item-text">
                      Our founder, with deep roots in both Japan and Latin America,
                      we bridge cultural, linguistic, and commercial divides with
                      authenticity and nuance.
                    </p>
                  </div>
                  <div className="why__item">
                    <div className="why__item-icon">
                      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 36 L24 12 L36 36" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                        <path d="M16 28 L24 16 L32 28" stroke="currentColor" strokeWidth="1" opacity="0.6" />
                        <line x1="8" y1="36" x2="40" y2="36" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
                      </svg>
                    </div>
                    <h3 className="why__item-title">Hidden Producers, Revealed</h3>
                    <p className="why__item-text">
                      We specialise in identifying exceptional producers who remain
                      invisible to conventional sourcing — bringing their products
                      and stories to the global stage.
                    </p>
                  </div>
                  <div className="why__item">
                    <div className="why__item-icon">
                      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="10" width="28" height="28" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                        <rect x="16" y="16" width="16" height="16" stroke="currentColor" strokeWidth="1" opacity="0.6" />
                        <rect x="21" y="21" width="6" height="6" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                      </svg>
                    </div>
                    <h3 className="why__item-title">End-to-End Commitment</h3>
                    <p className="why__item-text">
                      From first contact to market entry, we offer a seamless
                      continuum of services — trading, matchmaking, exhibition
                      support, and strategic consulting — all under one roof.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* --- Panel 4: Contact --- */}
            <section className="hscroll__panel hscroll__panel--light" id="contact-cta">
              <div className="hscroll__panel-inner" style={{ textAlign: "center" }}>
                <p className="section__label">Get in Touch</p>
                <h2 className="section__title">Let&apos;s Start a Conversation</h2>
                <p
                  className="section__text"
                  style={{
                    textAlign: "center",
                    maxWidth: "560px",
                    margin: "0 auto",
                  }}
                >
                  Whether you are a producer seeking access to new markets or a
                  buyer looking for exceptional products, we welcome the
                  opportunity to connect.
                </p>
                <Link href="/contact" className="contact__cta">
                  Contact Us
                </Link>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
