import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8">
      <h1>what is ecare bluh bluh bluh we take care of u</h1>
      <h1>
        dhd
        <Link className="text-blue-700 " href={"/auth/signin"}>
          SignIn{" "}
        </Link>{" "}
        or{" "}
        <Link className="text-blue-700 " href={"/auth/signup"}>
          SignUp{" "}
        </Link>
        VIEW MORE CONTENT
      </h1>
    </div>
  );
}
