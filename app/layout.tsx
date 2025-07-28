import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Footer from "./components/Footer";
import CallButtonMobile from "./components/Widgets/CallButtonMobile";
const inter = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  other: {
    'google-site-verification': "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="" />
      <GoogleTagManager gtmId="GTM-PVTFL8K8" />
      <body className={`w-full max-w-[2100px] mx-auto  ${inter.className}`}>
        <Navbar/>
        <div className="bg-white ">
          {children}
        </div>
        <CallButtonMobile/>
        <Footer />
      </body>
    </html>
  );
}
