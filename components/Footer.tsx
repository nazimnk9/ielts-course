"use client"

import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  Users,
  Award,
  Globe,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Footer() {
  return (
    <footer className="bg-[#231f20] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#231f20] via-[#231f20] to-[#1a1718]" />
      <div className="absolute top-0 left-0 w-full h-1 bg-[#eb2026]" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-[#eb2026]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-[#eb2026]/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="bg-[#eb2026] py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Stay Updated with IELTS Tips & News</h3>
              <p className="text-red-100 mb-6 text-sm sm:text-base">
                Get exclusive study materials, exam tips, and course updates delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button className="bg-white text-[#eb2026] hover:bg-gray-100 font-semibold px-6 py-6">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                {/* Logo with white background */}
                <div className="inline-block bg-white p-3 rounded-lg mb-4">
                  <img src="/logo.svg" alt="10 Minute School" className="h-8 w-auto" />
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Bangladesh's leading online education platform, empowering millions of students to achieve their
                  academic and career goals through quality education.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Youtube, href: "#", label: "YouTube" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-700 hover:bg-[#eb2026] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  "All Courses",
                  "IELTS Preparation",
                  "Skill Development",
                  "University Admission",
                  "Job Preparation",
                  "Free Resources",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#eb2026] transition-colors duration-300 text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Support</h4>
              <ul className="space-y-3">
                {["Help Center", "Contact Us", "Live Chat", "FAQ", "Technical Support", "Refund Policy"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#eb2026] transition-colors duration-300 text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#eb2026] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-300 text-sm">
                      Ka-244, Progoti Shoroni
                      <br />
                      Kuril, Dhaka-1229
                      <br />
                      Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#eb2026] flex-shrink-0" />
                  <a href="tel:+8809610001010" className="text-gray-300 hover:text-[#eb2026] transition-colors text-sm">
                    +880 9610 001 010
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#eb2026] flex-shrink-0" />
                  <a
                    href="mailto:support@10minuteschool.com"
                    className="text-gray-300 hover:text-[#eb2026] transition-colors text-sm"
                  >
                    support@10minuteschool.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 pt-12 border-t border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: Users, value: "2M+", label: "Students" },
                { icon: BookOpen, value: "500+", label: "Courses" },
                { icon: Award, value: "95%", label: "Success Rate" },
                { icon: Globe, value: "64", label: "Districts" },
              ].map((stat, index) => (
                <Card
                  key={stat.label}
                  className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto mb-3 bg-[#eb2026] rounded-full flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* App Download Section */}
          <div className="mt-16 pt-12 border-t border-gray-700">
            <div className="text-center mb-8">
              <h4 className="text-xl font-semibold mb-4 text-white">Download Our Mobile App</h4>
              <p className="text-gray-300 text-sm mb-6">
                Learn on the go with our mobile app. Available on both iOS and Android platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                    <span className="text-black font-bold text-xs">▶</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                    <span className="text-black font-bold text-xs">🍎</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-black/30 border-t border-gray-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-400 text-center md:text-left">
                © 2024 10 Minute School. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-[#eb2026] transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-[#eb2026] transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-[#eb2026] transition-colors">
                  Cookie Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-[#eb2026] transition-colors">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
