"use client";

import { useState } from "react";
import { Clock, MapPin, CheckCircle2, AlertCircle, Calendar, Users } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function BookATablePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    location: "Tokyo",
    guests: "2",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect this to your reservation backend, OpenTable, or Resy API
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FEF6DF] min-h-screen">
      {/* 1. HEADER */}
      <section className="pt-16 pb-12 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#E94222] bg-[#E94222]/10 px-3.5 py-1.5 rounded-full mb-4">
            Online Reservations
          </span>
          <h1 className="font-['Anton'] text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tighter text-black leading-none mb-6">
            RESERVE A TABLE FOR BEST DINING.
          </h1>
          <p className="text-sm sm:text-base text-neutral-700 max-w-2xl mx-auto leading-relaxed">
            Join us for an exquisite dining experience. Please fill out the reservation details below to request your table.
          </p>
        </div>
      </section>

      {/* 2. FORM & OPENING HOURS */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Hours & Info */}
            <div className="lg:col-span-5 space-y-8">
              {/* Hours Card */}
              <div className="p-8 rounded-3xl bg-black text-white border border-white/10 shadow-2xl">
                <span className="text-xs font-mono uppercase tracking-widest text-[#E94222]">
                  Service Times
                </span>
                <h3 className="font-['Anton'] text-3xl uppercase tracking-wide text-white mt-2 mb-6">
                  OPENING HOURS
                </h3>
                <div className="space-y-4 text-sm">
                  {siteConfig.openingHours.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-2 border-b border-white/10"
                    >
                      <span className="text-neutral-300 font-medium">{h.day}</span>
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

                <div className="mt-8 pt-6 border-t border-white/10 text-xs text-neutral-400 space-y-2">
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#E94222]" />
                    <span>Kitchen closes 45 minutes prior to closing time.</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#E94222]" />
                    <span>Parties of 6 or more include an 18% service gratuity.</span>
                  </p>
                </div>
              </div>

              {/* Direct Booking Contact */}
              <div className="p-8 rounded-3xl bg-[#FFFDF8] border border-[#E8DEC5] shadow-sm">
                <h4 className="font-['Anton'] text-xl uppercase tracking-wide text-black mb-3">
                  URGENT OR PRIVATE EVENT INQUIRIES?
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  For same-day reservations or private room bookings, call our concierge directly:
                </p>
                <p className="font-mono text-sm font-bold text-[#E94222]">{siteConfig.phone}</p>
                <p className="text-xs text-neutral-500 mt-1">{siteConfig.email}</p>
              </div>
            </div>

            {/* Right Column: Reservation Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-[#FFFDF8] border border-[#E8DEC5] shadow-lg">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[#E94222]/10 text-[#E94222] mx-auto flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-['Anton'] text-3xl uppercase tracking-wide text-black mb-3">
                      RESERVATION REQUEST RECEIVED
                    </h3>
                    <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed mb-8">
                      Thank you, <span className="font-semibold text-black">{formData.name}</span>. We have logged your request for{" "}
                      <span className="font-semibold text-black">{formData.date}</span> at{" "}
                      <span className="font-semibold text-black">{formData.time}</span>. Our concierge will verify table availability and confirm via email shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="bg-black text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-neutral-800 transition-colors"
                    >
                      SUBMIT ANOTHER RESERVATION
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2">
                          Name <span className="text-[#E94222]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jane Smith"
                          className="w-full bg-[#FEF6DF] border border-neutral-300 focus:border-[#E94222] rounded-xl px-4 py-3 text-sm text-black placeholder-neutral-400 outline-none transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2">
                          Email <span className="text-[#E94222]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@framer.com"
                          className="w-full bg-[#FEF6DF] border border-neutral-300 focus:border-[#E94222] rounded-xl px-4 py-3 text-sm text-black placeholder-neutral-400 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2">
                          Phone Number <span className="text-[#E94222]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 2345 567"
                          className="w-full bg-[#FEF6DF] border border-neutral-300 focus:border-[#E94222] rounded-xl px-4 py-3 text-sm text-black placeholder-neutral-400 outline-none transition-colors"
                        />
                      </div>

                      {/* Location */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2">
                          Location <span className="text-[#E94222]">*</span>
                        </label>
                        <select
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full bg-[#FEF6DF] border border-neutral-300 focus:border-[#E94222] rounded-xl px-4 py-3 text-sm text-black outline-none transition-colors cursor-pointer"
                        >
                          <option value="Tokyo">Tokyo, Japan (Flagship)</option>
                          <option value="New York">New York, USA (Manhattan)</option>
                          <option value="Amsterdam">Amsterdam (Pop-up)</option>
                          <option value="Barcelona">Barcelona (Pop-up)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {/* Date */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2">
                          Date <span className="text-[#E94222]">*</span>
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full bg-[#FEF6DF] border border-neutral-300 focus:border-[#E94222] rounded-xl px-4 py-3 text-sm text-black outline-none transition-colors"
                        />
                      </div>

                      {/* Time */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2">
                          Time <span className="text-[#E94222]">*</span>
                        </label>
                        <input
                          type="time"
                          required
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full bg-[#FEF6DF] border border-neutral-300 focus:border-[#E94222] rounded-xl px-4 py-3 text-sm text-black outline-none transition-colors"
                        />
                      </div>

                      {/* Guests */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2">
                          Party Size <span className="text-[#E94222]">*</span>
                        </label>
                        <select
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                          className="w-full bg-[#FEF6DF] border border-neutral-300 focus:border-[#E94222] rounded-xl px-4 py-3 text-sm text-black outline-none transition-colors cursor-pointer"
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 Guests</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                          <option value="5">5 Guests</option>
                          <option value="6+">6+ Guests (Private Room)</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2">
                        Special Requests / Dietary Needs
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your message (allergies, special celebration, seating preferences)"
                        className="w-full bg-[#FEF6DF] border border-neutral-300 focus:border-[#E94222] rounded-xl p-4 text-sm text-black placeholder-neutral-400 outline-none transition-colors"
                      />
                    </div>

                    {/* Submit Button */}
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
    </div>
  );
}

