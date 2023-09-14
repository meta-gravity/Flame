//  
import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'hello@example.com'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // Handle Auth!
        const User = { id: '1', name: 'Meta', email: "test@test.com" }
        return User
      }
    })
  ]
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST } 