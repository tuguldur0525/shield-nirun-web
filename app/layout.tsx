import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shield Nirun",
  description: "Shield Nirun & Shield Service company website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn">
      <body className="pt-[76px]" >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}