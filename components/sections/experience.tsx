"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

const experiences = [
    {
        company: "Vint Global",
        role: "Analista de Sistemas • Tech Lead Back-End",
        period: "2023 — Atual",
        description:
            "Liderança técnica de equipe Back-End, arquitetura de APIs RESTful escaláveis, integração de sistemas e desenvolvimento de soluções modernas utilizando Node.js, NestJS, React e Redis.",
    },
    {
        company: "SEDUC-AM",
        role: "Desenvolvedor Full Stack",
        period: "2021 — 2023",
        description:
            "Desenvolvimento Full Stack de sistemas institucionais para a rede estadual de ensino, com foco em Laravel, PostgreSQL, automação de processos e controle de acesso seguro.",
    },
];

export function Experience() {
    return (
        <section
            id="experiencia"
            className="relative overflow-hidden px-6 py-24"
        >
            {/* Glow */}
            <div className="absolute left-0 top-1/2 -z-10 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="container mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mx-auto mb-20 max-w-3xl text-center"
                >
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
                        Carreira Profissional
                    </span>

                    <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
                        Experiência & Liderança
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        Atuação em projetos institucionais, arquitetura de sistemas,
                        desenvolvimento Full Stack e liderança técnica de equipes.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative mx-auto max-w-4xl">
                    {/* Linha */}
                    <div className="absolute left-6 top-0 h-full w-[2px] bg-slate-800 md:left-1/2" />

                    <div className="space-y-16">
                        {experiences.map((experience, index) => (
                            <motion.div
                                key={experience.company}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.2,
                                }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:w-1/2 ${index % 2 === 0
                                        ? "md:pr-12 md:text-right"
                                        : "md:ml-auto md:pl-12"
                                    }`}
                            >
                                {/* Dot */}
                                <div
                                    className={`absolute top-2 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-100 text-cyan-400 dark:bg-slate-900 ${index % 2 === 0
                                            ? "left-0 md:right-[-24px] md:left-auto"
                                            : "left-0 md:left-[-24px]"
                                        }`}
                                >
                                    <BriefcaseBusiness size={22} />
                                </div>

                                {/* Card */}
                                <div className="ml-16 surface-card border border-slate-200 dark:border-slate-800 p-8 md:ml-0">
                                    <span className="text-sm text-cyan-400">
                                        {experience.period}
                                    </span>

                                    <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
                                        {experience.company}
                                    </h3>

                                    <h4 className="mt-2 text-lg text-slate-600 dark:text-slate-300">
                                        {experience.role}
                                    </h4>

                                    <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                                        {experience.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
