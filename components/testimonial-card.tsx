"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

type TestimonialCardProps = {
  quote: string
  author: string
  rating: number
}

export default function TestimonialCard({ quote, author, rating }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-full border-none shadow-lg">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
            ))}
          </div>
          <blockquote className="text-gray-700 italic mb-4 flex-grow">"{quote}"</blockquote>
          <footer className="text-gray-600 font-medium">— {author}</footer>
        </CardContent>
      </Card>
    </motion.div>
  )
}
