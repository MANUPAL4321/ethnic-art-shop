import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "user@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Replace this with your actual DB logic or user validation
        if (
          credentials?.email === "user@example.com" &&
          credentials?.password === "password123"
        ) {
          return {
            id: "1",
            name: "Demo User",
            email: "user@example.com",
          };
        }

        // Return null if authentication fails
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin", // Optional: custom sign-in page
  },
});
