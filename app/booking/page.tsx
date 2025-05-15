import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone } from "lucide-react"

export const metadata = {
  title: "Book an Appointment | Bright Smile Dental",
  description:
    "Schedule your dental appointment online or by phone. We offer convenient booking options for all our dental services.",
}

export default function BookingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Appointment</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Schedule your visit with our team of dental professionals. We offer flexible appointment times to fit your
            busy schedule.
          </p>
        </div>
      </section>

      {/* Booking Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Online Booking */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-0">
                <div className="bg-primary text-white p-6 rounded-t-lg">
                  <h2 className="text-2xl font-bold mb-2">Book Online</h2>
                  <p>Schedule your appointment at your convenience, 24/7.</p>
                </div>
                <div className="p-6">
                  {/* TidyCal Embed */}
                  <div className="bg-gray-100 rounded-lg p-4 mb-6 h-[600px] flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-gray-500 mb-4">
                        Booking calendar would be embedded here using TidyCal or Calendly
                      </p>
                      <Button className="bg-primary hover:bg-primary/90">Schedule Now</Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-bold">Benefits of Online Booking:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span className="text-gray-700">Book anytime, day or night</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span className="text-gray-700">See all available appointment times</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span className="text-gray-700">Receive instant confirmation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span className="text-gray-700">Get email and text reminders</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone Booking */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-0">
                <div className="bg-secondary text-white p-6 rounded-t-lg">
                  <h2 className="text-2xl font-bold mb-2">Book by Phone</h2>
                  <p>Speak directly with our friendly staff to schedule your visit.</p>
                </div>
                <div className="p-6">
                  <div className="flex flex-col items-center justify-center text-center mb-8">
                    <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                      <Phone className="h-10 w-10 text-secondary" />
                    </div>
                    <a
                      href="tel:+15551234567"
                      className="text-2xl font-bold text-gray-800 hover:text-secondary transition-colors"
                    >
                      (555) 123-4567
                    </a>
                    <p className="text-gray-600 mt-2">Monday - Friday: 9am - 5pm</p>
                    <p className="text-gray-600">Saturday: 9am - 1pm</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-bold">When to Call:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-secondary font-bold mr-2">•</span>
                        <span className="text-gray-700">You have specific questions about your treatment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary font-bold mr-2">•</span>
                        <span className="text-gray-700">You need to schedule multiple appointments</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary font-bold mr-2">•</span>
                        <span className="text-gray-700">You have insurance or billing questions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary font-bold mr-2">•</span>
                        <span className="text-gray-700">You have a dental emergency</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* New Patient Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">New Patient Information</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              To make your first visit as smooth as possible, here's what you need to know.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4">What to Bring</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span className="text-gray-700">Photo ID (driver's license, passport, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span className="text-gray-700">Insurance card (if applicable)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span className="text-gray-700">List of current medications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span className="text-gray-700">Completed new patient forms (or arrive 15 minutes early)</span>
                </li>
              </ul>

              <div className="mt-6">
                <Button asChild variant="outline">
                  <Link href="/files/new-patient-forms.pdf" target="_blank">
                    Download New Patient Forms
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">What to Expect</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">1.</span>
                  <span className="text-gray-700">A comprehensive dental exam</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">2.</span>
                  <span className="text-gray-700">Digital X-rays to assess your oral health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">3.</span>
                  <span className="text-gray-700">Professional cleaning (unless treatment is needed first)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">4.</span>
                  <span className="text-gray-700">Discussion of your dental health and treatment options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">5.</span>
                  <span className="text-gray-700">Creation of a personalized treatment plan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Insurance & Payment Options</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work with most major insurance providers and offer flexible payment options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                <p className="mt-4 text-gray-600">
                  Not sure if we accept your insurance? Contact our office and we'll be happy to verify your coverage.
                </p>
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
                <p className="mt-4 text-gray-600">
                  We're committed to making dental care affordable. Ask about our financing options and payment plans.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map & Directions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Location & Directions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're conveniently located in the heart of Anytown with ample parking.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7462082319243!2d-122.41941548468204!3d37.77492997975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjgiTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1620841266018!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Bright Smile Dental Location"
              ></iframe>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Our Address</h3>
              <p className="text-gray-700 mb-6">
                123 Dental Street
                <br />
                Anytown, CA 12345
              </p>

              <h3 className="text-xl font-bold mb-4">Directions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800">From the North:</h4>
                  <p className="text-gray-700">
                    Take Highway 101 South. Exit at Main Street and turn right. Continue for 2 miles, then turn left on
                    Dental Street. Our office is on the right.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800">From the South:</h4>
                  <p className="text-gray-700">
                    Take Highway 101 North. Exit at Center Avenue and turn left. Continue for 1 mile, then turn right on
                    Dental Street. Our office is on the left.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800">Parking:</h4>
                  <p className="text-gray-700">
                    Free parking is available in our lot behind the building and on the street in front of our office.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800">Public Transportation:</h4>
                  <p className="text-gray-700">
                    Bus routes 10 and 15 stop directly in front of our building. The nearest subway station is Central
                    Station, a 10-minute walk from our office.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
