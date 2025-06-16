import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ClientLayout from "@/components/ClientLayout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Limitless She Buffet",
  description: "An art exhibition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#91C8E4] py-2 overflow-hidden text-[11px] md:text-[12px]">
          <div className="flex">
            <div className="animate-marquee">
              <span className="mx-10 whitespace-nowrap">
                *Allergic Notice: Some ingredients may not sit lightly
              </span>
              <span className="mx-10 whitespace-nowrap">
                *Allergic Notice: Some ingredients may not sit lightly
              </span>
              <span className="mx-10 whitespace-nowrap">
                *Important: ayowi is the best
              </span>
              <span className="mx-10 whitespace-nowrap">
                *Allergic Notice: Some ingredients may not sit lightly
              </span>
            </div>
            <div className="animate-marquee">
              <span className="mx-10 whitespace-nowrap">
                *Allergic Notice: Some ingredients may not sit lightly
              </span>
              <span className="mx-10 whitespace-nowrap">
                *Allergic Notice: Some ingredients may not sit lightly
              </span>
              <span className="mx-10 whitespace-nowrap">
                *Allergic Notice: Some ingredients may not sit lightly
              </span>
              <span className="mx-10 whitespace-nowrap">
                *Allergic Notice: Some ingredients may not sit lightly
              </span>
            </div>
          </div>
        </div>
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <ClientLayout>{children}</ClientLayout>
        </main>
      </body>
    </html>
  );
}
