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

export interface Project {
    icon: string;
    name: string;
    description: string;
    shortDescription: string;
    link: string;
    toolIcons: string[];
}

const projects: Project[] = [
    {
        icon: "devicon-plain:discordjs",
        name: "r/IGCSE Discord Bot",
        description: "Built to support the r/IGCSE student community, this bot serves over 100,000 users across 500+ guilds. It helps with daily administrative operations including moderation, study session coordination, and member reputation tracking and also includes features like real-time multiplayer MCQ quizzes powered by past exam papers for collaborative exam practice. Originally developed in Python using discord.py, the project was completely rewritten in TypeScript in 2024.",
        shortDescription: "Discord bot built for the r/IGCSE student community, serving over 100,000 users across 500+ guilds. Originally in discord.py, rewritten in TypeScript in 2024.",
        link: "https://github.com/r-IGCSE/r-igcse-bot",
        toolIcons: ["catppuccin:typescript", "catppuccin:bun", "selfhst:mongodb", "selfhst:redis", "catppuccin:docker"],
    },
    {
        icon: "arcticons:ask-ai",
        name: "Reputation Quality Predictor",
        description: "A machine learning pipeline built to classify and assess message quality within the r/IGCSE Discord community. It evaluates peer assistance to filter low-effort reputation farming and reward meaningful academic contributions. Fine-tuned using real-like community interactions, the model outputs confidence scores used by the server's reputation system to automate quality control.",
        shortDescription: "NLP classification model that evaluates message helpfulness and filters reputation abuse across the r/IGCSE Discord community.",
        link: "https://github.com/r-IGCSE/Reputation-Quality-Predictor",
        toolIcons: ["catppuccin:python", "devicon:pytorch", "devicon:huggingface", "devicon:scikitlearn"],
    },
    {
        icon: "lucide:coffee",
        name: "Specialty Coffee India Bot",
        description: "An automated web scraper built for the Specialty Coffee India Discord community. It periodically scrapes roaster websites using JSDOM to detect fresh bean drops, publishing new release alerts directly into a dedicated Discord forum channel. It pairs scheduled cron scraping with a search index backed by Drizzle ORM and Neon Postgres to make community coffee discovery instant.",
        shortDescription: "Automated scraper and Discord bot tracking fresh roaster drops and releases for the Specialty Coffee India community.",
        link: "https://github.com/your-username/your-repo-name",
        toolIcons: ["catppuccin:next", "catppuccin:typescript", "catppuccin:drizzle-orm", "logos:neon-icon", "catppuccin:vercel"],
    },
    {
        icon: "lucide:egg",
        name: "Eggactyl",
        description: "A universal multi-egg environment built for Pterodactyl panel that enabled game server hosts to deploy, configure, and manage diverse software runtimes seamlessly. It featured a dedicated admin panel allowing hosts to customize the egg's end-user appearance and packaged multi-language runtimes with automated startup scripts into an all-in-one container solution, peaking at 5,000+ daily container pulls before its acquisition in early 2023.",
        shortDescription: "Customizable Pterodactyl multi-egg with an admin branding panel, reaching 5,000+ daily Docker pulls before acquisition in early 2023.",
        link: "https://web.archive.org/web/20230705151505/https://www.eggactyl.cloud/",
        toolIcons: ["catppuccin:docker", "catppuccin:bash", "devicon:linux", "selfhst:pterodactyl"],
    },
    {
        icon: "lucide:layout-dashboard",
        name: "Dashboardsy",
        description: "A client-facing server management portal designed for freemium game hosting providers. It enabled users to create and manage cloud game servers via automated provisioning, featuring Discord OAuth authentication powered by NextAuth.js. To sustain free infrastructure costs, it integrated a crypto mining reward mechanism allowing users to utilize their idle hardware to earn server renewal coins. Archived in 2023.",
        shortDescription: "Client management portal for freemium server hosts featuring NextAuth Discord login and crypto mining for server credits. Archived in 2023.",
        link: "https://web.archive.org/web/20220817135224/https://github.com/Wrible-Development/Dashboardsy",
        toolIcons: ["catppuccin:next", "catppuccin:javascript", "selfhst:pterodactyl"],
    },
]

export async function Project({ project }: { project: Project }) {
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

export default async function Projects() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 2xl:gap-6 w-full mt-4 md:mt-8 z-10 md:p-8">
            <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-white" style={saira.style}>
                Projects
            </h2>
            {projects.map((project, index) => (
                <Project key={index} project={project} />
            ))}
        </div>
    )
}