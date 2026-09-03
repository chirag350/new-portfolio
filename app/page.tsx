import DesktopNavbar from "@/src/components/DesktopNavbar";
import Intro from "@/src/components/Intro";
import StatsSkeleton from "@/src/components/skeletons/StatsSkeleton";
import Stats from "@/src/components/Stats";
import { Suspense } from "react";


export default async function Home() {
  return (
    <>
      <DesktopNavbar />
      <main className="relative flex flex-col items-center justify-center min-h-screen py-2 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.1)_0%,rgba(0,0,0,1)_70%)]"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 2xl:gap-24 items-center justify-center z-10 px-4 md:px-32 2xl:px-48">
          <Intro />
          <Suspense fallback={<StatsSkeleton />}>
            <Stats />
          </Suspense>
        </div>


      </main>
    </>
  );
}
