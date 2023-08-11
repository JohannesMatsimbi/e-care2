import { authOptions } from "app/api/auth/[...nextauth]/route.js";
import { getServerSession } from "next-auth";
import "./globals.css";
import { Inter } from "next/font/google";
import SessionProvider from "./auth-old/Backend/SessionProvider";
import Navbar from "../components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-CARE",
  description: "ss",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Navbar>{children}</Navbar>
        </SessionProvider>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"></script>
      </body>
    </html>
  );
}
