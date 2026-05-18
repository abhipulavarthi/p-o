"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SiLinkedin, SiCredly, SiX, SiGithub } from "react-icons/si";

export default function Home() {
    return (
        <section className="h-screen w-screen bg-[#050505] p-4 font-sans text-white md:p-6 overflow-hidden">
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
                        <div className="flex items-center justify-center rounded-2xl bg-[#1a1a1a] transition-colors hover:bg-[#222]">
                            <a href="#blog" className="text-[10px] font-bold uppercase tracking-widest text-white/70 hover:text-white">Blog</a>
                        </div>
                    </div>

                    {/* Off-White Block - Spans 1 col, 2 rows */}
                    <Link href="/contact" className="group flex flex-col justify-between rounded-3xl bg-[#f5f5f5] p-6 text-black md:col-span-1 md:row-span-2 transition-all hover:scale-[1.02] active:scale-[0.98] border border-white hover:border-[#FF4D00]/50">
                        <div className="flex justify-end">
                            <span className="text-6xl text-[#FF4D00] group-hover:rotate-12 transition-transform duration-300">*</span>
                        </div>
                        <div className="flex flex-col mt-auto -ml-2 md:-ml-3">
                            <span className="text-6xl font-bold uppercase tracking-tighter leading-none md:text-7xl lg:text-8xl">Say</span>
                            <span className="text-6xl font-bold uppercase tracking-tighter leading-none md:text-7xl lg:text-8xl">Hello</span>
                        </div>
                    </Link>

                    {/* Resume Link - Spans 1 col */}
                    <a
                        href="/resume.png"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center rounded-3xl bg-[#111] py-6 transition-colors hover:bg-[#1a1a1a] active:bg-[#1a1a1a] md:col-span-1 border border-transparent hover:border-[#333]"
                    >
                        <span className="text-sm font-medium uppercase tracking-widest text-white/70 transition-colors group-hover:text-white group-active:text-white">Resume</span>
                    </a>


                    {/* --- ROW 2 --- */}

                    {/* Join List - Spans 2 cols */}
                    <div className="flex flex-col justify-end rounded-3xl bg-[#111] p-8 md:col-span-2">
                        <h2 className="text-3xl font-medium leading-tight tracking-tight md:text-5xl lg:text-6xl">
                            Join the list — we love meeting new people.
                        </h2>
                    </div>

                    {/* Pattern Block - Spans 1 col */}
                    <div className="relative overflow-hidden rounded-3xl bg-[#FF4D00] md:col-span-1">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `repeating-linear-gradient(
                                    45deg,
                                    transparent,
                                    transparent 10px,
                                    #000 10px,
                                    #000 20px
                                )`,
                            }}
                        ></div>
                    </div>

                    {/* Empty/Placeholder Block - Spans 1 col (Under Projects) */}
                    <div className="hidden rounded-3xl bg-[#111] md:col-span-1 md:block"></div>


                    {/* --- ROW 3 --- */}

                    {/* Social Icons Grid - Spans 2 cols */}
                    <div className="grid grid-cols-2 grid-rows-2 gap-3 md:col-span-2">
                        <a href="https://www.linkedin.com/in/abhipulavarthi" target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center rounded-3xl bg-[#111] p-4 transition-colors hover:bg-[#1a1a1a] overflow-hidden">
                            <span className="absolute bottom-4 left-4 text-lg font-bold transition-transform duration-300 group-hover:translate-y-10 group-hover:opacity-0">LinkedIn</span>
                            <SiLinkedin className="h-12 w-12 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" />
                        </a>
                        <a href="https://www.credly.com/users/abhi-pulavarthi" target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center rounded-3xl bg-[#111] p-4 transition-colors hover:bg-[#1a1a1a] overflow-hidden">
                            <span className="absolute bottom-4 left-4 text-lg font-bold transition-transform duration-300 group-hover:translate-y-10 group-hover:opacity-0">Credly</span>
                            <SiCredly className="h-12 w-12 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" />
                        </a>
                        <a href="#" className="group relative flex items-center justify-center rounded-3xl bg-[#111] p-4 transition-colors hover:bg-[#1a1a1a] overflow-hidden">
                            <span className="absolute bottom-4 left-4 text-lg font-bold transition-transform duration-300 group-hover:translate-y-10 group-hover:opacity-0">Twitter</span>
                            <SiX className="h-12 w-12 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" />
                        </a>
                        <a href="https://github.com/abhipulavarthi" target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center rounded-3xl bg-[#111] p-4 transition-colors hover:bg-[#1a1a1a] overflow-hidden">
                            <span className="absolute bottom-4 left-4 text-lg font-bold transition-transform duration-300 group-hover:translate-y-10 group-hover:opacity-0">GitHub</span>
                            <SiGithub className="h-12 w-12 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" />
                        </a>
                    </div>

                    {/* Location Block - Spans 1 col */}
                    <div className="flex flex-col justify-between rounded-3xl bg-[#111] p-8 md:col-span-1">
                        <h3 className="text-3xl font-medium">India</h3>
                        <p className="text-sm text-white/60">Hyderabad, Telangana</p>
                    </div>

                    {/* Contact Block (Denver) - Spans 2 cols */}
                    <div className="flex flex-col justify-between rounded-3xl bg-[#111] p-8 md:col-span-2">
                        <h3 className="text-4xl font-medium lg:text-4xl">abhinav.pulavarthi06@gmail.com</h3>
                        <p className="text-sm text-white/60">+91 7989746968</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
