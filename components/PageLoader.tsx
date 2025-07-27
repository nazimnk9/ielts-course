"use client"

import { useState, useEffect } from "react"

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 150)

    // Minimum loading time
    const minLoadTime = setTimeout(() => {
      setProgress(100)
    }, 2000)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(minLoadTime)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-red-50" />

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-[#eb2026]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#231f20]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#eb2026]/5 rounded-full blur-2xl animate-pulse delay-500" />

      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-8 animate-in zoom-in-50 duration-1000">
          <div className="inline-block bg-white p-4 rounded-2xl shadow-2xl">
            <img src="/logo.svg" alt="10 Minute School" className="h-16 w-auto" />
          </div>
        </div>

        {/* Loading Animation */}
        <div className="mb-8 animate-in slide-in-from-bottom-4 duration-1000 delay-300">
          <div className="relative w-64 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#eb2026] to-red-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
          </div>
          <div className="mt-3 text-sm text-gray-600 font-medium">Loading... {Math.round(progress)}%</div>
        </div>

        {/* Loading Text */}
        <div className="animate-in slide-in-from-bottom-4 duration-1000 delay-500">
          <h2 className="text-2xl font-bold text-[#231f20] mb-2">Preparing Your IELTS Journey</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Get ready to achieve your dream IELTS score with our comprehensive preparation course
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#eb2026] rounded-full animate-bounce delay-700" />
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#231f20] rounded-full animate-bounce delay-1000" />
        <div className="absolute top-1/2 -right-8 w-4 h-4 bg-[#eb2026]/60 rounded-full animate-bounce delay-500" />

        {/* Spinning Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#eb2026] rounded-full animate-ping" />
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-[#231f20]/40 rounded-full animate-ping delay-300" />
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#eb2026]/60 rounded-full animate-ping delay-700" />
        </div>
      </div>
    </div>
  )
}
