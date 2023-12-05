import Image from 'next/image'
import { Inter } from 'next/font/google'
import Trending from '@/components/Trending'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <Trending/>
    </main>
  )
}
