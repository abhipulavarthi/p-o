"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { SiLinkedin, SiInstagram, SiX, SiGithub } from "react-icons/si";
import Image from "next/image";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        message: "",
        email: ""
    });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const response = await fetch("https://formsubmit.co/ajax/abhinav.pulavarthi06@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    message: formData.message,
                    email: formData.email,
                    _subject: `New Portfolio Message from ${formData.name}`,
                })
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", message: "", email: "" });
                // Reset success status after 5 seconds if desired
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("error");
        }
    };

    return (
        <section className="h-screen w-screen bg-[#050505] p-4 font-sans text-white md:p-6 overflow-hidden">
            <div className="mx-auto h-full w-full max-w-[1800px] flex flex-col">
                {/* Navigation / Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 flex items-center justify-between rounded-3xl bg-[#111] px-6 py-4 shadow-sm border border-white/15 shrink-0"
                >
                    <div className="flex items-center gap-2">
                        <Link href="/" className="group flex items-center justify-center rounded-full bg-[#1a1a1a] p-3 transition-colors hover:bg-[#222]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1">
                                <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
                            </svg>
                        </Link>
                        <h1 className="ml-4 text-3xl font-bold tracking-tighter md:text-4xl text-white">Contact</h1>
                    </div>
                    <div className="hidden md:block">
                        <span className="text-sm font-medium text-white/40">Abhinav Pulavarthi</span>
                    </div>
                </motion.div>

                <div className="grid w-full flex-1 grid-cols-1 gap-3 md:grid-cols-5 md:gap-4 min-h-0">


                    {/* --- ROW 2: Main Content --- */}

                    {/* Contact Form - Spans 3 cols */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="relative flex flex-col rounded-3xl bg-[#111] p-6 text-white md:col-span-3 overflow-y-auto border border-white/15"
                    >
                        {/* Close / Back Button */}
                        <div className="flex items-center justify-between">
                            <div className="self-start rounded-full border border-white/10 bg-[#1a1a1a] px-5 py-2 text-sm font-bold uppercase tracking-wide">
                                <span className="text-white/70">{"Let's connect!"}</span>
                            </div>
                            {status === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="rounded-full bg-green-500/10 border border-green-500/20 px-5 py-2 text-sm font-bold text-green-400 uppercase tracking-wide"
                                >
                                    Message Sent!
                                </motion.div>
                            )}
                            {status === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="rounded-full bg-red-500/10 border border-red-500/20 px-5 py-2 text-sm font-bold text-red-400 uppercase tracking-wide"
                                >
                                    Failed to send.
                                </motion.div>
                            )}
                        </div>

                        <form onSubmit={handleSubmit} className="mt-8 md:mt-10 flex flex-col gap-6 md:gap-8 flex-grow justify-center">
                            <div className="flex flex-col gap-2">
                                <label className="text-xl font-medium text-white/40">{"Hey, I'm"}</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    required
                                    className="w-full border-b border-white/20 bg-transparent py-2 text-4xl md:text-5xl font-medium outline-none placeholder:text-white/5 focus:border-[#FF4D00] transition-colors text-white"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xl font-medium text-white/40">{"and I'd like to tell you that"}</label>
                                <textarea
                                    rows={2}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    required
                                    className="w-full resize-none border-b border-white/20 bg-transparent py-2 text-3xl md:text-4xl font-medium outline-none placeholder:text-white/5 focus:border-[#FF4D00] transition-colors text-white"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xl font-medium text-white/40">Please reply at</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="****@email.com"
                                    required
                                    className="w-full border-b border-white/20 bg-transparent py-2 text-4xl md:text-5xl font-medium outline-none placeholder:text-white/5 focus:border-[#FF4D00] transition-colors text-white"
                                />
                            </div>

                            <div className={`bg-[#FF4D00] rounded-2xl p-4 self-start mt-2 cursor-pointer hover:bg-[#ff6a26] group transition-all active:scale-95 ${status === 'sending' ? 'opacity-50 pointer-events-none' : ''}`}>
                                <button type="submit" disabled={status === 'sending'} className="text-sm font-bold uppercase tracking-widest text-black transition-colors">
                                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Right Graphic - Spans 2 cols */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative hidden md:block overflow-hidden rounded-3xl bg-[#B8C0EC] md:col-span-2"
                    >

                        <Image
                            src="/images/contact-collage.jpg"
                            alt="Creative collage"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
