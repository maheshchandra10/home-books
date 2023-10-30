import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/",
  },
  secret: process.env.NEXTAUTH_SECRET as string,
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };