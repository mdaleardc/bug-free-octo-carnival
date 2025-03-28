"use client"
import Link from "next/link";
import { MdOutlineFileDownload } from "react-icons/md";

const faqData = [
  {
  question: "How do I download books?",
  answer: <span>It's very simple! First, select the book you need and click the '<strong>Download</strong>' button. The browser will redirect you to another page where you will see a download icon <MdOutlineFileDownload size='25' className='inline'/> at the top bar. Click on it, and the book will be downloaded to your storage.</span>,
  },
  {
    question: "Are all books free?",
    answer: "Yes, all books available on Myanmar Books Hub are free to download.",
  },
  {
    question: "Can I request a book?",
    answer: "Yes! If a book is missing, you can send a request through the Contact page. We’ll try to add it if possible.",
  },
  {
    question: "How do I report an issue?",
    answer: "If you find a broken link or any issue, please report it through the Contact page or email us.",
  },
  {
    question: "Can I access the website on mobile?",
    answer: "Yes, Myanmar Books Hub is mobile-friendly and works on all devices.",
  },
  {
  question: "How do I find books by grade?",
  answer: <span>At the top of the page, you'll find a '<strong>Filter by Grade</strong>' dropdown options <strong>Select Grade</strong>. Select the grade you need, and all books for that grade will be displayed.</span>,
  },
  {
    question: "Do you provide answer guides for all textbooks?",
    answer: "Yes, all textbooks have corresponding answer guides except for Grade 1, which is not available.",
  },
  {
    question: "How do I know which books are trending?",
    answer: "Check the Trending Books section on the homepage to see the top 10 most downloaded books.",
  },
  {
    question: "Are all curricula available?",
    answer: "No. The old curriculum has been deprecated, and we only provide books from the latest Myanmar New Curriculum.",
  },
  {
    question: "Are there any other books besides the Myanmar curriculum?",
    answer: "Yes. In addition to Myanmar New Curriculum textbooks, we also provide Islamic studies books and other educational materials for book lovers.",
  },
  {
    question: "Can I add books to this website if I want?",
    answer: "Yes. If you have books to share, you can contact us to request adding them to the website. We’ll review and upload them if they meet our guidelines.",
  },
  {
    question: "How do I find this website on Google search?",
    answer: "You can search for 'Myanmar Books Hub' on Google to find our website. If it doesn’t appear, try using keywords related to Myanmar textbooks and PDF downloads.",
  },
];

const FAQsPage = () => {
  return (
    <div className="max-w-3xl mx-auto mt-[3rem] px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <details key={index} className="p-4 border rounded-md">
            <summary className="cursor-pointer font-semibold">{item.question}</summary>
            <p className="mt-2 text-gray-200">{item.answer}</p>
          </details>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link href="/" className="text-blue-600 hover:underline">Back to Home</Link>
      </div>
    </div>
  );
};

export default FAQsPage;