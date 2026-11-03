import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Clock, Star, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import MenuCard from "@/components/MenuCard";
import ChefCard from "@/components/ChefCard";
import BlogCard from "@/components/BlogCard";
import { menuItems } from "@/data/menu";
import { teamMembers } from "@/data/team";
import { blogPosts } from "@/data/blog";
import { testimonialsData } from "@/data/testimonials";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  const featuredMenu = menuItems.slice(0, 5);
  const featuredChefs = teamMembers.slice(0, 3);
  const featuredBlogs = blogPosts.slice(0, 2);

  return (
    <div className="bg-[#FEF6DF]">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Kanji Badges */}
          <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#E94222] uppercase mb-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E94222]" />
              上質な時間を (Fine Moments)
            </span>
            <span className="hidden sm:inline-block">食の芸術を (Culinary Artistry)</span>
          </div>

          {/* Main Hero Headline */}
          <div className="text-center max-w-5xl mx-auto mb-10">
            <h1 className="font-['Anton'] text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.95] text-black">
              WHERE ELEGANCE <br className="hidden sm:inline" />
              <span className="text-[#E94222]">MEETS FLAVOR</span>
            </h1>
            <p className="mt-6 text-sm sm:text-base md:text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed">
              Experience the perfect harmony of authentic Japanese culinary tradition, Michelin-trained craftsmanship, and seasonal ingredients.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/menu"
                className="bg-[#E94222] hover:bg-[#d43719] text-white px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#E94222]/25"
              >
                EXPLORE MENU
              </Link>
              <Link
                href="/about"
                className="bg-black hover:bg-neutral-800 text-white px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-200 hover:scale-105 active:scale-95"
              >
                MORE ABOUT US
              </Link>
            </div>
          </div>

          {/* Hero Visual Showcase */}
          <div className="relative mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left side card */}
            <div className="md:col-span-4 rounded-2xl overflow-hidden border border-black/10 bg-[#FFFDF8] p-4 shadow-sm">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="https://framerusercontent.com/images/CfBX6pKWPnpu2mygYIJgwhjE.png?width=1200&height=624"
                  alt="Artisanal baked delicacies"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="pt-4 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-neutral-500">
                <span>Dinevo Selection</span>
                <span className="text-[#E94222] font-bold">2025</span>
              </div>
            </div>

            {/* Center main hero image with circular emblem */}
            <div className="md:col-span-8 relative rounded-2xl overflow-hidden border border-black/10 aspect-[16/9] shadow-md bg-neutral-900">
              <Image
                src="https://framerusercontent.com/images/u0NRZGeECtcMFY363bpArFWHHo.png?width=896&height=1200"
                alt="Signature dining culinary showcase"
                fill
                className="object-cover"
                priority
              />

              {/* Rotating Seal / Emblem Overlay */}
              <div className="absolute top-6 right-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-black/85 backdrop-blur-md border border-white/20 p-2 flex items-center justify-center text-white text-center shadow-xl">
                <div className="text-[10px] font-mono leading-tight uppercase tracking-widest flex flex-col items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#E94222] mb-1 animate-spin" />
                  <span className="font-bold text-white">DINEVO</span>
                  <span className="text-[8px] text-[#E94222]">EST 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INFINITE MARQUEE */}
      <Marquee
        items={[
          "WHERE ELEGANCE MEETS FLAVOR",
          "AUTHENTIC JAPANESE CUISINE",
          "FRESH LOCAL PRODUCE",
          "MICHELIN-TRAINED ARTISANS",
          "BESPOKE PRIVATE DINING",
          "TABLE RESERVATIONS OPEN",
        ]}
      />

      {/* 3. DINEVO'S SPECIAL SECTION */}
      <section className="py-20 md:py-32 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#E94222] mb-4">
                <span>(Dinevo's Special)</span>
                <span>•</span>
                <span className="text-black font-semibold">濃厚な抹茶 (Rich Matcha)</span>
                <span>•</span>
                <span>(2024 - 2025)</span>
              </div>

              <h2 className="font-['Anton'] text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-tight text-black mb-8">
                SEASONAL HIGHLIGHTS CRAFTED WITH REVERENCE
              </h2>

              {/* Numbered specials */}
              <div className="space-y-4">
                {[
                  { num: "01", title: "CRISPY TEMPURA BITES", desc: "Light and airy seasonal vegetables and tiger prawn in ice-water batter with tentsuyu broth." },
                  { num: "02", title: "SPICY TUNA TARTARE", desc: "Sashimi-grade yellowfin tuna tossed with toasted sesame oil, sriracha, and lotus crisps." },
                  { num: "03", title: "TRUFFLE MUSHROOM SOUP", desc: "Wild forest chanterelles and shiitake slow-steeped in kombu dashi with winter black truffle." },
                  { num: "04", title: "EDAMAME WITH SEA SALT", desc: "Young green soybeans wok-tossed with smoked Okinawan sea salt and shichimi pepper." },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="group p-5 rounded-2xl bg-[#FFFDF8] border border-[#E8DEC5] hover:border-[#E94222] transition-all duration-200 shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-['Anton'] text-xl sm:text-2xl uppercase tracking-wide group-hover:text-[#E94222] transition-colors">
                        {item.num}. {item.title}
                      </h3>
                      <span className="text-xs font-mono text-[#E94222] font-semibold">CHEF SPECIAL</span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Images */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-black/10 shadow-md">
                <Image
                  src="https://framerusercontent.com/images/biUNrHP0nyH4RGBcl10HyqwHc.png?width=1200&height=904"
                  alt="Special menu dish"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-black/10 shadow-md mt-8">
                <Image
                  src="https://framerusercontent.com/images/EbckMY97SZXnxyH9EzyfFBGI8.png?width=1200&height=923"
                  alt="Special menu dish presentation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR MENU (FEATURED DISHES) */}
      <section className="py-20 md:py-32 border-b border-black/10 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              badge="{Our Menu}"
              title="DISCOVER THE ART OF TASTE"
              subtitle="From vibrant nigiri to binchotan charcoal skewers, explore our curated seasonal highlights."
              align="left"
              className="mb-0"
            />
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-black hover:bg-neutral-800 text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-200 self-start md:self-end"
            >
              <span>VIEW ALL MENU</span>
              <ArrowRight className="w-4 h-4 text-[#E94222]" />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredMenu.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. A TASTE OF OUR KITCHEN (4 CATEGORIES) */}
      <section className="py-20 md:py-32 border-b border-black/10 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="{A Taste of Our Kitchen}"
            title="A SYMPHONY OF TRADITION AND MODERN TASTE"
            subtitle="Four distinctive culinary offerings designed to awaken the senses at every hour."
            dark
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01/04",
                name: "BREAKFAST",
                desc: "Enjoy delicious artisan morning sets, matcha infusions, and warm dashi omurice.",
              },
              {
                num: "02/04",
                name: "MAIN DISHES",
                desc: "Prime Wagyu steak, Atlantic teriyaki salmon, and rich 18-hour simmered miso ramen.",
              },
              {
                num: "03/04",
                name: "DRINKS",
                desc: "Handcrafted mocktails, ceremonial matcha lattes, and rare vintage sake pairings.",
              },
              {
                num: "04/04",
                name: "DESSERTS",
                desc: "Matcha Basque cheesecake, yuzu sorbet, and whisky-infused fusion tiramisu.",
              },
            ].map((cat) => (
              <div
                key={cat.num}
                className="group p-6 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#E94222] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-[#E94222] font-semibold">{cat.num}</span>
                  <h3 className="font-['Anton'] text-2xl uppercase tracking-wide mt-3 mb-2 group-hover:text-[#E94222] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{cat.desc}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/10">
                  <Link
                    href="/menu"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#E94222] group-hover:text-white transition-colors"
                  >
                    <span>EXPLORE ALL MENU</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DINEVO'S STORY (REELS & CRAFT) */}
      <section className="py-20 md:py-32 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="{Dinevo's Story}"
            title="A GLIMPSE INTO DINEVO’S CRAFT"
            subtitle="Our kitchen tells stories of craftsmanship, dedication, and the joy of creating flavors that connect people."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "THE CRAFT AND CREATIVITY THAT DEFINE DINEVO",
                img: "https://framerusercontent.com/images/LMBF9UFSKlwHcMgR2H1NLi6956Q.jpg?width=2828&height=3535",
              },
              {
                title: "THE PASSION, PRECISION, AND ART OF CUISINE",
                img: "https://framerusercontent.com/images/ILtVaTIA0ghvAssncdfX7NNbeU.jpg?width=4096&height=2304",
              },
              {
                title: "BEHIND THE SECRETS OF THE STOVE & KNIVES",
                img: "https://framerusercontent.com/images/v8mlDkp824Firr5nofpAy4.jpg?width=4096&height=2341",
              },
              {
                title: "WHERE CULINARY ART TRULY MEETS HEART",
                img: "https://framerusercontent.com/images/RZucJSbSvRGQmH1WdWkRtEnhsSs.jpg?width=4096&height=2304",
              },
            ].map((reel, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden aspect-[9/16] border border-black/10 shadow-md bg-black"
              >
                <Image
                  src={reel.img}
                  alt={reel.title}
                  fill
                  className="object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#E94222] mb-1">
                    CRAFT 0{idx + 1}
                  </span>
                  <h4 className="font-['Anton'] text-lg uppercase tracking-wide text-white leading-snug">
                    {reel.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GET IN TOUCH / HOURS & LOCATION */}
      <section className="py-20 md:py-32 border-b border-black/10 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="{Get in Touch}"
            title="FLAVORS THAT BRING JOY TO EVERY BITE"
            subtitle="Visit our dining room or contact us to arrange private reservations and events."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Find Us Card */}
            <div className="p-8 rounded-3xl bg-[#FEF6DF] border border-[#E8DEC5] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#E94222]">Location</span>
                <h3 className="font-['Anton'] text-3xl uppercase tracking-wide text-black mt-2 mb-6">
                  FIND US
                </h3>
                <div className="space-y-4 text-sm text-neutral-700">
                  <p className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#E94222] flex-shrink-0 mt-0.5" />
                    <span>{siteConfig.addressMain}</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#E94222] flex-shrink-0" />
                    <span>{siteConfig.phone}</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#E94222] flex-shrink-0" />
                    <span>{siteConfig.email}</span>
                  </p>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-black/10 flex flex-wrap gap-4 items-center justify-between">
                <a
                  href={siteConfig.mapsMainUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider text-[#E94222] hover:underline uppercase"
                >
                  <span>GET DIRECTIONS ON MAPS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/book-a-table"
                  className="bg-[#E94222] hover:bg-[#d43719] text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-200"
                >
                  BOOK A TABLE
                </Link>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="p-8 rounded-3xl bg-black text-white border border-white/10 shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#E94222]">Service Hours</span>
                <h3 className="font-['Anton'] text-3xl uppercase tracking-wide text-white mt-2 mb-6">
                  OPENING HOURS
                </h3>
                <div className="space-y-4 text-sm">
                  {siteConfig.openingHours.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-2 border-b border-white/10"
                    >
                      <span className="font-medium text-neutral-300">{h.day}</span>
                      <span
                        className={`font-mono text-xs ${
                          h.closed ? "text-[#E94222] font-bold" : "text-neutral-100"
                        }`}
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-neutral-400">
                <Clock className="w-4 h-4 text-[#E94222]" />
                <span>Walk-ins welcome, reservations recommended for dinner.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-20 md:py-32 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="{Our Testimonials}"
            title="WHAT OUR GUESTS ARE SAYING"
            subtitle="Authentic impressions from culinary critics, hospitality connoisseurs, and neighborhood regulars."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonialsData.map((review) => (
              <div
                key={review.id}
                className="p-6 rounded-2xl bg-[#FFFDF8] border border-[#E8DEC5] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic">
                    "{review.content}"
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-neutral-200">
                  <p className="font-['Anton'] text-base uppercase text-black">{review.name}</p>
                  <p className="text-xs font-mono text-[#E94222]">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. OUR CHEFS PREVIEW */}
      <section className="py-20 md:py-32 border-b border-black/10 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              badge="{Our Chefs}"
              title="MEET BEHIND DINEVO"
              subtitle="The culinary masters orchestrating taste, technique, and artistry at our dining room."
              align="left"
              className="mb-0"
            />
            <Link
              href="/our-team"
              className="inline-flex items-center gap-2 bg-black hover:bg-neutral-800 text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-200 self-start md:self-end"
            >
              <span>VIEW ALL CHEFS</span>
              <ArrowRight className="w-4 h-4 text-[#E94222]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredChefs.map((member) => (
              <ChefCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* 10. OUR LOCATIONS (TOKYO & NY) */}
      <section className="py-20 md:py-32 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="{Our Locations}"
            title="CELEBRATE EVERY MOMENT WITH DINEVO"
            subtitle="Visit our flagship dining halls in Tokyo and Manhattan."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.locations.map((loc, idx) => (
              <div
                key={idx}
                className="group rounded-3xl overflow-hidden border border-[#E8DEC5] bg-[#FFFDF8] shadow-sm flex flex-col justify-between"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={loc.image}
                    alt={loc.city}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white text-xs font-mono px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest">
                    {loc.tag}
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="font-['Anton'] text-3xl uppercase tracking-wide text-black mb-2">
                    {loc.city}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-1">{loc.address}</p>
                  <p className="text-xs font-mono text-neutral-500 mb-6">{loc.hours}</p>
                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E94222] hover:text-[#d43719]"
                  >
                    <span>VIEW LOCATION MAP</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. OUR BLOG PREVIEW */}
      <section className="py-20 md:py-32 border-b border-black/10 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              badge="{Our Blog}"
              title="OUR LATEST BLOGS"
              subtitle="Step behind the scenes at Dinevo and explore a world of flavor, passion, and creativity."
              align="left"
              className="mb-0"
            />
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-black hover:bg-neutral-800 text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-200 self-start md:self-end"
            >
              <span>VIEW ALL STORIES</span>
              <ArrowRight className="w-4 h-4 text-[#E94222]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredBlogs.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* 12. RESERVATION BANNER CTA */}
      <section className="py-20 md:py-28 bg-[#E94222] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-mono uppercase tracking-widest bg-white/15 px-3.5 py-1.5 rounded-full mb-4">
            RESERVATIONS OPEN
          </span>
          <h2 className="font-['Anton'] text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight leading-tight">
            RESERVE A TABLE FOR AN UNPARALLELED CULINARY JOURNEY
          </h2>
          <p className="mt-6 text-sm sm:text-base text-white/90 max-w-xl mx-auto leading-relaxed">
            Whether an intimate dinner for two, a business celebration, or a private family feast, we invite you to experience Dinevo.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/book-a-table"
              className="bg-black hover:bg-neutral-900 text-white px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-200 hover:scale-105 active:scale-95 shadow-2xl"
            >
              BOOK A TABLE NOW
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
