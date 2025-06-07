import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, Users, MapPin } from "lucide-react"

interface TrainingSchedule {
  month: string
  date: string
  location: string
}

interface TrainingCardProps {
  title: string
  badge: string
  level: string
  description: string
  duration: string
  maxParticipants: number
  schedule: TrainingSchedule[]
}

export default function TrainingCard({
  title,
  badge,
  level,
  description,
  duration,
  maxParticipants,
  schedule,
}: TrainingCardProps) {
  return (
    <Card className="h-full transition-all hover:shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge className="bg-red-600">{badge}</Badge>
          <Badge variant="outline">{level}</Badge>
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-6">{description}</p>

        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-700" />
            <span className="font-medium">Duration:</span>
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-700" />
            <span className="font-medium">Max Participants:</span>
            <span>{maxParticipants} per session</span>
          </div>
        </div>

        <h4 className="font-semibold mb-3">2024 Schedule:</h4>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {schedule.map((session, index) => (
            <div key={index} className="bg-gray-50 p-3 rounded-lg text-center">
              <p className="font-semibold text-blue-700">{session.month}</p>
              <p className="font-bold">{session.date}</p>
              <p className="text-sm flex items-center justify-center gap-1">
                <MapPin className="h-3 w-3" />
                {session.location}
              </p>
            </div>
          ))}
        </div>

        <Button className="w-full" asChild>
          <Link href="/request-training">Register Now</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
