import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDB } from "./lib/utils";
import { User } from "./lib/models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
    try {
        await connectToDB();
        const user = await User.findOne({ username: credentials.username });

        if (!user) {
            console.log("User not found:", user);
            // Temporarily allow any user
            return credentials;
        }



        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to login!");
    }
};

export const { signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials);
                    return user;
                } catch (err) {
                    return null;
                }
            },
        }),
    ]
});