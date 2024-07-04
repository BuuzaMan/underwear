import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
const noto = Noto_Sans({
  subsets: ["cyrillic"],
  display: 'swap',
  weight: ['300','400', '500', '600','700'],
  variable: '--font-noto',
});

export const metadata: Metadata = {
  title: "Say Yes",
  description: "Ladies underwear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${noto.variable} container w-[1440px] mx-auto`}>
        <Header  />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
