import Link from "next/link";

import { redirect } from "next/navigation";

export default function Home() {
  return (
    <div className="p-8">
      <h1>what is ecare bluh bluh bluh we take care of u</h1>
      <h1>
        <Link className="text-blue-700 " href={"/auth/signin"}>
          <span>SignIN</span>
        </Link>
        <span>OR</span>
        <Link className="text-blue-700 " href={"/auth/signup"}>
          <span>SignUp</span>
        </Link>
        <span>VIEW MORE CONTENT</span>
      </h1>
    </div>
  );
}
