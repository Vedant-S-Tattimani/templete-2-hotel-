"use client";

import { useState } from "react";
import Image from "next/image";
import Marquee from "@/components/Marquee";
import { galleryItems, GalleryItem } from "@/data/gallery";

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "ALL PHOTOS" },
    { id: "dining", label: "DINING AMBIANCE" },
    { id: "kitchen", label: "KITCHEN CRAFT" },
    { id: "drinks", label: "COCKTAILS & SAKE" },
    { id: "dishes", label: "PLATED DISHES" },
  ];

  const filtered =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <div className="bg-[#FEF6DF]">
      {/* 1. HEADER */}
      <section className="pt-16 pb-12 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#E94222] bg-[#E94222]/10 px-3.5 py-1.5 rounded-full mb-4">
            Visual Storytelling
          </span>
          <h1 className="font-['Anton'] text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tighter text-black leading-none mb-6">
            A FEAST FOR THE EYES THE DINEVO GALLERY
          </h1>
          <p className="text-sm sm:text-base text-neutral-700 max-w-2xl mx-auto leading-relaxed uppercase font-mono tracking-wider text-xs">
            DELICIOUS TALES OF TASTE, TOLD THROUGH OUR VISUAL DINEVO GALLERY
          </p>
        </div>
      </section>

      {/* 2. FILTER TABS */}
      <section className="py-6 border-b border-black/10 bg-[#FEF6DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                filter === cat.id
                  ? "bg-[#E94222] text-white shadow-md shadow-[#E94222]/20 scale-105"
                  : "bg-[#FFFDF8] border border-[#E8DEC5] text-neutral-700 hover:border-black/30 hover:text-black"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. GALLERY GRID */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-900 border border-black/10 shadow-sm"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <span className="text-[10px] font-mono text-[#E94222] uppercase tracking-widest font-semibold">
                    {item.categoryLabel}
                  </span>
                  <p className="font-['Anton'] text-xl uppercase text-white mt-1">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee
        items={[
          "VISUAL ARTISTRY AT DINEVO",
          "AUTHENTIC ATMOSPHERE",
          "KITCHEN FIRE AND FLAVOR",
          "IMMERSIVE HOSPITALITY",
        ]}
      />
    </div>
  );
}

