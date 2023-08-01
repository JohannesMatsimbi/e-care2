import { authOptions } from "app/api/auth/[...nextauth]/route.js";
import { getServerSession } from "next-auth";
import "./globals.css";
import { Inter } from "next/font/google";
import SessionProvider from "./auth/Backend/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-CARE",
  description: "HOSPITAL APP",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
