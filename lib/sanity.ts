import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-05-03",
  useCdn: process.env.NODE_ENV === "production",
})

// Helper function for generating image URLs with the Sanity Image Pipeline
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Fetch blog posts with pagination
export async function getBlogPosts(limit = 10, skip = 0) {
  return client.fetch(
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
}

// Fetch a single blog post by slug
export async function getBlogPostBySlug(slug: string) {
  return client.fetch(
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
}

// Fetch testimonials with optional filtering by category
export async function getTestimonials(category?: string) {
  let query = `*[_type == "testimonial"]`

  if (category && category !== "all") {
    query += ` [category == $category]`
  }

  query += ` | order(date desc) {
    _id,
    name,
    rating,
    quote,
    category,
    date,
    source
  }`

  return client.fetch(query, { category })
}

// Fetch services
export async function getServices() {
  return client.fetch(
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
}

// Fetch a single service by slug
export async function getServiceBySlug(slug: string) {
  return client.fetch(
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
}
