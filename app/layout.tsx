import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chirag Lamba | Full Stack Developer",
  description: "Yet another CS student building and deploying things",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased scroll-smooth scroll-pt-16 md:scroll-pt-32 2xl:scroll-pt-40`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
