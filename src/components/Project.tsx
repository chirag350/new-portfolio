import { Saira, Didact_Gothic, Inconsolata } from "next/font/google"
import Icon from "./Icon";
import { type Project } from "@/src/types/Project";

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

export function Project({ project }: { project: Project }) {
    return (
        <div className="flex flex-col items-around justify-center gap-4 w-5/6 md:w-3/4 mt-4 md:mt-8 z-10 p-4 md:p-8 bg-taupe-950 rounded-md">
            <div className="flex items-center justify-start">
                <Icon icon={project.icon} className="mr-2 md:mr-4 text-3xl md:text-4xl 2xl:text-5xl" />
                <h3 className="text-xl md:text-2xl 2xl:text-3xl font-bold text-white text-left" style={saira.style}>
                    {project.name}
                </h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {project.toolIcons.map((icon, index) => (
                    <Icon key={index} icon={icon} className="text-lg md:text-2xl bg-taupe-900 p-1 rounded-sm border-taupe-600 border" />
                ))}
            </div>
            <p className="text-base md:text-lg 2xl:text-xl text-white md:flex hidden" style={didactGothic.style}>
                {project.description}
            </p>
            <p className="text-base md:text-lg 2xl:text-xl text-white md:hidden flex" style={didactGothic.style}>
                {project.shortDescription}
            </p>
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 self-end md:self-start md:w-fit bg-taupe-900 hover:bg-taupe-800 text-taupe-400 rounded-md text-md 2xl:text-lg font-semibold transition-colors duration-300 border-taupe-600 border"
                style={inconsolata.style}
            >
                View Project
            </a>
        </div>
    )
}