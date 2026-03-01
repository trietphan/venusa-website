"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  { src: "/images/hero-1.jpg", alt: "Tết Về Nhà 6 - VENUSA Event" },
  { src: "/images/hero-2.jpg", alt: "VENUSA Community Gathering" },
  { src: "/images/hero-3.webp", alt: "VENUSA Team at Facebook HQ" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-primary via-[#1A237E] to-[#0D47A1] pt-20 relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <div className="text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            🇻🇳 🇺🇸 Nonprofit 501(c)(3)
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-[3.5rem] font-bold leading-[1.1] mb-6">
            Hội Doanh Nhân{" "}
            <span className="text-gold">Người Việt</span>{" "}
            tại Mỹ
          </h1>
          <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-lg">
            Kết nối nguồn lực từ các doanh nhân, doanh nghiệp người Việt tại Mỹ nhằm tăng cường hợp tác, trao đổi thông tin và cơ hội kinh doanh, đầu tư.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#membership"
              className="inline-flex items-center gap-2 bg-gold text-slate-900 font-semibold px-8 py-3.5 rounded-xl hover:bg-amber-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/30 transition-all no-underline"
            >
              Trở Thành Hội Viên →
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all no-underline"
            >
              Tìm Hiểu Thêm
            </a>
          </div>
        </div>

        {/* Right carousel */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg">
            {/* Image container */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
              {slides.map((slide, i) => (
                <div
                  key={slide.src}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    i === current ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 512px"
                    priority={i === 0}
                  />
                </div>
              ))}

              {/* Gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Prev / Next buttons */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/60 transition-colors border border-white/10"
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/60 transition-colors border border-white/10"
                aria-label="Next"
              >
                ›
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-gold"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Caption */}
            <p className="text-center text-white/50 text-sm mt-3">
              {slides[current].alt}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
