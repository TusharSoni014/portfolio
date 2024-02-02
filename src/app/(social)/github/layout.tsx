import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tushar's GitHub",
  description:
    "Tushar Soni is a Full stack web developer and founder of Code Soni, a programming learning platform.",
  keywords: [
    "coding",
    "tushar soni",
    "tushar verma",
    "ubox tech",
    "code soni",
    "github",
  ],
  openGraph: {
    type: "website",
    description: "Tushar Verma GitHub Account",
    images: [
      "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
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
