import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import NavTopBar from "@/components/navigation/NavTopBar";

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
            <body className={`${quicksand.variable} font-sans antialiased bg-gray-50`}>
                <div className="flex min-h-screen">
                    <NavTopBar />
                    <main className="flex-1 transition-all duration-300 ease-in-out pt-16">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
