import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const cairo = Cairo({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {
  title: "Marvelous Designer Course | Join the Waitlist",
  description: "Master digital fashion with Marvelous Designer. Launching after Eid.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} bg-black text-white antialiased`}>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
