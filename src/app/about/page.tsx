import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, Clock, HeartHandshake, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";

export const metadata = {
  title: "About Us - Dinevo",
  description: "The story behind every flavor at Dinevo. Discover our culinary philosophy, milestones, and dedicated brigade.",
};

export default function AboutPage() {
  const stats = [
    { value: "1,200+", label: "Seasonal Delights to Enjoy Fresh Local Flavors" },
    { value: "3K+", label: "Exceptional Dining Experiences Delivered Elegantly" },
    { value: "4.9/5", label: "Average Guest Satisfaction Across 10,000+ Reviews" },
    { value: "100%", label: "Traceable Organic & Locally Sourced Ingredients" },
  ];

  const milestones = [
    {
      year: "2020",
      title: "THE BEGINNING OF FLAVOR",
      desc: "In 2020, DINEVO opened its doors in Tokyo with a simple yet powerful mission: to celebrate authentic Japanese Kaiseki roots through contemporary culinary expression.",
    },
    {
      year: "2022",
      title: "PRIVATE DINING & EXPANSION",
      desc: "Introduced our exclusive private dining suites (The Sakura Room) and expanded our brigade with master sushi artisans and French-trained pastry chefs.",
    },
    {
      year: "2024",
      title: "INTERNATIONAL RECOGNITION",
      desc: "Awarded top accolades for sustainable gastronomy and featured in prestigious culinary journals for zero-waste broth techniques.",
    },
    {
      year: "2025",
      title: "THE NEXT ERA OF DINEVO",
      desc: "Launching our Manhattan dining hall, seasonal tasting flights, and collaborative chef residencies uniting global food cultures.",
    },
  ];

  return (
    <div className="bg-[#FEF6DF]">
      {/* 1. HERO HEADER */}
      <section className="pt-16 pb-20 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E94222] bg-[#E94222]/10 px-3.5 py-1.5 rounded-full mb-6">
            <span>2025</span>
            <span>•</span>
            <span>TRADITION OF JAPAN</span>
            <span>•</span>
            <span className="font-bold">DINEVO</span>
          </div>

          <h1 className="font-['Anton'] text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tighter text-black max-w-5xl mx-auto leading-[0.95]">
            THE STORY BEHIND EVERY FLAVOR.
          </h1>

          <p className="mt-8 text-base sm:text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            We believe that food is an expression of art, memory, and emotion. Every dish we create is a reflection of our passion for flavor, craftsmanship, and human connection.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/menu"
              className="bg-[#E94222] hover:bg-[#d43719] text-white px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-200 shadow-lg shadow-[#E94222]/20"
            >
              OUR MENU
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS GRID */}
      <section className="py-16 border-b border-black/10 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#121212] border border-white/10 text-center">
                <p className="font-['Anton'] text-4xl sm:text-5xl lg:text-6xl text-[#E94222] tracking-wide mb-2">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-neutral-400 font-medium leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VISUAL SHOWCASE */}
      <section className="py-20 md:py-32 border-b border-black/10 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#E8DEC5] shadow-xl">
              <Image
                src="https://framerusercontent.com/images/ILtVaTIA0ghvAssncdfX7NNbeU.jpg?width=4096&height=2304"
                alt="Dinevo culinary team at work"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E94222]">
                Our Philosophy
              </span>
              <h2 className="font-['Anton'] text-4xl sm:text-5xl uppercase tracking-tight text-black mt-2 mb-6">
                CRAFTED WITH PASSION, SERVED WITH PERFECTION
              </h2>
              <div className="space-y-6 text-sm text-neutral-700 leading-relaxed">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#FEF6DF] text-[#E94222] flex-shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-['Anton'] text-lg uppercase text-black mb-1">
                      INSPIRATION & MENU PLANNING
                    </h4>
                    <p className="text-neutral-600">
                      Chefs brainstorm seasonal concepts and refine recipes to match Dinevo’s signature balance of flavors, textures, and visual presentation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#FEF6DF] text-[#E94222] flex-shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-['Anton'] text-lg uppercase text-black mb-1">
                      SOURCING THE BEST INGREDIENTS
                    </h4>
                    <p className="text-neutral-600">
                      We partner directly with trusted family farms, fishermen, and artisanal fermenters to secure seasonal produce at the pinnacle of flavor.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#FEF6DF] text-[#E94222] flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-['Anton'] text-lg uppercase text-black mb-1">
                      PRECISION MISE EN PLACE
                    </h4>
                    <p className="text-neutral-600">
                      Stations are organized with razor-sharp cutlery and measured ingredients so our chefs cook with consistent precision and rhythm every single night.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR JOURNEY (TIMELINE) */}
      <section className="py-20 md:py-32 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="{Our Journey}"
            title="OUR JOURNEY THROUGH DINEVO"
            subtitle="How passion for heritage turned a small Tokyo dining space into a globally celebrated culinary brand."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-[#FFFDF8] border border-[#E8DEC5] hover:border-[#E94222] transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-['Anton'] text-4xl text-[#E94222] tracking-wider">
                    {item.year}
                  </span>
                  <h3 className="font-['Anton'] text-xl uppercase tracking-wide text-black mt-4 mb-3 group-hover:text-[#E94222] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee
        items={[
          "TRADITION OF JAPAN",
          "MODERN GASTRONOMY",
          "ORGANIC FARM SOURCED",
          "2020 TO 2025 MILESTONES",
          "MICHELIN-TRAINED BRIGADE",
        ]}
      />
    </div>
  );
}

