"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import LogoLoop from "@/components/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiPostgresql, SiGithub, SiMysql, SiJavascript, SiFigma, SiDocker, SiPython, SiC, SiSpringboot, SiPostman } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const techLogos = [
    { node: <SiReact className="text-[#61DAFB]" />, title: "React" },
    { node: <SiNextdotjs className="text-black" />, title: "Next.js" },
    { node: <SiNodedotjs className="text-[#339933]" />, title: "Node.js" },
    { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript" },
    { node: <SiJavascript className="text-[#3178C6]" />, title: "JavaScript" },
    { node: <SiTailwindcss className="text-[#06B6D4]" />, title: "Tailwind CSS" },
    { node: <SiMongodb className="text-[#47A248]" />, title: "MongoDB" },
    { node: <SiMysql className="text-[#4479A1]" />, title: "MySQL" },
    { node: <SiPostgresql className="text-[#4479A1]" />, title: "PostgreSQL" },
    { node: <SiPostman className="text-[#CC5500]" />, title: "Postman" },
    { node: <SiSpringboot className="text-[#47A248]" />, title: "Spring Boot" },
    { node: <SiGithub className="text-[#181717]" />, title: "Github" },
    { node: <SiFigma className="text-[#36454F]" />, title: "Figma" },
    { node: <SiDocker className="text-[#1D63ED]" />, title: "Docker" },
    { node: <SiPython className="text-[#FFE873]" />, title: "Python" },
    { node: <FaJava className="text-[#F24E1E]" />, title: "Java" },
    { node: <SiC className="text-[#66AC4C]" />, title: "C" },
];

export default function AboutPage() {
    return (
        <section className="min-h-screen w-full bg-[#050505] p-4 font-sans text-white md:p-6">
            <div className="mx-auto h-full w-full max-w-[1800px]">

                {/* Navigation / Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 flex items-center justify-between rounded-3xl bg-[#111] px-6 py-6 shadow-sm border border-[#333]"
                >
                    <div className="flex items-center gap-2">
                        <Link href="/" className="group flex items-center justify-center rounded-full bg-[#1a1a1a] p-3 transition-colors hover:bg-[#222]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1">
                                <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
                            </svg>
                        </Link>
                        <h1 className="ml-4 text-3xl font-bold tracking-tighter md:text-4xl text-white">About</h1>
                    </div>
                    <div className="hidden md:block">
                        <span className="text-sm font-medium text-white/40">Abhinav Pulavarthi</span>
                    </div>
                </motion.div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">

                    {/* Main Introduction - Large Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 rounded-3xl bg-[#111] p-8 flex flex-col justify-between min-h-[400px] shadow-sm border border-[#333]"
                    >
                        <div>
                            <h2 className="text-2xl font-medium leading-tight text-white md:text-4xl">
                                Design with intention, <br />
                                <span className="text-white/40">Build with precision.</span>
                            </h2>
                            <div className="mt-8 space-y-6">
                                <p className="text-lg leading-relaxed text-white/60">
                                    My work is driven by a curiosity for new technologies and a dedication to craftsmanship.
                                    I believe in the power of simplicity and the impact of thoughtful interactions.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Photo / Visual Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 rounded-3xl bg-[#111] overflow-hidden relative min-h-[300px] flex items-center justify-center shadow-sm border border-[#333]"
                    >
                        {/* Abstract Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#111] via-[#1a1a1a] to-[#050505] opacity-50"></div>
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <LogoLoop
                                logos={techLogos}
                                speed={100}
                                direction="left"
                                logoHeight={80}
                                gap={60}
                                pauseOnHover={false}
                                fadeOut
                                fadeOutColor="#111"
                                ariaLabel="Technology skills"
                            />
                        </div>

                        <div className="absolute bottom-6 left-6 z-10">
                            <p className="text-sm uppercase tracking-widest text-white/40">Skills</p>
                        </div>
                    </motion.div>

                    {/* Stats Block - Experience */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="col-span-1 rounded-3xl bg-[#111] p-6 flex flex-col justify-between min-h-[200px] shadow-sm border border-[#333]"
                    >
                        <div className="h-10 w-10 text-[#FF4D00]">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5 9.5 9.75 12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg>
                        </div>
                        <div>
                            <span className="text-4xl font-bold text-white">3+</span>
                            <p className="text-sm text-white/40 mt-1 uppercase tracking-wider">Certifications</p>
                        </div>
                    </motion.div>

                    {/* Stats Block - Projects */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="col-span-1 rounded-3xl bg-[#111] p-6 flex flex-col justify-between min-h-[200px] shadow-sm border border-[#333]"
                    >
                        <div className="h-10 w-10 text-[#FF4D00]">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                        </div>
                        <div>
                            <span className="text-4xl font-bold text-white">3</span>
                            <p className="text-sm text-white/40 mt-1 uppercase tracking-wider">Projects</p>
                        </div>
                    </motion.div>

                    {/* CTA Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="col-span-1 md:col-span-3 lg:col-span-4 rounded-3xl bg-[#FF4D00] p-8 md:p-12 text-black flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm"
                    >
                        <div>
                            <h3 className="text-3xl font-bold tracking-tighter md:text-5xl">Let's build something great.</h3>
                            <p className="mt-2 text-black/60 font-medium">Open for collaborations and new opportunities.</p>
                        </div>
                        <Link href="/contact" className="rounded-full bg-black px-8 py-4 text-lg font-bold uppercase tracking-widest text-white transition-transform hover:scale-105 active:scale-95">
                            Get in touch
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
