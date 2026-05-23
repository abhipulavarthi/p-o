"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import Image from "next/image";

const projects = [
    {
        title: "GrenGcry (FreshGrocery)",
        description: "A full-stack e-commerce application tailored for grocery shopping. The frontend is a modern SPA built with React 18, Vite, Tailwind CSS, and Redux Toolkit. The backend is a robust RESTful API built with Java and Spring Boot, featuring role-based access control, JWT authentication, and PostgreSQL/MySQL for data management.",
        tags: ["React", "Vite", "Tailwind CSS", "Redux", "Spring Boot", "JWT"],
        image: "/images/projects/grengrcy.png",
        color: "from-[#10b981]/20 to-[#059669]/5",
        accent: "#10b981",
        borderColor: "border-[#10b981]/20"
    },
    {
        title: "SwiftRide",
        description: "A comprehensive ride-sharing platform with a microservices-style architecture. Features a React/Vite frontend with real-time map tracking using Leaflet and Socket.io-client. The core domain service is built with Java Spring Boot, managing users, captains, vehicles, and rides. Real-time driver location updates and authentication are handled by a secondary Node.js/Express server using Socket.io and MongoDB.",
        tags: ["React", "Vite", "Spring Boot", "Node.js", "Leaflet", "Socket.io", "MongoDB"],
        image: "/images/projects/swiftride.png",
        color: "from-[#3b82f6]/20 to-[#2563eb]/5",
        accent: "#3b82f6",
        borderColor: "border-[#3b82f6]/20"
    },
    {
        title: "Netflix Recommendation System",
        description: "Built a personalized Netflix movie recommendation system utilizing Python for the core machine learning algorithms. Developed a responsive front end using React.js to deliver a seamless user experience, and utilized SQLite for efficient data storage.",
        tags: ["Python", "React.js", "SQLite"],
        image: "/images/projects/gammaflow.png",
        color: "from-[#e50914]/20 to-[#b20710]/5",
        accent: "#e50914",
        borderColor: "border-[#e50914]/20"
    },
    {
        title: "Farm-Connect",
        description: "An interactive, role-based marketplace connecting farmers directly with consumers. It features distinct dashboards for buyers and sellers, robust role-based access control, and educational resources like planting guides and recipes. Leverages Three.js and Leaflet for immersive 3D graphics and interactive local farm discovery maps.",
        tags: ["Three.js", "Leaflet", "React", "Marketplace"],
        image: "/images/projects/farmconnect.png",
        color: "from-[#84cc16]/20 to-[#65a30d]/5",
        accent: "#84cc16",
        borderColor: "border-[#84cc16]/20"
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
                                </div>

                                {/* Project Image Container */}
                                <div className="lg:col-span-7 order-1 lg:order-2">
                                    <div className={`relative aspect-[16/10] rounded-3xl overflow-hidden bg-gradient-to-br ${project.color} border ${project.borderColor} p-4 md:p-8 transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-[0_0_100px_-20px_rgba(255,255,255,0.1)]`}>
                                        {/* Image wrapper with parallax tilt effect if possible, but keeping it simple for now */}
                                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                sizes="(max-width: 1024px) 100vw, 60vw"
                                                priority={index === 0}
                                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
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


                        </motion.div>
                    ))}
                </div>

                {/* Footer CTA */}
                <footer className="mt-48 mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="py-24 rounded-3xl bg-white/[0.02] border border-white/15 backdrop-blur-3xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Have a project in mind?</h2>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 text-2xl font-bold hover:gap-6 transition-all underline decoration-white/20 underline-offset-8 hover:decoration-white"
                        >
                            {"Let's build something great together"}
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

