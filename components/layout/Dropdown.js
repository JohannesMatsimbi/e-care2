"use client";
import React from "react";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import { InButton, OutButton } from "./TempButton";
export default function Dropdown() {
  return (
    <div>
      <Link href={"/auth/signin"}>
        <div
          className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
          id="dropdown-user"
        >
          <div>
            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
              Sign In
            </button>
          </div>
        </div>
      </Link>
    </div>
  );

  /*
  return (
    <div>
      {user && (
        <div
          className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
          id="dropdown-user"
        >
          <div className="px-4 py-3" role="none">
            <p className="text-sm text-gray-900 " role="none">
              {user?.displayName}
            </p>
            <p
              className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
              role="none"
            >
              {user?.email}
            </p>
          </div>
          <ul className="py-1" role="none">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                Earnings
              </a>
            </li>
            <li>
              <div>
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => signout()}
                >
                  Sign Out
                </button>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
  */
}
