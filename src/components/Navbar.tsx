"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu as MenuIcon, X, UtensilsCrossed } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [pagesOpen, setPagesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState<"EN" | "AR">("EN");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setPagesOpen(false);
  }, [pathname]);

  // Click outside listener for Pages dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPagesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-black text-white border-b border-white/10 ${
        isScrolled ? "py-3 shadow-2xl bg-black/95 backdrop-blur-md" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group transition-opacity hover:opacity-90"
        >
          <div className="w-8 h-8 rounded-full bg-[#E94222] flex items-center justify-center text-white font-bold transition-transform group-hover:scale-105">
            <UtensilsCrossed className="w-4 h-4" />
          </div>
          <span className="font-['Anton'] text-2xl tracking-wider uppercase font-bold text-white">
            DINEVO
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-sm tracking-wide">
          <Link
            href="/"
            className={`transition-colors py-1 ${
              pathname === "/" ? "text-[#E94222] font-semibold" : "text-neutral-300 hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`transition-colors py-1 ${
              pathname === "/about" ? "text-[#E94222] font-semibold" : "text-neutral-300 hover:text-white"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/menu"
            className={`transition-colors py-1 ${
              pathname === "/menu" ? "text-[#E94222] font-semibold" : "text-neutral-300 hover:text-white"
            }`}
          >
            Menu
          </Link>

          {/* Pages Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setPagesOpen(true)}
            onMouseLeave={() => setPagesOpen(false)}
          >
            <button
              onClick={() => setPagesOpen(!pagesOpen)}
              className="flex items-center gap-1 text-neutral-300 hover:text-white transition-colors py-1 cursor-pointer focus:outline-none"
              aria-expanded={pagesOpen}
              aria-haspopup="true"
            >
              <span>Pages</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  pagesOpen ? "rotate-180 text-[#E94222]" : ""
                }`}
              />
            </button>

            {pagesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-[#121212] border border-white/10 rounded-xl shadow-2xl py-2 px-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                {siteConfig.navLinks
                  .find((item) => item.name === "Pages")
                  ?.children?.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                        pathname === subItem.href
                          ? "bg-[#E94222] text-white font-medium"
                          : "text-neutral-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {subItem.name}
                    </Link>
                  ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className={`transition-colors py-1 ${
              pathname === "/contact" ? "text-[#E94222] font-semibold" : "text-neutral-300 hover:text-white"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA & Controls */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Switcher Pill */}
          <button
            onClick={() => setCurrentLang(currentLang === "EN" ? "AR" : "EN")}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 text-xs font-mono tracking-wider text-neutral-200 hover:border-white/50 transition-colors"
            title="Toggle Language"
          >
            <span className="w-4 h-2.5 bg-neutral-700 inline-flex overflow-hidden rounded-[2px] items-center justify-center">
              {currentLang === "EN" ? "🇬🇧" : "🇦🇪"}
            </span>
            <span>{currentLang}</span>
          </button>

          {/* Book a Table Primary Button */}
          <Link
            href="/book-a-table"
            className="inline-flex items-center justify-center bg-[#E94222] hover:bg-[#d43719] text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-[#E94222]/20"
          >
            BOOK A TABLE
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-3">
          <Link
            href="/book-a-table"
            className="bg-[#E94222] text-white px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase"
          >
            BOOK
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/10 focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-black/95 backdrop-blur-xl border-t border-white/10 z-50 overflow-y-auto px-6 py-6 flex flex-col justify-between">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className={`text-xl font-['Anton'] tracking-wider uppercase py-2 border-b border-white/10 ${
                pathname === "/" ? "text-[#E94222]" : "text-white"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-xl font-['Anton'] tracking-wider uppercase py-2 border-b border-white/10 ${
                pathname === "/about" ? "text-[#E94222]" : "text-white"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/menu"
              className={`text-xl font-['Anton'] tracking-wider uppercase py-2 border-b border-white/10 ${
                pathname === "/menu" ? "text-[#E94222]" : "text-white"
              }`}
            >
              Menu
            </Link>
            <Link
              href="/book-a-table"
              className={`text-xl font-['Anton'] tracking-wider uppercase py-2 border-b border-white/10 ${
                pathname === "/book-a-table" ? "text-[#E94222]" : "text-white"
              }`}
            >
              Book a Table
            </Link>
            <Link
              href="/our-team"
              className={`text-xl font-['Anton'] tracking-wider uppercase py-2 border-b border-white/10 ${
                pathname === "/our-team" ? "text-[#E94222]" : "text-white"
              }`}
            >
              Our Team
            </Link>
            <Link
              href="/services"
              className={`text-xl font-['Anton'] tracking-wider uppercase py-2 border-b border-white/10 ${
                pathname === "/services" ? "text-[#E94222]" : "text-white"
              }`}
            >
              Services
            </Link>
            <Link
              href="/special-offers"
              className={`text-xl font-['Anton'] tracking-wider uppercase py-2 border-b border-white/10 ${
                pathname === "/special-offers" ? "text-[#E94222]" : "text-white"
              }`}
            >
              Special Offers
            </Link>
            <Link
              href="/gallery"
              className={`text-xl font-['Anton'] tracking-wider uppercase py-2 border-b border-white/10 ${
                pathname === "/gallery" ? "text-[#E94222]" : "text-white"
              }`}
            >
              Gallery
            </Link>
            <Link
              href="/blog"
              className={`text-xl font-['Anton'] tracking-wider uppercase py-2 border-b border-white/10 ${
                pathname === "/blog" ? "text-[#E94222]" : "text-white"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`text-xl font-['Anton'] tracking-wider uppercase py-2 border-b border-white/10 ${
                pathname === "/contact" ? "text-[#E94222]" : "text-white"
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <Link
              href="/book-a-table"
              className="w-full text-center bg-[#E94222] text-white py-3 rounded-full text-sm font-bold tracking-widest uppercase shadow-lg shadow-[#E94222]/20"
            >
              BOOK A TABLE NOW
            </Link>
            <div className="flex items-center justify-between text-xs text-neutral-400">
              <span>{siteConfig.phone}</span>
              <span>{siteConfig.addressMain}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

