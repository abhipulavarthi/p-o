"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { SiLinkedin, SiCredly, SiInstagram, SiGithub } from "react-icons/si";
import gsap from "gsap";

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        
        const gridItems = containerRef.current.querySelectorAll(".grid > div, .grid > a");
        
        gsap.fromTo(gridItems, 
            { opacity: 0, y: 40 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.8, 
                stagger: 0.05, 
                ease: "power3.out",
                delay: 0.2
            }
        );
    }, []);

    return (
        <section ref={containerRef} className="h-screen w-screen bg-[#050505] p-4 font-sans text-white md:p-6 overflow-hidden">
            <div className="mx-auto h-full w-full max-w-[1800px]">
                <div className="grid h-full w-full grid-cols-1 gap-3 md:grid-cols-5 md:grid-rows-[auto_1fr_1fr] md:gap-4">
                    {/* --- ROW 1 --- */}

                    {/* Header Logo Area - Spans 2 cols */}
                    <div className="group relative flex items-center justify-between overflow-hidden rounded-3xl bg-[#111] px-6 py-6 md:col-span-2">
                        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                            Abhinav<span className="text-[#555]">.Pulavarthi</span>
                        </h1>
                        <div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-white animate-signal"></div>
                    </div>

                    {/* Nav Links - Spans 1 col */}
                    <div className="grid grid-cols-3 gap-2 md:col-span-1 rounded-3xl bg-[#111] p-2">
                        <Link href="/work" className="flex items-center justify-center rounded-2xl bg-[#1a1a1a] transition-colors hover:bg-[#222]">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 hover:text-white">Work</span>
                        </Link>
                        <Link href="/about" className="group flex items-center justify-center rounded-2xl bg-[#1a1a1a] transition-colors hover:bg-[#222]">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 transition-colors group-hover:text-white">About</span>
                        </Link>
                        <Link href="/experience" className="group flex items-center justify-center rounded-2xl bg-[#1a1a1a] transition-colors hover:bg-[#222]">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 transition-colors group-hover:text-white">Experience</span>
                        </Link>
                    </div>

                    {/* Off-White Block - Spans 1 col, 2 rows */}
                    <Link href="/contact" className="group flex flex-col justify-between rounded-3xl bg-[#f5f5f5] p-6 text-black md:col-span-1 md:row-span-2 transition-all hover:scale-[1.02] active:scale-[0.98]">
                        <div className="flex justify-end">
                            <span className="text-6xl text-[#FF4D00] group-hover:rotate-12 transition-transform duration-300">*</span>
                        </div>
                        <div className="flex flex-col mt-auto -ml-2 md:-ml-3">
                            <span className="text-6xl font-bold uppercase tracking-tighter leading-none md:text-7xl lg:text-8xl">Say</span>
                            <span className="text-6xl font-bold uppercase tracking-tighter leading-none md:text-7xl lg:text-8xl">Hello</span>
                        </div>
                    </Link>

                    {/* Resume Link - Spans 1 col */}
                    <Link
                        href="/see"
                        className="group flex items-center justify-center rounded-3xl bg-[#111] py-6 transition-colors hover:bg-[#1a1a1a] active:bg-[#1a1a1a] md:col-span-1 text-center"
                    >
                        <span className="text-sm font-medium uppercase tracking-widest text-white/70 transition-colors group-hover:text-white group-active:text-white">See</span>
                    </Link>


                    {/* --- ROW 2 --- */}

                    {/* Join List - Spans 2 cols */}
                    <div className="flex flex-col justify-end rounded-3xl bg-[#111] p-8 md:col-span-2">
                        <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-7xl lg:text-8xl">
                            Love meeting new people.
                        </h2>
                    </div>

                    {/* Pattern Block - Spans 1 col */}
                    <div className="relative overflow-hidden rounded-3xl bg-[#111] md:col-span-1 min-h-[220px]">
                        <Image
                            src="/images/fish.gif"
                            alt="Fish animation"
                            fill
                            className="object-cover scale-[1.8]"
                            unoptimized
                        />
                    </div>

                    {/* Empty/Placeholder Block - Spans 1 col (Under Projects) */}
                    <div className="hidden rounded-3xl bg-[#111] md:col-span-1 md:block relative overflow-hidden">
                        <Image
                            src="/images/abhi.jpg"
                            alt="Abhi Pulavarthi"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>


                    {/* --- ROW 3 --- */}

                    {/* Social Icons Grid - Spans 2 cols */}
                    <div className="grid grid-cols-2 grid-rows-2 gap-3 md:col-span-2">
                        <a href="https://www.linkedin.com/in/abhipulavarthi" target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center rounded-3xl bg-[#111] p-4 transition-colors hover:bg-[#1a1a1a] overflow-hidden">
                            <span className="absolute bottom-6 left-6 text-2xl font-bold transition-transform duration-300 group-hover:translate-y-12 group-hover:opacity-0">LinkedIn</span>
                            <SiLinkedin className="h-12 w-12 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" />
                        </a>
                        <a href="https://www.credly.com/users/abhi-pulavarthi" target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center rounded-3xl bg-[#111] p-4 transition-colors hover:bg-[#1a1a1a] overflow-hidden">
                            <span className="absolute bottom-6 left-6 text-2xl font-bold transition-transform duration-300 group-hover:translate-y-12 group-hover:opacity-0">Credly</span>
                            <SiCredly className="h-12 w-12 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" />
                        </a>
                        <a href="https://www.instagram.com/abhipulavarthi?igsh=aW14ZnphdTc3Z29p&utm_source=qr" target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center rounded-3xl bg-[#111] p-4 transition-colors hover:bg-[#1a1a1a] overflow-hidden">
                            <span className="absolute bottom-6 left-6 text-2xl font-bold transition-transform duration-300 group-hover:translate-y-12 group-hover:opacity-0">Instagram</span>
                            <SiInstagram className="h-12 w-12 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" />
                        </a>
                        <a href="https://github.com/abhipulavarthi" target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center rounded-3xl bg-[#111] p-4 transition-colors hover:bg-[#1a1a1a] overflow-hidden">
                            <span className="absolute bottom-6 left-6 text-2xl font-bold transition-transform duration-300 group-hover:translate-y-12 group-hover:opacity-0">GitHub</span>
                            <SiGithub className="h-12 w-12 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" />
                        </a>
                    </div>

                    {/* Location Block - Spans 1 col */}
                    <div className="flex flex-col justify-between rounded-3xl bg-[#111] p-8 md:col-span-1">
                        <h3 className="text-4xl font-bold tracking-tight">India</h3>
                        <p className="text-lg text-white/70">Current Location</p>
                    </div>

                    {/* Contact Block (Denver) - Spans 2 cols */}
                    <div className="flex flex-col justify-between rounded-3xl bg-[#111] p-8 md:col-span-2">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">abhinav.pulavarthi06@gmail.com</h3>
                        <div className="flex flex-col sm:flex-row sm:justify-between text-lg text-white/70 gap-2">
                            <span>Andhra Pradesh</span>
                            <span>+91 7989746968</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
