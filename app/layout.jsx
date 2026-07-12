import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { site } from "@/lib/content";
import "./globals.css";

export const metadata = {
    metadataBase: new URL(site.url),
    title: site.title,
    description: site.description,
    openGraph: {
        title: site.title,
        description: site.description,
        url: site.url,
        siteName: site.name,
        type: "website",
    },
    twitter: {
        card: "summary",
        title: site.title,
        description: site.description,
    },
};

export const viewport = {
    themeColor: "#09090b",
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
        >
            <body className="bg-ink-950 font-sans text-zinc-300 antialiased">
                <noscript>
                    <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
                </noscript>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
