'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-primary px-4">
      <h2 className="text-4xl font-black mb-4">Something went wrong!</h2>
      <p className="text-gray-500 mb-8 text-center max-w-md">
        An unexpected error occurred. Please try again or return home.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:brightness-110 transition-all shadow-lg"
        >
          Try Again
        </button>
        <Link 
          href="/"
          className="bg-secondary text-white px-8 py-3 rounded-full font-bold hover:brightness-110 transition-all shadow-lg"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
