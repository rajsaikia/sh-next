'use client';

import { useState } from 'react';
import { posts, categories } from '../services/data';
import BlogPostCard from './BlogPostCard';
import CategoryFilter from './CategoryFilter';

export default function BlogPage() {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleCategoryChange = (category: string) => {
    if (category === 'All') {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) => post.category === category);
      setFilteredPosts(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Our Blog</h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Stay updated with the latest news and articles.</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <CategoryFilter categories={categories} onCategoryChange={handleCategoryChange} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredPosts.map((post) => (
            <BlogPostCard key={post.id} {...post} />
          ))}
        </div>
      </main>
    </div>
  );
}
