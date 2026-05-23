"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SiCisco, SiAmazonwebservices } from "react-icons/si";
import { FaGraduationCap, FaBriefcase, FaAward, FaCheckCircle, FaUniversity } from "react-icons/fa";

export default function ExperiencePage() {
    return (
        <section className="min-h-screen w-full bg-[#050505] p-4 font-sans text-white md:p-6 overflow-x-hidden">
            <div className="mx-auto h-full w-full max-w-[1800px]">

                {/* Navigation / Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 flex items-center justify-between rounded-3xl bg-[#111] px-6 py-6 shadow-sm border border-white/15"
                >
                    <div className="flex items-center gap-2">
                        <Link href="/" className="group flex items-center justify-center rounded-full bg-[#1a1a1a] p-3 transition-colors hover:bg-[#222]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1">
                                <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
                            </svg>
                        </Link>
                        <h1 className="ml-4 text-3xl font-bold tracking-tighter md:text-4xl text-white">Experience & Credentials</h1>
                    </div>
                    <div className="hidden md:block">
                        <span className="text-sm font-medium text-white/40">Abhinav Pulavarthi</span>
                    </div>
                </motion.div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

                    {/* Left Column: Experience (Spans 7 cols on large screens) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-7 flex flex-col gap-6"
                    >
                        {/* Section Header */}
                        <div className="flex items-center gap-3 px-2">
                            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Professional Experience</h2>
                        </div>

                        {/* Experience Card */}
                        <div className="relative rounded-3xl bg-[#111] p-6 md:p-8 border border-white/15 shadow-xl overflow-hidden group transition-all hover:border-white/30">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#FF4D00]/10 to-transparent rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none group-hover:opacity-70 transition-opacity opacity-40"></div>
                            
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2.5 rounded-2xl bg-[#1a1a1a] border border-white/15 text-[#049fd9]">
                                            <SiCisco className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Networking Intern</h3>
                                            <p className="text-base font-semibold text-[#FF4D00]">Cisco CCNA Training Program</p>
                                        </div>
                                    </div>
                                    <p className="text-sm italic text-white/60 mt-1 md:ml-14">Diploma Internship Program</p>
                                </div>

                            </div>

                            {/* Bullet points */}
                            <ul className="space-y-4 text-white/70 mt-6 md:ml-14 border-l border-white/10 pl-4 md:pl-6">
                                <li className="flex items-start gap-3 group/item">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF4D00] shrink-0 group-hover/item:scale-150 transition-transform"></span>
                                    <p className="text-base leading-relaxed hover:text-white transition-colors">
                                        Completed 3 CCNA certification modules covering enterprise networking, routing, switching, and wireless technologies
                                    </p>
                                </li>
                                <li className="flex items-start gap-3 group/item">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF4D00] shrink-0 group-hover/item:scale-150 transition-transform"></span>
                                    <p className="text-base leading-relaxed hover:text-white transition-colors">
                                        Configured and tested 20+ virtual network topologies using Cisco Packet Tracer simulations
                                    </p>
                                </li>
                                <li className="flex items-start gap-3 group/item">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF4D00] shrink-0 group-hover/item:scale-150 transition-transform"></span>
                                    <p className="text-base leading-relaxed hover:text-white transition-colors">
                                        Worked with IP addressing, subnetting, VLANs, and routing protocols across 15+ simulated enterprise network environments
                                    </p>
                                </li>
                                <li className="flex items-start gap-3 group/item">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF4D00] shrink-0 group-hover/item:scale-150 transition-transform"></span>
                                    <p className="text-base leading-relaxed hover:text-white transition-colors">
                                        Enhanced troubleshooting and network security skills through 25+ hands-on networking labs
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right Column: Education & Certifications (Spans 5 cols on large screens) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-5 flex flex-col gap-6"
                    >
                        {/* Education Section Header */}
                        <div className="flex items-center gap-3 px-2">
                            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Education</h2>
                        </div>

                        {/* Education Cards */}
                        <div className="grid grid-cols-1 gap-4">
                            <div className="rounded-3xl bg-[#111] p-6 border border-white/15 shadow-md transition-all hover:border-white/30 group">
                                <div className="flex items-start gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white tracking-tight">KL University</h3>
                                        <p className="text-sm font-medium text-white/60 mt-1">Bachelor of Technology in Computer Science and Engineering</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-3xl bg-[#111] p-6 border border-white/15 shadow-md transition-all hover:border-white/30 group">
                                <div className="flex items-start gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white tracking-tight">Swarnandhra College of Engineering and Technology</h3>
                                        <p className="text-sm font-medium text-white/60 mt-1">Diploma in Computer Engineering (CME)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Certifications Section Header */}
                        <div className="flex items-center gap-3 px-2 mt-4">
                            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Certifications</h2>
                        </div>

                        {/* Certifications Cards */}
                        <div className="grid grid-cols-1 gap-4">
                            <div className="rounded-3xl bg-[#111] p-6 border border-white/15 shadow-md transition-all hover:border-white/30 flex items-center justify-between gap-4 group">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-2xl bg-[#1a1a1a] border border-white/15 text-[#f59e0b] group-hover:scale-110 transition-transform">
                                        <SiAmazonwebservices className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white tracking-tight">AWS Certified Cloud Practitioner</h3>
                                        <p className="text-xs font-medium text-white/50 mt-0.5">Amazon Web Services</p>
                                    </div>
                                </div>
                                <FaCheckCircle className="h-5 w-5 text-white shrink-0 opacity-80" />
                            </div>

                            <div className="rounded-3xl bg-[#111] p-6 border border-white/15 shadow-md transition-all hover:border-white/30 flex items-center justify-between gap-4 group">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-2xl bg-[#1a1a1a] border border-white/15 text-[#049fd9] group-hover:scale-110 transition-transform">
                                        <SiCisco className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white tracking-tight">CCNA: Enterprise Networking, Security, and Automation</h3>
                                        <p className="text-xs font-medium text-white/50 mt-0.5">Cisco</p>
                                    </div>
                                </div>
                                <FaCheckCircle className="h-5 w-5 text-white shrink-0 opacity-80" />
                            </div>
                        </div>
                    </motion.div>

                </div>



            </div>
        </section>
    );
}
