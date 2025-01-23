// src/app/layout.js

import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Blog Viewer",
  description: "A simple blog viewer app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-gray-900 text-white p-4">
          <nav className="container mx-auto flex justify-between">
            <Link href="/" className="font-bold text-xl">
              Blog Viewer
            </Link>
            <div>
              <Link href="/" className="mr-4">
                Home
              </Link>
              <Link href="/profile" className="mr-4">
                Profile
              </Link>
              <button className="bg-blue-500 px-4 py-2 rounded">Login</button>
            </div>
          </nav>
        </header>
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
