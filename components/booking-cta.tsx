import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Phone } from "lucide-react"

export default function BookingCta() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Schedule Your Visit?</h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
          Book your appointment today and take the first step towards a healthier, brighter smile.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
            <Link href="/booking" className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Book Online
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            <a href="tel:+15551234567" className="flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              Call (555) 123-4567
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
