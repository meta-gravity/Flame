import { redirect } from 'next/navigation'
import { authOptions } from "../api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"

export default async function Dashboard() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/api/auth/signin')
    }

    return (
        <main>
            <h1 className="items-center text-center h-screen">Hello world I am secret</h1>
        </main>
    )
}