interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
}

export default function Marquee({
  items,
  reverse = false,
  className = "bg-black text-white py-3 border-y border-white/10",
  itemClassName = "font-['Anton'] text-lg uppercase tracking-widest px-6 flex items-center gap-6",
}: MarqueeProps) {
  // Duplicate array so it loops seamlessly
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className={`overflow-hidden select-none whitespace-nowrap ${className}`}>
      <div className={reverse ? "animate-marquee-reverse" : "animate-marquee"}>
        {repeated.map((text, idx) => (
          <div key={idx} className={itemClassName}>
            <span>{text}</span>
            <span className="text-[#E94222] font-mono text-sm">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

