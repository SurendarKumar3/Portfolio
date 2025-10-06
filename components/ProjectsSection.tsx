'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Calendar, Code2 } from 'lucide-react'
import { projects } from '@/config/portfolio-content'

export function ProjectsSection() {

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-[var(--background)]"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[var(--card)] border-2 border-[var(--border)] rounded-lg overflow-hidden hover:border-[var(--primary)] transition-all duration-300 hover:shadow-lg"
            >
              {/* Project Header with Icon */}
              <div className="relative bg-gradient-to-br from-[var(--primary)]/10 to-[var(--primary)]/5 p-6 border-b-2 border-[var(--border)]">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-[var(--foreground)]/60">
                      <Calendar className="h-4 w-4" />
                      <span>{project.date}</span>
                    </div>
                  </div>
                  <div className="p-3 bg-[var(--primary)]/10 rounded-lg">
                    <Code2 className="h-6 w-6 text-[var(--primary)]" />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-[var(--foreground)]/80 text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-5">
                  <h4 className="text-xs font-semibold text-[var(--foreground)]/60 uppercase tracking-wider mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs font-medium bg-[var(--primary)]/10 text-[var(--primary)] rounded-md border border-[var(--primary)]/20 hover:bg-[var(--primary)]/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-[var(--border)]">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[var(--background)] border-2 border-[var(--border)] rounded-md hover:border-[var(--primary)] hover:scale-105 transition-all text-sm font-medium"
                    >
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[var(--primary)] text-white rounded-md hover:scale-105 transition-all text-sm font-medium"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

