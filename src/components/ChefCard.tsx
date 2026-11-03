import Image from "next/image";
import { TeamMember } from "@/data/team";

interface ChefCardProps {
  member: TeamMember;
  dark?: boolean;
}

export default function ChefCard({ member, dark = false }: ChefCardProps) {
  return (
    <div
      className={`group rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col ${
        dark
          ? "bg-[#121212] border-white/10 hover:border-white/30 text-white"
          : "bg-[#FFFDF8] border-[#E8DEC5] hover:border-black/30 text-black shadow-sm hover:shadow-md"
      }`}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-900">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {member.japaneseRole && (
          <span className="absolute top-3 left-3 bg-black/75 backdrop-blur-md text-white text-[11px] font-mono px-2.5 py-1 rounded-full border border-white/10">
            {member.japaneseRole}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <h3
            className={`font-['Anton'] text-2xl uppercase tracking-wide group-hover:text-[#E94222] transition-colors ${
              dark ? "text-white" : "text-black"
            }`}
          >
            {member.name}
          </h3>
          <p className="text-xs font-mono tracking-widest text-[#E94222] uppercase mt-1">
            ({member.role})
          </p>
          {member.bio && (
            <p
              className={`mt-3 text-xs sm:text-sm line-clamp-3 leading-relaxed ${
                dark ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              {member.bio}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

