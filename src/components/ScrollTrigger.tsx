"use client";

import { useOnInView } from "react-intersection-observer";
import { useNavbarStore } from "@/src/stores/useNavbarStore";


export default function ScrollTrigger() {
    const setIsOrange = useNavbarStore((state) => state.setIsOrange);

    const inViewRef = useOnInView(
        (inView, entry) => {
            // Orange while Projects text is visible OR while above it (Hero section).
            // Turns black only when scrolled down past the Projects text (above the navbar).
            const shouldBeOrange = inView || entry.boundingClientRect.top > 64;
            setIsOrange(shouldBeOrange);
        },
        {
            // 64px offset to match fixed navbar height
            rootMargin: "-64px 0px 0px 0px",
        }
    );
    
    return (
        <div ref={inViewRef} className="w-full h-0 pointer-events-none"></div>
    );
}