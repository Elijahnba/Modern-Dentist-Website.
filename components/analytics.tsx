"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import { usePathname } from "next/navigation"

export default function Analytics() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  // Only run on client side
  useEffect(() => {
    setMounted(true)
  }, [])

  // Track page views
  useEffect(() => {
    if (!mounted) return

    // When the page changes, log a page view
    if (window.gtag && pathname) {
      window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string, {
        page_path: pathname,
      })
    }
  }, [pathname, mounted])

  // Don't render anything on the server
  if (!mounted) return null

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
