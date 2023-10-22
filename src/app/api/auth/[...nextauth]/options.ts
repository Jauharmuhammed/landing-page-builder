import { getServerSession, type NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import "dotenv/config";
import { eq } from "drizzle-orm";
import { nanoid } from "@reduxjs/toolkit";

export const options: NextAuthOptions = {
    adapter: DrizzleAdapter(db),
    secret: process.env.NEXTAUTH_SECRET!,
    session: {
        strategy: "jwt",
    },
    providers: [
        // GitHubProvider({
        //     clientId: process.env.GITHUB_ID as string,
        //     clientSecret: process.env.GITHUB_SECRET as string,
        // }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        // CredentialsProvider({
        //     name: "Credentials",
        //     credentials: {
        //         username: {
        //             label: "Username",
        //             type: "text",
        //             placeholder: "Username",
        //         },
        //         password: {
        //             label: "Password",
        //             type: "password",
        //             placeholder: "Password",
        //         },
        //     },
        //     async authorize(credentials) {
        //         const user = { id: 42, name: "jauhar", password: "nextauth" };

        //         if (
        //             credentials?.username === user.name &&
        //             credentials?.password === user.password
        //         ) {
        //             return user;
        //         } else {
        //             return null;
        //         }
        //     },
        // }),
    ],
    theme: {
        colorScheme: "auto", // "auto" | "dark" | "light"
        brandColor: "", // Hex color code
        logo: `${process.env.NEXTAUTH_URL}/images/landerr.svg`, // Absolute URL to image
        buttonText: "", // Hex color code
    },
    callbacks: {
        async session({ session, token }) {
            // do something to session
            session.user = {
                id: token.id,
                email: token.email,
                name: token.name,
                image: token.image as string,
              };
            return session;
        },
        async jwt({ token, user }) {
            const email = token.email;

            const dbUser = (
                await db
                    .select()
                    .from(users)
                    .where(eq(users.email, email as string))
            )[0];

            if (!dbUser) {
                token.id = user.id;
                return token;
            }

            return {
                id: dbUser.id,
                email: dbUser.email,
                name: dbUser.name,
                image: dbUser.image,
            };
        },
    },
};

export const getAuthSession = () => getServerSession(options);
