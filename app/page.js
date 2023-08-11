import { redirect, useRouter } from "next/navigation";
import { getUser } from "./utils/utils";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = await getUser();

  return (
    <div className="">
      <h1>home {user?.firstName} </h1>
    </div>
  );
}
