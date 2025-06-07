import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SiteLayout from "@/components/layout/site-layout"
import HeroSection from "@/components/ui/hero-section"
import TrainingCard from "@/components/ui/training-card"
import { getTrainingPrograms } from "@/lib/data-utils"

export default function TrainingPage() {
  const trainingPrograms = getTrainingPrograms()

  return (
    <SiteLayout>
      <HeroSection
        title="Training Programs"
        description="Comprehensive training solutions to enhance your team's skills and knowledge"
      >
        <Image src="/placeholder.svg?height=400&width=600" alt="Training session" fill className="object-cover" />
      </HeroSection>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Q-Pulse Training Programs 2024</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master the Q-Pulse quality management software with our comprehensive training programs designed for users
              at all levels.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
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

          <div className="mt-12">
            {Object.entries(trainingPrograms)
              .slice(2, 3)
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
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Other Training Programs</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge>ISO</Badge>
                </div>
                <CardTitle>ISO 9001 Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive training on implementing ISO 9001 quality management systems in your organization.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  <li>• Understanding ISO 9001 requirements</li>
                  <li>• Process approach implementation</li>
                  <li>• Documentation strategies</li>
                  <li>• Internal audit preparation</li>
                  <li>• Certification readiness</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/request-training">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">Audit</Badge>
                </div>
                <CardTitle>Internal Auditor Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Train your team to conduct effective internal audits of your management systems.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  <li>• Audit planning and preparation</li>
                  <li>• Effective interviewing techniques</li>
                  <li>• Finding classification</li>
                  <li>• Report writing</li>
                  <li>• Corrective action verification</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/request-training">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">Risk</Badge>
                </div>
                <CardTitle>Risk Management Workshop</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Practical workshop on identifying, assessing, and managing risks in your organization.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  <li>• Risk identification methods</li>
                  <li>• Risk assessment techniques</li>
                  <li>• Mitigation strategy development</li>
                  <li>• Risk monitoring and review</li>
                  <li>• Integration with management systems</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/request-training">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Custom Training Solutions</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Need specialized training for your team? We offer customized training programs tailored to your specific
            requirements.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Contact Us for Custom Training</Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  )
}
