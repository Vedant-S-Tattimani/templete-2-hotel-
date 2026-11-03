import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { MenuItem } from "@/data/menu";

interface MenuCardProps {
  item: MenuItem;
  dark?: boolean;
}

export default function MenuCard({ item, dark = false }: MenuCardProps) {
  return (
    <div
      className={`group relative rounded-2xl p-4 sm:p-5 transition-all duration-300 border flex flex-col justify-between ${
        dark
          ? "bg-[#121212] border-white/10 hover:border-white/30 text-white"
          : "bg-[#FFFDF8] border-[#E8DEC5] hover:border-black/30 text-black shadow-sm hover:shadow-md"
      }`}
    >
      <div>
        {/* Card Image Container */}
        <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-neutral-200 mb-4">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {item.isSpecial && (
            <span className="absolute top-3 left-3 bg-[#E94222] text-white text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full font-bold shadow-md">
              SPECIAL
            </span>
          )}
          <span className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md text-white font-mono text-sm px-3 py-1 rounded-full border border-white/10 font-semibold">
            {item.price}
          </span>
        </div>

        {/* Title and Rating */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            className={`font-['Anton'] text-xl sm:text-2xl uppercase tracking-wide leading-tight group-hover:text-[#E94222] transition-colors ${
              dark ? "text-white" : "text-black"
            }`}
          >
            {item.title}
          </h3>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-amber-500 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(item.rating)
                    ? "fill-amber-400 text-amber-400"
                    : "text-neutral-400 fill-neutral-400/20"
                }`}
              />
            ))}
          </div>
          <span className="font-mono font-semibold text-neutral-400">
            {item.rating} ({item.reviews} reviews)
          </span>
        </div>

        {/* Description */}
        <p
          className={`text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4 ${
            dark ? "text-neutral-400" : "text-neutral-600"
          }`}
        >
          {item.description}
        </p>
      </div>

      {/* Card Action */}
      <div
        className={`pt-3 border-t flex items-center justify-between ${
          dark ? "border-white/10" : "border-neutral-200"
        }`}
      >
        <span className="text-xs font-mono tracking-wider text-neutral-400 uppercase">
          {item.categoryLabel}
        </span>
        <Link
          href="/book-a-table"
          className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#E94222] hover:text-[#d43719] transition-colors"
        >
          <span>Book a Table</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

