import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";
import CredentialsProvider from "next-auth/providers/credentials";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

export const authOptions = {
  pages: {
    signIn: "/auth/signin",
    signup: "/auth/signup",
  },
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        return await signInWithEmailAndPassword(
          auth,
          credentials.email,
          credentials.password
        )
          .then((userCredential) => {
            if (userCredential.user) {
              return userCredential.user;
            }
          })
          .catch((error) => console.log(error))
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
          });
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: "supasupapass",
  },

  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
  }),
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
