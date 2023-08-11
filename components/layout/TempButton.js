"use client";
import React from "react";

const signout = async () => {};

export function InButton() {
  return (
    <div>
      <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
        Sign In
      </button>
    </div>
  );
}
export function OutButton() {
  return (
    <div>
      <button
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={() => signout()}
      >
        Sign Out
      </button>
    </div>
  );
}
