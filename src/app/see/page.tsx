"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SeePage() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            gsap.fromTo(containerRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.8, ease: "power2.out" }
            );
        }
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen w-screen bg-black overflow-hidden flex items-center justify-center">
            {/* The full screen gif */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/p-o/images/sea.gif"
                    alt="Sea animation"
                    fill
                    className="object-cover"
                    unoptimized
                    priority
                />
            </div>

            <Link 
                href="/" 
                className="absolute top-6 left-6 z-50 inline-flex items-center gap-2 text-white/50 transition-colors hover:text-white group"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1">
                    <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
                </svg>
                <span className="text-sm font-bold uppercase tracking-widest">Back Home</span>
            </Link>
        </section>
    );
}
