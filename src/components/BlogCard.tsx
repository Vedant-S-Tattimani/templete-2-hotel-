import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
  dark?: boolean;
}

export default function BlogCard({ post, dark = false }: BlogCardProps) {
  return (
    <article
      className={`group rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
        dark
          ? "bg-[#121212] border-white/10 hover:border-white/30 text-white"
          : "bg-[#FFFDF8] border-[#E8DEC5] hover:border-black/30 text-black shadow-sm hover:shadow-md"
      }`}
    >
      <div>
        <Link
          href={`/blog/${post.slug}`}
          className="block relative aspect-[16/10] w-full overflow-hidden bg-neutral-900"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        <div className="p-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider mb-3 text-neutral-400">
            <span className="text-[#E94222] font-semibold">({post.category})</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>

          <Link href={`/blog/${post.slug}`}>
            <h3
              className={`font-['Anton'] text-xl sm:text-2xl uppercase tracking-wide leading-tight group-hover:text-[#E94222] transition-colors ${
                dark ? "text-white" : "text-black"
              }`}
            >
              {post.title}
            </h3>
          </Link>

          <p
            className={`mt-3 text-xs sm:text-sm line-clamp-2 leading-relaxed ${
              dark ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            {post.excerpt}
          </p>
        </div>
      </div>

      <div
        className={`px-6 pb-6 pt-2 flex items-center justify-between border-t ${
          dark ? "border-white/10" : "border-neutral-200"
        }`}
      >
        <span className="text-xs font-mono text-neutral-400">By {post.author.name}</span>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#E94222] group-hover:text-[#d43719] transition-colors"
        >
          <span>READ STORY</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}

