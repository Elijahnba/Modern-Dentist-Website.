import type React from "react"
export const metadata = {
  title: "Bright Smile Dental CMS",
  description: "Content Management System for Bright Smile Dental",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
