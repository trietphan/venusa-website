import Image from "next/image";

const pages = [
  { href: "#about", label: "Về Chúng Tôi" },
  { href: "#activities", label: "Hoạt Động" },
  { href: "#news", label: "Tin Tức" },
  { href: "#membership", label: "Hội Viên" },
];

const programs = [
  { href: "#", label: "Diễn Đàn" },
  { href: "#", label: "Dịch Vụ Uy Tín" },
  { href: "#", label: "Thiện Nguyện" },
  { href: "#", label: "Truyền Thông" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#060A14] text-slate-500 pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <Image src="/images/logo.webp" alt="VENUSA" width={120} height={36} className="h-9 w-auto mb-5 brightness-200" />
          <p className="text-sm leading-relaxed text-slate-500/80">
            The Vietnamese Entrepreneurs Network in the United States of America.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href="https://www.facebook.com/venusafanpage/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-500 hover:bg-accent/10 hover:text-accent hover:border-accent/20 transition-all"
              aria-label="Facebook"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/venusa/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-500 hover:bg-accent/10 hover:text-accent hover:border-accent/20 transition-all"
              aria-label="LinkedIn"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h4 className="text-white/40 text-xs font-semibold uppercase tracking-[0.15em] mb-5">Trang</h4>
          {pages.map((p) => (
            <a key={p.label} href={p.href} className="block text-sm text-slate-500/70 hover:text-white/80 mb-2.5 no-underline transition-colors">
              {p.label}
            </a>
          ))}
        </div>

        {/* Programs */}
        <div>
          <h4 className="text-white/40 text-xs font-semibold uppercase tracking-[0.15em] mb-5">Hoạt Động</h4>
          {programs.map((p) => (
            <a key={p.label} href={p.href} className="block text-sm text-slate-500/70 hover:text-white/80 mb-2.5 no-underline transition-colors">
              {p.label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white/40 text-xs font-semibold uppercase tracking-[0.15em] mb-5">Liên Hệ</h4>
          <a href="mailto:info@venusa.us" className="block text-sm text-slate-500/70 hover:text-white/80 mb-2.5 no-underline transition-colors">
            info@venusa.us
          </a>
          <a href="https://venusa.us" className="block text-sm text-slate-500/70 hover:text-white/80 mb-2.5 no-underline transition-colors">
            venusa.us
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/[0.04] text-center text-xs text-slate-600">
        Copyright © 2026 — VENUSA. All rights reserved.
      </div>
    </footer>
  );
}
