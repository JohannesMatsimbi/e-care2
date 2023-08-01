import { authOptions } from "app/api/auth/[...nextauth]/route.js";
import { getServerSession } from "next-auth";
import "./page.css";
import { Inter } from "next/font/google";
import SessionProvider from "../../auth/Backend/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-CARE",
  description: "HOSPITAL APP",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
