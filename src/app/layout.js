import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google'

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
  description: "Myanmar Books Hub – A comprehensive digital library offering Myanmar New Curriculum Textbooks, Answer Guides (Learners' Choice | အဖြေစုံ | အထူးထုတ် | ရွှေလက်ဆောင် | ကံ့ကော်ရိပ်), Past Exam Papers (PDF) for Grades 1–12, plus a diverse collection of Islamic books, educational resources, and general-interest books for all ages."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <meta name="google-site-verification" content="-vNXOHJzAJLadGqgV8LjMX5BmcBOz63CISuLHuEp2x4" />
    <link rel="canonical" href="https://myanmarbookshub.netlify.app" />
        
    </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Navbar />
        {children}
      <Footer />
      </body>
      <GoogleAnalytics gaId="G-B4F3FMW431" />
    </html>
  );
}
