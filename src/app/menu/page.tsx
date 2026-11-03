"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import MenuCard from "@/components/MenuCard";
import Marquee from "@/components/Marquee";
import { menuCategories, menuItems, MenuItem } from "@/data/menu";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredItems: MenuItem[] =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-[#FEF6DF]">
      {/* 1. HEADER */}
      <section className="pt-16 pb-12 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#E94222] bg-[#E94222]/10 px-3.5 py-1.5 rounded-full mb-4">
            Seasonal Dishes & Delicacies
          </span>
          <h1 className="font-['Anton'] text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tighter text-black leading-none mb-6">
            OUR MENU
          </h1>
          <p className="text-sm sm:text-base text-neutral-700 max-w-2xl mx-auto leading-relaxed">
            Crafted with artisanal Japanese precision, fresh seasonal catches, and organic local farm harvests. Explore each category below.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY TABS */}
      <section className="sticky top-[65px] z-40 bg-[#FEF6DF]/95 backdrop-blur-md py-4 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto no-scrollbar py-1">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#E94222] text-white shadow-md shadow-[#E94222]/20 scale-105"
                    : "bg-[#FFFDF8] border border-[#E8DEC5] text-neutral-700 hover:border-black/30 hover:text-black"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MENU ITEMS GRID */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-xs font-mono text-neutral-500 uppercase tracking-wider mb-8">
            <span>Showing: {filteredItems.length} dishes</span>
            <span>All dishes prepared fresh to order</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. MARQUEE & BOOKING BANNER */}
      <Marquee
        items={[
          "FRESH DAILY MORNING FISH ARRIVALS",
          "ORGANIC LOCAL PRODUCE",
          "CEREMONIAL UJI MATCHA",
          "BINCHOTAN CHARCOAL ROBATA",
          "CUSTOM CHEF TASTINGS",
        ]}
      />

      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-['Anton'] text-4xl sm:text-6xl uppercase tracking-tight text-white mb-6">
            READY TO TASTE PERFECTION?
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto mb-8">
            Tables fill up quickly for our evening Kaiseki courses and weekend feasts. Reserve your seating today.
          </p>
          <Link
            href="/book-a-table"
            className="inline-block bg-[#E94222] hover:bg-[#d43719] text-white px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-200 hover:scale-105"
          >
            RESERVE YOUR TABLE
          </Link>
        </div>
      </section>
    </div>
  );
}

