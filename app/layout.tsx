import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Shield Nirun",
    template: "%s | Shield Nirun",
  },
  description: "Shield Nirun & Shield Service company website",

  icons: {
    icon: "/favicon.ico",          // browser tab
    shortcut: "/favicon.ico",
    apple: "/icon.png",            // iOS
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn">
      <body className="pt-[76px]" >
        <SpeedInsights/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}