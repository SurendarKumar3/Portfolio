'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { GraduationCap, Code, Award, Calendar, MapPin } from 'lucide-react'
import { education, skillsWithProficiency, achievements } from '@/config/portfolio-content'

export function TabbedResumeSection() {
  const [activeTab, setActiveTab] = useState<'education' | 'skills' | 'awards'>('education')

  const tabs = [
    { id: 'education' as const, label: 'Education', icon: <GraduationCap className="h-5 w-5" /> },
    { id: 'skills' as const, label: 'Skills', icon: <Code className="h-5 w-5" /> },
    { id: 'awards' as const, label: 'Awards', icon: <Award className="h-5 w-5" /> },
  ]

  return (
    <section id="resume" className="py-20 px-4 bg-[var(--background)]">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Resume
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center mb-12 flex-wrap gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-[var(--primary)] text-white shadow-lg scale-105'
                  : 'bg-[var(--card)] border-2 border-[var(--border)] hover:border-[var(--primary)]'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {/* Education Tab */}
          {activeTab === 'education' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-[var(--card)] border-2 border-[var(--border)] rounded-lg hover:border-[var(--primary)] transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[var(--primary)]/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-[var(--primary)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 text-sm text-[var(--foreground)]/60">
                        <Calendar className="h-4 w-4" />
                        <span>{item.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
                      <div className="flex items-center gap-2 text-[var(--foreground)]/80 mb-2">
                        <MapPin className="h-4 w-4" />
                        <span>{item.institution}, {item.location}</span>
                      </div>
                      <p className="text-sm font-medium text-[var(--primary)] mb-2">
                        {item.cgpa ? `CGPA: ${item.cgpa}` : `Percentage: ${item.percentage}`}
                      </p>
                      <p className="text-sm text-[var(--foreground)]/60">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {skillsWithProficiency.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-[var(--foreground)]">{skill.name}</span>
                    <span className="text-[var(--primary)]">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-[var(--secondary)] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                      className="h-full bg-[var(--primary)] rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Awards Tab */}
          {activeTab === 'awards' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {achievements.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-[var(--card)] border-2 border-[var(--border)] rounded-lg hover:border-[var(--primary)] transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[var(--primary)]/10 rounded-lg">
                      <Award className="h-6 w-6 text-[var(--primary)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 text-sm text-[var(--foreground)]/60">
                        <Calendar className="h-4 w-4" />
                        <span>{award.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                      <p className="text-[var(--foreground)]/80 mb-2">{award.organization}</p>
                      <p className="text-sm text-[var(--foreground)]/60">{award.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

