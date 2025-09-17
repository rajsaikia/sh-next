import Image from 'next/image';

interface PostViewProps {
  title: string;
  imageUrl: string;
  content: React.ReactNode;
}

export default function PostView({ title, imageUrl, content }: PostViewProps) {
  return (
    <article className="max-w-4xl mx-auto py-8">
      <div className="relative h-96 mb-8">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="prose lg:prose-xl max-w-none">{content}</div>
    </article>
  );
}
