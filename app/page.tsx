"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Calendar, Phone, ArrowRight } from "lucide-react"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import BookingCta from "@/components/booking-cta"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Your Smile, Our Passion
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Experience exceptional dental care in a comfortable and modern environment. Our team is dedicated to
                giving you the healthy, beautiful smile you deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/booking">Book Appointment</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/hero-dentist.png"
                  alt="Bright Smile Dental Clinic"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Quality Care</h3>
                  <p className="text-gray-600">
                    We use the latest technology and techniques to provide the highest quality dental care.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Convenient Scheduling</h3>
                  <p className="text-gray-600">
                    Book appointments online 24/7 and receive reminders to make dental care fit your busy life.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Always Available</h3>
                  <p className="text-gray-600">
                    Emergency dental care available when you need it most, with same-day appointments.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Dental Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of dental services to meet all your oral health needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="General Dentistry"
              description="Comprehensive care for your overall oral health, including cleanings, exams, and preventive treatments."
              icon="Tooth"
              href="/services/general-dentistry"
            />
            <ServiceCard
              title="Cosmetic Dentistry"
              description="Transform your smile with our range of cosmetic treatments, including whitening, veneers, and bonding."
              icon="Sparkles"
              href="/services/cosmetic-dentistry"
            />
            <ServiceCard
              title="Orthodontics"
              description="Straighten your teeth and correct bite issues with our modern orthodontic treatments."
              icon="ArrowsUpDown"
              href="/services/orthodontics"
            />
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="group">
              <Link href="/services" className="flex items-center">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/dentist-female.png"
                  alt="Dr. Sarah Johnson"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Dr. Sarah Johnson</h2>
              <p className="text-lg text-gray-700 mb-6">
                With over 15 years of experience, Dr. Johnson leads our team with a passion for creating healthy,
                beautiful smiles. She combines the latest dental techniques with a gentle, patient-centered approach.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Dr. Johnson graduated with honors from the University of California School of Dentistry and continues to
                stay at the forefront of dental advancements through ongoing education.
              </p>
              <Button asChild>
                <Link href="/about">Learn More About Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our patients have to say about their experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Dr. Johnson and her team are amazing! They made me feel comfortable and explained everything clearly. My smile has never looked better."
              author="Michael T."
              rating={5}
            />
            <TestimonialCard
              quote="I used to be terrified of dental visits, but Bright Smile Dental changed that completely. Their gentle approach and modern techniques make all the difference."
              author="Jennifer L."
              rating={5}
            />
            <TestimonialCard
              quote="The entire staff is friendly and professional. I appreciate how they work with my schedule and always make sure I'm comfortable during procedures."
              author="Robert K."
              rating={4}
            />
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="group">
              <Link href="/testimonials" className="flex items-center">
                Read More Testimonials
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <BookingCta />
    </div>
  )
}
