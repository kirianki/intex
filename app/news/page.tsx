import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function NewsPage() {
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
            <Link href="/news" className="text-sm font-medium text-blue-600">
              News
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
            <h1 className="text-4xl font-bold mb-4">Latest News & Updates</h1>
            <p className="text-xl text-blue-100">Stay informed about our latest developments and industry insights</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge>Training</Badge>
                    <span className="text-sm text-gray-500">March 2024</span>
                  </div>
                  <CardTitle>New Q-Pulse Training Schedule Released</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We're excited to announce our expanded Q-Pulse training schedule for 2024, with sessions in Nairobi
                    and Mombasa covering introduction, administration, and advanced topics.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">Certification</Badge>
                    <span className="text-sm text-gray-500">February 2024</span>
                  </div>
                  <CardTitle>ISO 45001 Implementation Success</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our team successfully helped three major manufacturing clients achieve ISO 45001 certification,
                    enhancing their occupational health and safety management systems.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">Software</Badge>
                    <span className="text-sm text-gray-500">January 2024</span>
                  </div>
                  <CardTitle>Q-Pulse Software Update</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    The latest Q-Pulse software update includes enhanced reporting features and improved user interface,
                    making quality management even more efficient for our clients.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge>Partnership</Badge>
                    <span className="text-sm text-gray-500">December 2023</span>
                  </div>
                  <CardTitle>New Strategic Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We've formed a strategic partnership with leading quality management consultants to expand our
                    service offerings and reach more clients across East Africa.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">Award</Badge>
                    <span className="text-sm text-gray-500">November 2023</span>
                  </div>
                  <CardTitle>Excellence in Quality Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    IMS received recognition for excellence in quality management consulting at the East Africa Quality
                    Awards, highlighting our commitment to client success.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">Industry</Badge>
                    <span className="text-sm text-gray-500">October 2023</span>
                  </div>
                  <CardTitle>Industry Trends Report</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our annual industry trends report reveals key insights into quality management practices and
                    emerging technologies shaping the future of business excellence.
                  </p>
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
