import type {NextAuthConfig} from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken: string;
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}



export const authConfig = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    // No page protection - all pages accessible without login
    authorized() {
      return true;
    },
    async jwt({token, user}) {
      // Persist the access token from the login response
      if (user) {
        token.accessToken = (user as {accessToken?: string}).accessToken;
      }
      return token;
    },
    async session({session, token}) {
      // Pass the access token to the session for API calls
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
