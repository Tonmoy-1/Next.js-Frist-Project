// src/app/profile/page.js

export const metadata = {
  title: "Profile",
};

export default function ProfilePage() {
  return (
    <div className="container mx-auto p-6 min-h-screen">
      <h1 className="text-3xl font-bold">Welcome to your profile!</h1>
      <p className="mt-4">This page will be protected with authentication.</p>
    </div>
  );
}
