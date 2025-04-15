import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LeftSideBar from "./Component/LeftSideBar";
import RightSideBar from "./Component/RightSideBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dua-web-app",
  description: "A beautifully designed Dua web app for exploring categorized with ease and simplicity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen w-full">
          {/* Left Sidebar */}
          <div className="w-[100px] hidden md:block">
            <LeftSideBar />
          </div>

          {/* Main Content */}
          <main className="flex-1 px-4 py-6">
            {children}
          </main>

          {/* Right Sidebar */}
          <div className="w-[200px] hidden lg:block">
            <RightSideBar />
          </div>
        </div>
      </body>
    </html>

  );
}
