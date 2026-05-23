"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Preloader() {
    const pathname = usePathname();
    const router = useRouter();
    const controls = useAnimation();
    const [isPointerEventsNone, setIsPointerEventsNone] = useState(false);
    const [bgClass, setBgClass] = useState(pathname === "/" ? "bg-black" : "bg-white");

    // Run when the page loads or route changes (reveals the new page)
    useEffect(() => {
        setBgClass(pathname === "/" ? "bg-black" : "bg-white");
        const reveal = async () => {
            setIsPointerEventsNone(false);
            // Assumes overlay is currently covering the screen (y: 0)
            await controls.start({ 
                y: "-100%", 
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 } 
            });
            setIsPointerEventsNone(true);
        };
        reveal();
    }, [pathname, controls]);

    // Intercept link clicks to cover the old page before navigating
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest("a");
            if (!target) return;

            const href = target.getAttribute("href");
            const targetAttr = target.getAttribute("target");
            
            // Only intercept internal links
            if (!href || href.startsWith("http") || href.startsWith("mailto") || href === pathname || targetAttr === "_blank") return;

            // Stop Next.js from handling the routing immediately
            e.preventDefault();
            e.stopPropagation();
            
            setIsPointerEventsNone(false); // block clicks during transition

            // Set background color based on target route
            const isTargetHome = href === "/";
            setBgClass(isTargetHome ? "bg-black" : "bg-white");

            // 1. Snap overlay to the bottom instantly
            controls.set({ y: "100%" });
            
            // 2. Animate up to cover the screen
            controls.start({ 
                y: "0%", 
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
            }).then(() => {
                // 3. Navigate to the new page once fully covered
                router.push(href);
            });
        };

        // Use capture phase so we intercept before React/Next.js does
        document.addEventListener("click", handleClick, { capture: true });
        return () => document.removeEventListener("click", handleClick, { capture: true });
    }, [pathname, router, controls]);

    return (
        <motion.div
            className={`fixed inset-0 z-[9999] ${bgClass} ${isPointerEventsNone ? "pointer-events-none" : "pointer-events-auto"}`}
            initial={{ y: 0 }}
            animate={controls}
        />
    );
}
