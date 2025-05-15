"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"
import BookingCta from "@/components/booking-cta"
import { getTestimonials } from "@/lib/sanity"

// Testimonial categories
const categories = [
  { id: "all", name: "All Reviews" },
  { id: "general", name: "General Dentistry" },
  { id: "cosmetic", name: "Cosmetic Dentistry" },
  { id: "orthodontic", name: "Orthodontics" },
  { id: "pediatric", name: "Pediatric Dentistry" },
]

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [testimonials, setTestimonials] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadTestimonials() {
      setLoading(true)
      try {
        const data = await getTestimonials(activeCategory !== "all" ? activeCategory : undefined)
        setTestimonials(data)
      } catch (error) {
        console.error("Error loading testimonials:", error)
        setTestimonials([])
      } finally {
        setLoading(false)
      }
    }

    loadTestimonials()
  }, [activeCategory])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Patient Testimonials</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Read what our patients have to say about their experiences at Bright Smile Dental.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={activeCategory === category.id ? "bg-primary hover:bg-primary/90" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Testimonials Grid */}
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Loading testimonials...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-none shadow-lg">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <div className="text-sm text-gray-500">{testimonial.source}</div>
                      </div>

                      <div className="mb-4 flex-grow">
                        <Quote className="h-8 w-8 text-primary/20 mb-2" />
                        <p className="text-gray-700 italic">{testimonial.quote}</p>
                      </div>

                      <div className="mt-auto">
                        <p className="font-bold text-gray-800">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(testimonial.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && testimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No testimonials found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Leave a Review Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your Experience</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            We value your feedback! If you've had a positive experience at Bright Smile Dental, please consider leaving
            a review on one of these platforms.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" className="min-w-[150px]">
              <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                Google Review
              </a>
            </Button>
            <Button asChild variant="outline" className="min-w-[150px]">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook Review
              </a>
            </Button>
            <Button asChild variant="outline" className="min-w-[150px]">
              <a href="https://yelp.com" target="_blank" rel="noopener noreferrer">
                Yelp Review
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <BookingCta />
    </div>
  )
}
