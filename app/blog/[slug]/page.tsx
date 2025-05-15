import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PortableText } from "@portabletext/react"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import BookingCta from "@/components/booking-cta"
import { getBlogPostBySlug, urlFor } from "@/lib/sanity"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found | Bright Smile Dental",
    }
  }

  return {
    title: `${post.title} | Bright Smile Dental Blog`,
    description: post.excerpt || "Read this informative dental health article from Bright Smile Dental.",
    openGraph: {
      images: post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).url()] : [],
    },
  }
}

const PortableTextComponents = {
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
        <a href={value.href} rel={rel} className="text-primary hover:underline">
          {children}
        </a>
      )
    },
    strong: ({ children }: any) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }: any) => <em>{children}</em>,
  },
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center text-primary hover:underline mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>

          <div className="flex flex-wrap items-center text-gray-600 gap-4 md:gap-8">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>{post.author?.name || "Bright Smile Dental Team"}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{formattedDate}</span>
            </div>
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category: any) => (
                  <span key={category._id} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {category.title}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.mainImage && (
        <div className="container mx-auto px-4 -mt-8">
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={urlFor(post.mainImage).width(1200).height(600).url() || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <PortableText value={post.body} components={PortableTextComponents} />
              </article>

              {/* Author Bio */}
              {post.author && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold mb-4">About the Author</h3>
                  <div className="flex items-start space-x-4">
                    {post.author.image && (
                      <Image
                        src={urlFor(post.author.image).width(80).height(80).url() || "/placeholder.svg"}
                        alt={post.author.name}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    )}
                    <div>
                      <h4 className="font-bold">{post.author.name}</h4>
                      {post.author.bio && (
                        <div className="text-gray-600 mt-2">
                          <PortableText value={post.author.bio} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Related Posts */}
              {post.relatedPosts && post.relatedPosts.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {post.relatedPosts.map((relatedPost: any) => (
                      <Card key={relatedPost._id} className="border-none shadow-md overflow-hidden">
                        <Link href={`/blog/${relatedPost.slug.current}`} className="block">
                          <div className="relative h-40">
                            <Image
                              src={
                                relatedPost.mainImage
                                  ? urlFor(relatedPost.mainImage).width(400).height(200).url()
                                  : "/placeholder.svg?height=200&width=400&query=dental care"
                              }
                              alt={relatedPost.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="p-4">
                            <h4 className="font-bold hover:text-primary transition-colors">{relatedPost.title}</h4>
                            <p className="text-sm text-gray-500 mt-1">
                              {new Date(relatedPost.publishedAt).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </p>
                          </CardContent>
                        </Link>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Card */}
              <Card className="border-none shadow-lg bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Have Questions?</h3>
                  <p className="text-gray-700 mb-4">
                    Our team is here to help answer any questions you may have about your dental health.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
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
