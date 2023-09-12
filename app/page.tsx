import { link } from 'fs'
import Image from 'next/image'
import { ChevronRight, Mail } from "lucide-react"
import { Button } from '@/components/ui/button';

// import './globals.css'

export default function Home() {
  return (
    <main>
      <div>
        <h1 className='text-center font-bold fw-40 p-2'>This is flame</h1>
        <div className='p-6 max-w-sm mx-auto bg-white shadow rounded-xl items-center text-center group block hover:bg-red-300 hover:ring-green-200'>
          <div className='text-xl font-medium text-black'> 
            Flame 🔥
          </div>
          <p className='text-slate-500 group hover: text-sm font-semibold'>⚡Just a bunch of features I guess</p>
        </div>
        <div className='m-6 p-3 max-w-sm mx-auto bg-white shadow rounded-xl text-center '>
          <div className='text-xl font-medium text-black'>
            Juice 🧃
          </div>
          <p className='text-slate-500 text-sm font-semibold'>💡With enough juice and idea you can create anything </p>
        </div>
        <div className='p-3 max-w-sm mx-auto bg-white shadow rounded-xl text-center'>
         <div className='text-xl font-medium text-black'>
          Clean 🧼
        </div>
        <p className='text-slate-500 text-sm font-semibold'>🧽 Keep your codebase clean and organized</p>
      </div>
        <div className='item-center text-center p-4'>
          <Button>
            <Mail className='mr-2 h-4 w-4 text-center' /><a href="/login">Login with email</a>
          </Button>
        </div>
      </div>
    </main>
  )
}