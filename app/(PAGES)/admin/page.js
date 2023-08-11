import React from "react";
import SellerBtn from "./sellerbtn";
import AccomodatorBtn from "./AccomodatorBtn";
import TutorBtn from "./TutorBtn";
import ApproveSeller from "./approveSeller";
import ApproveAccomodation from "./approveAccomodation";
import ApproveTutor from "./approveTutor";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { getUser } from "../../utils/utils";

export default async function page() {
  const session = await getServerSession(authOptions);
  const user = getUser();

  if (session) {
    return (
      <div>
        <div>
          <h1>admin</h1>
          <div className="p-4 ">
            <SellerBtn user={session?.user} />
            <AccomodatorBtn user={session?.user} />
            <TutorBtn user={session?.user} />
          </div>

          <div>
            <h1>You can only see this if your admin</h1>
            <h1>List of Users that needs to be approved</h1>
            <div className="p-4 ">
              <ApproveSeller user={session?.user} />
              <ApproveAccomodation user={session?.user} />
              <ApproveTutor user={session?.user} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <h1>login to access page</h1>;
}
