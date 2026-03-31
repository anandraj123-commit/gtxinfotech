"use client";

import { posts } from "@/data/posts";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import Navbar from "../../../components/Navbar";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function BlogDetails() {
  const params = useParams();
  const postId = Number(params.id);

  if (!postId) return notFound();

  const post = posts.find((p) => p.id === postId);

  if (!post) return notFound();

  // ✅ Share Data
  const shareUrl = `http://localhost:3000/blog/${post.id}`;
  const shareText = post.shortDesc;

  return (
    <>
      <Navbar />

      <section className="bg-[#343f48] min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto text-white">

          {/* Image */}
          <div className="relative w-full h-[400px] mb-8">
            <Image
              src={post.imgSrc}
              alt={post.title}
              fill
              className="object-cover rounded-md"
            />
          </div>

          {/* ✅ Title (UPDATED) */}
          <h1 className="text-3xl font-bold mb-2">
            {post.title}
          </h1>

          {/* ✅ Short Description (NEW - optional but useful) */}
          <p className="text-gray-400 mb-4">
            {post.shortDesc}
          </p>

          {/* Share Icons (UNCHANGED) */}
          <div className="flex gap-4 mb-6 text-lg">

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

          {/* ✅ Full Content (Improved readability) */}
          <p className="text-gray-300 leading-8 text-lg whitespace-pre-line">
            {post.fullDesc}
          </p>

          {/* Back */}
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