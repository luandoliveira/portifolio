"use client";

import { motion } from "framer-motion";

const techs = [
    {
        category: "Frontend",
        items: [
            "React",
            "Next.js",
            "TypeScript",
            "TailwindCSS",
            "JavaScript",
            "HTML5",
            "CSS3",
        ],
    },
    {
        category: "Backend",
        items: [
            "Node.js",
            "NestJS",
            "Laravel",
            "FastAPI",
            "Flask",
            "PHP",
            "Python",
        ],
    },
    {
        category: "Banco de Dados",
        items: [
            "PostgreSQL",
            "MySQL",
            "Redis",
        ],
    },
    {
        category: "DevOps & Cloud",
        items: [
            "Docker",
            "AWS",
            "CI/CD",
            "GitHub",
            "Git",
        ],
    },
];

export function Technologies() {
    return (
        <section
            id="tecnologias"
            className="relative px-6 py-24"
        >
            {/* Glow */}
            <div className="absolute left-1/2 top-0 -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

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
                        Stack Tecnológica
                    </span>

                    <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
                        Tecnologias & Ferramentas
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        Experiência sólida no desenvolvimento de aplicações modernas,
                        APIs escaláveis, arquitetura de sistemas e infraestrutura cloud.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid gap-8 md:grid-cols-2">
                    {techs.map((tech, index) => (
                        <motion.div
                            key={tech.category}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="surface-card border border-slate-200 dark:border-slate-800 p-8"
                        >
                            <h3 className="mb-6 text-2xl font-semibold text-slate-900 dark:text-white">
                                {tech.category}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {tech.items.map((item) => (
                                    <div
                                        key={item}
                                        className="rounded-xl border border-slate-200 bg-slate-100 px-4 py-2 text-sm text-slate-900 transition hover:border-cyan-400/20 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-800/90"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}