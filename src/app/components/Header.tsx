"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Locale, localizedHref } from "@/i18n/config";

type NavDict = {
  readonly home: string;
  readonly about: string;
  readonly business: string;
  readonly terramar: string;
  readonly exhibition: string;
  readonly consulting: string;
  readonly company: string;
  readonly contact: string;
};

function getBasePath(pathname: string): string {
  if (pathname.startsWith("/es")) return pathname.slice(3) || "/";
  if (pathname.startsWith("/ja")) return pathname.slice(3) || "/";
  return pathname;
}

function detectLang(pathname: string): Locale {
  if (pathname.startsWith("/es/") || pathname === "/es") return "es";
  if (pathname.startsWith("/ja/") || pathname === "/ja") return "ja";
  return "en";
}

export default function Header({
  lang,
  nav,
}: {
  lang: Locale;
  nav: NavDict;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const currentLang = detectLang(pathname);
  const basePath = getBasePath(pathname);
  const isHome = basePath === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const links = [
    { href: localizedHref("/", lang), label: nav.home, base: "/" },
    { href: localizedHref("/about", lang), label: nav.about, base: "/about" },
    { href: localizedHref("/business", lang), label: nav.business, base: "/business" },
    { href: localizedHref("/terramar", lang), label: nav.terramar, base: "/terramar" },
    { href: localizedHref("/exhibition", lang), label: nav.exhibition, base: "/exhibition" },
    { href: localizedHref("/consulting", lang), label: nav.consulting, base: "/consulting" },
    { href: localizedHref("/company", lang), label: nav.company, base: "/company" },
    { href: localizedHref("/contact", lang), label: nav.contact, base: "/contact" },
  ];

  const langSwitch = (targetLang: Locale) => localizedHref(basePath, targetLang);

  return (
    <>
      <header
        className={`header ${scrolled || !isHome ? "header--scrolled" : ""}`}
      >
        <div className="header__inner">
          <Link href={localizedHref("/", lang)} className="header__logo">
            Japan Trading
          </Link>
          <nav className="header__nav">
            {links.map((l) => (
              <Link
                key={l.base}
                href={l.href}
                className={basePath === l.base ? "header__nav-active" : ""}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="header__lang">
            <Link
              href={langSwitch("en")}
              className={currentLang === "en" ? "header__lang-active" : ""}
            >
              EN
            </Link>
            <span className="header__lang-divider">/</span>
            <Link
              href={langSwitch("ja")}
              className={currentLang === "ja" ? "header__lang-active" : ""}
            >
              日本語
            </Link>
            <span className="header__lang-divider">/</span>
            <Link
              href={langSwitch("es")}
              className={currentLang === "es" ? "header__lang-active" : ""}
            >
              ES
            </Link>
          </div>
          <button
            className="header__menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              style={
                mobileOpen
                  ? { transform: "rotate(45deg) translate(4px, 4px)" }
                  : {}
              }
            />
            <span style={mobileOpen ? { opacity: 0 } : {}} />
            <span
              style={
                mobileOpen
                  ? { transform: "rotate(-45deg) translate(4px, -4px)" }
                  : {}
              }
            />
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav ${mobileOpen ? "mobile-nav--open" : ""}`}>
        {links.map((l) => (
          <Link key={l.base} href={l.href} onClick={() => setMobileOpen(false)}>
            {l.label}
          </Link>
        ))}
        <div className="mobile-nav__lang">
          <Link
            href={langSwitch("en")}
            className={currentLang === "en" ? "mobile-nav__lang-active" : ""}
            onClick={() => setMobileOpen(false)}
          >
            EN
          </Link>
          <span className="mobile-nav__lang-divider">/</span>
          <Link
            href={langSwitch("ja")}
            className={currentLang === "ja" ? "mobile-nav__lang-active" : ""}
            onClick={() => setMobileOpen(false)}
          >
            日本語
          </Link>
          <span className="mobile-nav__lang-divider">/</span>
          <Link
            href={langSwitch("es")}
            className={currentLang === "es" ? "mobile-nav__lang-active" : ""}
            onClick={() => setMobileOpen(false)}
          >
            ES
          </Link>
        </div>
      </div>
    </>
  );
}
