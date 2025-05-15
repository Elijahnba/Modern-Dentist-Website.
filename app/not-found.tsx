import Image from "next/image"

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <Image src="/logo.png" alt="Bright Smile Dental Logo" width={80} height={80} />
            </div>
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              We're sorry, the page you're looking for doesn't exist or has been moved.
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Return Home
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}
