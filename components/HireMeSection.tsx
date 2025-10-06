'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function HireMeSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[var(--primary)]/10 to-[var(--primary)]/5">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            I'm Available for Freelancing
          </h2>
          <p className="text-lg text-[var(--foreground)]/80 mb-8 max-w-2xl mx-auto">
            {/* TODO: Replace with your actual description */}
            Skilled in creating efficient, high-quality code with a strong understanding of software development principles.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-[var(--primary-dark)] transition-colors shadow-lg"
          >
            Hire Me
            <ArrowRight className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

