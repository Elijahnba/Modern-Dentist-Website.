import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Suspense } from "react"

// Import the static version of Analytics for server components
import StaticAnalytics from "@/components/static-analytics"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Bright Smile Dental | Professional Dental Care",
  description:
    "Bright Smile Dental provides professional dental care services in a comfortable environment. Schedule your appointment today.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Bright Smile Dental | Professional Dental Care",
    description:
      "Bright Smile Dental provides professional dental care services in a comfortable environment. Schedule your appointment today.",
    url: "https://brightsmile-dental.com",
    siteName: "Bright Smile Dental",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 200,
        height: 200,
        alt: "Bright Smile Dental Logo",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "Bright Smile Dental",
              image: "https://brightsmile-dental.com/logo.png",
              "@id": "https://brightsmile-dental.com",
              url: "https://brightsmile-dental.com",
              telephone: "+1-555-123-4567",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Dental Street",
                addressLocality: "Anytown",
                addressRegion: "CA",
                postalCode: "12345",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 37.7749,
                longitude: -122.4194,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "17:00",
                },
              ],
              sameAs: ["https://www.facebook.com/brightsmile", "https://www.instagram.com/brightsmile"],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex flex-col min-h-screen">
            <Suspense>
              <Navbar />
            </Suspense>
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        {/* Use the static version of Analytics */}
        <StaticAnalytics />
      </body>
    </html>
  )
}
