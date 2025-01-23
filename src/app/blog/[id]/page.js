// src/app/blog/[id]/page.js

import Link from "next/link";

export const metadata = {
  title: "Blog Details",
};

async function getPostDetails(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

export default async function BlogDetails({ params }) {
  const post = await getPostDetails(params.id);

  return (
    <main className="p-6  min-h-screen">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="mt-4 text-gray-700">{post.body}</p>
      <Link href="/" className="text-blue-500 mt-4 inline-block">
        ← Back to Home
      </Link>
    </main>
  );
}
