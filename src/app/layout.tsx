import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin", "vietnamese"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "VENUSA - Hội Doanh Nhân Người Việt tại Mỹ",
  description: "The Vietnamese Entrepreneurs Network in the United States of America - Kết nối doanh nhân Việt Nam tại Hoa Kỳ",
  icons: {
    icon: "/images/logo.webp",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased text-slate-900">{children}</body>
    </html>
  );
}
