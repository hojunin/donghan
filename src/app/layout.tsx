import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Layout from "@/components/global-layout";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "김동한 개인 웹사이트",
  description: "김동한 개인 웹사이트입니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
