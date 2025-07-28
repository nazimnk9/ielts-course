"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  if (!isMounted) {
    return null
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="10 Minute School" className="h-8 sm:h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-[#eb2026] transition-colors font-medium text-sm lg:text-base"
            >
              Courses
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-[#eb2026] transition-colors font-medium text-sm lg:text-base"
            >
              Skills
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-[#eb2026] transition-colors font-medium text-sm lg:text-base"
            >
              Admission
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-[#eb2026] transition-colors font-medium text-sm lg:text-base"
            >
              About
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <Button
              variant="outline"
              className="border-[#eb2026] text-[#eb2026] hover:bg-red-50 bg-transparent text-sm lg:text-base"
            >
              Sign In
            </Button>
            <Button className="bg-[#eb2026] hover:bg-red-700 text-sm lg:text-base">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 animate-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-[#eb2026] transition-colors font-medium px-4">
                Courses
              </a>
              <a href="#" className="text-gray-700 hover:text-[#eb2026] transition-colors font-medium px-4">
                Skills
              </a>
              <a href="#" className="text-gray-700 hover:text-[#eb2026] transition-colors font-medium px-4">
                Admission
              </a>
              <a href="#" className="text-gray-700 hover:text-[#eb2026] transition-colors font-medium px-4">
                About
              </a>
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-gray-200">
                <Button variant="outline" className="border-[#eb2026] text-[#eb2026] bg-transparent">
                  Sign In
                </Button>
                <Button className="bg-[#eb2026] hover:bg-red-700">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}