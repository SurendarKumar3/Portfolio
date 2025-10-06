'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Github, Linkedin, Instagram, Send } from 'lucide-react'
import { useState } from 'react'
import { personal, social } from '@/config/portfolio-content'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission logic (e.g., EmailJS, Formspree, or your backend)
    console.log('Form submitted:', formData)
    alert('Thank you for your message! (Note: Form submission not yet implemented)')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-[var(--background)]"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Contact Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-[var(--foreground)]/80 mb-12"
        >
          Want to connect? My inbox is always open!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            
            <div className="space-y-4 mb-8">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--card)] border-2 border-[var(--border)] rounded-lg">
                  <Mail className="h-5 w-5 text-[var(--primary)]" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-[var(--foreground)]/80 hover:text-[var(--primary)] transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--card)] border-2 border-[var(--border)] rounded-lg">
                  <Phone className="h-5 w-5 text-[var(--primary)]" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a
                    href={`tel:${personal.phone}`}
                    className="text-[var(--foreground)]/80 hover:text-[var(--primary)] transition-colors"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--card)] border-2 border-[var(--border)] rounded-lg">
                  <MapPin className="h-5 w-5 text-[var(--primary)]" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-[var(--foreground)]/80">
                    {personal.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[var(--card)] border-2 border-[var(--border)] rounded-lg hover:border-[var(--primary)] hover:scale-110 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[var(--card)] border-2 border-[var(--border)] rounded-lg hover:border-[var(--primary)] hover:scale-110 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[var(--card)] border-2 border-[var(--border)] rounded-lg hover:border-[var(--primary)] hover:scale-110 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--card)] border-2 border-[var(--border)] rounded-lg focus:border-[var(--primary)] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--card)] border-2 border-[var(--border)] rounded-lg focus:border-[var(--primary)] focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[var(--card)] border-2 border-[var(--border)] rounded-lg focus:border-[var(--primary)] focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-dark)] transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>

              <p className="text-xs text-[var(--foreground)]/40 text-center">
                💡 TODO: Implement form submission (EmailJS, Formspree, or custom backend)
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

