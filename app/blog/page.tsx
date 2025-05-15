import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import BookingCta from "@/components/booking-cta"
import { getBlogPosts } from "@/lib/sanity"
import { urlFor } from "@/lib/sanity"

export const metadata: Metadata = {
  title: "Dental Blog | Bright Smile Dental",
  description: "Read our latest articles on dental health, treatments, and tips for maintaining a healthy smile.",
}

// Sample blog posts for fallback
const sampleBlogPosts = [
  {
    _id: "sample1",
    title: "The Benefits of Regular Dental Check-ups",
    excerpt:
      "Regular dental check-ups are essential for maintaining good oral health. Learn why you should visit your dentist every six months.",
    publishedAt: "2023-05-10T00:00:00Z",
    author: { name: "Dr. Sarah Johnson" },
    categories: [{ title: "Preventive Care" }],
    slug: { current: "benefits-of-regular-dental-checkups" },
  },
  {
    _id: "sample2",
    title: "Understanding Teeth Whitening Options",
    excerpt:
      "Explore the different teeth whitening options available, from professional in-office treatments to at-home kits.",
    publishedAt: "2023-04-22T00:00:00Z",
    author: { name: "Dr. Michael Chen" },
    categories: [{ title: "Cosmetic Dentistry" }],
    slug: { current: "understanding-teeth-whitening-options" },
  },
  {
    _id: "sample3",
    title: "Invisalign vs. Traditional Braces: Which is Right for You?",
    excerpt:
      "Compare the benefits and considerations of Invisalign clear aligners and traditional braces to help you make an informed decision.",
    publishedAt: "2023-03-15T00:00:00Z",
    author: { name: "Dr. Michael Chen" },
    categories: [{ title: "Orthodontics" }],
    slug: { current: "invisalign-vs-traditional-braces" },
  },
]

export default async function BlogPage() {
  let blogPosts = []

  try {
    blogPosts = await getBlogPosts(10, 0)

    // If no blog posts from Sanity, use sample posts
    if (!blogPosts || blogPosts.length === 0) {
      blogPosts = sampleBlogPosts
    }
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    blogPosts = sampleBlogPosts
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dental Health Blog</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Stay informed with the latest dental health tips, treatment options, and oral care advice from our experts.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <Card className="border-none shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={blogPosts[0].mainImage ? urlFor(blogPosts[0].mainImage).url() : "/images/dental-blog-post.png"}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="mb-2">
                    <span className="text-sm font-medium text-primary">
                      {blogPosts[0].categories && blogPosts[0].categories.length > 0
                        ? blogPosts[0].categories[0].title
                        : "Dental Health"}
                    </span>
                    <span className="text-sm text-gray-500 mx-2">•</span>
                    <span className="text-sm text-gray-500">
                      {new Date(blogPosts[0].publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
                  <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="mb-6">
                    <p className="text-sm text-gray-500">
                      By {blogPosts[0].author?.name || "Bright Smile Dental Team"}
                    </p>
                  </div>
                  <Button asChild className="w-fit group">
                    <Link href={`/blog/${blogPosts[0].slug.current}`} className="flex items-center">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Recent Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post._id} className="border-none shadow-lg overflow-hidden h-full">
                <div className="relative h-48">
                  <Image
                    src={post.mainImage ? urlFor(post.mainImage).url() : "/images/dental-blog-post.png"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <div className="mb-2">
                    <span className="text-sm font-medium text-primary">
                      {post.categories && post.categories.length > 0 ? post.categories[0].title : "Dental Health"}
                    </span>
                    <span className="text-sm text-gray-500 mx-2">•</span>
                    <span className="text-sm text-gray-500">
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500">By {post.author?.name || "Bright Smile Dental Team"}</p>
                  </div>
                  <Button asChild variant="outline" className="w-fit group">
                    <Link href={`/blog/${post.slug.current}`} className="flex items-center">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg text-gray-600 mb-8">
            Stay updated with our latest articles, dental tips, and special offers delivered straight to your inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-grow"
              required
            />
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>

      {/* Booking CTA */}
      <BookingCta />
    </div>
  )
}
