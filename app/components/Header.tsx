import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
      <div className="flex items-center">
        <Logo />
        <span className="ml-2 text-lg font-bold">My Awesome Blog</span>
      </div>
      <nav className="flex items-center space-x-4">
        <Link href="/">
          <span className="text-gray-600 hover:text-gray-900">Home</span>
        </Link>
        <Link href="/about">
          <span className="text-gray-600 hover:text-gray-900">About</span>
        </Link>
        <Link href="/contact">
          <span className="text-gray-600 hover:text-gray-900">Contact</span>
        </Link>
        <Link href="/posts">
          <span className="text-gray-600 hover:text-gray-900">Posts</span>
        </Link>
        <Link href="/faq">
          <span className="text-gray-600 hover:text-gray-900">FAQ</span>
        </Link>
        <Link href="/dashboard">
          <span className="text-gray-600 hover:text-gray-900">Dashboard</span>
        </Link>
      </nav>
    </header>
  );
}
