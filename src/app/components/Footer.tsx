import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <Link href="/" className="footer__logo">
            Japan Trading 株式会社
          </Link>
          <p className="footer__copyright">
            &copy; 2026 Japan Trading Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
