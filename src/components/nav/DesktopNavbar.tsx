"use client";

import { Saira, Didact_Gothic } from "next/font/google"
import { useNavbarStore } from "@/src/stores/useNavbarStore";

const saira = Saira({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-saira",
})

const didactGothic = Didact_Gothic({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-didact-gothic",
})

export default function DesktopNavbar() {
    const isOrange = useNavbarStore((state) => state.isOrange);
    return (
        <nav 
            className="hidden md:flex w-full fixed z-20 md:px-32 2xl:px-48 md:py-4 2xl:py-8 items-center justify-between p-4 text-white border-b transition-all duration-300"
            style={{
                background: isOrange ? "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 65%, rgba(217,119,6,0.075) 100%)" : "color-mix(in oklab, #000 85%, transparent)",
                borderBottomColor: isOrange ? "#D97706" : "transparent",
            }}
        >
            <h1 style={saira.style} className="text-2xl md:text-3xl 2xl:text-4xl font-bold">Chirag</h1>
            <div className="flex gap-4 md:gap-8 2xl:gap-12 text-lg md:text-xl 2xl:text-2xl font-semibold" style={didactGothic.style}>
                <a href="/about" className="hover:text-amber-600 transition-colors duration-300">About</a>
                <a href="#projects" className="hover:text-amber-600 transition-colors duration-300">Projects</a>
                <a href="/contact" className="hover:text-amber-600 transition-colors duration-300">Contact</a>
            </div>
        </nav>
    )
}