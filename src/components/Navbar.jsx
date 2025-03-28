import Link from "next/link";
import Image from "next/image"
import logo from "@/assets/logo.webp";
export default function Navbar() {
  return (
    <nav className="w-full bg-[#03577B] text-white px-4 py-2 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
      <Link href='/'>
        <Image src={logo} className="rounded-full h-8 w-8 object-cover opacity-80" alt='Myanmar Books Hub logo'/>
      </Link>
        <ul className="flex gap-4 font-medium">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/all-books" className="hover:underline">All Books</Link></li>
          <li><Link href="/newspapers" className="hover:underline">Newspapers</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
        </ul>
      </div>
    </nav>
  );
}