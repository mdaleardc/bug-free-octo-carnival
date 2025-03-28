import Link from "next/link";
export default function TermsOfService() {
  return (
    <main className="min-h-[80vh] max-w-4xl mx-auto mt-[3rem] p-6">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">
        Terms of Service
      </h1>
      <p className="text-lg text-white leading-relaxed mb-6">
        By accessing <Link href='/' className="font-semibold text-indigo-600">Myanmar Book Hub</Link>, you agree to abide by the terms and conditions outlined below.
      </p>

      <h2 className="text-xl font-semibold text-white mt-6 mb-2">
        1. User Responsibilities
      </h2>
      <p className="text-lg text-white leading-relaxed">
        Users are expected to comply with all applicable laws and respect the intellectual property rights, including copyrights, when engaging with our services.
      </p>

      <h2 className="text-xl font-semibold text-white mt-6 mb-2">
        2. Content Ownership
      </h2>
      <p className="text-lg text-white leading-relaxed">
        All educational resources and books available on this platform remain the property of their respective authors, publishers, or rights holders.
      </p>

      <h2 className="text-xl font-semibold text-white mt-6 mb-2">
        3. Termination
      </h2>
      <p className="text-lg text-white leading-relaxed">
        We reserve the right to suspend or terminate accounts that breach our policies or misuse our resources.
      </p>

      <p className="text-lg text-white leading-relaxed mt-6">
        For questions or concerns, please visit our{' '}
        <a href="/contact" className="text-indigo-400 font-semibold hover:text-indigo-300 underline">
          Contact
        </a>{' '}
        page.
      </p>
    </main>
  );
}