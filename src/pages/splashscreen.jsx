/* eslint-disable no-unused-vars */
"use client"
import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe } from "lucide-react"

const steps = [
  "Authenticating services",
  "Loading core modules",
  "Syncing cloud data",
  "Optimizing performance",
  "Ready"
]

const DOMAIN = "www.yusyfinayuniarti.my.id"

export default function SplashScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0)
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + Math.random() * 6 + 2, 100)
        setStep(Math.floor(next / 20))

        if (next === 100) {
          clearInterval(timer)
          setTimeout(() => onLoadingComplete?.(), 500)
        }
        return next
      })
    }, 35)

    return () => clearInterval(timer)
  }, [])

  const typedLength = Math.floor((progress / 100) * DOMAIN.length)
  const typedText = DOMAIN.slice(0, typedLength)

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-primary text-primary transition-colors duration-500">

      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-primary)] to-[var(--bg-secondary)]" />

      <motion.div
        animate={{
          x: [0, 150, -120, 0],
          y: [0, -120, 100, 0],
          scale: [1, 1.2, 0.9, 1]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-64 -top-64 h-[700px] w-[700px] rounded-full bg-cyan-500/20 blur-[200px]"
      />

      <motion.div
        animate={{
          x: [0, -160, 80, 0],
          y: [0, 140, -100, 0],
          scale: [1, 0.9, 1.1, 1]
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-64 -right-64 h-[700px] w-[700px] rounded-full bg-indigo-500/20 blur-[200px]"
      />

      <motion.div
        animate={{
          x: [0, 60, -60, 0],
          y: [0, 80, -80, 0],
          scale: [1, 1.1, 0.95, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[30%] top-[20%] h-[600px] w-[600px] rounded-full bg-blue-400/10 blur-[180px]"
      />

      {/* CARD */}
      <div className="relative w-[420px] rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-[0_20px_80px_rgba(0,0,0,0.6)] backdrop-blur-3xl">

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-[11px] tracking-[0.4em] text-cyan-300"
        >
          STARTING PORTFOLIO
        </motion.h1>

        <motion.div
          key={progress}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-5xl font-semibold"
        >
          {Math.floor(progress)}%
        </motion.div>

        <div className="mt-6 h-[6px] w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            style={{ width: `${progress}%` }}
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={step}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-text-secondary mt-5 text-xs transition-colors duration-500"
          >
            {steps[step]}
          </motion.p>
        </AnimatePresence>

        <div className="text-text-secondary mt-10 flex items-center justify-center gap-2 font-mono text-sm transition-colors duration-500">
          <Globe size={16} className="text-cyan-300" />
          <span>
            {typedText}
            <span className="ml-1 animate-pulse text-cyan-300">|</span>
          </span>
        </div>

      </div>
    </div>
  )
}