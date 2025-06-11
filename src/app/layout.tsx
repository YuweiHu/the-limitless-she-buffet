import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ClientLayout from "@/components/ClientLayout";
import localFont from "next/font/local";

const savate = localFont({
  src: "../../public/fonts/Savate-VariableFont_wght.ttf",
  display: "swap",
});

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
      <body className={savate.className}>
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <ClientLayout>{children}</ClientLayout>
        </main>
      </body>
    </html>
  );
}
