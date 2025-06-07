import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SiteLayout from "@/components/layout/site-layout"
import HeroSection from "@/components/ui/hero-section"
import ServiceCard from "@/components/ui/service-card"
import TrainingCard from "@/components/ui/training-card"
import { getServices, getTrainingPrograms, getSiteConfig } from "@/lib/data-utils"

export default function Home() {
  const services = getServices()
  const trainingPrograms = getTrainingPrograms()
  const { tagline, relatedLinks } = getSiteConfig()

  return (
    <SiteLayout>
      <HeroSection
        title="Your Partner in Systems"
        description="Intex Management Services provides comprehensive solutions for management systems, software implementation, training, and outsourcing to help your business achieve operational excellence."
        primaryButtonText="Request a Demo"
        primaryButtonLink="/request-demo"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/about"
      >
        <Image src="/images/hero-image.jpg" alt="Intex Management Services" fill className="object-cover" />
      </HeroSection>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(services).map(([key, service]) => (
              <ServiceCard
                key={key}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Upcoming Training Programs</h2>
              <div className="grid gap-6">
                {Object.entries(trainingPrograms)
                  .slice(0, 2)
                  .map(([key, program]) => (
                    <TrainingCard
                      key={key}
                      title={program.title}
                      badge={program.badge}
                      level={program.level}
                      description={program.description}
                      duration={program.duration}
                      maxParticipants={program.maxParticipants}
                      schedule={program.schedule}
                    />
                  ))}
              </div>
            </div>

            <div className="w-full md:w-1/3 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Service Request</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link href="/request-training" className="flex items-center gap-2 text-blue-700 hover:underline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                    Request Training
                  </Link>
                  <Link href="/request-quotation" className="flex items-center gap-2 text-blue-700 hover:underline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" />
                      <path d="M16 13H8" />
                      <path d="M16 17H8" />
                      <path d="M10 9H8" />
                    </svg>
                    Request Quotation
                  </Link>
                  <Link href="/request-demo" className="flex items-center gap-2 text-blue-700 hover:underline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
                      <line x1="2" x2="22" y1="20" y2="20" />
                    </svg>
                    Request Demo
                  </Link>
                  <Link href="/request-support" className="flex items-center gap-2 text-blue-700 hover:underline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h3.8a2 2 0 0 0 1.4-.6L12 4.8a2 2 0 0 1 1.4-.6h3.8a2 2 0 0 1 2 2v2.2Z" />
                    </svg>
                    Request Support
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Related Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {relatedLinks.map((link, index) => (
                    <Link key={index} href={link.url} className="text-blue-700 hover:underline block">
                      {link.name}
                    </Link>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
