// import auth from "@/auth";
import { useSession, signIn, signOut } from "next-auth/react";

// export async function currentUser() {
//   const session = await auth();
//   return session?.user;
// }

// export async function currentRole() {
//   const session = await auth();
//   return session?.user?.role;
// }

// export async function isAuthenticated() {
//   const session = await auth();

//   return !!session?.user;
// }

export async function hadLogin() {
  const { data: session } = useSession();
  console.log(session);
  return !!session
}
