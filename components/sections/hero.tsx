"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Download } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden px-6 pb-24 pt-28 lg:pb-32 lg:pt-40">
            {/* Background Glow */}
            <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.15),transparent_40%)]">
                <div className="absolute inset-0 -z-30 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="container mx-auto grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
                        Tech Lead • Full Stack Engineer • System Analyst
                    </span>

                    <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-8xl">
                        Luan
                        <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            de Oliveira
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 dark:text-slate-300 sm:text-lg">
                        Desenvolvedor Full Stack especializado em arquitetura de
                        sistemas, APIs escaláveis, transformação digital e
                        desenvolvimento de soluções modernas de alto impacto.
                    </p>

                    {/* Tech Stack */}
                    <div className="mt-8 flex flex-wrap gap-3">
                        {[
                            "Next.js",
                            "React",
                            "Node.js",
                            "NestJS",
                            "Laravel",
                            "Docker",
                            "AWS",
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="
                                    rounded-full
                                    border
                                    border-slate-300
                                    bg-white
                                    px-4
                                    py-2
                                    text-sm
                                    text-slate-900
                                    transition
                                    hover:border-cyan-400
                                    hover:text-cyan-500
                                    dark:border-slate-700
                                    dark:bg-slate-900/80
                                    dark:text-slate-200
                                "
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="https://github.com/luandoliveira"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                flex items-center gap-2 rounded-xl
                                border border-slate-300
                                bg-white px-6 py-3
                                text-slate-900 transition
                                hover:border-cyan-400
                                hover:bg-slate-100
                                dark:border-slate-700
                                dark:bg-slate-900
                                dark:text-slate-100
                                dark:hover:bg-slate-800
                            "
                        >
                            <FaGithub className="h-5 w-5" />
                            GitHub
                        </a>

                        <a
                            href="https://linkedin.com/in/luandoliveiras"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                flex items-center gap-2 rounded-xl
                                bg-cyan-500 px-6 py-3
                                font-medium text-black
                                transition hover:bg-cyan-400
                            "
                        >
                            <FaLinkedin className="h-5 w-5" />
                            LinkedIn
                        </a>

                        <a
                            href="/cv.pdf"
                            download
                            className="
                                flex items-center gap-2 rounded-xl
                                border border-slate-300
                                bg-white px-6 py-3
                                text-slate-900 transition
                                hover:border-cyan-400
                                hover:bg-slate-100
                                dark:border-slate-700
                                dark:bg-slate-900
                                dark:text-slate-100
                                dark:hover:bg-slate-800
                            "
                        >
                            <Download size={18} />
                            Currículo
                        </a>
                    </div>
                </motion.div>

                {/* Right */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center lg:justify-end"
                >
                    {/* Glow */}
                    <div className="absolute h-[280px] w-[280px] rounded-full bg-cyan-500/20 blur-3xl md:h-[380px] md:w-[380px]" />

                    {/* Decorative Ring */}
                    <div className="absolute h-[260px] w-[260px] rounded-full border border-cyan-400/20 md:h-[360px] md:w-[360px]" />

                    {/* Image */}
                    <div className="relative">
                        <Image
                            src="/images/profile2.png"
                            alt="Luan de Oliveira"
                            width={420}
                            height={420}
                            priority
                            className="
                                h-[260px]
                                w-[260px]
                                rounded-[32px]
                                object-cover
                                object-top
                                shadow-[0_0_60px_rgba(6,182,212,0.15)]
                                ring-1
                                ring-white/10
                                md:h-[380px]
                                md:w-[380px]
                            "
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}