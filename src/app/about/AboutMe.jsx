import { FaLinkedin, FaGithub, FaFacebook, FaGlobe } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

const AboutMe = () => {
  return (
    <section className="mx-auto rounded w-full px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl rounded mx-auto p-6 bg-zinc-700">
  <h2 className="text-3xl font-bold text-gray-100 mb-6 text-center"> About Myanmar Book Hub</h2>
  <p className="text-lg text-white leading-relaxed">
    <Link href='/about' className="font-semibold text-indigo-600">Myanmar Book Hub</Link> is a platform dedicated to providing a diverse range of educational resources and learning materials for students, educators, and lifelong learners in Myanmar. From <Link href='/books-by-grade/Islamic' className="italic text-teal-600">Islamic books</Link> exploring faith, culture, and history to a wide selection of general education titles in science, literature, and beyond, we aim to inspire learning outside the traditional classroom. Our mission is to make high-quality, accessible content available to all, supporting students from grade 1 to grade 12 and anyone eager to expand their knowledge.
  </p>
  <p className="text-lg text-white mt-6 leading-relaxed border-l-4 border-indigo-500 pl-4 italic">
    Whether you’re seeking spiritual growth or academic enrichment, <Link href='/about' className="font-semibold text-indigo-600">Myanmar Book Hub</Link> is your gateway to a world of learning.
  </p>
</div>
      {/* What We Offer Section */}
      <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 bg-zinc-700 shadow rounded-lg">
          <h3 className="text-xl font-semibold text-gray-100 mb-2">Why Choose Us?</h3>
          <p className="text-gray-50 leading-relaxed text-justify">
            At <Link href='/about' className="font-semibold text-indigo-600">Myanmar Book Hub</Link>, our mission is to ensure education is within everyone’s reach. We offer a user-friendly interface, carefully organized resources, and fast, hassle-free downloads—all designed to empower your learning journey at no cost. With us, knowledge is accessible, simple, and free of financial barriers.
  </p>
        </div>
        <div className="p-6 bg-zinc-700 shadow rounded-lg">
  <h3 className="text-xl font-semibold text-gray-100 mb-2">What We Offer</h3>
  <ul className="list-disc list-inside text-gray-50 leading-relaxed">
    <li>Free access to textbooks and answer guides</li>
    <li>Islamic books and religious learning resources</li>
    <li>Downloadable PDFs for offline use</li>
    <li>Resources for grades 1 through 12</li>
    <li>Diverse educational materials for all ages</li>
    <li>A user-friendly browsing experience</li>
  </ul>
</div>
      </div>

{/* About Me Section */}
<div className="mt-12 mb-10">
  <div className="max-w-xl mx-auto text-center">
    <div className="bg-zinc-700 shadow-lg rounded-lg p-6 border border-gray-600">
  <h3 className="text-3xl font-bold mb-4 text-center">About Me</h3>
      
      <h4 className="text-2xl font-semibold">
        <a href="https://ismaildevcode.netlify.app/" className="text-pink-600 ml-1 hover:text-blue-600">
          Mohammed Ismail
        </a>
      </h4>

      <p className="text-sm font-semibold text-white mt-2 tracking-wide leading-relaxed">
  I created the  
  <a 
    href="https://www.google.com/search?q=Myanmar+Books+Hub" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-blue-600 hover:text-blue-700"
  >
    <strong> Myanmar Books Hub </strong>
  </a> 
  website, offering free educational resources for everyone.
</p>

      <p className="indent-6 text-white mt-2 text-sm leading-relaxed text-justify">
        A passionate web developer & educator, bridging the gap between technology and education. I understand the challenges faced by students and educators and aim to make learning resources more accessible.
        I&apos;m also enhancing my skills in web and Android development.
      </p>

      <p className="indent-6 text-white mt-2 text-sm leading-relaxed text-justify">
        🚀 Have ideas? Let’s connect!
      </p>
            <div className='mx-auto text-center flex flex-row items-center justify-center gap-6 mt-4'>
          <a
            aria-label='Follow me on github'
            href='https://github.com/mdaleardc' target='_blank'>
            <FaGithub size='25' className='text-black h-[25px] w-[25px]' />
          </a>
          <a href='https://www.facebook.com/mdaismail.it' target='_blank' aria-label='Follow me on facebook'>
            <FaFacebook size='25' className='text-[#1877F2] h-[25px] w-[25px]' />
          </a>
          <a href='https://x.com/MdIsmail5851415' target='_blank' aria-label='Follow me on X (twitter)'>
            <FaSquareXTwitter size='25' className='text-black h-[25px] w-[25px]' />
          </a>
          <a href='https://bd.linkedin.com/in/mohammed-ismail-601457217' target='_blank' aria-label='Contact me on linkedin'>
            <FaLinkedin size='25' className='text-[#0A66C2] h-[25px] w-[25px]' />
          </a>
          <a href='https://ismaildevcode.netlify.app/' target='_blank' aria-label='Contact me on linkedin'>
            <FaGlobe size='25' className='text-[#111] h-[25px] w-[25px]' />
          </a>
        </div>
        </div>
  </div>
</div>

    </section>
  );
};

export default AboutMe;