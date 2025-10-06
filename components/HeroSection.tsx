'use client'

import { Github, Linkedin, Instagram, Mail, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { TypedText } from './TypedText'
import { personal, social, bio, roles, education } from '@/config/portfolio-content'

export function HeroSection() {
  const currentEducation = education[0] // Get the most recent education
  const [imageError, setImageError] = useState(false)

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 bg-[var(--background)]"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {!imageError ? (
                <Image
                  src="/profile.jpg"
                  alt={`${personal.name} - Profile Photo`}
                  fill
                  className="object-cover rounded-full border-4 border-[var(--primary)]/30 shadow-xl"
                  priority
                  sizes="(max-width: 768px) 320px, 384px"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[var(--primary)]/20 to-[var(--primary)]/40 border-4 border-[var(--primary)]/30 flex items-center justify-center overflow-hidden shadow-xl">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[var(--primary)]/30 flex items-center justify-center">
                      <span className="text-7xl font-bold text-[var(--primary)]">
                        {personal.firstName.charAt(0)}
                      </span>
                    </div>
                    <p className="text-lg font-semibold text-[var(--foreground)]">
                      {personal.firstName}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-[var(--primary)] font-medium mb-2"
            >
              Hey! I am
            </motion.p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 whitespace-nowrap">
              <span className="text-[var(--foreground)]">{personal.name}</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-medium text-[var(--foreground)]/80 mb-6">
              I'm a <TypedText texts={roles} />
            </h2>

            <div className="space-y-4 mb-8">
              <div>
                <h3 className="font-semibold text-lg mb-2">Education</h3>
                <p className="text-[var(--foreground)]/80">
                  {currentEducation.degree}
                </p>
                <p className="text-[var(--foreground)]/60 text-sm">
                  {currentEducation.institution}
                </p>
                <p className="text-[var(--foreground)]/60 text-sm">
                  {currentEducation.year} | CGPA: {currentEducation.cgpa}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">About Me</h3>
                <p className="text-[var(--foreground)]/80 leading-relaxed">
                  {bio.short}
                </p>
              </div>
            </div>

            {/* Social Links & Resume */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--card)] border-2 border-[var(--border)] rounded-md hover:scale-105 transition-transform duration-200 text-sm"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>

              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--card)] border-2 border-[var(--border)] rounded-md hover:scale-105 transition-transform duration-200 text-sm"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>

              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--card)] border-2 border-[var(--border)] rounded-md hover:scale-105 transition-transform duration-200 text-sm"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="/Surendar_Resume.pdf"
                download="Surendar_Kumar_HP_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--primary)] text-white rounded-md hover:bg-[var(--primary-dark)] transition-colors duration-200"
              >
                <Download className="h-5 w-5" />
                Download Resume
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--card)] border-2 border-[var(--border)] rounded-md hover:scale-105 transition-transform duration-200"
              >
                <Mail className="h-5 w-5" />
                Email Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

