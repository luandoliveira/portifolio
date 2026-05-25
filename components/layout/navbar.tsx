"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { ThemeToggle } from "@/components/theme-toggle";

const links = [
    { name: "Sobre", href: "#sobre" },
    { name: "Tecnologias", href: "#tecnologias" },
    { name: "Projetos", href: "#projetos" },
    { name: "Experiência", href: "#experiencia" },
    { name: "Contato", href: "#contato" },
];

export function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY > 20);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${scrolled
                    ? "border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-[#0B1120]/80"
                    : "bg-transparent"
                }`}
        >
            <div className="container relative mx-auto flex items-center justify-between px-6 py-5">
                {/* Logo */}
                <a
                    href="#"
                    className="text-xl font-bold tracking-wide text-slate-900 dark:text-white"
                >
                    LuanDOliveira
                    <span className="text-cyan-400">.</span>
                </a>

                {/* Desktop Menu */}
                <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 transition hover:text-cyan-400 dark:text-slate-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-3">
                    {/* Theme Toggle */}
                    <div className="hidden md:block">
                        <ThemeToggle />
                    </div>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-slate-900 dark:text-white md:hidden"
                    >
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="border-b border-slate-200 bg-white/95 backdrop-blur-xl dark:border-slate-800 dark:bg-[#0B1120]/95 md:hidden"
                    >
                        <nav className="container mx-auto flex flex-col gap-6 px-6 py-6">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="text-slate-600 transition hover:text-cyan-400 dark:text-slate-300"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}