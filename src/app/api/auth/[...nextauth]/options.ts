import { getServerSession, type NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/lib/db";
import "dotenv/config";

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
};
