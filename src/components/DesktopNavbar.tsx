import { Saira, Didact_Gothic } from "next/font/google"

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
    return (
        <nav style={saira.style} className="hidden md:flex w-full fixed z-10 md:px-32 2xl:px-48 md:py-4 2xl:py-8 items-center justify-between p-4 bg-black text-white border-b-amber-600 border-b-2">
            <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-bold">Chirag</h1>
            <div className="flex gap-4 md:gap-8 2xl:gap-12 text-lg md:text-xl 2xl:text-2xl font-semibold" style={didactGothic.style}>
                <a href="/about" className="hover:text-amber-600 transition-colors duration-300">About</a>
                <a href="/projects" className="hover:text-amber-600 transition-colors duration-300">Projects</a>
                <a href="/contact" className="hover:text-amber-600 transition-colors duration-300">Contact</a>
            </div>
        </nav>
    )
}