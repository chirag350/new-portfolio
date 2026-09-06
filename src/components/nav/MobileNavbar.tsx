"use client";

import { Saira, Didact_Gothic } from "next/font/google"
import { Icon } from "@iconify-icon/react"
import { useState } from "react";
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

export default function MobileNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const isOrange = useNavbarStore((state) => state.isOrange);
    return (
        <nav className="bg-black fixed min-h-16 w-full flex md:hidden z-20 px-4 py-2 items-center justify-between transition-colors duration-150" style={{
            borderBottom: isMenuOpen ? "transparent" : isOrange ? "2px solid #D97706" : "2px solid transparent",
            background: isMenuOpen ? "color-mix(in oklab, #000 85%, transparent)" : isOrange ? "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 65%, rgba(217,119,6,0.075) 100%)" : "color-mix(in oklab, #000 85%, transparent)",
        }}>
            <h1 className="text-3xl font-bold" style={saira.style}>Chirag</h1>
            <Icon icon="material-symbols:menu-rounded" className="text-3xl transition-all duration-300" onClick={handleMenuClick} style={{
                rotate: isMenuOpen ? "-90deg" : "0deg",
            }} />
            {/* MEOWWW */}

            <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center justify-center gap-4 py-4 border-b-amber-600 border-b-2 transition-all ease-in-out duration-250" style={{
                opacity: isMenuOpen ? 0.85 : 0,
            }}>
                <a href="/about" className="hover:text-amber-600 transition-colors duration-300 text-lg font-semibold" style={didactGothic.style}>About</a>
                <a href="/projects" className="hover:text-amber-600 transition-colors duration-300 text-lg font-semibold" style={didactGothic.style}>Projects</a>
                <a href="/contact" className="hover:text-amber-600 transition-colors duration-300 text-lg font-semibold" style={didactGothic.style}>Contact</a>
            </div>

        </nav>
    )
}