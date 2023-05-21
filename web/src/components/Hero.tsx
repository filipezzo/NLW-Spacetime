import Image from 'next/image'
import logo from '../assets/nlw-logo.svg'
import Link from 'next/link'
export function Hero() {
  return (
    <div className="space-y-5 ">
      <Image src={logo} alt="" className="sss:mt-4 sss:self-center" />
      <h1 className="text-4xl font-bold leading-tight text-gray-50">
        Your time capsule
      </h1>
      <p
        className="w-[390px] text-[18px] leading-relaxed text-gray-100 sm:max-w-[200px] sm:text-[14px] ssm:w-auto
      
      "
      >
        Collect significant moments from your journey and share them (if you
        want) with the world!
      </p>

      <Link
        href="/memories/new"
        className="inline-block w-[214px] rounded-full bg-green-500 px-5 py-3 text-center font-alt text-sm font-bold uppercase leading-none
            text-black transition-all hover:bg-green-200
           ssm:bg-red-500
            "
      >
        Register Memory
      </Link>
    </div>
  )
}
