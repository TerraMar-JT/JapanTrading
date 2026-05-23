import Link from "next/link";
import { localizedHref, type Locale } from "@/i18n/config";

type FooterDict = {
  readonly logo: string;
  readonly copyright: string;
};

export default function Footer({
  lang,
  dict,
}: {
  lang: Locale;
  dict: FooterDict;
}) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <Link href={localizedHref("/", lang)} className="footer__logo">
            {dict.logo}
          </Link>
          <p className="footer__copyright">{dict.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
