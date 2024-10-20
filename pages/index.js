import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>StableBond - Institutional-grade Safe-assets and Repo infrastructure On-chain</title>
        <meta name="description" content="Bringing Institutional-grade Safe-assets and Repo infrastructure On-chain" />
        <link href="https://fonts.googleapis.com/css2?family=Kaisei+Tokumin:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#023020] text-white relative p-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/treasury%20bond%20asset-ovsomiJ1Lkzb4jRbu71QPk8V7geFBQ.png"
            alt="US Treasury Bond"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center max-w-[1440px] w-full">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stablebond_final__1_-removebg-preview%201-n5YqsM3HUaAGps0q62s3hYfQn0ZcZX.png"
            alt="StableBond Logo"
            className="w-24 h-auto mb-8"
          />
          <h1 className="text-base sm:text-2xl md:text-3xl lg:text-4xl text-center font-light max-w-[800px] mb-12 leading-tight font-kaisei">
            Bringing Institutional-grade Safe-assets and
            <br />
            Repo infrastructure On-chain
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-8 relative z-10">
          <Link href="https://medium.com/@stablebond">
            <a className="text-white hover:text-gray-300 transition-colors duration-200 text-base sm:text-lg font-kaisei underline">
              Research
            </a>
          </Link>
          <Link href="https://ir15zt41xnh.typeform.com/to/GmEGkGFa">
            <a className="text-white hover:text-gray-300 transition-colors duration-200 text-base sm:text-lg font-kaisei underline">
              Institutional Partnerships
            </a>
          </Link>
          <Link href="mailto:hiring@stablebond.co">
            <a className="text-white hover:text-gray-300 transition-colors duration-200 text-base sm:text-lg font-kaisei underline">
              Hiring
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}
