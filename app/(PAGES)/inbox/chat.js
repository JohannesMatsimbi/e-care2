"use client";
import React, { useState, useEffect } from "react";

import { useSession } from "next-auth/react";
import { faCcJcb } from "@fortawesome/free-brands-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

export default function Chat() {
  const User2 = "kamo";

  const [messsage, setMessage] = useState("");
  const [Chats, setChats] = useState([]);

  const sendMessage = async () => {
    function writeUserData(userId, name, email, imageUrl) {
      const db = getDatabase();
      set(ref(db, "users/" + userId), {
        username: name,
        email: email,
        profile_picture: imageUrl,
      });
    }
  };

  return (
    <div>
      <div className="w-full">
        <div className="relative flex items-center p-3 border-b border-gray-300">
          <img
            className="object-cover w-10 h-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
            alt="username"
          />
          <span className="block ml-2 font-bold text-gray-600">{User2}</span>
          <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3" />
        </div>
        <div className="relative w-full p-6 overflow-y-auto h-[40rem]">
          {/*Chats.map((chat) => (
            <ul key={chat.timesent} className="space-y-2">
              {chat.textowner == User2 && (
                <li className="flex justify-start">
                  <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                    <span className="block">{chat.text}</span>
                  </div>
                </li>
              )}

              {chat.textowner == User && (
                <li className="flex justify-end">
                  <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                    <span className="block">{chat.text}</span>
                  </div>
                </li>
              )}
            </ul>
              ))*/}
        </div>
        <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              />
            </svg>
          </button>
          <input
            value={messsage}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="Message"
            className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
            name="message"
            required=""
          />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
          </button>
          <button type="submit" onClick={() => sendMessage()}>
            <svg
              className="w-5 h-5 text-gray-500 origin-center transform rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  // Add leading zeros if necessary
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${hours}:${minutes} ${ampm}`;
}

function getCurrentDate() {
  let separator = "-";
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let time =
    newDate.getHours() +
    ":" +
    newDate.getMinutes() +
    ":" +
    newDate.getSeconds();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date} ${separator} ${time}`;
}

// const sendMessage = async () => {
//   e.preventdefault();

//   const messagesRef = doc(db, "Messages", ChatId);
//   const newmessage = {
//     [`Messages.${getCurrentDate()}`]: {
//       text: messsage,
//       textowner: User2,
//       timesent: getCurrentDate(),2
//     },
//   };
//   await updateDoc(messagesRef, newmessage);
//   const currentTime = getCurrentTime(); // Get the current time
//   await updateDoc(messagesRef, {
//     "LastMessage.Text": messsage,
//     "LastMessage.Time": currentTime,
//   });
//   getMessages();
// };

// const FetchUsers = async () => {
//   const datareq = await fetch("https://ecare-gilt.vercel.app/api/getUsers");
//   const Users = await datareq.json();
//   setChats(Users);
// };

// const getMessages = async () => {
//   try {
//     const docRef = doc(db, "Messages", ChatId);
//     const snapshot = await getDoc(docRef);

//     if (snapshot.exists()) {
//       const Messages = snapshot.data().Messages;

//       const chats = Object.keys(Messages).map((key) => {
//         return {
//           key: key,
//           ...Messages[key],
//         };
//       });

//       // Sort the chats array based on TimeSent in ascending order
//       chats.sort((a, b) => {
//         const timeSentA = new Date(a.TimeSent);
//         const timeSentB = new Date(b.TimeSent);
//         return timeSentA - timeSentB;
//       });

//       setChats(chats);
//     } else {
//       // Handle the case where the snapshot doesn't exist (collection not found)
//       console.log("No Messages collection found.");
//     }
//   } catch (error) {
//     // Handle any other errors that occur during the retrieval of messages
//     console.error("Error retrieving messages:", error);
//   }
// };

// useEffect(() => {
//   getMessages();
// }, [ChatId]);
