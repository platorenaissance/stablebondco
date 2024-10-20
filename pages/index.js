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
          <Image
            src="/images/treasury-bond.png"
            alt="US Treasury Bond"
            width={700}
            height={506}
            className="object-contain"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center max-w-[1440px] w-full">
          <Image
            src="/images/stablebond-logo.png"
            alt="StableBond Logo"
            width={100}
            height={62}
            className="mb-8"
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-light max-w-[800px] mb-12 leading-tight font-kaisei">
            Bringing Institutional-grade Safe-assets and Repo infrastructure On-chain
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8 relative z-10">
          <Link
            href="https://medium.com/@stablebond"
            className="text-white hover:text-gray-300 transition-colors duration-200 text-sm sm:text-base font-kaisei"
          >
            Research
          </Link>
          <Link
            href="https://ir15zt41xnh.typeform.com/to/GmEGkGFa"
            className="text-white hover:text-gray-300 transition-colors duration-200 text-sm sm:text-base font-kaisei"
          >
            Institutional Partnerships
          </Link>
          <Link
            href="mailto:hiring@stablebond.co"
            className="text-white hover:text-gray-300 transition-colors duration-200 text-sm sm:text-base font-kaisei"
          >
            Hiring
          </Link>
        </div>
      </div>
    </>
  )
}
