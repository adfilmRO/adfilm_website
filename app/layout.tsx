import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

import Header from "@/components/index_page/Header";
import HeaderMobile from "@/components/index_page/HeaderMobile";
import NextTopLoader from "nextjs-toploader";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "adfilm",
  description: "Studio de productie video, podcast, foto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={montserrat.className}>
        <NextTopLoader
          color="#8868c8"
          showSpinner={false}
          easing="ease"
          speed={100}
          crawlSpeed={200}
          height={2}
          showAtBottom={false}
        />
        <Header />
        <HeaderMobile />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
