'use client'

import { Github, Linkedin, Instagram, Mail, Heart } from 'lucide-react'
import { personal, social } from '@/config/portfolio-content'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--secondary)] py-10 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Name and Title */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-1">
              {personal.name}
            </h3>
            <p className="text-[var(--foreground)]/60">
              {personal.title}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-[var(--primary)] transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-[var(--primary)] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-[var(--primary)] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2 hover:text-[var(--primary)] transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[var(--border)] text-center">
          <p className="text-sm text-[var(--foreground)]/60 flex items-center justify-center gap-1">
            © {currentYear} {personal.name}. All rights reserved. Made with{' '}
            <Heart className="h-4 w-4 text-red-500 fill-red-500" /> and Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}

