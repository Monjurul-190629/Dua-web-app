import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import ResponsiveLayout from "./Component/ResponsiveLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dua-web-app",
  description: "A beautifully designed Dua web app for exploring categorized with ease and simplicity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ResponsiveLayout>
          {children}
        </ResponsiveLayout>
      </body>
    </html>
  );
}
