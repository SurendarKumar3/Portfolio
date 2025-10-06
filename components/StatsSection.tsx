'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { Award, Briefcase, Trophy, GraduationCap } from 'lucide-react'
import { stats } from '@/config/portfolio-content'

interface StatItemProps {
  icon: React.ReactNode
  end: number
  label: string
  duration?: number
}

function StatItem({ icon, end, label, duration = 2 }: StatItemProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / (duration * 1000)

      if (progress < 1) {
        setCount(Math.floor(end * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, end, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center p-6"
    >
      <div className="mb-4 p-4 bg-[var(--primary)]/10 rounded-full border-2 border-[var(--primary)]/20">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-2">
        {count}
      </div>
      <div className="text-sm md:text-base text-[var(--foreground)]/70 text-center">
        {label}
      </div>
    </motion.div>
  )
}

export function StatsSection() {
  const statsData = [
    {
      icon: <Award className="h-8 w-8 text-[var(--primary)]" />,
      end: stats.awards,
      label: 'Certifications',
    },
    {
      icon: <Briefcase className="h-8 w-8 text-[var(--primary)]" />,
      end: stats.projects,
      label: 'Major Projects',
    },
    {
      icon: <Trophy className="h-8 w-8 text-[var(--primary)]" />,
      end: stats.hackathons,
      label: 'Hackathons',
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-[var(--primary)]" />,
      end: stats.cgpa,
      label: 'CGPA (9.05/10)',
      suffix: '.05',
    },
  ]

  return (
    <section className="py-20 px-4 bg-[var(--secondary)]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              end={stat.end}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

