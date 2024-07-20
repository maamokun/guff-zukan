"use client";
import { Header, Footer, ToastProvider, useToast } from "@neodyland/ui";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import CookieConsent from "react-cookie-consent";

import { FaDiscord, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiMisskey } from "react-icons/si";

export default function RootLayout({
    children,
}: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <>
            <div className="mx-auto min-h-screen max-w-7xl px-4 py-24">
                <ToastProvider>
                    {children}
                </ToastProvider>
            </div>
        </>
    );
}
