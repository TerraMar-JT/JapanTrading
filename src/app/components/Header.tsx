"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/business", label: "Business" },
    { href: "/terramar", label: "TerraMar" },
    { href: "/exhibition", label: "Exhibition" },
    { href: "/consulting", label: "Consulting" },
    { href: "/company", label: "Company" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`header ${scrolled || !isHome ? "header--scrolled" : ""}`}
      >
        <div className="header__inner">
          <Link href="/" className="header__logo">
            Japan Trading
          </Link>
          <nav className="header__nav">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={pathname === l.href ? "header__nav-active" : ""}
              >
                {l.label}
              </Link>
            ))}
          </nav>
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
          <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}
