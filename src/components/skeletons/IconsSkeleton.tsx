import PulsatingBar from "./PulsatingBar";

export default async function IconsSkeleton() {
    return (
            <ul className="grid grid-rows-2 grid-cols-6 gap-4 md:gap-6 text-4xl md:text-5xl 2xl:text-6xl mt-6">
                <li><PulsatingBar className="min-w-8 min-h-8 md:min-w-12 md:min-h-12 rounded-sm" /></li>
                <li><PulsatingBar className="min-w-8 min-h-8 md:min-w-12 md:min-h-12 rounded-sm" /></li>
                <li><PulsatingBar className="min-w-8 min-h-8 md:min-w-12 md:min-h-12 rounded-sm" /></li>
                <li><PulsatingBar className="min-w-8 min-h-8 md:min-w-12 md:min-h-12 rounded-sm" /></li>
                <li><PulsatingBar className="min-w-8 min-h-8 md:min-w-12 md:min-h-12 rounded-sm" /></li>
                <li><PulsatingBar className="min-w-8 min-h-8 md:min-w-12 md:min-h-12 rounded-sm" /></li>
                <li><PulsatingBar className="min-w-8 min-h-8 md:min-w-12 md:min-h-12 rounded-sm" /></li>
                <li><PulsatingBar className="min-w-8 min-h-8 md:min-w-12 md:min-h-12 rounded-sm" /></li>
                <li><PulsatingBar className="min-w-8 min-h-8 md:min-w-12 md:min-h-12 rounded-sm" /></li>
                <li><PulsatingBar className="min-w-8 min-h-8 md:min-w-12 md:min-h-12 rounded-sm" /></li>
                <li><PulsatingBar className="min-w-8 min-h-8 md:min-w-12 md:min-h-12 rounded-sm" /></li>
                <li><PulsatingBar className="min-w-8 min-h-8 md:min-w-12 md:min-h-12 rounded-sm" /></li>
            </ul>
    )
}