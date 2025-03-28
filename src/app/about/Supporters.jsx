import { FaFacebook, FaYoutube, FaWhatsappSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const supporters = [
  {
    name: "Mr. Nurul Hakim",
    contribution: "Supports curating and providing PDF file resources for our community",
    about: "Nurul Hakim, an educator, co-developed a Google-based PDF bookstore to make quality educational resources accessible. By sharing his own books, he promotes knowledge-sharing and limitless learning.",
    image: "/supporter-nurul.webp",
    social: {
      facebook: "https://www.facebook.com/share/18swrfGuZm/",
      twitter: "https://x.com/NurHaki85261693?s=09",
      youtube: "https://youtube.com/@seekknowledg?si=U5-Ns_6ErEIm7R5U",
      whatsapp: "https://wa.me/8801767746571",
    },
  },
  // Add more supporters as needed
];

const Supporters = () => {
  return (
<section id="supporters" className="py-10 text-center">
<h2 className="text-3xl font-bold text-white mb-6">Our Supporters</h2>
<p className="text-gray-50 mb-8">
Special thanks to those who contributed to making this project possible!
</p>

<div className="mx-auto flex flex-wrap items-center justify-center gap-6 px-6">
{supporters.map((supporter, index) => (
  <div
    key={index}
    className="w-72 bg-zinc-700 p-6 shadow-md rounded-lg flex flex-col items-center"
  >
    <img
    loading='lazy'
      src={supporter.image}
      alt={supporter.name}
      className="w-24 h-24 rounded-full mb-4 border-2 text-black border-gray-600"
    />
    <h3 className="text-xl font-semibold text-white">
      {supporter.name}
    </h3>
    <p className="text-white font-semibold mt-2 text-sm">
      {supporter.contribution}
    </p>
        <p className="indent-6 text-gray-50 mt-2 text-sm leading-relaxed text-justify">
        {supporter.about}
    </p>
    <div className="mt-4 flex space-x-6">
      {supporter.social.facebook && (
        <a
        aria-label='Follow on facebook'
          href={supporter.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700">
          <FaFacebook size='25'/>
        </a>
      )}
      {supporter.social.twitter && (
        <a
        aria-label='Follow on X (twitter)'
          href={supporter.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-blue-600">
          <FaSquareXTwitter size='25'/>
        </a>
      )}
      {supporter.social.youtube && (
        <a
        aria-label='Subscribe on youtube'
          href={supporter.social.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:text-pink-700 flext">
          <FaYoutube size='25'/>
        </a>
      )}
      {supporter.social.whatsapp && (
        <a
        aria-label='Contact on whatsapp'
          href={supporter.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-700 flext">
          <FaWhatsappSquare size='20'/>
        </a>
      )}
    </div>
  </div>
))}
</div>
</section>
);
};

export default Supporters;