import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQsPage() {
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
            <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">
              About Us
            </Link>
            <Link href="/faqs" className="text-sm font-medium text-blue-600">
              FAQs
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
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-blue-100">Find answers to common questions about our services</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-4xl">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  What is Q-Pulse and how can it benefit my organization?
                </AccordionTrigger>
                <AccordionContent>
                  Q-Pulse is a comprehensive quality management software that helps organizations manage their quality
                  processes, document control, risk management, and compliance requirements. It provides a centralized
                  platform for managing all aspects of your quality management system, improving efficiency and ensuring
                  regulatory compliance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  How long does it take to implement a management system?
                </AccordionTrigger>
                <AccordionContent>
                  The implementation timeline varies depending on the size of your organization, the complexity of your
                  processes, and the specific standard you're implementing. Typically, ISO 9001 implementation takes
                  6-12 months, while more complex standards like ISO 27001 may take 12-18 months. We work with you to
                  develop a realistic timeline that fits your business needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Do you provide training for our internal team?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer comprehensive training programs for your internal team, including Q-Pulse software
                  training, ISO standards awareness, internal auditor training, and management system implementation
                  training. Our training can be conducted on-site at your location or at our training facilities in
                  Nairobi and Mombasa.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">What industries do you serve?</AccordionTrigger>
                <AccordionContent>
                  We serve a wide range of industries including manufacturing, healthcare, financial services,
                  government agencies, education, technology, construction, and many others. Our consultants have
                  experience across various sectors and can adapt our solutions to meet industry-specific requirements
                  and regulations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">Can you help with certification audits?</AccordionTrigger>
                <AccordionContent>
                  While we don't conduct certification audits ourselves (as we're consultants, not certification
                  bodies), we prepare your organization thoroughly for certification audits. We conduct gap analyses,
                  pre-audit assessments, and provide guidance on selecting appropriate certification bodies. Our goal is
                  to ensure you're fully prepared and confident for your certification audit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  What ongoing support do you provide after implementation?
                </AccordionTrigger>
                <AccordionContent>
                  We provide comprehensive ongoing support including system maintenance, regular reviews, internal audit
                  support, management review facilitation, continuous improvement guidance, and help with system updates
                  when standards are revised. We believe in building long-term partnerships with our clients to ensure
                  sustained success.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">How do I get started with your services?</AccordionTrigger>
                <AccordionContent>
                  Getting started is easy! You can contact us through our website, phone, or email to schedule an
                  initial consultation. During this consultation, we'll discuss your specific needs, assess your current
                  situation, and propose a customized solution. We also offer free initial assessments to help you
                  understand what's involved in your quality management journey.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container text-center">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Still Have Questions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Can't find the answer you're looking for? Our team is here to help you with any questions about our
                  services, training programs, or software solutions.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2"
                >
                  Contact Us
                </Link>
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
