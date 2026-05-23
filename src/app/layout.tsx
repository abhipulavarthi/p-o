import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Background from "@/components/Background";
import Preloader from "@/components/Preloader";

const inter = localFont({
    src: [
        {
            path: "../../public/font/Inter-VariableFont_opsz,wght.ttf",
            weight: "100 900",
            style: "normal",
        },
        {
            path: "../../public/font/Inter-Italic-VariableFont_opsz,wght.ttf",
            weight: "100 900",
            style: "italic",
        },
    ],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Abhi Pulavarthi",
    description: "Personal portfolio of Abhi Pulavarthi, a Designer & Frontend Engineer based in India.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable}>
            <body className="relative min-h-screen antialiased selection:bg-white/20">
                <Preloader />
                <Background />


                <main className="relative z-10 min-h-screen w-full">
                    {children}
                </main>
            </body>
        </html>
    );
}
