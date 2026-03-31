"use client";

import { useState } from "react";
import BlogCard from "../../components/BlogCard";
import { posts } from "@/data/posts";
import Navbar from "../../components/Navbar";

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  return (
    <>
    <Navbar/>
   
    <section className="bg-[#343f48] min-h-screen py-20 px-6">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">
          Latest <span className="text-teal-400">Post</span>
        </h2>
        <div className="w-20 h-1 bg-teal-400 mx-auto mt-4"></div>
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {currentPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-16 gap-2 flex-wrap">
        
        {/* Prev */}
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-[#2f3942] text-white disabled:opacity-40"
        >
          ‹
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 ${
              currentPage === i + 1
                ? "bg-teal-400 text-white"
                : "bg-[#2f3942] text-white"
            }`}
          >
            {i + 1}
          </button>
        ))}

        {/* Next */}
        <button
          onClick={() =>
            setCurrentPage((p) => Math.min(p + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-[#2f3942] text-white disabled:opacity-40"
        >
          ›
        </button>
      </div>
    </section>
    </>
  );
}