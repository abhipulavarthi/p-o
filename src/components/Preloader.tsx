"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";

export default function Preloader() {
    const pathname = usePathname();
    const router = useRouter();
    const overlayRef = useRef<HTMLDivElement>(null);
    const [isPointerEventsNone, setIsPointerEventsNone] = useState(false);
    const [bgClass, setBgClass] = useState(pathname === "/" ? "bg-black" : "bg-white");

    // Run when the page loads or route changes (reveals the new page)
    useEffect(() => {
        setBgClass(pathname === "/" ? "bg-black" : "bg-white");
        if (overlayRef.current) {
            gsap.killTweensOf(overlayRef.current);
            gsap.fromTo(overlayRef.current,
                { yPercent: 0 },
                {
                    yPercent: -100,
                    duration: 0.8,
                    ease: "power4.inOut",
                    delay: 0.1,
                    onStart: () => setIsPointerEventsNone(false),
                    onComplete: () => setIsPointerEventsNone(true)
                }
            );
        }
    }, [pathname]);

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

            if (overlayRef.current) {
                gsap.killTweensOf(overlayRef.current);
                // 1. Snap overlay to the bottom instantly, then animate up to cover the screen
                gsap.fromTo(overlayRef.current,
                    { yPercent: 100 },
                    {
                        yPercent: 0,
                        duration: 0.8,
                        ease: "power4.inOut",
                        onComplete: () => {
                            router.push(href);
                        }
                    }
                );
            }
        };

        // Use capture phase so we intercept before React/Next.js does
        document.addEventListener("click", handleClick, { capture: true });
        return () => document.removeEventListener("click", handleClick, { capture: true });
    }, [pathname, router]);

    return (
        <div
            ref={overlayRef}
            className={`fixed inset-0 z-[9999] ${bgClass} ${isPointerEventsNone ? "pointer-events-none" : "pointer-events-auto"}`}
            style={{ transform: "translateY(0%)" }}
        />
    );
}
