import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found - Dinevo",
  description: "Sorry, the page you are looking for doesn't exist or has been moved.",
};

export default function NotFound() {
  return (
    <div className="bg-[#FEF6DF] min-h-[75vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#E94222] bg-[#E94222]/10 px-3.5 py-1.5 rounded-full mb-6">
          Error 404
        </span>

        <h1 className="font-['Anton'] text-6xl sm:text-8xl lg:text-9xl uppercase tracking-tighter text-black leading-none mb-6">
          PAGE NOT FOUND
        </h1>

        <p className="text-base sm:text-lg text-neutral-700 max-w-xl mx-auto leading-relaxed mb-10">
          Sorry, the page you are looking for doesn't exist or has been moved. Return to our dining homepage to explore our menu and stories.
        </p>

        <div className="flex justify-center mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#E94222] hover:bg-[#d43719] text-white px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-200 hover:scale-105 shadow-lg shadow-[#E94222]/20"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO HOME</span>
          </Link>
        </div>

        {/* Big stylized 404 watermark */}
        <div className="select-none pointer-events-none opacity-10">
          <p className="font-['Anton'] text-[25vw] leading-none text-black">
            404
          </p>
        </div>
      </div>
    </div>
  );
}

