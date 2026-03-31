import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const BlogCard = ({ post }) => {
  const shareUrl = `http://localhost:3000/blog/${post.id}`; // change in production
  const shareText = post.shortDesc;

  return (
    <div className="bg-[#2f3942] rounded-md overflow-hidden">
      
      {/* Image */}
      <img src={post.imgSrc} className="w-full h-56 object-cover" />

      {/* Content */}
      <div className="p-6 text-gray-300">

        {/* ✅ NEW: Title (added, nothing removed) */}
        <h2 className="text-white text-2xl font-semibold mb-2">
          {post.title}
        </h2>

        {/* Existing (kept) */}
        <h3 className="text-gray-300 text-lg mb-3">
          {post.shortDesc}
        </h3>

        {/* Existing (kept) */}
        <p className="text-sm mb-4 leading-6">
          {post.fullDesc.slice(0, 100)}...
        </p>

        {/* Read More */}
        <Link
          href={`/blog/${post.id}`}
          className="inline-block mb-4 border px-4 py-2 text-sm hover:bg-teal-500 transition"
        >
          Read more
        </Link>

        {/* 🔥 Share Icons (UNCHANGED) */}
        <div className="flex gap-3 text-white text-sm">
          
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
            className="hover:text-blue-500"
          >
            <FaFacebookF />
          </a>

          <a
            href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
            target="_blank"
            className="hover:text-sky-400"
          >
            <FaTwitter />
          </a>

          <a
            href={`https://wa.me/?text=${shareText} ${shareUrl}`}
            target="_blank"
            className="hover:text-green-500"
          >
            <FaWhatsapp />
          </a>

          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
            target="_blank"
            className="hover:text-blue-400"
          >
            <FaLinkedinIn />
          </a>

          <button
            onClick={() => {
              navigator.clipboard.writeText(shareUrl);
              alert("Link copied! Share on Instagram manually.");
            }}
            className="hover:text-pink-500"
          >
            <FaInstagram />
          </button>

        </div>
      </div>
    </div>
  );
};

export default BlogCard;