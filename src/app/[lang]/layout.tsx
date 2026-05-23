import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import HtmlLang from "@/app/components/HtmlLang";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    title: {
      default: dict.metadata.home.title,
      template: `%s | Japan Trading Ltd.`,
    },
    description: dict.metadata.home.description,
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <HtmlLang lang={lang} />
      <Header lang={lang as Locale} nav={dict.nav} />
      {children}
      <Footer lang={lang as Locale} dict={dict.footer} />
    </>
  );
}
