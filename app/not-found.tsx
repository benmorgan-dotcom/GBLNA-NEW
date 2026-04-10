import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-primary px-4">
      <h2 className="text-4xl font-black mb-4">404 - Page Not Found</h2>
      <p className="text-gray-500 mb-8 text-center max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link 
        href="/"
        className="bg-secondary text-white px-8 py-3 rounded-full font-bold hover:brightness-110 transition-all shadow-lg"
      >
        Return Home
      </Link>
    </div>
  )
}
