import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel blog",
  description: "This is a blog built with Next.js and Contentful.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} p-10`}
        style={{ backgroundColor: "#F8F8F8" }}
      >
        <div className="bg-white p-4 rounded-2xl shadow-xl">{children}</div>
      </body>
    </html>
  );
}
