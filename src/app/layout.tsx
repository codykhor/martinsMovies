import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Martin's Movies",
  description: "Your favorite movie collection app",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} font-sans antialiased bg-gray-50`}
      >
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
