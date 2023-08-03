import User from "@/models/User";
import { connectDB } from "@/utils/connectDB";
import { compare } from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

export default authOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        id: "credentials",
        username: "credentials",
        credentials: {
          email: { label: "Email Address", type: "email" },
          password: { label: "Password", type: "password" },
        },
      },
      async authorize(credentials, req) {
        try {
          await connectDB();

          const user = await User.findOne({
            email: credentials.email,
          }).select("+password");

          if (!user) {
            throw new Error("Invalid Credentials.");
          }

          const isPasswordCorrect = await compare(
            credentials.password,
            user.password
          );
          if (!isPasswordCorrect) {
            throw new Error("Invalid password.");
          }

          return user;
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    signIn: '/login'
  },
  session: {
    strategy: "jwt"
  },
  callbacks: {
    jtw: async ({token, user}) => {
      user && (token.user = user)
      return token
    },
    session: async ({session, token}) => {
      const user = token.user;
      session.user = user;
      return session;
    }
  }
};
