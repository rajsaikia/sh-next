import Link from 'next/link';

const posts = [
  {
    slug: 'aenean-vitae-mattis-elit',
    title: 'Aenean vitae mattis elit',
    excerpt: 'Aenean justo lacus, mollis sit amet molestie, aliquam id enean sit amet est tristique, fringilla sapien at, laoreet elit. Suspendisse tristique nibh at felis bibendum, eu maximus ex dignissim.',
  },
  {
    slug: 'nullam-cursus-elit-lacus',
    title: 'Nullam cursus elit lacus',
    excerpt: 'Sed purus odio, scelerisque nec mauris vitae, tristiquinterdum diam. Maecenas faucibus justo id finibus egestas. Curabitur vitae scelerisqu maecenas dapibus sapien dolor, sit amet vulputate velit cursus vitae.',
  },
  {
    slug: 'pellentesque-tincidunt-malesuadal',
    title: 'Pellentesque tincidunt malesuadal',
    excerpt: 'Pellentesque tincidunt malesuadal nunc dapibus purused dictum ide proin a turpis tempus, ullamcorper dui id faucibus semper quam acc erat convallis volutpat duis feugiat.',
  },
];

export default function PostsPage() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/posts/${post.slug}`} className="block p-4 border rounded-lg hover:bg-gray-100">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p>{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
