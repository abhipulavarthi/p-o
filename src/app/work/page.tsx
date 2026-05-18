"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

const projects = [
    {
        title: "GrenGrcy",
        description: "A premium grocery e-commerce experience with a focus on organic produce and local artisans. Built with a robust React architecture and Redux state management.",
        tags: ["React", "Vite", "Redux", "Tailwind"],
        image: "/images/projects/grengrcy.png",
        color: "from-[#10b981]/20 to-[#059669]/5",
        accent: "#10b981",
        borderColor: "border-[#10b981]/20"
    },
    {
        title: "SwiftRide",
        description: "Revolutionizing urban mobility with real-time tracking and futuristic ride-sharing capabilities. Powered by Socket.io and React Native.",
        tags: ["React Native", "Node.js", "Socket.io"],
        image: "/images/projects/swiftride.png",
        color: "from-[#3b82f6]/20 to-[#2563eb]/5",
        accent: "#3b82f6",
        borderColor: "border-[#3b82f6]/20"
    },
    {
        title: "Gamma Flow",
        description: "Next-gen financial intelligence platform. Visualizing complex market data with predictive AI analytics and stunning D3.js visualizations.",
        tags: ["TypeScript", "D3.js", "AI/ML"],
        image: "/images/projects/gammaflow.png",
        color: "from-[#f59e0b]/20 to-[#d97706]/5",
        accent: "#f59e0b",
        borderColor: "border-[#f59e0b]/20"
    },
];

export default function WorkPage() {
    return (
        <section className="min-h-screen w-full bg-[#050505] p-6 lg:p-12 font-sans text-white">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <header className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-white/50 transition-colors hover:text-white group">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1">
                                <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
                            </svg>
                            <span className="text-sm font-bold uppercase tracking-widest">Back Home</span>
                        </Link>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none">
                            SELECTED <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">WORKS</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-md text-xl text-white/40 font-medium leading-relaxed"
                    >
                        A collection of digital experiences crafted with precision, blending aesthetic beauty with functional excellence.
                    </motion.p>
                </header>

                {/* Projects Section */}
                <div className="space-y-32 md:space-y-48">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                                {/* Project Info */}
                                <div className="lg:col-span-5 order-2 lg:order-1">
                                    <div className="flex flex-wrap gap-3 mb-8">
                                        {project.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-white/60 backdrop-blur-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 group-hover:translate-x-2 transition-transform duration-500">
                                        {project.title}
                                    </h2>

                                    <p className="text-lg md:text-xl text-white/50 leading-relaxed mb-10 max-w-lg">
                                        {project.description}
                                    </p>

                                    <Link
                                        href="#"
                                        className="inline-flex items-center gap-4 py-4 px-8 rounded-2xl bg-white text-black font-bold transition-all hover:scale-105 active:scale-95"
                                    >
                                        <span>View Case Study</span>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M7 17l10-10M7 7h10v10" />
                                        </svg>
                                    </Link>
                                </div>

                                {/* Project Image Container */}
                                <div className="lg:col-span-7 order-1 lg:order-2">
                                    <div className={`relative aspect-[16/10] rounded-[2rem] overflow-hidden bg-gradient-to-br ${project.color} border ${project.borderColor} p-4 md:p-8 transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-[0_0_100px_-20px_rgba(255,255,255,0.1)]`}>
                                        {/* Image wrapper with parallax tilt effect if possible, but keeping it simple for now */}
                                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                            {/* Overlay Gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                        </div>

                                        {/* Decorative Element */}
                                        <div
                                            className="absolute -right-20 -top-20 w-80 h-80 rounded-full blur-[120px] opacity-20 pointer-events-none transition-opacity duration-1000 group-hover:opacity-40"
                                            style={{ backgroundColor: project.accent }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Background Number */}
                            <span className="absolute -left-12 -top-12 text-[15rem] font-black text-white/[0.02] select-none pointer-events-none hidden xl:block">
                                0{index + 1}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Footer CTA */}
                <footer className="mt-48 mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="py-24 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Have a project in mind?</h2>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 text-2xl font-bold hover:gap-6 transition-all underline decoration-white/20 underline-offset-8 hover:decoration-white"
                        >
                            Let's build something great together
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </motion.div>
                </footer>
            </div>
        </section>
    );
}

