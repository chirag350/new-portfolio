import { Saira, Inconsolata } from "next/font/google"
import Icon from "./Icon"
import { cacheLife } from 'next/cache'

const saira = Saira({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-saira",
})

const inconsolata = Inconsolata({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-inconsolata",
})

async function getCurrentYear() {
  'use cache'
  cacheLife('max')
  return new Date().getFullYear()
}

export default async function Footer() {
    const currentYear = await getCurrentYear();
    return (
        <footer className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 2xl:gap-6 min-w-3/4 mt-12 md:mt-8 z-10 mb-8">
            <div className="hidden md:flex flex-col items-center md:items-start justify-center text-left w-fit">
                <p className="text-amber-600 text-lg md:text-xl" style={inconsolata.style}>Made with ❤️ and ☕</p>
                <p className="md:text-right md:self-end" style={saira.style}>
                   by Chirag Lamba
                </p>
            </div>
            <div className="hidden md:flex flex-col items-center justify-end text-center">
                <p className="text-taupe-500 text-lg md:text-xl" style={inconsolata.style}>
                    &copy; {currentYear} Chirag Lamba
                </p>
            </div>
            <div className="flex flex-col items-center md:items-end justify-center">
                <p className="text-amber-600 text-lg md:text-xl flex justify-center items-center" style={inconsolata.style}>
                    Built with <Icon icon="lineicons:nextjs" className="ml-2 text-white text-xl md:text-2xl 2xl:text-3xl" />
                </p>
                <p className="md:text-right md:self-end" style={saira.style}>
                    Icons by Arcticons / CC BY-SA 4.0
                </p>
            </div>
            <div className="md:hidden flex flex-col items-center justify-end text-center">
                <p className="text-taupe-500 text-lg md:text-xl" style={inconsolata.style}>
                    &copy; {currentYear} Chirag Lamba
                </p>
            </div>
        </footer>
    )
}