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

const description = "Software Engineer, GPU Programmer, FullStack developer, and YouTuber based in Toronto.";
const title = "Nabil Mansour's Portfolio";
const author = "Nabil Mansour";

const MAIN_URL = process.env.MAIN_URL;

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | " + title,
  },
  description: description,
  alternates: {
    canonical: `${MAIN_URL}`
  },
  keywords: "Nabil Mansour, Software Developer, FullStack Developer, Portfolio, Toronto, GPU Programmer, Shaderman",
  openGraph: {
    title: title,
    description: description,
    url: `${MAIN_URL}`,
    type: "website",
    images: [
      {
        url: `${MAIN_URL}/tree.png`,
        alt: title,
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [`${MAIN_URL}/tree.png`],
  },
  authors: { name: author },
  creator: author,
  publisher: author,
  manifest: `${MAIN_URL}/manifest.json`,
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
        <link rel="shortcut icon" href={`${MAIN_URL}/favicon.ico`} />
        <link rel="apple-touch-icon" href={`${MAIN_URL}/tree.png`} />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=yes"
        />
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
