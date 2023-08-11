"use client";

import React, { useState, useEffect } from "react";

import { useRouter } from "next/navigation"; //what it needs to be
import {
  collection,
  doc,
  query,
  where,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  serverTimestamp,
  setDoc,
  increment,
} from "firebase/firestore";
import { auth, db } from "../../firebase";

export default function Users() {
  const [Users, setUsers] = useState([
    {
      id: "6rkWEBAsyvxebtFTSWfm",
      name: "johannes",
      email: "makhesa2022@gmail.com",
      password: "202004963",
    },
    { id: "7KxanzMLmBArFQ3SHPZI", password: "dsv", email: "dv", name: "dsv" },
    {
      id: "8jYJtjiU3tRKz4N7IXBw",
      password: "jk",
      ID: 0,
      name: "Kamog",
      email: "sk",
    },
    {
      id: "",
      gender: "",
      firstName: "",
      dateOfBirth: "",
      lastName: "",
      idNumber: "",
      password: "eak123",
      email: "a@gmil.com",
    },
    {
      id: "DnclyvWYKmwQ58dy8gdd",
      email: "g@gma",
      password: "g@gma",
      name: "test",
    },
    {
      id: "ElO7d6N9s0WNo1319unW",
      email: "oratile@gmail.com",
      name: "Oratile",
      password: "1234567890",
    },
    {
      id: "HuOrfsORsDe6Xm0JOni0",
      email: "johannes@gmail.com",
      name: "dgfxsgfsd",
      password: "puma ",
    },
    { id: "HytPd61poQC9CJILsKAS", ID: 1, Name: "Kamogelo" },
    {
      id: "IKlGc5qlNiLeeVu16GB7",
      password: "khenzi@123",
      name: "mckenzy",
      email: "hlwebexkhenzi@gmail.com",
    },
    {
      id: "YBpUS4BSoQ0NefCVo88P",
      email: "hjtuukhhjb''",
      password: "",
      name: "",
    },
    {
      id: "aTE9FSlbuansD1HUPPD8",
      name: "",
      email: "hjtuukhhjb'",
      password: "",
    },
    {
      id: "fYWrCSSboSsx9DBNXm6f",
      ID: "2",
      name: "Kamo",
      password: "2",
      email: "s@",
    },
    {
      id: "kCpNGf0OXhGnY4WfzMq6",
      email: "qwdegtyuwedtgjtge",
      name: "buewhgfwdeghjd",
      password: "djhgwedhg",
    },
    {
      id: "1234567890123",
      password: "weak123",
      dateOfBirth: "",
      idNumber: "1234567890123",
      lastName: "Sithole",
      gender: "",
      firstName: "Kamogelo",
      email: "sitholekamogelo07@gmail.com",
    },
    {
      id: "uYGWiDoQ6OJS8vyqPF5B",
      email: "s@s",
      ID: 3,
      name: "Kamog",
      password: "0",
    },
    {
      id: "ySnpHKqpRrTZuXtlBqG3",
      email: "hello@gmail",
      password: "12",
      name: "bhuda",
    },
    {
      id: "zJcYDSZhyE77kOLqhOMi",
      email: "hh",
      password: "hh",
      ID: 3,
      name: "hh",
    },
    {
      id: "zLzoWqhKasljN4f1hfeh",
      email: "Kamo@s",
      name: "Hello",
      ID: 8,
      password: "2",
    },
    {
      id: "zhGx3XzDSg4HRX6G3jqj",
      email: "rethabs@gmail.com",
      name: "rethabile",
      password: "",
    },
  ]);

  const router = useRouter();

  const Inbox = async (user2) => {
    const user = auth.currentUser;

    await setDoc(doc(db, "Messages", ` ${user2.id}-${user.email}`), {
      User1: user.id,
      User2: user2.id,
      Users: [user.displayName, user.displayName],
      LastMessage: {
        Text: "",
        Time: "",
      },
      Messages: {},
    });
    router.push("/inbox");
  };

  const FetchUsers = async () => {
    const q = query(collection(db, "users"), where("t", "==", "yes"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setUsers[[...Users, ...doc.data()]];
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
    });
    console.log(Users);
  };

  return (
    <div>
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="font-semibold text-gray-700">Available Doctors</h2>
            <span className="text-xs text-gray-500">
              View accounts of registered Doctors
            </span>
          </div>
        </div>
        <div className="overflow-y-hidden rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                  <th className="px-5 py-3">ID</th>
                  <th className="px-5 py-3">Full Name</th>
                  <th className="px-5 py-3">User Role</th>
                  <th className="px-5 py-3">Created at</th>
                  <th className="px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-500">
                {Users.map((user) => (
                  <tr key={user.ID}>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">3</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-full w-full rounded-full"
                            src="/images/-ytzjgg6lxK1ICPcNfXho.png"
                            alt=""
                          />
                        </div>
                        <button onClick={() => Inbox(user)} className="ml-3">
                          <p className="whitespace-no-wrap">{user.name}</p>
                        </button>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">Administrator</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">Sep 28, 2022</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">
                        Active
                      </span>
                    </td>
                  </tr>
                ))}

                <tr>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">7</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                          className="h-full w-full rounded-full"
                          src="/images/ddHJYlQqOzyOKm4CSCY8o.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-no-wrap">James Cavier</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Author</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Sep 28, 2022</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">
                      Active
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">12</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                          className="h-full w-full rounded-full"
                          src="/images/oPf2b7fqx5xa3mo68dYHo.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-no-wrap">Elvis Son</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Editor</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Sep 28, 2022</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <span className="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-900">
                      Suspended
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">66</p>
                  </td>
                  <td className="bg-white px-5 py-5 text-sm">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                          className="h-full w-full rounded-full"
                          src="/images/fR71TFZIDTv2jhvKsOMhC.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-no-wrap">Dana White</p>
                      </div>
                    </div>
                  </td>
                  <td className="bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Administrator</p>
                  </td>
                  <td className="bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Sep 28, 2022</p>
                  </td>
                  <td className="bg-white px-5 py-5 text-sm">
                    <span className="rounded-full bg-red-200 px-3 py-1 text-xs font-semibold text-red-900">
                      Inactive
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">12</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                          className="h-full w-full rounded-full"
                          src="/images/oPf2b7fqx5xa3mo68dYHo.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-no-wrap">Elvis Son</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Editor</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Sep 28, 2022</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <span className="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-900">
                      Suspended
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
            <span className="text-xs text-gray-600 sm:text-sm">
              Showing 1 to 5 of 12 Entries
            </span>
            <div className="mt-2 inline-flex sm:mt-0">
              <button className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
                Prev
              </button>
              <button className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
