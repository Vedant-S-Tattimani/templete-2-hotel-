import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import { servicesData } from "@/data/services";
import { testimonialsData } from "@/data/testimonials";

export const metadata = {
  title: "Dining Services & Private Events - Dinevo",
  description:
    "Explore Dinevo occasion dining, bespoke private dining suites, and Michelin-standard gourmet catering.",
};

export default function ServicesPage() {
  return (
    <div className="bg-[#FEF6DF]">
      {/* 1. HEADER */}
      <section className="pt-16 pb-12 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#E94222] bg-[#E94222]/10 px-3.5 py-1.5 rounded-full mb-4">
            Occasion Dining & Catering
          </span>
          <h1 className="font-['Anton'] text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tighter text-black leading-none mb-6">
            CRAFTED WITH PASSION SERVED WITH PERFECTION
          </h1>
          <p className="text-sm sm:text-base text-neutral-700 max-w-2xl mx-auto leading-relaxed">
            From intimate anniversary celebrations to full banquet catering and private chef’s table experiences.
          </p>
        </div>
      </section>

      {/* 2. SERVICES LIST */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Column */}
              <div
                className={`lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#E8DEC5] shadow-xl ${
                  idx % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white font-['Anton'] text-2xl px-4 py-1.5 rounded-2xl border border-white/10">
                  {service.number}
                </span>
              </div>

              {/* Text Column */}
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="text-xs font-mono uppercase tracking-widest text-[#E94222] font-semibold">
                  {service.subtitle}
                </span>
                <h2 className="font-['Anton'] text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-black mt-2 mb-6">
                  {service.title}
                </h2>
                <p className="text-sm text-neutral-700 leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FFFDF8] border border-[#E8DEC5]"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#E94222]/15 text-[#E94222] flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-semibold text-black uppercase tracking-wide">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/book-a-table"
                  className="inline-flex items-center gap-2 bg-[#E94222] hover:bg-[#d43719] text-white px-7 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-200 shadow-md shadow-[#E94222]/20"
                >
                  <span>Book a Reservation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. TESTIMONIALS SECTION */}
      <section className="py-20 bg-black text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="{Our Testimonials}"
            title="WHAT OUR GUESTS ARE SAYING"
            subtitle="Memories forged across private dining banquets, celebrations, and tasting evenings."
            dark
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonialsData.map((review) => (
              <div
                key={review.id}
                className="p-6 rounded-2xl bg-[#121212] border border-white/10 flex flex-col justify-between"
              >
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic mb-6">
                  "{review.content}"
                </p>
                <div className="pt-4 border-t border-white/10">
                  <p className="font-['Anton'] text-base uppercase text-white">{review.name}</p>
                  <p className="text-xs font-mono text-[#E94222]">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee
        items={[
          "BESPOKE PRIVATE DINING",
          "EXECUTIVE CORPORATE BANQUETS",
          "CHEF’S TABLE OMAKASE",
          "LUXURY WEDDING RECEPTIONS",
          "GOURMET CATERING",
        ]}
      />
    </div>
  );
}

