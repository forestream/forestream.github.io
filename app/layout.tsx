import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";

export const metadata: Metadata = {
  title: "산티아고의 기록",
  description: "산티아고 순례길을 걸은 기록",
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
      <body className={notoSansKR.className}>{children}</body>
    </html>
  );
}
