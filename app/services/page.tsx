import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import ServiceCard from "@/components/service-card"
import BookingCta from "@/components/booking-cta"
import { getServices } from "@/lib/sanity"

export const metadata = {
  title: "Dental Services | Bright Smile Dental",
  description:
    "Explore our comprehensive range of dental services including general, cosmetic, orthodontic, pediatric, and emergency dental care.",
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Dental Services</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We offer a comprehensive range of dental services to meet all your oral health needs, from routine check-ups
            to advanced cosmetic procedures.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services && services.length > 0 ? (
              services.map((service: any) => (
                <ServiceCard
                  key={service._id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  href={`/services/${service.slug.current}`}
                />
              ))
            ) : (
              // Fallback services when no data is available from Sanity
              <>
                <ServiceCard
                  title="General Dentistry"
                  description="Comprehensive care for your overall oral health, including cleanings, exams, fillings, and preventive treatments."
                  icon="Tooth"
                  href="/services/general-dentistry"
                />
                <ServiceCard
                  title="Cosmetic Dentistry"
                  description="Transform your smile with our range of cosmetic treatments, including whitening, veneers, bonding, and smile makeovers."
                  icon="Sparkles"
                  href="/services/cosmetic-dentistry"
                />
                <ServiceCard
                  title="Orthodontics"
                  description="Straighten your teeth and correct bite issues with our modern orthodontic treatments, including clear aligners and braces."
                  icon="ArrowsUpDown"
                  href="/services/orthodontics"
                />
                <ServiceCard
                  title="Pediatric Dentistry"
                  description="Specialized dental care for children in a friendly, comfortable environment that makes dental visits fun and educational."
                  icon="Baby"
                  href="/services/pediatric-dentistry"
                />
                <ServiceCard
                  title="Restorative Dentistry"
                  description="Restore damaged or missing teeth with crowns, bridges, implants, and dentures to regain function and aesthetics."
                  icon="HeartPulse"
                  href="/services/restorative-dentistry"
                />
                <ServiceCard
                  title="Emergency Care"
                  description="Immediate dental care for unexpected issues like toothaches, broken teeth, or other dental emergencies."
                  icon="Clock"
                  href="/services/emergency-care"
                />
              </>
            )}
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Insurance & Payment Options</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work with most major insurance providers and offer flexible payment options to make dental care
              accessible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Accepted Insurance Plans</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Delta Dental</li>
                  <li>• Cigna</li>
                  <li>• Aetna</li>
                  <li>• MetLife</li>
                  <li>• Guardian</li>
                  <li>• Blue Cross Blue Shield</li>
                  <li>• United Healthcare</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Payment Options</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Cash</li>
                  <li>• Credit Cards (Visa, MasterCard, American Express, Discover)</li>
                  <li>• Health Savings Accounts (HSA)</li>
                  <li>• Flexible Spending Accounts (FSA)</li>
                  <li>• CareCredit Financing</li>
                  <li>• In-house payment plans</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold mb-4">Advanced Dental Technology</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Bright Smile Dental, we invest in the latest dental technology to provide more accurate diagnoses,
                efficient treatments, and comfortable experiences for our patients.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span className="text-gray-700">Digital X-rays with reduced radiation exposure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span className="text-gray-700">Intraoral cameras for detailed views of your oral health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span className="text-gray-700">3D imaging for precise treatment planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span className="text-gray-700">Laser dentistry for minimally invasive procedures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span className="text-gray-700">CAD/CAM technology for same-day restorations</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/dental-technology.png"
                alt="Advanced Dental Technology"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <BookingCta />
    </div>
  )
}
