"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "#about", label: "Về Chúng Tôi" },
  { href: "#activities", label: "Hoạt Động" },
  { href: "#news", label: "Tin Tức" },
  { href: "#contact", label: "Liên Hệ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all border-b backdrop-blur-xl ${
        scrolled
          ? "bg-white/95 border-slate-200 shadow-lg shadow-black/[0.04]"
          : "bg-white/90 border-slate-200/60"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 text-primary no-underline">
          <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center">
            <svg viewBox="0 0 44 44" className="w-7 h-7" fill="none">
              <path d="M22 4L8 36h8l6-16 6 16h8L22 4z" fill="#FFB300" />
            </svg>
          </div>
          <div>
            <span className="font-extrabold text-xl tracking-tight block leading-tight">VENUSA</span>
            <span className="text-[0.65rem] text-slate-500 tracking-widest uppercase">Vươn Mình Bay Cao</span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-slate-700 hover:text-primary hover:bg-slate-100 px-3.5 py-2 rounded-lg transition-colors no-underline"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#membership"
              className="text-sm font-semibold text-white bg-primary hover:bg-primary-light px-4 py-2 rounded-lg transition-colors no-underline ml-1"
            >
              Trở Thành Hội Viên
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className="w-6 h-0.5 bg-slate-800 rounded" />
          <span className="w-6 h-0.5 bg-slate-800 rounded" />
          <span className="w-6 h-0.5 bg-slate-800 rounded" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-4 shadow-xl">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-2 text-sm font-medium text-slate-700 no-underline"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#membership"
            className="block mt-2 text-center text-sm font-semibold text-white bg-primary rounded-lg py-2.5 no-underline"
            onClick={() => setOpen(false)}
          >
            Trở Thành Hội Viên
          </a>
        </div>
      )}
    </nav>
  );
}
