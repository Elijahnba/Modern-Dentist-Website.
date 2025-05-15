"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  SmileIcon as Tooth,
  Sparkles,
  ArrowUpDownIcon as ArrowsUpDown,
  Baby,
  HeartPulse,
  Clock,
} from "lucide-react"
import { motion } from "framer-motion"

type ServiceIconProps = {
  icon: string
  className?: string
}

const ServiceIcon = ({ icon, className = "h-10 w-10 text-primary" }: ServiceIconProps) => {
  switch (icon) {
    case "Tooth":
      return <Tooth className={className} />
    case "Sparkles":
      return <Sparkles className={className} />
    case "ArrowsUpDown":
      return <ArrowsUpDown className={className} />
    case "Baby":
      return <Baby className={className} />
    case "HeartPulse":
      return <HeartPulse className={className} />
    case "Clock":
      return <Clock className={className} />
    default:
      return <Tooth className={className} />
  }
}

type ServiceCardProps = {
  title: string
  description: string
  icon: string
  href: string
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <Link href={href} className="block h-full">
        <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6 flex flex-col h-full">
            <div className="mb-4">
              <ServiceIcon icon={icon} />
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{description}</p>
            <div className="flex items-center text-primary font-medium group">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
