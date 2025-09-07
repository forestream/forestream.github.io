import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import clsx from "clsx";

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
      <body
        className={clsx(
          notoSansKR.className,
          "[&_h1]:my-4 [&_h1]:text-2xl [&_h1]:font-bold [&_h2]:my-2 [&_h2]:text-xl [&_h2]:font-bold [&_p]:mb-2 [&_p]:text-lg [&_strong]:font-bold",
        )}
      >
        {children}
      </body>
    </html>
  );
}
