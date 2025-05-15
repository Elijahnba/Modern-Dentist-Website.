import { type NextRequest, NextResponse } from "next/server"
import { revalidatePath } from "next/cache"

// This is a webhook endpoint that Sanity can call when content changes
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Verify the webhook secret if you've set one up
    const secret = request.headers.get("x-webhook-secret")
    const expectedSecret = process.env.SANITY_WEBHOOK_SECRET

    if (expectedSecret && secret !== expectedSecret) {
      return NextResponse.json({ message: "Invalid webhook secret" }, { status: 401 })
    }

    // Extract the document type and slug from the body
    const { type, slug } = body

    // Revalidate the appropriate paths based on the document type
    if (type === "blogPost") {
      // Revalidate the blog index page
      revalidatePath("/blog")

      // If we have a slug, revalidate the specific blog post page
      if (slug) {
        revalidatePath(`/blog/${slug}`)
      }
    } else if (type === "testimonial") {
      revalidatePath("/testimonials")
    } else if (type === "service") {
      revalidatePath("/services")

      // If we have a slug, revalidate the specific service page
      if (slug) {
        revalidatePath(`/services/${slug}`)
      }
    } else {
      // For any other content type, revalidate the home page
      revalidatePath("/")
    }

    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (err: any) {
    console.error("Error revalidating:", err)
    return NextResponse.json({ message: err.message }, { status: 500 })
  }
}
