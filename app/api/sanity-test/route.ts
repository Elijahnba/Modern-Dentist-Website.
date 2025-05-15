import { NextResponse } from "next/server"
import { client } from "@/lib/sanity"

export async function GET() {
  try {
    // Try to fetch a simple query to test the connection
    const result = await client.fetch(`*[_type == "testimonial"][0...1]`)

    return NextResponse.json({
      success: true,
      message: "Successfully connected to Sanity",
      data: result,
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
      hasToken: !!process.env.SANITY_API_TOKEN,
    })
  } catch (error: any) {
    console.error("Sanity connection test failed:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to connect to Sanity",
        error: error.message,
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        hasToken: !!process.env.SANITY_API_TOKEN,
      },
      { status: 500 },
    )
  }
}
