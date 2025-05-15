import Image from "next/image"
import { urlFor } from "@/lib/sanity"

type SanityImageProps = {
  image: any
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
}

export default function SanityImage({
  image,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes,
}: SanityImageProps) {
  if (!image) {
    return null
  }

  const imageUrl = urlFor(image).url()

  return (
    <Image
      src={imageUrl || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  )
}
