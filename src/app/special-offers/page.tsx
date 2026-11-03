import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sparkles, Tag } from "lucide-react";
import Marquee from "@/components/Marquee";
import { specialOffersData } from "@/data/offers";

export const metadata = {
  title: "Special Offers & Deals - Dinevo",
  description:
    "Delight in exclusive chef tasting packages, weekday discounts, and seasonal feast promotions at Dinevo.",
};

export default function SpecialOffersPage() {
  return (
    <div className="bg-[#FEF6DF]">
      {/* 1. HEADER */}
      <section className="pt-16 pb-12 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#E94222] bg-[#E94222]/10 px-3.5 py-1.5 rounded-full mb-4">
            Curated Tasting Packages
          </span>
          <h1 className="font-['Anton'] text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tighter text-black leading-none mb-6">
            DELICIOUS DEALS AWAIT INDULGE MORE, SPEND LESS
          </h1>
          <p className="text-sm sm:text-base text-neutral-700 max-w-2xl mx-auto leading-relaxed">
            Experience our multi-course tasting menus, premium sake pairings, and signature delicacies at privileged seasonal rates.
          </p>
        </div>
      </section>

      {/* 2. OFFERS LIST */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {specialOffersData.map((offer, idx) => (
            <div
              key={offer.id}
              className="p-8 sm:p-12 rounded-3xl bg-[#FFFDF8] border border-[#E8DEC5] shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              {/* Image with discount badge */}
              <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900 border border-black/10 shadow-md">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#E94222] text-white font-['Anton'] text-2xl tracking-wider px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2">
                  <Tag className="w-5 h-5" />
                  <span>{offer.discount}</span>
                </div>
              </div>

              {/* Offer Details */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#E94222] mb-3">
                  <Sparkles className="w-4 h-4" />
                  <span>{offer.badge}</span>
                  <span>•</span>
                  <span className="text-neutral-500">{offer.validUntil}</span>
                </div>

                <h2 className="font-['Anton'] text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-black mb-4 leading-tight">
                  {offer.title}
                </h2>

                <p className="text-sm text-neutral-700 leading-relaxed mb-6">
                  {offer.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {offer.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-neutral-800">
                      <div className="w-4 h-4 rounded-full bg-[#E94222]/15 text-[#E94222] flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/book-a-table"
                  className="inline-flex items-center gap-2 bg-[#E94222] hover:bg-[#d43719] text-white px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-200 hover:scale-105 shadow-md shadow-[#E94222]/20"
                >
                  <span>ORDER NOW / RESERVE OFFER</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Marquee
        items={[
          "LIMITED SEASONAL AVAILABILITY",
          "PROMOTIONAL TASTING FLIGHTS",
          "RESERVE ONLINE OR BY PHONE",
          "20% AND 30% PRIVILEGED OFFERS",
        ]}
      />
    </div>
  );
}

