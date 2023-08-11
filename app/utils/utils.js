import { getServerSession } from "next-auth/next";
//import { authOptions } from "../api/auth/[...nextauth]";
import { getDatabase, ref, onValue } from "firebase/database";
import { doc, getDoc } from "firebase/firestore";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export const getUser = async () => {
  const session = await getServerSession(authOptions);
  const currentUser = session?.user;
  if (!currentUser) {
    return null;
  }
    
  const docRef = doc(db, "users", currentUser.email);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  }
  return null;
};

export const getTutors = async () => {
  const q = query(collection(db, "users"), where("t", "==", "yes"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());

    return doc.data();
  });

  return null;
};
