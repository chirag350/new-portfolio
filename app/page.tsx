import Image from "next/image";
import DesktopNavbar from "@/src/components/DesktopNavbar";
import { Saira, Didact_Gothic } from "next/font/google"
import IconBar from "@/src/components/IconBar";

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

export default function Home() {
  return (
    <>
      <DesktopNavbar />
      <main className="relative flex flex-col items-center justify-center min-h-screen py-2 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.1)_0%,rgba(0,0,0,1)_70%)]"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center justify-center z-10 px-4 md:px-32 2xl:px-48">

          <div className="flex flex-col items-start justify-center gap-2 md:gap-4 2xl:gap-6">
            <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-bold text-white" style={saira.style}>
              Chirag
            </h1>
            
            <p className="text-lg md:text-xl 2xl:text-2xl text-white" style={didactGothic.style}>
              Full stack developer and CS student building and deploying things.
            </p>

            <IconBar />
          </div>

        </div>
      </main>
    </>
  );
}
