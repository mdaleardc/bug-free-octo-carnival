import Link from "next/link";
export default function PrivacyPolicy() {
  return (
    <main className="min-h-[80vh] max-w-4xl mx-auto mt-[3rem] p-6">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">
        Privacy Policy
      </h1>
      <p className="text-lg text-white leading-relaxed mb-6">
        At <Link href='/' className="font-semibold text-indigo-600">Myanmar Book Hub</Link>, your privacy matters to us. This Privacy Policy outlines how we collect, use, and safeguard your personal information to ensure a secure and trustworthy experience.
      </p>

      <h2 className="text-xl font-semibold text-white mt-6 mb-2">
        1. Information We Collect
      </h2>
      <p className="text-lg text-white leading-relaxed">
        We may gather personal details such as your name, email address, and browsing activity to enhance your interaction with our platform.
      </p>

      <h2 className="text-xl font-semibold text-white mt-6 mb-2">
        2. How We Use Your Information
      </h2>
      <p className="text-lg text-white leading-relaxed">
        Your data helps us refine our services, personalize your experience, and deliver educational resources tailored to your needs.
      </p>

      <h2 className="text-xl font-semibold text-white mt-6 mb-2">
        3. Security
      </h2>
      <p className="text-lg text-white leading-relaxed">
        We implement robust measures to protect your information from unauthorized access, ensuring your trust in us is well-placed.
      </p>

      <p className="text-lg text-white leading-relaxed mt-6">
        Have questions? Reach out to us at{' '}
        <a href="/contact" className="text-indigo-600 font-semibold hover:text-indigo-800 underline">
          Contact
        </a>.
      </p>
    </main>
  );
}