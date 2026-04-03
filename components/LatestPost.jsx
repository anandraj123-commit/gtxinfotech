"use client";

import { motion } from "framer-motion";
import { posts } from "@/data/posts";
import Link from "next/link";

export default function LatestPost() {
  // ✅ Get first 3 posts
  const latestPosts = posts.slice(0, 3);

  return (
    <section className="bg-[#3a434d] py-20 px-6">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold text-white tracking-wide">
          Latest <span className="text-teal-400">Post</span>
        </h2>

        <div className="mt-4 flex items-center justify-center gap-3">
          <div className="h-[2px] w-24 bg-gray-500"></div>
          <div className="h-[4px] w-12 bg-teal-400 animate-pulse"></div>
          <div className="h-[2px] w-24 bg-gray-500"></div>
        </div>
      </div>

      {/* Posts */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {latestPosts.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}   
            className="bg-[#2f3842] overflow-hidden group shadow-lg hover:shadow-2xl transition"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={post.imgSrc}
                alt={post.title}
                className="w-full h-[220px] object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <Link href={`/blog/${post.id}`}>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center cursor-pointer">
                  <span className="text-white text-lg tracking-wide">
                    View Post
                  </span>
                </div>
              </Link>
            </div>

            {/* Content */}
            <div className="p-6 text-gray-300">
              
              {/* ✅ Title (NEW) */}
              <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-teal-400 transition">
                {post.title}
              </h2>

              {/* ✅ Short Description (kept, styled better) */}
              <h3 className="text-sm text-gray-400 mb-3">
                {post.shortDesc}
              </h3>

              {/* Existing preview */}
              <p className="text-sm leading-relaxed line-clamp-3">
                {post.fullDesc}
              </p>

              {/* Button */}
              <Link
                href={`/blog/${post.id}`}
                className="inline-block mt-6 border border-gray-500 px-5 py-2 text-sm text-white relative overflow-hidden group/btn"
              >
                <span className="relative z-10">Read more</span>

                <span className="absolute inset-0 bg-teal-400 scale-x-0 origin-left group-hover/btn:scale-x-100 transition duration-300"></span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-16">
        <Link href="/blog">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="border border-teal-400 text-white px-8 py-3 relative overflow-hidden group"
          >
            <span className="relative z-10">View More</span>

            <span className="absolute inset-0 bg-teal-400 scale-x-0 origin-left group-hover:scale-x-100 transition duration-300"></span>
          </motion.button>
        </Link>
      </div>
    </section>
  );
}