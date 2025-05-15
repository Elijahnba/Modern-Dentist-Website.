import { PortableText as SanityPortableText } from "@portabletext/react"
import Image from "next/image"
import Link from "next/link"
import { urlFor } from "@/lib/sanity"

const components = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="my-8 relative">
          <Image
            src={urlFor(value).width(800).url() || "/placeholder.svg"}
            alt={value.alt || "Blog post image"}
            width={800}
            height={500}
            className="rounded-lg mx-auto"
          />
          {value.caption && <div className="text-center text-gray-500 mt-2 text-sm">{value.caption}</div>}
        </div>
      )
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-lg font-bold mt-4 mb-2">{children}</h4>,
    normal: ({ children }: any) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-gray-700">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">{children}</ol>,
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined
      return (
        <Link href={value.href} rel={rel} className="text-primary hover:underline">
          {children}
        </Link>
      )
    },
    strong: ({ children }: any) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }: any) => <em>{children}</em>,
  },
}

export default function PortableText({ value }: { value: any }) {
  return <SanityPortableText value={value} components={components} />
}
