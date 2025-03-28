import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  );
}
