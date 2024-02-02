import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tushar's GitHub",
  description:
    "Tushar Soni is a Full stack web developer and founder of Code Soni, a programming learning platform.",
  keywords: ["coding", "tushar soni", "tushar verma", "ubox tech", "code soni"],
  openGraph: {
    type: "website",
    description: "Tushar Verma GitHub Account",
    images: [
      "https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=626&ext=jpg&ga=GA1.1.1930590658.1706618233&semt=ais",
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
