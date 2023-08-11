"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Chat from "./chat";

import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { auth, db } from "../../firebase";
import { useSession } from "next-auth/react";

import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  serverTimestamp,
  setDoc,
  increment,
} from "firebase/firestore";

import { doc, getDoc } from "firebase/firestore";

export default function Inbox() {
  const session = useSession();
  const user = auth.currentUser;
  let [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [User2, setUser2] = useState("");
  const [ChatID, setChatID] = useState("");
  const [DocName, setDocName] = useState("");

  const getMessages = async () => {
    const q = query(
      collection(db, "Messages"),
      where("users", "array-contains", user?.email)
    );
    const querySnapshot = await getDocs(q);

    const users = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      const chatName = data.User2; // Adjust it according to your data structure
      const lastMessage = data.LastMessage;
      const ID = data.ID;

      return {
        docName: doc.id,
        ID: ID,
        chatName: chatName,
        time: lastMessage.Time,
        message: lastMessage.Text,
        // Add other fields you want to access and display
      };
    });

    setMessages(users);
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div>
      <div className="container mx-auto">
        <div className="min-w-full border rounded lg:grid lg:grid-cols-3">
          <div
            className={
              showChat
                ? "hidden lg:block"
                : "border-r border-gray-300 lg:col-span-1"
            }
          >
            <div className="mx-3 my-3">
              <div className="relative text-gray-600">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-gray-300"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
                <input
                  type="search"
                  className="block w-full py-2 pl-10 bg-gray-100 rounded outline-none"
                  name="search"
                  placeholder="Search"
                  required=""
                />
              </div>
            </div>
            <ul className="overflow-auto h-[32rem]">
              <h2 className="my-2 mb-2 ml-2 text-lg text-gray-600">Chats</h2>
              {messages.map((user) => (
                <div onClick={() => ChooseUser(user)} key={user.ID}>
                  <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                    <img
                      className="object-cover w-10 h-10 rounded-full"
                      src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
                      alt="username"
                    />
                    <div className="w-full pb-2">
                      <div className="flex justify-between">
                        <span className="block ml-2 font-semibold text-gray-600">
                          {user.chatName}
                        </span>
                        <span className="block ml-2 text-sm text-gray-600">
                          {user.time}
                        </span>
                      </div>
                      <span className="block ml-2 text-sm text-gray-600">
                        {user.message}
                      </span>
                    </div>
                  </a>
                </div>
              ))}
              <li>
                <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out bg-gray-100 border-b border-gray-300 cursor-pointer focus:outline-none">
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src="https://cdn.pixabay.com/photo/2016/06/15/15/25/loudspeaker-1459128__340.png"
                    alt="username"
                  />
                  <div className="w-full pb-2">
                    <div className="flex justify-between">
                      <span className="block ml-2 font-semibold text-gray-600">
                        DR Bhuda
                      </span>
                      <span className="block ml-2 text-sm text-gray-600">
                        50 minutes
                      </span>
                    </div>
                    <span className="block ml-2 text-sm text-gray-600">
                      Good night
                    </span>
                  </div>
                </a>
                <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
                    alt="username"
                  />
                  <div className="w-full pb-2">
                    <div className="flex justify-between">
                      <span className="block ml-2 font-semibold text-gray-600">
                        Dr white
                      </span>
                      <span className="block ml-2 text-sm text-gray-600">
                        6 hour
                      </span>
                    </div>
                    <span className="block ml-2 text-sm text-gray-600">
                      Good Morning
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className={`lg:col-span-2 lg:block ${!showChat && "hidden"} `}>
            <div className="block lg:hidden" onClick={() => setShowChat(false)}>
              <button>GO BACK</button>
            </div>
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
}

// const ChooseUser = (User2) => {
//   setShowChat(!showChat);

//   setUser2(User2.chatName);
//   setDocName(User2.docName);
// };

// const Inboxs = ({ variable }) => {
//   useEffect(() => {}, [variable]);
//   return (
//     <div>
//       <Chat User2={User2} ChatId={DocName} showChat={showChat} />
//     </div>
//   );
// };
// const Inboxs = ({ variable }) => {
//   return (
//     <div>
//       <Chat User2={User2} ChatId={DocName} showChat={showChat} />
//     </div>
//   );
// };
