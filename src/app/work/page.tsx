"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

const projects = [
    {
        title: "SwiftRide",
        description: "A comprehensive ride-sharing platform with a microservices-style architecture. Features a React/Vite frontend with real-time map tracking using Leaflet and Socket.io-client. The core domain service is built with Java Spring Boot, managing users, captains, vehicles, and rides. Real-time driver location updates and authentication are handled by a secondary Node.js/Express server using Socket.io and MongoDB.",
        tags: ["React", "Vite", "Spring Boot", "Node.js", "Leaflet", "Socket.io", "MongoDB"],
        images: [
            "/images/projects/swiftride/1.png",
            "/images/projects/swiftride/2.png",
            "/images/projects/swiftride/3.png",
            "/images/projects/swiftride/4.png"
        ],
        color: "from-[#3b82f6]/20 to-[#2563eb]/5",
        accent: "#3b82f6",
        borderColor: "border-[#3b82f6]/20"
    },
    {
        title: "Netflix Recommendation System",
        description: "Built a personalized Netflix movie recommendation system utilizing Python for the core machine learning algorithms. Developed a responsive front end using React.js to deliver a seamless user experience, and utilized SQLite for efficient data storage.",
        tags: ["Python", "React.js", "SQLite"],
        images: [
            "/images/projects/ott/1.png",
            "/images/projects/ott/2.png",
            "/images/projects/ott/3.png",
            "/images/projects/ott/4.png"
        ],
        color: "from-[#e50914]/20 to-[#b20710]/5",
        accent: "#e50914",
        borderColor: "border-[#e50914]/20"
    },
    {
        title: "Farm-Connect",
        description: "An interactive, role-based marketplace connecting farmers directly with consumers. It features distinct dashboards for buyers and sellers, robust role-based access control, and educational resources like planting guides and recipes. Leverages Three.js and Leaflet for immersive 3D graphics and interactive local farm discovery maps.",
        tags: ["Three.js", "Leaflet", "React", "Marketplace"],
        images: [
            "/images/projects/Farmlink/1.png",
            "/images/projects/Farmlink/2.png",
            "/images/projects/Farmlink/3.png",
            "/images/projects/Farmlink/4.png",
            "/images/projects/Farmlink/5.png",
            "/images/projects/Farmlink/6.png",
            "/images/projects/Farmlink/7.png",
            "/images/projects/Farmlink/8.png",
            "/images/projects/Farmlink/9.png"
        ],
        color: "from-[#84cc16]/20 to-[#65a30d]/5",
        accent: "#84cc16",
        borderColor: "border-[#84cc16]/20"
    },
];

function ProjectCarousel({ images, title, priority }: { images: string[]; title: string; priority: boolean }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % images.length);
        }, 4000); // Auto transition every 4s
        return () => clearInterval(interval);
    }, [images]);

    if (images.length === 1) {
        return (
            <Image
                src={images[0]}
                alt={title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority={priority}
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
        );
    }

    return (
        <div className="relative w-full h-full">
            {images.map((img, i) => (
                <div
                    key={img}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                        i === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                >
                    <Image
                        src={img}
                        alt={`${title} screenshot ${i + 1}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority={priority && i === 0}
                        className="object-cover"
                    />
                </div>
            ))}

            {/* Indicator dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setCurrentIndex(i);
                        }}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            i === currentIndex ? "bg-white w-3" : "bg-white/40 hover:bg-white/70"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default function WorkPage() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const headerTitle = containerRef.current.querySelector(".header-title");
        if (headerTitle) {
            gsap.fromTo(headerTitle,
                { opacity: 0, x: -30 },
                { opacity: 1, x: 0, duration: 0.7, ease: "power2.out", delay: 0.1 }
            );
        }

        const headerDesc = containerRef.current.querySelector(".header-desc");
        if (headerDesc) {
            gsap.fromTo(headerDesc,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.2 }
            );
        }

        const projectItems = containerRef.current.querySelectorAll(".project-item");
        if (projectItems.length > 0) {
            gsap.fromTo(projectItems,
                { opacity: 0, y: 55 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    delay: 0.25
                }
            );
        }

        const footerCta = containerRef.current.querySelector(".footer-cta");
        if (footerCta) {
            gsap.fromTo(footerCta,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    delay: 0.5
                }
            );
        }
    }, []);

    return (
        <section ref={containerRef} className="min-h-screen w-full bg-[#050505] p-6 lg:p-12 font-sans text-white">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <header className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                    <div className="header-title opacity-0">
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
                    </div>

                    <p className="header-desc opacity-0 max-w-md text-xl text-white/40 font-medium leading-relaxed">
                        A collection of digital experiences crafted with precision, blending aesthetic beauty with functional excellence.
                    </p>
                </header>

                {/* Projects Section */}
                <div className="space-y-32 md:space-y-48">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className="project-item opacity-0 group relative"
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

                                <div className="lg:col-span-7 order-1 lg:order-2">
                                    <div className={`relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br ${project.color} border ${project.borderColor} transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-[0_0_100px_-20px_rgba(255,255,255,0.1)]`}>
                                        <ProjectCarousel
                                            images={project.images}
                                            title={project.title}
                                            priority={index === 0}
                                        />
                                        {/* Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                                        {/* Decorative Element */}
                                        <div
                                            className="absolute -right-20 -top-20 w-80 h-80 rounded-full blur-[120px] opacity-20 pointer-events-none transition-opacity duration-1000 group-hover:opacity-40"
                                            style={{ backgroundColor: project.accent }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer CTA */}
                <footer className="footer-cta opacity-0 mt-48 mb-24 text-center">
                    <div className="py-24 rounded-3xl bg-white/[0.02] backdrop-blur-3xl">
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
                    </div>
                </footer>
            </div>
        </section>
    );
}
