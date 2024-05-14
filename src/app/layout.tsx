import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";
import { ThemeProvider } from "@mui/system";
import theme from "@/theme";
import React from "react";
import Header from "@/app/Header";
import Footer from "@/app/Footer";
import { openGraphImage } from "@/constant";
import { Metrika } from "@/components/Metrika";

export const metadata: Metadata = {
  title: "Paritet - Надежные перевозки бетона",
  description:
    "Paritet - ваш надежный партнер в перевозках бетона. Мы специализируемся на быстрой и эффективной доставке бетонных смесей по всей области. Наш опытный персонал и современный автопарк обеспечивают безопасную и своевременную доставку, удовлетворяя потребности как мелких строительных компаний, так и крупных инфраструктурных проектов.",
  openGraph: {
    title: "Paritet",
    description: "Paritet - ваш надежный партнер в перевозках бетона",
    images: openGraphImage,
  },
  verification: {
    yandex: process.env.YANDEX_VEREFICATION,
    google: process.env.GOOGLE_VEREFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <link rel="icon" href="/src/app/favicon.ico" sizes="any" />
      <Metrika />
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
