"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "OnData",
        description:
            "Website profissional moderno com foco em presença digital, performance e experiência do usuário para divulgar os serviços de consultoria, treinamento e soluções em dados da OnData.",
        tech: ["Next.js", "TypeScript", "TailwindCSS"],
        image: "/images/projects/ondata.png",
        website: true,
        link: "https://www.ondata.tech/",
    },
    {
        title: "SINSP - Sistema Integrado de Saúde Pública",
        description:
            "Tem o intuito de desenvolver atividades com base na geração de resultados e na qualidade das ações administrativas, os 'Painéis Interativos' visa oferecer informações gerenciais dinâmicas com dados atualizáveis que tem como objetivo otimizar a utilização de recursos para gerar eficiência e eficácia na gestão.",
        tech: ["React", "Laravel", "PostgreSQL"],
        image: "/images/projects/sinsp.png",
        website: false,
        link: "#",
    },
    {
        title: "API's e Integrações Corporativas",
        description:
            "Desenvolvimento de APIs robustas e integrações corporativas voltadas para automação de processos, comunicação entre sistemas e alta escalabilidade. O projeto utiliza arquitetura moderna, containers Docker e infraestrutura em nuvem AWS para garantir performance, segurança e disponibilidade.",
        tech: ["Node.js", "Docker", "AWS"],
        image: "/images/projects/api.jpg",
        website: false,
        link: "#",
    },
];

export function Projects() {
    return (
        <section
            id="projetos"
            className="relative overflow-hidden px-6 py-24"
        >
            {/* Glow */}
            <div className="absolute right-0 top-0 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="container mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
                        Sistemas Desenvolvidos
                    </span>

                    <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
                        Projetos & Soluções
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        Desenvolvimento de plataformas modernas, sistemas
                        institucionais e aplicações corporativas com foco em
                        performance, experiência do usuário e escalabilidade.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid gap-8 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 dark:border-slate-800 dark:bg-slate-900/60"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
                            </div>

                            {/* Image */}
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-8">
                                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                                    {project.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                                    {project.description}
                                </p>

                                {/* Tech */}
                                <div className="mt-6 flex flex-wrap gap-3">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-xl border border-slate-200 bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Button */}
                                {project.website && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-8 inline-flex items-center gap-2 text-cyan-400 transition hover:text-cyan-300"
                                    >
                                        Ver detalhes
                                        <ArrowUpRight size={18} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}