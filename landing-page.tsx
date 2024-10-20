import Image from 'next/image'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#023020] text-white relative p-4">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/treasury%20bond%20asset-ovsomiJ1Lkzb4jRbu71QPk8V7geFBQ.png"
          alt="US Treasury Bond"
          width={700}
          height={506}
          className="object-contain"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center max-w-[1440px] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stablebond_final__1_-removebg-preview%201-n5YqsM3HUaAGps0q62s3hYfQn0ZcZX.png"
          alt="StableBond Logo"
          width={100}
          height={62}
          className="mb-8"
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-light max-w-[800px] mb-12 leading-tight" style={{ fontFamily: '"Kaisei Tokumin", serif' }}>
          Bringing Institutional-grade Safe-assets and Repo infrastructure On-chain
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8 relative z-10">
        <Link
          href="https://medium.com/@stablebond"
          className="text-white hover:text-gray-300 transition-colors duration-200 text-sm sm:text-base"
          style={{ fontFamily: '"Kaisei Tokumin", serif' }}
        >
          Research
        </Link>
        <Link
          href="https://ir15zt41xnh.typeform.com/to/GmEGkGFa"
          className="text-white hover:text-gray-300 transition-colors duration-200 text-sm sm:text-base"
          style={{ fontFamily: '"Kaisei Tokumin", serif' }}
        >
          Institutional Partnerships
        </Link>
        <Link
          href="mailto:hiring@stablebond.co"
          className="text-white hover:text-gray-300 transition-colors duration-200 text-sm sm:text-base"
          style={{ fontFamily: '"Kaisei Tokumin", serif' }}
        >
          Hiring
        </Link>
      </div>
    </div>
  )
}