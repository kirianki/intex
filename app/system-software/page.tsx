import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Monitor, Database, Shield, BarChart } from "lucide-react"

export default function SystemSoftwarePage() {
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
            <Link href="/system-software" className="text-sm font-medium text-blue-600">
              System Software
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
            <h1 className="text-4xl font-bold mb-4">System Software Solutions</h1>
            <p className="text-xl text-blue-100">
              Powerful software solutions to streamline your quality management and compliance processes
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Q-Pulse Quality Management Software</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Q-Pulse is a comprehensive quality management software solution that helps organizations manage their
                quality processes, document control, risk management, and compliance requirements in one integrated
                platform.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-center mb-16">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Q-Pulse software interface"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Why Choose Q-Pulse?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                    <div>
                      <strong>Comprehensive Solution:</strong> Manage all aspects of your quality system from a single
                      platform
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                    <div>
                      <strong>User-Friendly Interface:</strong> Intuitive design that requires minimal training for your
                      team
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                    <div>
                      <strong>Scalable:</strong> Grows with your organization from small teams to enterprise-level
                      implementations
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                    <div>
                      <strong>Compliance Ready:</strong> Built-in templates and workflows for various industry standards
                      and regulations
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-center mb-12">Q-Pulse Modules</h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="text-center">
                  <Monitor className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Document Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Version control</li>
                    <li>• Approval workflows</li>
                    <li>• Distribution management</li>
                    <li>• Automated notifications</li>
                    <li>• Audit trails</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Database className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Non-Conformance Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Issue tracking</li>
                    <li>• Root cause analysis</li>
                    <li>• Corrective actions</li>
                    <li>• Preventive actions</li>
                    <li>• Trend analysis</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Risk Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Risk identification</li>
                    <li>• Risk assessment</li>
                    <li>• Mitigation planning</li>
                    <li>• Risk monitoring</li>
                    <li>• Risk reporting</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <BarChart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Analytics & Reporting</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Real-time dashboards</li>
                    <li>• Custom reports</li>
                    <li>• KPI tracking</li>
                    <li>• Trend analysis</li>
                    <li>• Executive summaries</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Additional Software Solutions</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge>Audit</Badge>
                  </div>
                  <CardTitle>Audit Management Software</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Streamline your internal and external audit processes with comprehensive audit management tools.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Audit planning and scheduling</li>
                    <li>• Checklist management</li>
                    <li>• Finding tracking</li>
                    <li>• Report generation</li>
                    <li>• Follow-up management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">Training</Badge>
                  </div>
                  <CardTitle>Training Management System</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Manage employee training requirements, track competencies, and ensure compliance with training
                    standards.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Training matrix management</li>
                    <li>• Competency tracking</li>
                    <li>• Certification management</li>
                    <li>• Training records</li>
                    <li>• Automated reminders</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">Calibration</Badge>
                  </div>
                  <CardTitle>Calibration Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Ensure measurement accuracy and compliance with calibration scheduling and certificate management.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Equipment inventory</li>
                    <li>• Calibration scheduling</li>
                    <li>• Certificate management</li>
                    <li>• Uncertainty calculations</li>
                    <li>• Compliance reporting</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Quality Management?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Discover how Q-Pulse and our other software solutions can streamline your processes and improve your
                operational efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/request-demo">Request a Demo</Link>
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-blue-700" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
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
