import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntroOverlay from "@/components/IntroOverlay";
import PromoPopup from "@/components/PromoPopup";
import ChatWidget from "@/components/ChatWidget";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
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
    title: "HyperFit | Function Training - 24/7 Gym - Recovery",
    description:
      "Mitcham's premier function training gym. Open functional space, full gym, 3 private rooms. Book your class today.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HyperFit - Function Training - 24/7 Gym - Recovery",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1619169812932041');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1619169812932041&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <SmoothScroll />
<IntroOverlay />
        <PromoPopup />
        <Header />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
