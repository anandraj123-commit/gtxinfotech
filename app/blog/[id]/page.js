
import { posts } from "@/data/posts";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSiteUrl } from "@/lib/site-url";
import { createMetadata } from "@/lib/metadata";

import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";



export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = posts.find((post) => post.id === Number(id));
  if (!post) notFound();
  return createMetadata({
    title: `${post.title} | ZisanTech Solutions`,
    description: post.shortDesc.trim(),
    path: `/blog/${post.id}`,
    image: post.imgSrc,
    type: "article",
  });
}

// ======================================
// BLOG DETAILS PAGE
// ======================================
export default async function BlogDetails({ params }) {
  const { id } = await params;

  const postId = Number(id);

  if (!Number.isInteger(postId) || postId <= 0) {
    notFound();
  }

  const post = posts.find((p) => p.id === postId);

  if (!post) {
    notFound();
  }

  // ======================================
  // SHARE DATA
  // ======================================
  const baseUrl = await getSiteUrl();

  const shareUrl = `${baseUrl}/blog/${post.id}`;

  const shareText = post.shortDesc || post.title;

  const encodedUrl = encodeURIComponent(shareUrl);

  const encodedText = encodeURIComponent(shareText);

  return (
    <>
      <section className="bg-[#343f48] min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto text-white">

          {/* BLOG IMAGE */}
          <div className="relative w-full h-[400px] mb-8">
            <Image
              src={post.imgSrc}
              alt={post.title}
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
          </div>

          {/* BLOG TITLE */}
          <h1 className="text-3xl font-bold mb-2">
            {post.title}
          </h1>

          {/* SHORT DESCRIPTION */}
          <p className="text-gray-400 mb-4">
            {post.shortDesc}
          </p>

          {/* SOCIAL SHARE ICONS */}
          <div className="flex gap-4 mb-6">

            {/* FACEBOOK */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              className="hover:text-blue-500"
            >
              <FaFacebookF />
            </a>

            {/* TWITTER / X */}
            <a
              href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Twitter"
              className="hover:text-sky-400"
            >
              <FaTwitter />
            </a>

            {/* WHATSAPP */}
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                `${shareText} ${shareUrl}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on WhatsApp"
              className="hover:text-green-500"
            >
              <FaWhatsapp />
            </a>

            {/* LINKEDIN */}
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              className="hover:text-blue-400"
            >
              <FaLinkedinIn />
            </a>

            {/* INSTAGRAM */}
          
          
          </div>

          {/* FULL BLOG CONTENT */}
          <p className="text-gray-300 leading-8 whitespace-pre-line">
            {post.fullDesc}
          </p>

          {/* BACK TO BLOG */}
          <Link
            href="/blog"
            className="inline-block mt-6 text-teal-400"
          >
            ← Back to Blogs
          </Link>

        </div>
      </section>
    </>
  );
}
