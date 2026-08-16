import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nkemjika Anyaehie — Software & AI Engineer",
  description:
    "Computer Science and AI engineer building production-grade mobile and web systems with Flutter, Firebase, AWS and Next.js. Founder and Lead Product Engineer of Good2go.",
  openGraph: {
    title: "Nkemjika Anyaehie — Software & AI Engineer",
    description:
      "Building consumer focused solutions with AI and code. Mobile, web and AI projects from a Computer Science and AI engineer.",
    siteName: "Nkemjika Anyaehie",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nkemjika Anyaehie — Software & AI Engineer",
    description:
      "Building consumer focused solutions with AI and code. Mobile, web and AI projects from a Computer Science and AI engineer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>        
        {/* Main content sits on top */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}