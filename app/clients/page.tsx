import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ClientsPage() {
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
            <Link href="/clients" className="text-sm font-medium text-blue-600">
              Clients
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
            <h1 className="text-4xl font-bold mb-4">Our Clients</h1>
            <p className="text-xl text-blue-100">Trusted by leading organizations across various industries</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Manufacturing Sector</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We've helped numerous manufacturing companies implement ISO 9001, ISO 14001, and other management
                    systems to improve their operational efficiency and compliance.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Healthcare Industry</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our healthcare clients have benefited from our expertise in implementing quality management systems
                    and regulatory compliance solutions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Financial Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We've assisted financial institutions in implementing risk management systems and compliance
                    frameworks to meet regulatory requirements.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Government Agencies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our public sector clients have improved their service delivery through our management systems
                    implementation and training programs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Education Sector</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Educational institutions have enhanced their quality assurance processes with our customized
                    solutions and training programs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Technology Companies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Tech companies have streamlined their development processes and quality management with our
                    innovative software solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-8">Client Testimonials</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <blockquote className="text-lg italic text-gray-600 mb-4">
                    "Intex Management Services helped us achieve ISO 9001 certification in record time. Their expertise
                    and support were invaluable throughout the process."
                  </blockquote>
                  <cite className="font-semibold">- Manufacturing Client</cite>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <blockquote className="text-lg italic text-gray-600 mb-4">
                    "The Q-Pulse implementation transformed our quality management processes. The training provided by
                    IMS was comprehensive and practical."
                  </blockquote>
                  <cite className="font-semibold">- Healthcare Client</cite>
                </CardContent>
              </Card>
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
