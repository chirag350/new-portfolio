"use client";

import { Saira, Didact_Gothic } from "next/font/google"
import { Icon } from "@iconify-icon/react"
import { useState } from "react";

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
    return (
        <nav className="bg-black min-h-16 w-full flex md:hidden z-20 px-4 py-2 items-center justify-between transition-colors duration-150" style={{
            borderBottom: isMenuOpen ? "transparent" : "2px solid #d97706",
        }}>
            <h1 className="text-3xl font-bold" style={saira.style}>Chirag</h1>
            <Icon icon="material-symbols:menu-rounded" className="text-3xl transition-all duration-300" onClick={handleMenuClick} style={{
                rotate: isMenuOpen ? "-90deg" : "0deg",
            }} />
            {/* MEOWWW */}

                <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center justify-center gap-4 py-4 border-b-amber-600 border-b-2 transition-all ease-in-out duration-250" style={{
                    opacity: isMenuOpen ? 1 : 0,
                }}>
                    <a href="/about" className="hover:text-amber-600 transition-colors duration-300 text-lg font-semibold" style={didactGothic.style}>About</a>
                    <a href="/projects" className="hover:text-amber-600 transition-colors duration-300 text-lg font-semibold" style={didactGothic.style}>Projects</a>
                    <a href="/contact" className="hover:text-amber-600 transition-colors duration-300 text-lg font-semibold" style={didactGothic.style}>Contact</a>
                </div>
            
        </nav>
    )
}