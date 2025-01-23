// src/app/profile/page.js
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  LoginLink,
  RegisterLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export const metadata = {
  title: "Profile",
};

export default async function ProfilePage() {
  // Get user session
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="container mx-auto p-6 min-h-screen flex items-center justify-center">
      {user ? (
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
          <h1 className="text-3xl font-bold text-green-600">
            Welcome, {user.given_name || "User"}!
          </h1>
          <p className="mt-4 text-gray-700">
            You&apos;re successfully logged in.
          </p>
          <p className="mt-2 text-gray-500">Email: {user.email}</p>
          <LogoutLink>
            <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-all">
              Logout
            </button>
          </LogoutLink>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            You are not logged in
          </h1>
          <p className="mt-4 text-gray-600">
            Please log in or register to access your profile.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <LoginLink>
              <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-all">
                Login
              </button>
            </LoginLink>
            <RegisterLink>
              <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-all">
                Register
              </button>
            </RegisterLink>
          </div>
        </div>
      )}
    </div>
  );
}
