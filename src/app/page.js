// src/app/page.js

export const metadata = {
  title: "Home - Blog Viewer",
};

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="p-6">
      <h1 className="container text-3xl font-bold mb-4">Blog Posts</h1>
      <ul className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 9).map((post) => (
            <div
              key={post.id}
              className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
            >
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {post.title}
                </h2>
                <p className="text-gray-600 mt-2">
                  {post.body.substring(0, 30)}...
                </p>
                <a
                  href={`/blog/${post.id}`}
                  className="text-blue-500 hover:underline mt-4 inline-block"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </ul>
    </main>
  );
}
