export default async function PulsatingBar({ className }: { className?: string }) {
    return (
        <div className={`w-full h-4 bg-gray-300 rounded-full overflow-hidden relative my-1 ${className}`}>
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-gray-300 via-gray-400 to-gray-300 animate-pulse"></div>
        </div>
    )
}