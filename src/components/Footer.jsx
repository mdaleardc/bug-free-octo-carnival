import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Myanmar Books Hub. All rights reserved.</p>
        <nav className="flex gap-4">
          <Link href="/privacy-policy" className="text-sm hover:underline">Privacy Policy</Link>
          <Link href="/terms-of-service" className="text-sm hover:underline">Terms of Service</Link>
          <Link href="/faqs" className="text-sm hover:underline">FAQs</Link>
          <Link href="/contact" className="text-sm hover:underline">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}