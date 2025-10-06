'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'
import { personal, bio, education } from '@/config/portfolio-content'

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-[var(--secondary)]"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Hello, I'm {personal.firstName}
            </h3>
            <div className="text-[var(--foreground)]/80 leading-relaxed space-y-4">
              {bio.detailed.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-[var(--primary)]" />
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`border-l-4 ${index === 0 ? 'border-[var(--primary)]' : 'border-[var(--border)]'} pl-4`}
                >
                  <h4 className="text-lg font-semibold mb-1">
                    {edu.degree}
                  </h4>
                  {index === 0 && (
                    <p className="text-sm text-[var(--foreground)]/60 mb-2">
                      (Pursuing)
                    </p>
                  )}
                  <div className="flex items-center gap-2 text-sm text-[var(--foreground)]/60 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--foreground)]/60 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>{edu.institution}, {edu.location}</span>
                  </div>
                  <p className="font-medium text-[var(--primary)]">
                    {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

