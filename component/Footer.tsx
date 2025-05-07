import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="bg-nuetral-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <div className="mt-4">
          <Link href="https://www.facebook.com">
            <span className="mx-2 text-white hover:text-gray-400 cursor-pointer">Facebook</span>
          </Link>
          <Link href="https://www.twitter.com">
            <span className="mx-2 text-white hover:text-gray-400 cursor-pointer">Twitter</span>
          </Link>
          <Link href="https://www.linkedin.com">
            <span className="mx-2 text-white hover:text-gray-400 cursor-pointer">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
