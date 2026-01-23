import NextAuth from "next-auth";
import {authConfig} from "@/auth/config";
import Credentials from "next-auth/providers/credentials";
import {z} from "zod";
import {authApi} from "@/features/auth/services";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export const {auth, signIn, signOut, handlers} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        username: {label: "Username", type: "text"},
        password: {label: "Password", type: "password"},
      },
      async authorize(credentials) {
        const parsed = loginSchema.safeParse(credentials);

        if (!parsed.success) {
          return null;
        }

        const {username, password} = parsed.data;

        try {
          const response = await authApi.login({username, password});

          if (response.access_token) {
            // Return user object with the access token
            return {
              id: username,
              name: username,
              accessToken: response.access_token,
            };
          }

          return null;
        } catch (error) {
          console.error("Login error:", error);
          return null;
        }
      },
    }),
  ],
});
