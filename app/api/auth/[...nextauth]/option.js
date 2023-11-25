import GoogleProvider from "next-auth/providers/google";

export const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    // setting custom login page
    pages: {
      signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
}