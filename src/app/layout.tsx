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
  title: "CJREX | Full-stack Developer",
  description: "Portfolio of Chris John Rex Pajal, a Full-stack Developer with expertise in web development, cybersecurity, and database security.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      // You can add additional sizes if you have them
      // { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      // { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
