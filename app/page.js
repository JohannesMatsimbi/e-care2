"use client";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { collection, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "./firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/unauthenticated");
    },
  });

  return (
    <div className="p-8">
      <h1>what is ecare bluh bluh bluh we take care of u</h1>
    </div>
  );
}
