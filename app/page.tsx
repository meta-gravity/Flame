import { link } from 'fs'
import Image from 'next/image'
import { Mail } from "lucide-react"
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

// import './globals.css'

export default function Home() {
  return (
    <main>
      <div className="shadow-sm bg-black">
        <a href="/about" className='container mx-auto p-4 flex text-center'>About</a>
      </div>
      <h1 className='text-center font-bold fw-70'>This is flame</h1>

      <Button>
        <Mail className='mr-2 h-4 w-4 text-center' /><a href="/login">Login with email</a>
      </Button>
      <ArrowUpRight />

    </main>
  )
}