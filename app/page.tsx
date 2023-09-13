import { link } from 'fs'
import Image from 'next/image'
import { ChevronRight, Mail } from "lucide-react"
import { Button } from '@/components/ui/button';

// import './globals.css'

export default function Home() {
  return (
    <main>
        <div className='text-center'>
          <div className='text-5xl font-bold p-15 m-2 mt-4'>
            🚀 Show off your project with
            <div className='p-1 text-5xl decoration-yellow-700/80 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-red-300 to-yellow-400'>
              Flame
            </div>
          </div>
          <p className='text-slate-500 text-sm font-semibold'>
            Flame ⚡is an open-source tool that helps designer and developer to display their works
          </p>
          <Button variant="default" className='m-2 rounded-lg p-4  '>
            Sign up
          </Button>
        </div>
    </main>
  )
}