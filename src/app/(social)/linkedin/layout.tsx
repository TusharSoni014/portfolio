import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LinkedIn",
  description:
    "Tushar Soni is a Full stack web developer and founder of Code Soni, a programming learning platform.",
  keywords: [
    "coding",
    "tushar soni",
    "tushar verma",
    "ubox tech",
    "code soni",
    "linkedin",
    "tushar verma linkedin",
    "tushar soni linkedin",
    "code soni linkedin",
  ],
  openGraph: {
    type: "website",
    description: "Tushar Verma LinkedIn Account",
    images: [
      "https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
