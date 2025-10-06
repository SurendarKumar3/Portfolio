'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { personal } from '@/config/portfolio-content'

interface SplashScreenProps {
  onComplete: () => void
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Auto-hide splash screen after animation completes
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 500) // Wait for fade out animation
    }, 3000) // Show for 3 seconds

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--background)]"
      />
    )
  }

  const nameParts = personal.name.split(' ')

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--background)]"
    >
      <div className="text-center">
        {/* Animated Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-[var(--primary)]"
          >
            {nameParts[0]}
          </motion.span>{' '}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {nameParts.slice(1).join(' ')}
          </motion.span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-xl md:text-2xl text-[var(--foreground)]/80"
        >
          {personal.title}
        </motion.p>

        {/* Animated Loading Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.5, delay: 0.5 }}
          className="mt-8 h-1 bg-[var(--primary)] rounded-full max-w-xs mx-auto"
        />

        {/* Pulsing Dot Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
          className="mt-6 w-3 h-3 bg-[var(--primary)] rounded-full mx-auto"
        />
      </div>
    </motion.div>
  )
}

