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
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* Background carousel - covers full right half */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[55%]">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority={i === 0}
            />
          </div>
        ))}
        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-dark/30" />
        <div className="absolute inset-0 lg:hidden bg-dark/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/[0.07] border border-white/[0.12] backdrop-blur-md px-4 py-2 rounded-full text-sm text-white/80 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Nonprofit 501(c)(3) Organization
          </div>

          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 tracking-tight">
            Hội Doanh Nhân{" "}
            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">Người Việt</span>{" "}
            <span className="block">tại Mỹ</span>
          </h1>

          <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-md">
            Kết nối nguồn lực từ các doanh nhân, doanh nghiệp người Việt tại Mỹ nhằm tăng cường hợp tác và cơ hội kinh doanh.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="#membership"
              className="group inline-flex items-center gap-2 bg-white text-dark font-semibold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-white/10 transition-all no-underline text-[0.95rem]"
            >
              Trở Thành Hội Viên
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border border-white/20 text-white/80 font-medium px-8 py-4 rounded-full hover:bg-white/[0.06] hover:border-white/30 transition-all no-underline text-[0.95rem]"
            >
              Tìm Hiểu Thêm
            </a>
          </div>

          {/* Slide indicators + caption */}
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === current ? "w-10 bg-white" : "w-3 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <span className="text-white/30 text-sm">{slides[current].alt}</span>
          </div>
        </div>

        {/* Nav arrows on right side */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full bg-white/[0.08] backdrop-blur-md text-white flex items-center justify-center hover:bg-white/15 transition-colors border border-white/10"
            aria-label="Previous"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 15l-6-6-6 6"/></svg>
          </button>
          <button
            onClick={next}
            className="w-11 h-11 rounded-full bg-white/[0.08] backdrop-blur-md text-white flex items-center justify-center hover:bg-white/15 transition-colors border border-white/10"
            aria-label="Next"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
