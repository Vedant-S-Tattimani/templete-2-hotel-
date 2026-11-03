"use client";

import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import Marquee from "@/components/Marquee";
import { blogPosts, BlogPost } from "@/data/blog";

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "ALL STORIES" },
    { id: "RESTAURANT", label: "RESTAURANT CULTURE" },
    { id: "CHINESE FOOD", label: "CULINARY CRAFT" },
  ];

  const filteredPosts: BlogPost[] =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="bg-[#FEF6DF]">
      {/* 1. HEADER */}
      <section className="pt-16 pb-12 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#E94222] bg-[#E94222]/10 px-3.5 py-1.5 rounded-full mb-4">
            Stories, Recipes & Insights
          </span>
          <h1 className="font-['Anton'] text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tighter text-black leading-none mb-6">
            OUR BLOG
          </h1>
          <p className="text-sm sm:text-base text-neutral-700 max-w-2xl mx-auto leading-relaxed">
            Step behind the scenes at Dinevo and explore a world of flavor, passion, and creativity from our culinary brigade.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY TABS */}
      <section className="py-6 border-b border-black/10 bg-[#FEF6DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#E94222] text-white shadow-md shadow-[#E94222]/20 scale-105"
                  : "bg-[#FFFDF8] border border-[#E8DEC5] text-neutral-700 hover:border-black/30 hover:text-black"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. BLOG POSTS GRID */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <Marquee
        items={[
          "CULINARY STORIES",
          "CHEF PERSPECTIVES",
          "SEASONAL RECIPES",
          "SUSTAINABLE GASTRONOMY",
          "UMAMI FERMENTATION CRAFT",
        ]}
      />
    </div>
  );
}

