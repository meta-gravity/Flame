import { link } from 'fs'
import Image from 'next/image'
import { ChevronRight, Mail } from "lucide-react"
import { Button } from '@/components/ui/button';

// import './globals.css'

export default function Home() {
  return (
    <main>
      <div className="flex items-center">
        <div className="w-1/2">
          <Image className='flex items-center'
            src="/images/first.png" // Route of the image file
            height={200} // Desired height
            width={200} // Desired width
            alt="Your Name"
          />
        </div>
        {/* <div className="w-1/2">
          <h1 className="text-center font-bold text-4xl p-2">This is flame</h1>
          <div className="p-6 max-w-sm mx-auto bg-white shadow rounded-xl items-center text-center group block hover:bg-red-300 hover:ring-green-200">
            <div className="text-xl font-medium text-black"> 
              Flame 🔥
            </div>
            <p className="text-slate-500 group-hover:text-sm font-semibold">⚡Just a bunch of features I guess</p>
          </div>
        </div> */}
      </div>
    </main>
  )
}