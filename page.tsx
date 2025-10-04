"use client"

import { useState, useEffect } from "react"
import { Phone, Mail, ArrowLeft, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

// Floating animation elements
const FloatingElement = ({ delay = 0, size = "w-4 h-4", color = "bg-blue-200" }) => {
  return (
    <div
      className={`absolute ${size} ${color} rounded-full opacity-20 animate-float`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${3 + Math.random() * 4}s`,
      }}
    />
  )
}

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <FloatingElement
            key={i}
            delay={i * 0.5}
            size={i % 3 === 0 ? "w-6 h-6" : i % 2 === 0 ? "w-3 h-3" : "w-4 h-4"}
            color={
              i % 4 === 0
                ? "bg-blue-300"
                : i % 4 === 1
                  ? "bg-indigo-300"
                  : i % 4 === 2
                    ? "bg-purple-300"
                    : "bg-cyan-300"
            }
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="hover:bg-white/50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Shop
              </Button>
            </Link>
            <div className="flex-1 text-center">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Contact Us to Buy
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Contact Information */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <ShoppingBag className="w-16 h-16 mx-auto mb-6 text-blue-600" />
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Ready to Purchase?</h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Get in touch with us to complete your order. We're here to help you with any questions and ensure a smooth
            purchasing experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Phone Contact */}
          <Card className="bg-white/70 backdrop-blur-sm border-white/20 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Call Us</h3>
              <p className="text-slate-600 mb-6">
                Speak directly with our sales team for immediate assistance and personalized service.
              </p>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-slate-900">+1 (555) 123-4567</p>
                <p className="text-sm text-slate-500">Monday - Friday, 9AM - 6PM EST</p>
              </div>
              <Button
                className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full transition-all duration-200 hover:scale-105"
                onClick={() => (window.location.href = "tel:+15551234567")}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </CardContent>
          </Card>

          {/* Email Contact */}
          <Card className="bg-white/70 backdrop-blur-sm border-white/20 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Email Us</h3>
              <p className="text-slate-600 mb-6">
                Send us your order details and we'll get back to you within 24 hours with next steps.
              </p>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-slate-900">orders@myshop.com</p>
                <p className="text-sm text-slate-500">We respond within 24 hours</p>
              </div>
              <Button
                className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-200 hover:scale-105"
                onClick={() => (window.location.href = "mailto:orders@myshop.com?subject=Product Order Inquiry")}
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <Card className="bg-white/70 backdrop-blur-sm border-white/20">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center">What to Include in Your Order</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Product Details</h4>
                <p className="text-sm text-slate-600">Item name, quantity, and any specific preferences</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-indigo-600 font-bold">2</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Contact Info</h4>
                <p className="text-sm text-slate-600">Your phone number and preferred contact method</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Shipping Address</h4>
                <p className="text-sm text-slate-600">Complete delivery address for your order</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
