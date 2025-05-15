import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import BookingCta from "@/components/booking-cta"

export const metadata = {
  title: "About Our Dental Practice | Bright Smile Dental",
  description:
    "Learn about our dental practice, our experienced team, our mission, and our commitment to providing exceptional dental care.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Practice</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Get to know our team and learn about our commitment to providing exceptional dental care in a comfortable
            environment.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Image
                src="/images/dental-team.png"
                alt="Bright Smile Dental Clinic Team"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Bright Smile Dental was founded in 2005 by Dr. Sarah Johnson with a vision to create a dental practice
                that combines clinical excellence with a warm, patient-centered approach.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                What started as a small practice has grown into a trusted dental care provider in our community, serving
                thousands of patients and families over the years.
              </p>
              <p className="text-lg text-gray-700">
                Our practice continues to evolve with the latest advancements in dental technology and techniques, but
                our commitment to personalized care and creating positive dental experiences remains unchanged.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto italic">
            "To provide exceptional dental care that improves our patients' health and confidence, delivered with
            compassion in a comfortable environment where every patient feels valued and understood."
          </p>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our experienced team of dental professionals is dedicated to providing you with the highest quality care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dr. Sarah Johnson */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-0">
                <Image
                  src="/images/dentist-female.png"
                  alt="Dr. Sarah Johnson"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Dr. Sarah Johnson</h3>
                  <p className="text-primary font-medium mb-3">Lead Dentist & Founder</p>
                  <p className="text-gray-600">
                    Dr. Johnson has over 15 years of experience in general and cosmetic dentistry. She earned her DDS
                    from the University of California and continues to advance her education through ongoing
                    professional development.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Dr. Michael Chen */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-0">
                <Image
                  src="/images/dentist-male.png"
                  alt="Dr. Michael Chen"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Dr. Michael Chen</h3>
                  <p className="text-primary font-medium mb-3">Orthodontist</p>
                  <p className="text-gray-600">
                    Dr. Chen specializes in orthodontics and is passionate about creating beautiful, aligned smiles. He
                    completed his orthodontic residency at the University of Washington and is certified in various
                    clear aligner systems.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Dr. Emily Rodriguez */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-0">
                <Image
                  src="/images/dentist-female.png"
                  alt="Dr. Emily Rodriguez"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Dr. Emily Rodriguez</h3>
                  <p className="text-primary font-medium mb-3">Pediatric Dentist</p>
                  <p className="text-gray-600">
                    Dr. Rodriguez loves working with children and making dental visits fun and educational. She
                    completed her pediatric dentistry specialty training at Boston Children's Hospital and is known for
                    her gentle approach.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Jessica Taylor */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-0">
                <Image
                  src="/images/dental-hygienist.png"
                  alt="Jessica Taylor"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Jessica Taylor</h3>
                  <p className="text-primary font-medium mb-3">Dental Hygienist</p>
                  <p className="text-gray-600">
                    Jessica has been with our practice for 8 years and is dedicated to helping patients maintain optimal
                    oral health. She is known for her thorough yet gentle cleanings and patient education.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Robert Wilson */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-0">
                <Image
                  src="/images/dental-assistant.png"
                  alt="Robert Wilson"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Robert Wilson</h3>
                  <p className="text-primary font-medium mb-3">Dental Assistant</p>
                  <p className="text-gray-600">
                    Robert assists our dentists with procedures and helps ensure patients are comfortable throughout
                    their visit. His calm demeanor and attention to detail make him an invaluable member of our team.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Lisa Johnson */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-0">
                <Image
                  src="/images/dental-office-manager.png"
                  alt="Lisa Johnson"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Lisa Johnson</h3>
                  <p className="text-primary font-medium mb-3">Office Manager</p>
                  <p className="text-gray-600">
                    Lisa keeps our practice running smoothly and is often the friendly face greeting you at reception.
                    She handles scheduling, insurance questions, and ensures every patient has a positive experience
                    from start to finish.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do at Bright Smile Dental.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for clinical excellence in every procedure and interaction, continuously improving our
                  skills and knowledge to provide the best possible care.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">Compassion</h3>
                <p className="text-gray-600">
                  We understand dental anxiety and treat each patient with empathy, kindness, and respect, creating a
                  supportive environment for all.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-gray-600">
                  We are honest and transparent in our recommendations and treatment plans, always putting our patients'
                  best interests first.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We embrace new technologies and techniques that enhance patient care, comfort, and outcomes, staying
                  at the forefront of modern dentistry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Office Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Office</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We've designed our office to be a comfortable, welcoming space with state-of-the-art equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Image
              src="/images/dental-office-reception.png"
              alt="Dental Office Reception"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
            <Image
              src="/images/dental-office-treatment.png"
              alt="Treatment Room"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
            <Image
              src="/images/dental-office-waiting.png"
              alt="Waiting Area"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <BookingCta />
    </div>
  )
}
