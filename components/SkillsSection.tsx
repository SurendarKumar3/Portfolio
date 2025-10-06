'use client'

import { motion } from 'framer-motion'
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Smartphone,
  GitBranch,
  Brain,
  Cloud,
  Terminal,
  Palette
} from 'lucide-react'

export function SkillsSection() {
  // TODO: Replace with your actual skills
  const skills = [
    { name: 'Python', icon: Code2 },
    { name: 'JavaScript', icon: Code2 },
    { name: 'TypeScript', icon: Code2 },
    { name: 'React', icon: Globe },
    { name: 'Next.js', icon: Globe },
    { name: 'Node.js', icon: Server },
    { name: 'Express', icon: Server },
    { name: 'MongoDB', icon: Database },
    { name: 'SQL', icon: Database },
    { name: 'Git', icon: GitBranch },
    { name: 'Machine Learning', icon: Brain },
    { name: 'AWS', icon: Cloud },
    { name: 'Docker', icon: Terminal },
    { name: 'HTML/CSS', icon: Palette },
    { name: 'Tailwind CSS', icon: Palette },
  ]

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-[var(--background)]"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="group text-center cursor-default"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-3 p-4 rounded-lg bg-[var(--card)] border-2 border-[var(--border)] group-hover:border-[var(--primary)] transition-all duration-200">
                    <Icon className="h-8 w-8 text-[var(--primary)] group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <h3 className="text-sm md:text-base font-medium text-[var(--foreground)]/80 group-hover:text-[var(--foreground)] transition-colors duration-200">
                    {skill.name}
                  </h3>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Skills Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-[var(--foreground)]/60 text-sm">
            {/* TODO: Add any additional information about your skills */}
            And many more technologies and tools...
          </p>
        </motion.div>
      </div>
    </section>
  )
}

