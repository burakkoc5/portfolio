import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/blocks/navbar-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Burak Koç | Portfolio",
  description: "Burak Koç'un kişisel portfolyo websitesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <main className="min-h-screen bg-black">
          <NavbarWrapper />
          <div className="pt-24">{children}</div>
        </main>
      </body>
    </html>
  );
}
