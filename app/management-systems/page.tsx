import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

export default function ManagementSystemsPage() {
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
            <Link href="/management-systems" className="text-sm font-medium text-blue-600">
              Management Systems
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
            <h1 className="text-4xl font-bold mb-4">Management Systems</h1>
            <p className="text-xl text-blue-100">
              Comprehensive implementation and maintenance of ISO standards and management systems
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Management Systems Matter</h2>
                <p className="text-gray-600 mb-4">
                  Management systems provide a structured approach to managing your organization's processes, ensuring
                  consistency, efficiency, and continuous improvement. They help you meet regulatory requirements,
                  improve customer satisfaction, and achieve operational excellence.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Improved operational efficiency</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Enhanced customer satisfaction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Regulatory compliance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Risk management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Continuous improvement culture</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Management systems implementation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-center mb-12">Our Management System Services</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge>Quality</Badge>
                  </div>
                  <CardTitle>ISO 9001 - Quality Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Implement a robust quality management system that focuses on customer satisfaction, process
                    improvement, and consistent delivery of products and services.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Gap analysis and planning</li>
                    <li>• Process documentation</li>
                    <li>• Staff training and awareness</li>
                    <li>• Internal audit support</li>
                    <li>• Certification preparation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">Environment</Badge>
                  </div>
                  <CardTitle>ISO 14001 - Environmental Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Develop an environmental management system that helps reduce environmental impact, ensure
                    compliance, and demonstrate environmental responsibility.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Environmental impact assessment</li>
                    <li>• Legal compliance review</li>
                    <li>• Environmental policy development</li>
                    <li>• Monitoring and measurement</li>
                    <li>• Continuous improvement</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">Safety</Badge>
                  </div>
                  <CardTitle>ISO 45001 - Occupational Health & Safety</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Implement a comprehensive occupational health and safety management system to protect workers and
                    create safer workplaces.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Hazard identification and risk assessment</li>
                    <li>• Safety policy and objectives</li>
                    <li>• Emergency preparedness</li>
                    <li>• Incident investigation</li>
                    <li>• Worker participation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge>Security</Badge>
                  </div>
                  <CardTitle>ISO 27001 - Information Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Establish an information security management system to protect sensitive information and ensure
                    business continuity.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Risk assessment and treatment</li>
                    <li>• Security controls implementation</li>
                    <li>• Access control management</li>
                    <li>• Incident response planning</li>
                    <li>• Business continuity planning</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">Energy</Badge>
                  </div>
                  <CardTitle>ISO 50001 - Energy Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Develop an energy management system to improve energy performance, reduce costs, and decrease
                    greenhouse gas emissions.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Energy review and baseline</li>
                    <li>• Energy performance indicators</li>
                    <li>• Energy objectives and targets</li>
                    <li>• Monitoring and measurement</li>
                    <li>• Energy efficiency improvements</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">Integration</Badge>
                  </div>
                  <CardTitle>Integrated Management Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Combine multiple management systems into a single, integrated framework for improved efficiency and
                    reduced duplication.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• System integration planning</li>
                    <li>• Common documentation</li>
                    <li>• Unified audit processes</li>
                    <li>• Streamlined management review</li>
                    <li>• Cost optimization</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let us help you implement and maintain management systems that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Get a Free Consultation</Link>
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
