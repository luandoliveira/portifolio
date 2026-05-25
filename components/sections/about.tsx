"use client";

import { motion } from "framer-motion";
import {
    ShieldCheck,
    Workflow,
    ServerCog,
    DatabaseZap,
} from "lucide-react";

const specialties = [
    {
        title: "Arquitetura de Sistemas",
        description:
            "Desenvolvimento de aplicações escaláveis, APIs modernas e microsserviços com foco em performance e organização.",
        icon: ServerCog,
    },
    {
        title: "Transformação Digital",
        description:
            "Automação de processos e modernização de sistemas institucionais utilizando tecnologias modernas.",
        icon: Workflow,
    },
    {
        title: "Performance & Escalabilidade",
        description:
            "Otimização de aplicações, processamento assíncrono e integração de grandes volumes de dados.",
        icon: DatabaseZap,
    },
    {
        title: "Segurança & Qualidade",
        description:
            "Aplicação de práticas de Security by Design, controle de acesso e revisão contínua de código.",
        icon: ShieldCheck,
    },
];

export function About() {
    return (
        <section
            id="sobre"
            className="relative overflow-hidden px-6 py-24"
        >
            {/* Glow */}
            <div className="absolute left-1/2 top-0 -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="container mx-auto">
                {/* Top */}
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
                            Sobre Mim
                        </span>

                        <h2 className="mt-6 text-4xl font-bold leading-tight lg:text-5xl">
                            Tecnologia, Arquitetura e
                            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Transformação Digital
                            </span>
                        </h2>

                        <p className="mt-8 text-lg leading-8 text-slate-600 dark:text-slate-400">
                            Desenvolvedor Full Stack com mais de 5 anos de experiência
                            na criação de sistemas modernos, APIs escaláveis e soluções
                            corporativas de alto impacto.
                        </p>

                        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                            Atuo com desenvolvimento Front-End, Back-End e arquitetura
                            de software, liderando iniciativas técnicas com foco em
                            performance, segurança, escalabilidade e experiência do usuário.
                        </p>

                        {/* Metrics */}
                        <div className="mt-10 grid grid-cols-2 gap-6">
                            <div className="rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/60 p-6 backdrop-blur-xl">
                                <h3 className="text-4xl font-bold text-cyan-400">
                                    +5
                                </h3>

                                <p className="mt-2 text-slate-600 dark:text-slate-400">
                                    Anos de experiência
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-white dark:bg-slate-900/60 p-6 backdrop-blur-xl">
                                <h3 className="text-4xl font-bold text-cyan-400">
                                    Full
                                </h3>

                                <p className="mt-2 text-slate-600 dark:text-slate-400">
                                    Stack Development
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right */}
                    <div className="grid gap-6">
                        {specialties.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                    className="surface-card border border-slate-800 p-6"
                                >
                                    <div className="flex items-start gap-5">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                                            <Icon size={28} />
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                                                {item.title}
                                            </h3>

                                            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}