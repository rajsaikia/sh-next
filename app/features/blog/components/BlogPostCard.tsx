
import Image from 'next/image';

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
}

export default function BlogPostCard({ title, excerpt, imageUrl }: BlogPostCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="relative h-60">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h2>
        <p className="text-gray-700 dark:text-gray-300">{excerpt}</p>
      </div>
    </div>
  );
}
