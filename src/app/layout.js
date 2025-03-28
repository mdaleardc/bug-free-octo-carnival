/*import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Myanmar Books Hub",
  description: "Myanmar Books Hub - A comprehensive digital library featuring Myanmar New Curriculum Textbooks and Answer-guides for grades 1 to 12, along with Islamic books and a wide range of educational and general interest books for readers of all ages."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-9LYER4GE6V"></Script>
    <Script>
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-9LYER4GE6V');
    </Script>

    <meta name="google-site-verification" content="-vNXOHJzAJLadGqgV8LjMX5BmcBOz63CISuLHuEp2x4" />
    </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  );
}
*/


import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Myanmar Books Hub",
  description: "Myanmar Books Hub - A comprehensive digital library featuring Myanmar New Curriculum Textbooks and Answer-guides for grades 1 to 12, along with Islamic books and a wide range of educational and general interest books for readers of all ages."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9LYER4GE6V"
          strategy="afterInteractive"
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'G-9LYER4GE6V');
            `,
          }}
        />

        {/* Google Site Verification */}
        <meta name="google-site-verification" content="-vNXOHJzAJLadGqgV8LjMX5BmcBOz63CISuLHuEp2x4" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}