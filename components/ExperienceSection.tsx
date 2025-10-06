'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react'

export function ExperienceSection() {
  // TODO: Replace with your actual experience and achievements
  const experiences = [
    {
      title: 'Software Developer Intern',
      company: 'Company Name',
      location: 'City, Country',
      period: 'Month Year - Month Year',
      description: [
        'Developed and maintained web applications using React and Node.js',
        'Collaborated with cross-functional teams to deliver high-quality software',
        'Implemented new features and fixed bugs in existing codebase',
      ],
    },
    // Add more experiences as needed
  ]

  const achievements = [
    {
      title: 'Hackathon Winner',
      organization: 'Event Name',
      date: 'Month Year',
      description: 'Won first place in XYZ Hackathon for developing an innovative solution',
    },
    {
      title: 'Certification',
      organization: 'Issuing Organization',
      date: 'Month Year',
      description: 'Completed certification in Full Stack Development',
    },
    // Add more achievements as needed
  ]

  return (
    <section
      id="experience"
      className="py-20 px-4 bg-[var(--secondary)]"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Experience & Achievements
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-[var(--primary)]" />
              Work Experience
            </h3>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-[var(--card)] border-2 border-[var(--border)] rounded-lg hover:border-[var(--primary)] transition-colors duration-200"
                >
                  <h4 className="text-lg font-semibold mb-2">{exp.title}</h4>
                  <p className="text-[var(--foreground)]/80 font-medium mb-2">
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-[var(--foreground)]/60 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm text-[var(--foreground)]/80">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              {/* Placeholder if no experience */}
              {experiences.length === 0 && (
                <div className="p-6 bg-[var(--card)] border-2 border-dashed border-[var(--border)] rounded-lg text-center">
                  <p className="text-[var(--foreground)]/60">
                    Add your work experience here
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-[var(--primary)]" />
              Achievements
            </h3>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-[var(--card)] border-2 border-[var(--border)] rounded-lg hover:border-[var(--primary)] transition-colors duration-200"
                >
                  <h4 className="text-lg font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-[var(--foreground)]/80 font-medium mb-2">
                    {achievement.organization}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-[var(--foreground)]/60 mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{achievement.date}</span>
                  </div>
                  <p className="text-sm text-[var(--foreground)]/80">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

