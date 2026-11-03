"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2, Clock, MessageSquare } from "lucide-react";
import { siteConfig } from "@/data/site";
import Marquee from "@/components/Marquee";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FEF6DF]">
      {/* 1. HEADER */}
      <section className="pt-16 pb-12 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#E94222] bg-[#E94222]/10 px-3.5 py-1.5 rounded-full mb-4">
            Get In Touch
          </span>
          <h1 className="font-['Anton'] text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tighter text-black leading-none mb-6">
            LET’S CONNECT — WE’D LOVE TO HEAR FROM YOU
          </h1>
          <p className="text-sm sm:text-base text-neutral-700 max-w-2xl mx-auto leading-relaxed">
            Have questions about private dining, menu accommodations, catering, or reservations? Reach out to our team.
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & FORM */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-black text-white border border-white/10 shadow-xl space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#E94222]">
                    EMAIL US
                  </span>
                  <p className="font-['Anton'] text-2xl uppercase mt-1 text-white">
                    {siteConfig.contactEmail}
                  </p>
                  <p className="text-xs text-neutral-400 mt-1">
                    Direct inquiries answered within 24 hours.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#E94222]">
                    CALL CONCIERGE
                  </span>
                  <p className="font-['Anton'] text-2xl uppercase mt-1 text-white">
                    {siteConfig.contactPhone}
                  </p>
                  <p className="text-xs text-neutral-400 mt-1">
                    Tuesday – Sunday, 10:00 AM to 10:00 PM.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#E94222]">
                    LOCATIONS
                  </span>
                  <p className="font-['Anton'] text-xl uppercase mt-1 text-white">
                    TOKYO & NEW YORK
                  </p>
                  <p className="text-xs text-neutral-400 mt-1">
                    Downtown Avenue, 45B Green USA & 2-5-9 Itabashi, Tokyo.
                  </p>
                </div>
              </div>

              {/* Operating Hours card */}
              <div className="p-8 rounded-3xl bg-[#FFFDF8] border border-[#E8DEC5] shadow-sm">
                <h4 className="font-['Anton'] text-xl uppercase tracking-wide text-black mb-4">
                  OPERATING HOURS
                </h4>
                <div className="space-y-3 text-xs">
                  {siteConfig.openingHours.map((h, i) => (
                    <div key={i} className="flex justify-between py-1 border-b border-neutral-200">
                      <span className="text-neutral-700 font-medium">{h.day}</span>
                      <span className={h.closed ? "text-[#E94222] font-bold" : "text-neutral-900"}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-[#FFFDF8] border border-[#E8DEC5] shadow-lg">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[#E94222]/10 text-[#E94222] mx-auto flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-['Anton'] text-3xl uppercase tracking-wide text-black mb-3">
                      MESSAGE TRANSMITTED
                    </h3>
                    <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed mb-8">
                      Thank you, <span className="font-semibold text-black">{formData.firstName}</span>. Your message has been routed to our team. We will reply to{" "}
                      <span className="font-semibold text-black">{formData.email}</span> shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="bg-black text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-neutral-800 transition-colors"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2">
                          First Name <span className="text-[#E94222]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="John"
                          className="w-full bg-[#FEF6DF] border border-neutral-300 focus:border-[#E94222] rounded-xl px-4 py-3 text-sm text-black placeholder-neutral-400 outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2">
                          Last Name <span className="text-[#E94222]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="Doe"
                          className="w-full bg-[#FEF6DF] border border-neutral-300 focus:border-[#E94222] rounded-xl px-4 py-3 text-sm text-black placeholder-neutral-400 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2">
                        Email Address <span className="text-[#E94222]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-[#FEF6DF] border border-neutral-300 focus:border-[#E94222] rounded-xl px-4 py-3 text-sm text-black placeholder-neutral-400 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2">
                        Message <span className="text-[#E94222]">*</span>
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your event, feedback, or inquiry..."
                        className="w-full bg-[#FEF6DF] border border-neutral-300 focus:border-[#E94222] rounded-xl p-4 text-sm text-black placeholder-neutral-400 outline-none transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#E94222] hover:bg-[#d43719] text-white py-4 rounded-full font-['Anton'] text-lg uppercase tracking-widest transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#E94222]/25"
                    >
                      SEND A MESSAGE
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee
        items={[
          "LET’S CONNECT",
          "TOKYO & NEW YORK KITCHENS",
          "CORPORATE AND PRIVATE EVENTS",
          "INQUIRIES ALWAYS WELCOME",
        ]}
      />
    </div>
  );
}

