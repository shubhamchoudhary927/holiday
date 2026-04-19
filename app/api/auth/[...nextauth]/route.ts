import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        name: { label: "Name", type: "text" } // सिर्फ signup के लिए
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // Login
        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });

        if (user && await bcrypt.compare(credentials.password, user.password)) {
          return { id: user.id, email: user.email, name: user.name };
        }

        // Signup (अगर user नहीं मिला और name दिया है)
        if (credentials.name) {
          const hashedPassword = await bcrypt.hash(credentials.password, 10);
          const newUser = await prisma.user.create({
            data: {
              email: credentials.email,
              password: hashedPassword,
              name: credentials.name
            }
          });
          return { id: newUser.id, email: newUser.email, name: newUser.name };
        }

        return null;
      }
    })
  ],
  pages: { signIn: "/" },
  session: { strategy: "jwt" }
});

export { handler as GET, handler as POST };