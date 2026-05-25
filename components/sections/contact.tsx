"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden px-6 py-24"
    >
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl rounded-[32px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-10 text-center backdrop-blur-xl lg:p-16"
        >
          {/* Badge */}
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
            Vamos Trabalhar Juntos
          </span>

          {/* Title */}
          <h2 className="mt-8 text-4xl font-bold leading-tight lg:text-6xl">
            Construindo soluções
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              modernas e escaláveis
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Especialista em desenvolvimento Full Stack,
            arquitetura de sistemas e transformação digital,
            criando soluções com foco em performance,
            escalabilidade e experiência do usuário.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:luanf.d.silva@gmail.com"
              className="flex items-center gap-2 rounded-2xl bg-cyan-500 px-6 py-4 font-medium text-black transition hover:bg-cyan-400"
            >
              <Mail size={20} />
              Entrar em contato
            </a>

            <a
              href="https://linkedin.com/in/luandoliveiras"
              target="_blank"
              className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-100 px-6 py-4 text-slate-900 transition hover:border-cyan-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>

            <a
              href="https://github.com/luandoliveira"
              target="_blank"
              className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-100 px-6 py-4 text-slate-900 transition hover:border-cyan-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            >
              <FaGithub size={20} />
              GitHub
            </a>

            <a
              href="https://wa.me/5592982656453"
              target="_blank"
              className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-100 px-6 py-4 text-slate-900 transition hover:border-cyan-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Luan de Oliveira.
          Todos os direitos reservados.
        </footer>
      </div>
    </section>
  );
}