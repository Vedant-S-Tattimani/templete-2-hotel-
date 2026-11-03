import ChefCard from "@/components/ChefCard";
import Marquee from "@/components/Marquee";
import { teamMembers } from "@/data/team";

export const metadata = {
  title: "Meet Our Chefs - Dinevo",
  description:
    "Meet the culinary artisans, master chefs, and sommeliers behind Dinevo's extraordinary dining experiences.",
};

export default function OurTeamPage() {
  return (
    <div className="bg-[#FEF6DF]">
      {/* 1. HEADER */}
      <section className="pt-16 pb-12 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#E94222] bg-[#E94222]/10 px-3.5 py-1.5 rounded-full mb-4">
            Master Artisans & Brigade
          </span>
          <h1 className="font-['Anton'] text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tighter text-black leading-none mb-6">
            MEET OUR CHEFS
          </h1>
          <p className="text-sm sm:text-base text-neutral-700 max-w-2xl mx-auto leading-relaxed">
            From Michelin-starred kitchens in Kyoto to classical patisseries in Paris, our brigade brings a lifetime of dedication to your plate.
          </p>
        </div>
      </section>

      {/* 2. CHEFS GRID */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <ChefCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. MARQUEE */}
      <Marquee
        items={[
          "MICHELIN-TRAINED MASTERY",
          "KAISEKI HERITAGE",
          "FRENCH PATISSERIE PRECISION",
          "BINCHOTAN ROBATA ARTISANS",
          "HAND-FORGED JAPANESE KNIVES",
        ]}
      />
    </div>
  );
}

