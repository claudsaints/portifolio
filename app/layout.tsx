import type { Metadata } from "next";
import localFont from "next/font/local";
import SocialMedia from "@/app/components/SocialMedia";
import "./globals.css";
import favicon from "@/app/favicon.ico";
import Navigation from "@/app/components/Navigation";
import {Orbitron} from "next/font/google";


const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const tysla = localFont({
  src: "./fonts/Tysla.otf",
  variable: "--font-tysla",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ClaudSaints Portfolio",
  description: "My professional resume",
  icons: [{ rel: "icon", url: favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${tysla.variable} ${orbitron.variable} antialiased`}>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        
      >
        <Navigation />
        {children}
        <SocialMedia />
      </body>
    </html>
  );
}
