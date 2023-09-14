import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: '8695adeb8eecce9f7c13',
      clientSecret: '29e792b10c83ee6b07ab11912c4f07aba7ac3111',
    }),
  ],
})