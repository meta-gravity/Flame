import { link } from 'fs'
import Image from 'next/image'
import { ChevronRight, Mail } from "lucide-react"
import { Button } from '@/components/ui/button';

// import './globals.css'

export default function Home() {
  return (
    <main>
      <div className="flex items-center">
        <div className='flex items-center mx-auto p-6'>
          <div className='text-6xl text-center font-bold p-2'>
            Showcase your project with
            <div className='text-6xl decoration-yellow-700/80 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-red-300 to-yellow-400'>
             Flame
            </div>
          </div>
          <div className='text-slate-500 text-center p-3 items-center mx-auto  '>
            Flame ⚡is an open-source tool that helps designer and developer to display there works
          </div>
        </div>
        {/* <div className="w-1/2">
          <Image className='flex items-center'
            src="/images/first.png" // Route of the image file
            height={200} // Desired height
            width={200} // Desired width
            alt="Your Name"
          />
        </div> */}
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