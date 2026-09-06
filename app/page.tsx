import DesktopNavbar from "@/src/components/nav/DesktopNavbar";
import Intro from "@/src/components/Intro";
import MobileNavbar from "@/src/components/nav/MobileNavbar";
import StatsSkeleton from "@/src/components/skeletons/StatsSkeleton";
import Stats from "@/src/components/Stats";
import { Suspense } from "react";
import Projects from "@/src/components/Projects";

export default async function Home() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
      <main className="relative flex flex-col items-center justify-center min-h-screen py-2 bg-black">
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_55%_at_top,rgba(217,119,6,0.1)_0%,rgba(217,119,6,0.05)_20%,rgba(0,0,0,1)_100%)]"></div>

        <div className="h-screen grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-12 2xl:gap-16 items-center justify-center z-10 w-full px-4 md:px-32 2xl:px-48 mt-32 md:mt-0">
          <Intro />
          <Suspense fallback={<StatsSkeleton />}>
            <Stats />
          </Suspense>
        </div>

        <Projects />
      </main>
    </>
  );
}
