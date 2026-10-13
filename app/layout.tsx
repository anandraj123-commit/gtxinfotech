import { createMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site-url";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from '@/components/Footer';
import "./globals.css";
import Navbar from '../components/Navbar';
import RouteLoader from "@/components/RouteLoader";
import SocialSidebar from "@/components/SocialSidebar";
import HashScrollHandler from "@/components/HashScrollHandler";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...createMetadata({
    path: "/",
    title: "SAP Consulting, IT Services & Training | ZisanTech Solutions",
    description: "ZisanTech Solutions provides SAP consulting, IT services, ERP and software development, and practical SAP training for businesses and learners in India.",
  }),
  metadataBase: new URL(SITE_URL),
  applicationName: "ZisanTech Solutions",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "1254x1254" }],
    shortcut: "/favicon.png",
    apple: [{ url: "/favicon.png", sizes: "1254x1254", type: "image/png" }],
  },
  authors: [{ name: "ZisanTech Solutions", url: SITE_URL }],
  creator: "ZisanTech Solutions",
  publisher: "ZisanTech Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#343f48",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HashScrollHandler />
        <RouteLoader />
        <Navbar/>
        <SocialSidebar/>
        {children}
        <Footer/>
        {/* <WhatsAppButton/> */}
      </body>
    </html>
  );
}
