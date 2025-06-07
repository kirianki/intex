import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HeroSectionProps {
  title: string
  description: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  children?: ReactNode
}

export default function HeroSection({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  children,
}: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
            <p className="text-lg text-blue-100">{description}</p>
            {(primaryButtonText || secondaryButtonText) && (
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {primaryButtonText && primaryButtonLink && (
                  <Button className="bg-white text-blue-700 hover:bg-blue-50" asChild>
                    <Link href={primaryButtonLink}>{primaryButtonText}</Link>
                  </Button>
                )}
                {secondaryButtonText && secondaryButtonLink && (
                  <Button variant="outline" className="text-white border-white hover:bg-blue-800" asChild>
                    <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
                  </Button>
                )}
              </div>
            )}
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">{children}</div>
        </div>
      </div>
    </section>
  )
}
