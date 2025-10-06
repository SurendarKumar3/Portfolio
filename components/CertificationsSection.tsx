'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Award } from 'lucide-react'
import { certifications } from '@/config/portfolio-content'

export function CertificationsSection() {

  return (
    <section
      id="certifications"
      className="py-20 px-4 bg-[var(--secondary)]"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Certifications
        </motion.h2>

        {/* Certifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[var(--card)] border-2 border-[var(--border)] rounded-lg overflow-hidden hover:border-[var(--primary)] transition-colors duration-200"
            >
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-[var(--primary)]/10 rounded-lg">
                    <Award className="h-5 w-5 text-[var(--primary)]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-1 leading-tight">{cert.name}</h4>
                    <p className="text-sm text-[var(--foreground)]/70">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[var(--foreground)]/60 mb-4">
                  {cert.date}
                </p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--background)] border-2 border-[var(--border)] rounded-md hover:border-[var(--primary)] hover:scale-105 transition-all text-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Certificate
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

