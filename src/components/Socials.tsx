import Icon from "./Icon";

export default async function Socials() {
    return (
        <ul className="grid grid-rows-1 grid-cols-3 gap-4 text-4xl 2xl:text-5xl z-10">
            <li>
                <a href="https://github.com/chirag350" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center text-white hover:text-amber-600"
                >
                    <Icon icon="arcticons:github" className="transition-colors duration-300" />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/chirag-lamba-6825b6429/" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center text-white hover:text-amber-600"
                >
                    <Icon icon="arcticons:linkedin" className="transition-colors duration-300" />
                </a>
            </li>
            <li>
                <a href="https://instagram.com/chiraglamba5" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center text-white hover:text-amber-600"
                >
                    <Icon icon="arcticons:instagram" className="transition-colors duration-300" />
                </a>
            </li>
        </ul>
    )
}