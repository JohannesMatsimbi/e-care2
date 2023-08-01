"use client";
import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";

export default function RecoverAccount() {
  const [email, setEmail] = useState("");

  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        showError("Password reset email sent to " + email);
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        showError(errorCode);
      });
  };

  function showError(message) {
    setError(message);
  }

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Recover Your Password
        </h1>

        <form className="mt-6">
          {error && <p className="text-red-600">{error}</p>}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-2">
            <button
              onSubmit={handleSubmit}
              disabled={!email}
              className="disabled:opacity-40 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              send Email Verification
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
