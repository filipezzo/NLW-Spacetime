import { ReactNode } from 'react'
import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as Bai } from 'next/font/google'
import { Effects } from '@/components/Effects'
import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { SignIn } from '@/components/SignIn'
import { Copyright } from '@/components/Copyright'
import { cookies } from 'next/headers'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const bai = Bai({ subsets: ['latin'], weight: '700', variable: '--font-bai' })

export const metadata = {
  title: 'NLW SpaceTime',
  description:
    'A time capsule built with React, Next.js, Tailwind, and Typescript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has('token')
  return (
    <html lang="en">
      <body
        className={`${roboto.variable}  ${bai.variable} bg-gray-900 font-sans text-gray-100 `}
      >
        <main className="grid min-h-screen grid-cols-2  ssm:grid-cols-1">
          <div className=" relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-star.svg)] bg-cover px-28 py-16  ssm:px-8 ">
            <Effects />
            {isAuthenticated ? <Profile /> : <SignIn />}
            <Hero />
            <Copyright />
          </div>

          <div className="flex max-h-screen flex-col overflow-y-scroll  bg-[url(../assets/bg-star.svg)] bg-cover ">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
