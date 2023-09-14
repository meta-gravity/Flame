'use client'

import { signIn } from "next-auth/react"
import { Button } from "./ui/button"

export default function githubLogin() {
    return (
        <main>
            <div>
                <Button onClick={
                    () => {
                        signIn('github', {
                            callbackUrl: 'http://localhost:3000/dashboard'
                        })
                    }
                }>SignIn</Button>
            </div>
        </main>
    )
}