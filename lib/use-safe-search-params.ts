"use client"

import { useSearchParams as useNextSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export function useSafeSearchParams() {
  const [mounted, setMounted] = useState(false)
  const searchParams = useNextSearchParams()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Return empty URLSearchParams if not mounted yet
  if (!mounted) {
    return new URLSearchParams()
  }

  return searchParams
}
