import IconBar from "./IconBar";
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

export default async function Intro() {
    return (
        <div className="flex flex-col items-start justify-center gap-2 2xl:gap-3 w-full">
            <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-bold text-white" style={saira.style}>
                Chirag
            </h1>

            <p className="text-lg md:text-xl 2xl:text-2xl text-white" style={didactGothic.style}>
                Full stack developer and CS student building and deploying things, just for the fun of it.
            </p>
            <p className="text-lg md:text-xl 2xl:text-2xl text-white" style={didactGothic.style}>
                P.S. I love to self-host
            </p>

            <div className="flex items-center justify-center md:justify-start w-full">
                <IconBar />
            </div>
        </div>
    )
}