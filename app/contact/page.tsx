"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, MessageSquare, Send, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "general",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-green-700 dark:text-green-300">Message Sent!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Thank you for contacting us. We'll get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Back to Editor
                </Link>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsSubmitted(false)
                    setFormData({
                      name: "",
                      email: "",
                      subject: "",
                      message: "",
                      category: "general",
                    })
                  }}
                >
                  Send Another Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Mail className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold">Contact Us</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions, feedback, or need help? We'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-6 w-6 text-blue-500" />
                    <span>Send us a Message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="category" className="text-sm font-medium">
                        Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="technical">Technical Support</option>
                        <option value="bug">Bug Report</option>
                        <option value="feature">Feature Request</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Brief description of your inquiry"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                        placeholder="Please provide as much detail as possible..."
                      />
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Methods */}
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">support@javacompiler.dev</div>
                      <div className="text-xs text-muted-foreground">We respond within 24 hours</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MessageSquare className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <div className="font-medium">Live Chat</div>
                      <div className="text-sm text-muted-foreground">Available Mon-Fri, 9AM-5PM EST</div>
                      <Badge variant="outline" className="mt-1">
                        Coming Soon
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Link */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Help</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Looking for quick answers? Check our FAQ section first.
                  </p>
                  <Link
                    href="/faq"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full"
                  >
                    View FAQ
                  </Link>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                <CardContent className="pt-6">
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-blue-600">&lt; 24h</div>
                    <div className="text-sm text-blue-700 dark:text-blue-300">Average Response Time</div>
                    <div className="text-xs text-blue-600 dark:text-blue-400">
                      We prioritize getting back to you quickly
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
