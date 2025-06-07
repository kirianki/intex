import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

export default function OutsourcingPage() {
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
            <Link href="/outsourcing" className="text-sm font-medium text-blue-600">
              Outsourcing
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
            <h1 className="text-4xl font-bold mb-4">Outsourcing Services</h1>
            <p className="text-xl text-blue-100">
              Expert outsourcing solutions to help you manage your quality systems and processes efficiently
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Outsource Your Quality Management?</h2>
                <p className="text-gray-600 mb-4">
                  Outsourcing your quality management functions allows you to focus on your core business while ensuring
                  your quality systems are maintained by experts. Our outsourcing services provide cost-effective
                  solutions without compromising on quality or compliance.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Focus on your core business activities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Access to specialized expertise</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Cost-effective quality management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Scalable resources based on your needs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Consistent compliance with standards</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Outsourcing services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-center mb-12">Our Outsourcing Services</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge>Quality</Badge>
                  </div>
                  <CardTitle>Quality Management System Maintenance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We maintain your quality management system, ensuring it remains effective, up-to-date, and compliant
                    with relevant standards.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Document control and updates</li>
                    <li>• Process monitoring</li>
                    <li>• Management review preparation</li>
                    <li>• Corrective action management</li>
                    <li>• Continuous improvement initiatives</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">Audit</Badge>
                  </div>
                  <CardTitle>Internal Audit Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Our experienced auditors conduct thorough internal audits of your management systems to identify
                    improvement opportunities and ensure compliance.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Audit planning and scheduling</li>
                    <li>• Comprehensive system audits</li>
                    <li>• Process-specific audits</li>
                    <li>• Detailed audit reports</li>
                    <li>• Corrective action recommendations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">Compliance</Badge>
                  </div>
                  <CardTitle>Compliance Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We help you navigate complex regulatory requirements and ensure your operations remain compliant
                    with relevant standards and regulations.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Regulatory tracking and updates</li>
                    <li>• Compliance gap analysis</li>
                    <li>• Implementation of compliance measures</li>
                    <li>• Compliance documentation</li>
                    <li>• Liaison with regulatory bodies</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge>Software</Badge>
                  </div>
                  <CardTitle>Q-Pulse Administration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Our Q-Pulse experts manage your quality management software, ensuring optimal configuration,
                    maintenance, and utilization.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• System configuration and setup</li>
                    <li>• User management and access control</li>
                    <li>• Workflow optimization</li>
                    <li>• Report generation and analysis</li>
                    <li>• System updates and maintenance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">Documentation</Badge>
                  </div>
                  <CardTitle>Documentation Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We handle all aspects of your quality documentation, ensuring it is well-organized, up-to-date, and
                    accessible to relevant stakeholders.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Document creation and revision</li>
                    <li>• Document control system management</li>
                    <li>• Distribution and access management</li>
                    <li>• Obsolete document control</li>
                    <li>• Documentation compliance checks</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">Training</Badge>
                  </div>
                  <CardTitle>Training Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We manage your training programs, ensuring your team has the necessary skills and knowledge to
                    maintain quality standards.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Training needs assessment</li>
                    <li>• Training program development</li>
                    <li>• Training delivery and facilitation</li>
                    <li>• Competency evaluation</li>
                    <li>• Training records management</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Outsourcing benefits"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Outsourcing Approach</h2>
                <p className="text-gray-600 mb-4">
                  We take a collaborative approach to outsourcing, working closely with your team to understand your
                  specific needs and develop tailored solutions that align with your business objectives.
                </p>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold">Assessment</h3>
                      <p className="text-gray-600">
                        We conduct a thorough assessment of your current systems, processes, and requirements.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold">Solution Design</h3>
                      <p className="text-gray-600">
                        We design a customized outsourcing solution that addresses your specific needs and challenges.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold">Implementation</h3>
                      <p className="text-gray-600">
                        We implement the solution with minimal disruption to your operations, ensuring a smooth
                        transition.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold">Ongoing Management</h3>
                      <p className="text-gray-600">
                        We provide continuous management and support, with regular reviews and adjustments as needed.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Outsource Your Quality Management?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how our outsourcing services can help you achieve your quality objectives
              while focusing on your core business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/request-quotation">Request a Quote</Link>
              </Button>
            </div>
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
