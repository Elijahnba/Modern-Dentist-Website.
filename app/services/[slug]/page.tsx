import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import BookingCta from "@/components/booking-cta"
import PortableText from "@/components/portable-text"
import { getServiceBySlug, urlFor } from "@/lib/sanity"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
  const service = await getServiceBySlug(params.slug)

  if (!service) {
    return {
      title: "Service Not Found | Bright Smile Dental",
    }
  }

  return {
    title: `${service.title} | Bright Smile Dental`,
    description: service.description,
    openGraph: {
      images: service.image ? [urlFor(service.image).width(1200).height(630).url()] : [],
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const service = await getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <Link href="/services" className="inline-flex items-center text-primary hover:underline mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{service.title}</h1>
          <p className="text-lg text-gray-700 max-w-3xl">{service.description}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Service Description */}
            <div className="lg:col-span-2">
              {service.image && (
                <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={urlFor(service.image).width(800).height(500).url() || "/images/dental-treatment.png"}
                    alt={service.title}
                    width={800}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              )}

              <div className="prose prose-lg max-w-none">
                {service.fullDescription && <PortableText value={service.fullDescription} />}
              </div>

              {/* Benefits */}
              {service.benefits && service.benefits.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">Benefits</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.benefits.map((benefit: string, index: number) => (
                      <div key={index} className="flex items-start">
                        <div className="mr-3 mt-1">
                          <Check className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-gray-700">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Procedures */}
              {service.procedures && service.procedures.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">Our Procedures</h2>
                  <div className="space-y-6">
                    {service.procedures.map((procedure: any) => (
                      <Card key={procedure._id} className="border-none shadow-md overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                          {procedure.image && (
                            <div className="relative h-48 md:h-auto">
                              <Image
                                src={
                                  urlFor(procedure.image).width(300).height(200).url() || "/images/dental-checkup.png"
                                }
                                alt={procedure.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                          )}
                          <CardContent className={`p-6 ${procedure.image ? "md:col-span-2" : "md:col-span-3"}`}>
                            <h3 className="text-xl font-bold mb-2">{procedure.title}</h3>
                            <p className="text-gray-700 mb-4">{procedure.description}</p>
                            {procedure.price && (
                              <p className="text-primary font-semibold">Starting from ${procedure.price}</p>
                            )}
                          </CardContent>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Card */}
              <Card className="border-none shadow-lg sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Interested in {service.title}?</h3>
                  <p className="text-gray-700 mb-6">
                    Schedule a consultation with our team to learn more about how we can help you achieve your dental
                    goals.
                  </p>
                  <Button asChild className="w-full mb-4">
                    <Link href="/booking">Book a Consultation</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">Contact Us</Link>
                  </Button>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="font-bold mb-3">Have Questions?</h4>
                    <p className="text-gray-700 mb-4">
                      Our team is here to answer any questions you may have about {service.title}.
                    </p>
                    <div className="flex items-center">
                      <Link href="tel:+15551234567" className="text-primary hover:underline font-medium">
                        Call (555) 123-4567
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <BookingCta />
    </div>
  )
}
