import { Saira, Didact_Gothic } from "next/font/google"
import PulsatingBar from "./PulsatingBar"

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

export default async function StatsSkeleton() {
    return (
        <div className="flex flex-col  min-w-[50%] max-w-full rounded-lg overflow-hidden shadow-lg m-4 md:m-12 bg-black/65 z-10">
            {/* VS Code stats from waka time, weekly */}
            <div className="flex flex-col items-start justify-center p-4 md:p-6">
                <p className="text-sm md:text-md 2xl:text-lg text-gray-500 mb-1" style={didactGothic.style}>
                    <PulsatingBar className="min-w-64" />
                </p>
                <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-white text-left items-center justify-center flex" style={saira.style}>
                    <PulsatingBar className="min-w-32" />
                </h1>

            </div>

            <div className="p-4 md:p-6">
                <p className="text-sm md:text-md 2xl:text-lg text-gray-500 mb-1" style={didactGothic.style}>
                    <PulsatingBar />
                </p>
                <h2 className="text-xl md:text-2xl 2xl:text-3xl font-bold text-white" style={saira.style}>
                    <PulsatingBar />
                </h2>
            </div>
        </div>
    )
}