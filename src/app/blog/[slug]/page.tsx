import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import SectionHeading from "@/components/SectionHeading";
import { blogPosts, BlogPost } from "@/data/blog";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Blog Post Not Found - Dinevo" };

  return {
    title: `${post.title} - Dinevo`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="bg-[#FEF6DF]">
      {/* 1. ARTICLE HEADER */}
      <article className="pt-16 pb-20 border-b border-black/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-neutral-600 hover:text-[#E94222] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>

          {/* Meta & Category */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#E94222] mb-6">
            <span className="bg-[#E94222]/10 border border-[#E94222]/30 px-3 py-1 rounded-full font-bold">
              {post.category}
            </span>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-600">{post.date}</span>
          </div>

          {/* Main Title */}
          <h1 className="font-['Anton'] text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-black leading-tight mb-8">
            {post.title}
          </h1>

          {/* Author Block */}
          <div className="flex items-center gap-4 py-4 border-y border-black/10 mb-10">
            <div className="w-12 h-12 rounded-full bg-[#E94222] text-white flex items-center justify-center font-['Anton'] text-lg uppercase shadow-sm">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <p className="font-['Anton'] text-base uppercase text-black">
                {post.author.name}
              </p>
              <p className="text-xs font-mono text-[#E94222] uppercase tracking-wider">
                {post.author.role}
              </p>
            </div>
          </div>

          {/* Featured Hero Image */}
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-neutral-900 border border-black/10 shadow-xl mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Body */}
          <div className="space-y-10 text-neutral-800">
            {/* Lead Paragraph */}
            <p className="text-lg sm:text-xl font-medium leading-relaxed border-l-4 border-[#E94222] pl-6 text-black italic">
              {post.content.lead}
            </p>

            {/* Sections */}
            {post.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="font-['Anton'] text-2xl sm:text-3xl uppercase tracking-wide text-black mt-8">
                  {section.heading}
                </h2>
                <p className="text-base leading-relaxed text-neutral-700">
                  {section.body}
                </p>

                {/* Steps if present */}
                {section.steps && (
                  <div className="grid grid-cols-1 gap-4 mt-6">
                    {section.steps.map((step, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-5 rounded-2xl bg-[#FFFDF8] border border-[#E8DEC5]"
                      >
                        <h3 className="font-['Anton'] text-base uppercase text-[#E94222] mb-1">
                          {step.title}
                        </h3>
                        <p className="text-sm text-neutral-700">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* 2. RELATED ARTICLES */}
      <section className="py-20 md:py-28 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="{Our Blog}"
            title="OUR LATEST BLOGS"
            subtitle="Explore more articles from the Dinevo culinary brigade."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((related) => (
              <BlogCard key={related.slug} post={related} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

