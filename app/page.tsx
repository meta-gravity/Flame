import { link } from 'fs'
import Image from 'next/image'
import { ChevronRight, Mail, Star } from "lucide-react"
import { Button } from '@/components/ui/button';
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import { Github } from 'lucide-react'
import Link from 'next/link';



// import './globals.css'

export default async function Home() {
  return (
    <main>
        <div className='text-center'>
          <div className='text-5xl font-bold p-15 m-4 mt-20'>
            🚀 Show off your project with
            <div className='p-1 text-5xl decoration-yellow-700/80 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-red-300 to-yellow-400'>
              Superpowers
            </div>
          </div>
          <p className='text-slate-500 text-sm font-semibold fw-50 text-xl'>
            Flame⚡is an open-source tool that helps designer 
            <br />
            and developer to display their works
          </p>
          <div className='justify-center items-center flex'>
            <Button variant="outline" className='m-4 rounded-lg p-4 hover:outline' >
              <Link href="https://github.com/meta-gravity/Flame">
                <Github fill='' className=" fill-none" />
              </Link>
            </Button>
          </div>
        </div>
    </main>
  )
}