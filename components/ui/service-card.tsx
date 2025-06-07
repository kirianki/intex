import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import * as Icons from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  link: string
}

export default function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  // Dynamically get the icon component
  const IconComponent = Icons[icon as keyof typeof Icons] || Icons.FileText

  return (
    <Card className="h-full transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center gap-2">
          <IconComponent className="h-5 w-5 text-blue-700" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col h-full">
        <p className="text-gray-600 flex-grow">{description}</p>
        <Link href={link} className="flex items-center text-blue-700 hover:underline mt-4 text-sm font-medium">
          Learn more <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </CardContent>
    </Card>
  )
}
