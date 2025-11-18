import type { Metadata } from "next";
import React from "react";
import "../styles/globals.scss";
import { Providers } from "@/store/Providers";
import AppShell from "@/components/layout/AppShell";

export const metadata: Metadata = {
  title: {
    default: "SMB-Suite",
    template: "%s | SMB-Suite",
  },
  description: "Die All-in-One Business Management Suite für kleine und mittlere Unternehmen",
  keywords: ["Business Management", "SMB", "Projektmanagement", "Rechnungen", "Kunden"],
  authors: [{ name: "SMB-Suite Team" }],
  creator: "SMB-Suite",
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: "SMB-Suite",
    description: "Die All-in-One Business Management Suite für kleine und mittlere Unternehmen",
    siteName: "SMB-Suite",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
