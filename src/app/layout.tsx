import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntroOverlay from "@/components/IntroOverlay";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HyperFit | Function Training Gym in Mitcham",
    template: "%s | HyperFit",
  },
  description:
    "HyperFit is Mitcham's premier function training gym with open functional training space, full gym facilities, and 3 private training & recovery rooms. Book a class today.",
  keywords: [
    "Function Training Gym Mitcham",
    "Functional Fitness Mitcham",
    "Personal Training Mitcham",
    "Gym Mitcham",
    "Group Fitness Classes Mitcham",
    "Private Training Rooms",
    "Recovery Sessions",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "HyperFit",
    title: "HyperFit | Function Training Gym in Mitcham",
    description:
      "Mitcham's premier function training gym. Open functional space, full gym, 3 private rooms. Book your class today.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <IntroOverlay />
        <Header />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
