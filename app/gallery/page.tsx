"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import BookingCta from "@/components/booking-cta"

// Gallery categories
const categories = [
  { id: "all", name: "All" },
  { id: "cosmetic", name: "Cosmetic Dentistry" },
  { id: "orthodontic", name: "Orthodontics" },
  { id: "restorative", name: "Restorative" },
  { id: "office", name: "Our Office" },
]

// Gallery images
const galleryImages = [
  {
    id: 1,
    src: "/images/before-after-veneers.png",
    alt: "Before and After: Dental Veneers",
    category: "cosmetic",
    title: "Porcelain Veneers",
    description: "Patient received 8 porcelain veneers to transform their smile.",
  },
  {
    id: 2,
    src: "/images/before-after-whitening.png",
    alt: "Before and After: Teeth Whitening",
    category: "cosmetic",
    title: "Professional Whitening",
    description: "Results after in-office professional whitening treatment.",
  },
  {
    id: 3,
    src: "/images/before-after-braces.png",
    alt: "Before and After: Invisalign",
    category: "orthodontic",
    title: "Invisalign Treatment",
    description: "18-month Invisalign treatment to correct misalignment.",
  },
  {
    id: 4,
    src: "/images/before-after-implant.png",
    alt: "Before and After: Dental Implant",
    category: "restorative",
    title: "Dental Implant",
    description: "Single tooth replacement with a dental implant and crown.",
  },
  {
    id: 5,
    src: "/images/dental-treatment.png",
    alt: "Before and After: Dental Crown",
    category: "restorative",
    title: "Porcelain Crown",
    description: "Restoration of damaged tooth with a natural-looking porcelain crown.",
  },
  {
    id: 6,
    src: "/images/dental-smile.png",
    alt: "Before and After: Smile Makeover",
    category: "cosmetic",
    title: "Complete Smile Makeover",
    description: "Combination of veneers, whitening, and gum contouring.",
  },
  {
    id: 7,
    src: "/images/dental-office-reception.png",
    alt: "Dental Office Reception",
    category: "office",
    title: "Our Reception Area",
    description: "Our welcoming reception area designed for your comfort.",
  },
  {
    id: 8,
    src: "/images/dental-office-treatment.png",
    alt: "Dental Treatment Room",
    category: "office",
    title: "Treatment Room",
    description: "State-of-the-art treatment room with the latest technology.",
  },
  {
    id: 9,
    src: "/images/dental-checkup.png",
    alt: "Dental Checkup",
    category: "cosmetic",
    title: "Dental Checkup",
    description: "Regular checkups help maintain your oral health.",
  },
  {
    id: 10,
    src: "/images/dental-treatment.png",
    alt: "Dental Treatment",
    category: "restorative",
    title: "Dental Treatment",
    description: "Advanced treatments for optimal dental health.",
  },
  {
    id: 11,
    src: "/images/before-after-braces.png",
    alt: "Before and After: Braces",
    category: "orthodontic",
    title: "Traditional Braces",
    description: "24-month treatment with traditional braces.",
  },
  {
    id: 12,
    src: "/images/dental-office-waiting.png",
    alt: "Dental Office Waiting Room",
    category: "office",
    title: "Waiting Area",
    description: "Comfortable waiting area for patients and families.",
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<null | (typeof galleryImages)[0]>(null)

  const filteredImages =
    activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Smile Gallery</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Browse our gallery of before and after photos to see the transformations we've created for our patients.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
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

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <CardContent className="p-0">
                    <div className="relative h-64">
                      <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg">{image.title}</h3>
                      <p className="text-gray-600 text-sm">{image.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 bg-white/80 rounded-full p-1 z-10"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </button>

              <div className="relative h-[60vh]">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-700">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking CTA */}
      <BookingCta />
    </div>
  )
}
