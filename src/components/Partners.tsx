"use client";
import Image from "next/image";

const partners = [
  { src: "/images/partner-1.webp", alt: "Simply Food" },
  { src: "/images/partner-2.webp", alt: "Bình Tây BIFOCO" },
  { src: "/images/partner-3.webp", alt: "Vietnam Airlines" },
  { src: "/images/partner-4.webp", alt: "VTV" },
  { src: "/images/partner-5.webp", alt: "VNPT" },
  { src: "/images/partner-6.webp", alt: "BAOOV" },
  { src: "/images/partner-7.webp", alt: "California International Bank" },
  { src: "/images/partner-8.webp", alt: "Vietnamese Youth & Student Association California" },
  { src: "/images/partner-9.webp", alt: "TNSV Việt Nam tại Hoa Kỳ" },
  { src: "/images/partner-10.webp", alt: "Greenfield & Associates LLP" },
  { src: "/images/partner-11.webp", alt: "Hương Trang Books" },
];

export default function Partners() {
  // Double the list for seamless infinite scroll
  const doubled = [...partners, ...partners];

  return (
    <section className="py-24 px-6 bg-blue-bg-alt">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary">Đối Tác</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-[2.5rem] font-bold mt-3">
            Đối Tác Của Chúng Tôi
          </h2>
        </div>

        {/* Scrolling carousel */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-blue-bg-alt to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-blue-bg-alt to-transparent z-10 pointer-events-none" />

          <div className="flex animate-scroll gap-12 items-center w-max">
            {doubled.map((p, i) => (
              <div
                key={`${p.alt}-${i}`}
                className="flex-shrink-0 w-[140px] h-[100px] relative transition-all duration-300 hover:scale-110"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-contain"
                  sizes="140px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
