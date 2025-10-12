import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import clsx from "clsx";
import { Header } from "./_components/header";
import { HeaderDataLayer } from "./_components/header-data-layer";

export const metadata: Metadata = {
  title: "forestream",
  description: "forestream's personal website",
  authors: [
    { name: "forestream", url: "https://github.com/forestream" },
    { name: "forestream", url: "https://velog.io/@forestream" },
  ],
  keywords: [
    "산티아고",
    "순례길",
    "기록",
    "forestream",
    "santiago",
    "pilgrimage",
  ],
};

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={clsx(
          notoSansKR.className,
          "[&_h1]:my-4 [&_h1]:text-2xl [&_h1]:font-bold [&_h2]:my-2 [&_h2]:text-xl [&_h2]:font-bold [&_p]:mb-2 [&_strong]:font-bold",
        )}
      >
        <HeaderDataLayer>
          <Header />
        </HeaderDataLayer>
        {children}
      </body>
    </html>
  );
}
