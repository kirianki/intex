"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

export default function RequestTrainingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    trainingType: "introduction",
    participants: "",
    preferredDate: "",
    message: "",
    agreeTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your training request! We will get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      trainingType: "introduction",
      participants: "",
      preferredDate: "",
      message: "",
      agreeTerms: false,
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleRadioChange = (value: string) => {
    setFormData({
      ...formData,
      trainingType: value,
    })
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      agreeTerms: checked,
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Intex Management Services Logo"
              width={150}
              height={60}
              className="h-12 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/training" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Training
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">Request Training</h1>
            <p className="text-xl text-blue-100">Fill out the form below to request training for your team</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-3xl">
            <Card>
              <CardHeader>
                <CardTitle>Training Request Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Contact Information</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+254 xxx xxx xxx"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company/Organization *</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Training Details</h3>
                    <div className="space-y-2">
                      <Label>Training Type *</Label>
                      <RadioGroup
                        value={formData.trainingType}
                        onValueChange={handleRadioChange}
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="introduction" id="introduction" />
                          <Label htmlFor="introduction">Introduction to Q-Pulse</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="administration" id="administration" />
                          <Label htmlFor="administration">Q-Pulse Administration</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="advanced" id="advanced" />
                          <Label htmlFor="advanced">Q-Pulse Advanced Training</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="iso" id="iso" />
                          <Label htmlFor="iso">ISO Implementation Training</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Other (please specify in message)</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="participants">Number of Participants *</Label>
                        <Input
                          id="participants"
                          name="participants"
                          type="number"
                          min="1"
                          value={formData.participants}
                          onChange={handleChange}
                          required
                          placeholder="Number of participants"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredDate">Preferred Training Date</Label>
                        <Input
                          id="preferredDate"
                          name="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please provide any additional information or specific requirements for the training"
                        rows={4}
                      />
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onCheckedChange={handleCheckboxChange}
                      required
                    />
                    <Label htmlFor="agreeTerms" className="text-sm">
                      I agree to the processing of my personal data in accordance with the privacy policy
                    </Label>
                  </div>

                  <Button type="submit" className="w-full">
                    Submit Training Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Intex Management Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
