import { link } from 'fs'
import Image from 'next/image'
import { ChevronRight, Mail } from "lucide-react"
import { Button } from '@/components/ui/button';
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import { Github } from 'lucide-react'
import Link from 'next/link';

// import './globals.css'

export default function Home() {
  return (
    <main>
        <div className='text-center'>
          <div className='text-5xl font-bold p-15 m-4 mt-20'>
            🚀 Show off your project with
            <div className='p-1 text-5xl decoration-yellow-700/80 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-red-300 to-yellow-400'>
              Superpowers
            </div>
          </div>
          <p className='text-slate-500 text-sm font-semibold'>
            Flame⚡is an open-source tool that helps designer and developer to display their works
          </p>
          <div className='justify-center items-center flex'>
            <Button variant="default" className='m-4 rounded-lg p-4'>
              <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
            </Button>
            <Button variant="outline" className='m-4 rounded-lg p-4' >
              <Link href="https://github.com/meta-gravity/Flame">
                <Github  className="" /> Star on Github
              </Link>
            </Button>
          </div>
        </div>
    </main>
  )
}