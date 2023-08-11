"use client";
import React from "react";

import {
  collection,
  addDoc,
  arrayUnion,
  setDoc,
  doc,
  arrayRemove,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { db } from "../../firebase";

export default function ApproveSeller({ user }) {
  const session = useSession();
  async function apply() {
    // Add a new document with a generated id.
    await updateDoc(doc(db, "approve", user?.email), {
      roles: arrayRemove("tutor"),
    }).then(
      await updateDoc(doc(db, "users", user?.email), {
        roles: arrayRemove("tutor"),
      })
    );
  }

  return (
    <div>
      <h1>approve a tutor</h1>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => apply()}
      >
        apply
      </button>
    </div>
  );
}
