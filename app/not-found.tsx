
import Link from 'next/link'
import singer from '../public/404.jpg'
import Image from 'next/image'
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <Image src={singer}
        width={500}
        height={500}
        alt='404'
  
        ></Image>
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    
      <Link href="/" className="text-white">
        Return Home
      </Link>
    </div>
  )
}
