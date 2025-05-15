import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"

// Create a more robust client configuration
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-05-03",
  useCdn: process.env.NODE_ENV === "production",
  // Add token if available
  token: process.env.SANITY_API_TOKEN,
  // Prevent 404 errors from being thrown
  ignoreBrowserTokenWarning: true,
})

// Helper function for generating image URLs with the Sanity Image Pipeline
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  if (!source) return ""
  return builder.image(source)
}

// Fetch blog posts with pagination
export async function getBlogPosts(limit = 10, skip = 0) {
  try {
    return await client.fetch(
      `*[_type == "blogPost"] | order(publishedAt desc) [${skip}...${skip + limit}] {
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        publishedAt,
        author->{name, image},
        categories[]->{title}
      }`,
    )
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return []
  }
}

// Fetch a single blog post by slug
export async function getBlogPostBySlug(slug: string) {
  try {
    return await client.fetch(
      `*[_type == "blogPost" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        mainImage,
        body,
        publishedAt,
        author->{name, image, bio},
        categories[]->{title},
        "relatedPosts": *[_type == "blogPost" && slug.current != $slug] | order(publishedAt desc) [0...3] {
          _id,
          title,
          slug,
          mainImage,
          publishedAt
        }
      }`,
      { slug },
    )
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error)
    return null
  }
}

// Fetch testimonials - completely rewritten for reliability
export async function getTestimonials(category?: string) {
  try {
    // Create a simple query without filters first
    const query = `*[_type == "testimonial"]`

    // Only add category filter if provided and valid
    if (category && category !== "all") {
      // Use a simpler query structure
      return await client.fetch(
        `*[_type == "testimonial" && category == $category] | order(date desc) {
          _id,
          name,
          rating,
          quote,
          category,
          date,
          source
        }`,
        { category },
      )
    }

    // Execute the basic query without parameters
    return await client.fetch(
      `${query} | order(date desc) {
        _id,
        name,
        rating,
        quote,
        category,
        date,
        source
      }`,
    )
  } catch (error) {
    // Log the error and rethrow to allow the component to handle it
    console.error("Error fetching testimonials:", error)
    throw error
  }
}

// Fetch services
export async function getServices() {
  try {
    return await client.fetch(
      `*[_type == "service"] | order(order asc) {
        _id,
        title,
        slug,
        description,
        icon,
        fullDescription,
        image
      }`,
    )
  } catch (error) {
    console.error("Error fetching services:", error)
    return [] // Return empty array instead of undefined
  }
}

// Fetch a single service by slug
export async function getServiceBySlug(slug: string) {
  try {
    return await client.fetch(
      `*[_type == "service" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        description,
        icon,
        fullDescription,
        image,
        benefits,
        procedures[]->{
          _id,
          title,
          description,
          image,
          price
        }
      }`,
      { slug },
    )
  } catch (error) {
    console.error(`Error fetching service with slug ${slug}:`, error)
    return null
  }
}
