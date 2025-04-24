import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const auth = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // 这里添加你的认证逻辑
        // 例如查询数据库验证用户
        const user = { id: 1, name: "admin", email: "admin@example.com" };

        if (
          credentials?.username === "admin" &&
          credentials?.password === "admin123"
        ) {
          return user;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
export default auth;
