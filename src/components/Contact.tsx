import { Saira, Didact_Gothic, Inconsolata } from "next/font/google"
import Icon from "./Icon";

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

const inconsolata = Inconsolata({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-inconsolata",
})

export default async function Contact() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 2xl:gap-6 w-full mt-16 d:mt-8 z-10 md:p-8">
            <div className="flex flex-col items-center justify-center gap-2">
                <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-white" id="contact" style={saira.style}>Got a project in mind?</h2>
                <p className="text-base md:text-lg 2xl:text-xl text-white text-center max-w-3/4" style={didactGothic.style}>
                    or perhaps you just want to say hi! Feel free to reach out and let's discuss how we can collaborate or connect.
                </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-fit">
                <a
                    href="mailto:me@chirag.dev"
                    className="min-w-full md:min-w-auto px-4 py-2 bg-amber-600/90 hover:bg-amber-500/90 text-white rounded-md text-md 2xl:text-lg font-semibold transition-colors duration-300 border-taupe-600 border flex justify-center items-center"
                    style={inconsolata.style}
                >
                    <Icon icon="carbon:email" className="inline-block self-center mr-2 text-2xl md:text-3xl" />
                    Email Me
                </a>
                <a
                    href="https://discord.com/users/611165590744203285"
                    className="px-4 py-2 bg-[#5865F1]/85 hover:bg-[#5865F1] text-white rounded-md text-md 2xl:text-lg font-semibold transition-colors duration-300 border-taupe-600 border flex justify-center items-center"
                    style={inconsolata.style}
                >
                    <Icon icon="akar-icons:discord-fill" className="inline-block self-center mr-2 text-2xl md:text-3xl" />
                    Connect on Discord
                </a>
            </div>
        </div>
    )
}