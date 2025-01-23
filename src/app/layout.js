// src/app/layout.js

import Link from "next/link";
import "./globals.css";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export const metadata = {
  title: "Blog Viewer",
  description: "A simple blog viewer app",
};

export default async function RootLayout({ children }) {
  // Get user session
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
          <nav className="container mx-auto flex items-center justify-between py-4 px-6">
            <Link href="/" className="text-3xl font-extrabold tracking-wide">
              Blog<span className="text-yellow-400">Viewer</span>
            </Link>
            <div className="space-x-6 text-lg font-medium">
              <Link
                href="/"
                className="hover:text-yellow-300 transition-all duration-300"
              >
                Home
              </Link>
              <Link
                href="/profile"
                className="hover:text-yellow-300 transition-all duration-300"
              >
                Profile
              </Link>
            </div>
            <div className="flex items-center gap-4">
              {user ? (
                <>
                  <span className="text-yellow-300 font-semibold">
                    Hi, {user.given_name || "User"}!
                  </span>
                  <LogoutLink>
                    <button className="bg-red-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all">
                      Logout
                    </button>
                  </LogoutLink>
                </>
              ) : (
                <LoginLink>
                  <button className="bg-yellow-400 text-gray-900 px-5 py-2 rounded-lg shadow-md hover:bg-yellow-500 transition-all">
                    Login
                  </button>
                </LoginLink>
              )}
            </div>
          </nav>
        </header>
        <main className="container mx-auto p-8 min-h-screen bg-white shadow-md rounded-lg mt-6">
          {children}
        </main>
        <footer className="bg-gray-800 text-gray-400 text-center py-4 mt-10">
          © {new Date().getFullYear()} BlogViewer. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
