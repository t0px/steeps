import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import bcrypt from "bcrypt";
import { connectDB } from "@/utils/connectDB";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        console.log("Credentials Sent:", credentials);
        await connectDB();

        try {
          const user = await User.findOne({
            $or: [
              { username: credentials.username_or_email },
              { email: credentials.username_or_email },
            ],
          }).select("+password");

          if (user) {
            console.log("user is:", user);
            console.log(`Comparing ${user.password} & ${credentials.password}`);
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            console.log("Compared passwords!");

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong Credentials!");
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        console.log("User Data:", user);
        token = {
          ...token,
          name: user.username,
          picture: user.avatar,
          role: user.role,
        };
        console.log("Token is:", token);
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      session.user.id = token.sub;
      return session;
    },
  },
  pages: {
    error: "/login",
  },
});

export { handler as GET, handler as POST };
