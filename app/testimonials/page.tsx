"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, AlertTriangle } from "lucide-react"
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

// Sample testimonials for fallback
const sampleTestimonials = [
  {
    _id: "sample1",
    name: "Michael Thompson",
    category: "cosmetic",
    rating: 5,
    date: "2023-03-15",
    quote:
      "I had veneers done by Dr. Johnson and I couldn't be happier with the results! The entire process was explained clearly, and the team made sure I was comfortable every step of the way. My smile has never looked better, and I've received so many compliments.",
    source: "Google",
  },
  {
    _id: "sample2",
    name: "Jennifer Lewis",
    category: "general",
    rating: 5,
    date: "2023-02-03",
    quote:
      "I used to be terrified of dental visits, but Bright Smile Dental changed that completely. Their gentle approach and modern techniques make all the difference. Dr. Johnson took the time to address all my concerns and made sure I was comfortable throughout my treatment.",
    source: "Facebook",
  },
  {
    _id: "sample3",
    name: "Robert Kim",
    category: "general",
    rating: 4,
    date: "2023-01-20",
    quote:
      "The entire staff is friendly and professional. I appreciate how they work with my schedule and always make sure I'm comfortable during procedures. The office is clean and modern, and they use the latest technology for treatments.",
    source: "Google",
  },
  {
    _id: "sample4",
    name: "Sarah Johnson",
    category: "orthodontic",
    rating: 5,
    date: "2023-04-10",
    quote:
      "My Invisalign treatment with Dr. Chen was fantastic! He was very thorough in explaining the process and timeline. The results exceeded my expectations, and I'm so happy with my new smile.",
    source: "Yelp",
  },
  {
    _id: "sample5",
    name: "David Wilson",
    category: "pediatric",
    rating: 5,
    date: "2023-01-05",
    quote:
      "Dr. Rodriguez is amazing with children! My son used to be afraid of the dentist, but now he actually looks forward to his appointments. The entire staff is patient and kind, making the experience positive for kids.",
    source: "Google",
  },
]

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [testimonials, setTestimonials] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadTestimonials() {
      setLoading(true)
      setError(null)

      try {
        // Check if we have Sanity credentials before attempting to fetch
        const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

        // If no project ID, use sample data
        if (!projectId) {
          console.log("No Sanity project ID found, using sample data")
          const filteredTestimonials =
            activeCategory === "all"
              ? sampleTestimonials
              : sampleTestimonials.filter((t) => t.category === activeCategory)
          setTestimonials(filteredTestimonials)
          return
        }

        // Try to fetch from Sanity
        const category = activeCategory !== "all" ? activeCategory : undefined
        const data = await getTestimonials(category)

        // If we got data back, use it
        if (data && data.length > 0) {
          setTestimonials(data)
        } else {
          // Otherwise, filter the sample testimonials based on category
          const filteredTestimonials =
            activeCategory === "all"
              ? sampleTestimonials
              : sampleTestimonials.filter((t) => t.category === activeCategory)
          setTestimonials(filteredTestimonials)
        }
      } catch (err) {
        console.error("Error loading testimonials:", err)
        setError("Unable to load testimonials from CMS. Showing sample testimonials instead.")

        // Use filtered sample testimonials as fallback
        const filteredTestimonials =
          activeCategory === "all"
            ? sampleTestimonials
            : sampleTestimonials.filter((t) => t.category === activeCategory)
        setTestimonials(filteredTestimonials)
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

          {/* Error Message */}
          {error && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
              <div className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                <p className="text-amber-700">{error}</p>
              </div>
            </div>
          )}

          {/* Testimonials Grid */}
          {loading ? (
            <div className="text-center py-12">
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
              <p className="text-gray-500 text-lg mt-4">Loading testimonials...</p>
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
