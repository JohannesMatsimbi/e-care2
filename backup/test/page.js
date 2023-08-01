import { getServerSession } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { authOptions } from "app/api/auth/[...nextauth]/route.js";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../app/firebase";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const docRef = doc(db, "users", session?.user.email);
  const docSnap = await getDoc(docRef);
  console.log("Document data:", docSnap.data());

  return (
    <div className="p-8">
      <div className="text-black"> hello </div>
    </div>
  );
}

Home.requireAuth = true;
