import "@mantine/core/styles.css";
import type { Metadata } from "next";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Header } from "./ui/layout/Header";
import { theme } from "@/theme";
import { Footer } from "./ui/layout/Footer";
import classes from "./home.module.css";
import localFont from 'next/font/local';
import cx from 'clsx';

const CaviarDreams = localFont({ src: '../public/CaviarDreams.ttf' })

export const metadata: Metadata = {
  title: {
    default: "Nabil Mansour's Portfolio",
    template: "%s | Nabil Mansour's Portfolio",
  },
  description: "Software Engineer, GPU Programmer, Web developer, and YouTuber based in Toronto.",
  alternates: {
    canonical: "https://nabilmansour.com/"
  },
  openGraph: {
    title: "Nabil Mansour's Portfolio",
    description: "Software Engineer, GPU Programmer, Web developer, and YouTuber based in Toronto.",
    url: "https://nabilmansour.com/",
    type: "website",
    images: [
      {
        url: "https://nabilmansour.com/tree.png",
        alt: "Nabil Mansour's Portfolio",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=yes"
        />
        <meta name="keywords"
          content="Nabil Mansour, Software Developer, Frontend Developer, Portfolio, Toronto, GPU Programmer" />
        <meta name="author" content="Nabil Mansour" />
        <meta name="google-site-verification" content="xo1VazvNYArvSzplJEq1l1QRWF_Xc30IAmCDBRKY8TA" />
      </head>
      <body className={cx(classes.body, CaviarDreams.className)}>
        <MantineProvider defaultColorScheme="dark" theme={theme}>
          <Header />
          <div className={classes.app}>
            {children}
          </div>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
