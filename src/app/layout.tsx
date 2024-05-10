import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";
import { ThemeProvider } from "@mui/system";
import theme from "@/theme";
import React from "react";
import Header from "@/app/Header";
import Footer from "@/app/Footer";
import { openGraphImage } from "@/constant";

export const metadata: Metadata = {
  title: "Paritet - Надежные перевозки бетона",
  description:
    "Paritet - ваш надежный партнер в перевозках бетона. Мы специализируемся на быстрой и эффективной доставке бетонных смесей по всей области. Наш опытный персонал и современный автопарк обеспечивают безопасную и своевременную доставку, удовлетворяя потребности как мелких строительных компаний, так и крупных инфраструктурных проектов.",
  openGraph: {
    title: "Paritet",
    description: "Paritet - ваш надежный партнер в перевозках бетона",
    images: openGraphImage,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <meta name="yandex-verification" content="43c9d914c9e4d7b1" />

      <?xml version="1.0" encoding="UTF-8"?>

      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

        <url>

          <loc>http://www.example.com/</loc>

          <lastmod>2005-01-01</lastmod>

          <changefreq>monthly</changefreq>

          <priority>0.8</priority>

        </url>

      </urlset>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
