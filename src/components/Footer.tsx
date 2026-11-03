"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 4000);
    }
  };

  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="pb-16 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#E94222] bg-[#E94222]/10 border border-[#E94222]/30 px-3 py-1 rounded-full mb-4">
              Newsletter
            </span>
            <h2 className="font-['Anton'] text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide leading-tight text-white">
              SIGN UP FOR UPDATES, OFFERS, AND DELICIOUS SURPRISES
            </h2>
          </div>

          <div className="lg:col-span-5">
            {subscribed ? (
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-[#E94222]/40 text-[#E94222]">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm font-medium text-white">
                  Thank you! You are now subscribed to Dinevo culinary updates.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/15 focus:border-[#E94222] rounded-full py-4 pl-6 pr-14 text-sm text-white placeholder-neutral-400 outline-none transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-2 top-2 bottom-2 w-10 h-10 rounded-full bg-[#E94222] hover:bg-[#d43719] text-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Giant DINEVO Typography */}
        <div className="py-12 border-b border-white/10 select-none overflow-hidden">
          <p className="font-['Anton'] text-[15vw] sm:text-[18vw] leading-none uppercase tracking-tighter text-center text-white/90">
            DINEVO
          </p>
        </div>

        {/* Footer Navigation Columns */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-10 border-b border-white/10">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-['Anton'] text-3xl uppercase tracking-wider text-white">
              DINEVO
            </Link>
            <p className="mt-4 text-xs text-neutral-400 leading-relaxed max-w-xs">
              Handcrafted gastronomy honoring Japanese culinary artistry, seasonal harmony, and unforgettable dining moments.
            </p>
            <div className="mt-6 text-xs text-neutral-400 space-y-1">
              <p className="font-semibold text-white">Main Dining:</p>
              <p>{siteConfig.addressMain}</p>
              <p>{siteConfig.phone}</p>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-['Anton'] text-lg uppercase tracking-wider text-white mb-5">
              Pages
            </h4>
            <ul className="space-y-3 text-sm">
              {siteConfig.footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-[#E94222] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Utilities */}
          <div>
            <h4 className="font-['Anton'] text-lg uppercase tracking-wider text-white mb-5">
              Utilities
            </h4>
            <ul className="space-y-3 text-sm">
              {siteConfig.footerLinks.utilities.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-[#E94222] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-['Anton'] text-lg uppercase tracking-wider text-white mb-5">
              Follow Us
            </h4>
            <ul className="space-y-3 text-sm">
              {siteConfig.socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-neutral-400 hover:text-[#E94222] transition-colors"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© Copyright 2025 | Design & Created by Pentaclay</p>
          <div className="flex items-center gap-6">
            <Link href="/book-a-table" className="hover:text-white transition-colors">
              Reservations
            </Link>
            <Link href="/menu" className="hover:text-white transition-colors">
              Menu
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Directions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

