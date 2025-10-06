'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { ThemeToggle } from '@/components/ThemeToggle'
import { SplashScreen } from '@/components/SplashScreen'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { TabbedResumeSection } from '@/components/TabbedResumeSection'
import { SkillsSection } from '@/components/SkillsSection'
import { ExperienceSection } from '@/components/ExperienceSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { StatsSection } from '@/components/StatsSection'
import { CertificationsSection } from '@/components/CertificationsSection'
import { HireMeSection } from '@/components/HireMeSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  // Set to false to disable splash screen
  const [showSplash, setShowSplash] = useState(false) // Changed to false by default

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <div className="min-h-screen">
        <Header />
        <ThemeToggle />
        <main>
          <HeroSection />
          <AboutSection />
          <TabbedResumeSection />
          <StatsSection />
          <ProjectsSection />
          <CertificationsSection />
          <HireMeSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
