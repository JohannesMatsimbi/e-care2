"use client";
import React from "react";
import {
  collection,
  addDoc,
  updateDoc,
  arrayUnion,
  setDoc,
  doc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";

import { db } from "../../firebase";

export default function SellerBtn({ user }) {
  async function apply() {
    // Add a new document with a generated id.

    await setDoc(
      doc(db, "approve", user?.email),
      { roles: arrayUnion("accomodationOwnser") },
      { merge: true }
    ).then(
      await updateDoc(doc(db, "users", user?.email), {
        roles: arrayUnion("accomodationOwnser"),
      })
    );
  }

  return (
    <div>
      <h1>apply to become a Accomodation owner</h1>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => apply()}
      >
        apply
      </button>
    </div>
  );
}
