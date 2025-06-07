import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SiteLayout from "@/components/layout/site-layout"
import HeroSection from "@/components/ui/hero-section"
import ServiceCard from "@/components/ui/service-card"
import { getServices } from "@/lib/data-utils"

export default function ServicesPage() {
  const services = getServices()

  return (
    <SiteLayout>
      <HeroSection
        title="Our Services"
        description="Comprehensive solutions to help your business achieve operational excellence"
      >
        <Image src="/placeholder.svg?height=400&width=600" alt="Professional services" fill className="object-cover" />
      </HeroSection>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">How We Can Help Your Business</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a range of services designed to improve your operational efficiency, ensure compliance with
              industry standards, and drive continuous improvement in your organization.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our services can help you achieve your business goals.
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
    </SiteLayout>
  )
}
