import type { Metadata } from "next";
import { Anton, Host_Grotesk, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  variable: "--font-host",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dinevo - Restaurant, Food & Cafe Framer Template",
  description:
    "A symphony of tradition and modern taste. Experience authentic dining, handcrafted seasonal delicacies, and an unforgettable culinary journey.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${hostGrotesk.variable} ${geistMono.variable} ${inter.variable}`}
    >
      <body className="bg-[#FEF6DF] text-black font-sans antialiased min-h-screen flex flex-col selection:bg-[#E94222] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
