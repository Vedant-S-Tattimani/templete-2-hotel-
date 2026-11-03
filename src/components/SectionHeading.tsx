interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  dark = false,
  className = "",
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  return (
    <div className={`flex flex-col max-w-3xl ${alignClass} ${className} mb-12 sm:mb-16`}>
      {badge && (
        <span
          className={`inline-block text-xs font-mono tracking-widest uppercase px-3 py-1 rounded-full mb-3 border ${
            dark
              ? "text-neutral-300 border-white/20 bg-white/5"
              : "text-[#E94222] border-[#E94222]/30 bg-[#E94222]/5"
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`font-['Anton'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.08] ${
          dark ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed ${
            dark ? "text-neutral-400" : "text-[#404040]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

