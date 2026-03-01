"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <div className="flex flex-col items-start">
            <Image
              src="/images/logo.webp"
              alt="VENUSA Logo"
              width={140}
              height={42}
              className="h-10 w-auto"
              priority
            />
            <span className={`text-[0.6rem] tracking-[0.15em] uppercase font-medium mt-0.5 ml-0.5 transition-colors ${
              scrolled ? "text-slate-400" : "text-white/50"
            }`}>
              Vươn Mình Bay Cao
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-0.5">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-[0.85rem] font-medium px-4 py-2 rounded-lg transition-all no-underline ${
                  scrolled
                    ? "text-slate-600 hover:text-primary hover:bg-slate-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a
              href="#membership"
              className="text-[0.85rem] font-semibold text-white bg-primary hover:bg-primary-light px-5 py-2.5 rounded-full transition-all no-underline shadow-lg shadow-primary/20 hover:shadow-primary/30"
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
          <span className={`w-6 h-0.5 rounded transition-colors ${scrolled ? "bg-slate-800" : "bg-white"}`} />
          <span className={`w-6 h-0.5 rounded transition-colors ${scrolled ? "bg-slate-800" : "bg-white"}`} />
          <span className={`w-6 h-0.5 rounded transition-colors ${scrolled ? "bg-slate-800" : "bg-white"}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200 px-6 py-4 shadow-xl">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-2.5 text-sm font-medium text-slate-700 no-underline"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#membership"
            className="block mt-3 text-center text-sm font-semibold text-white bg-primary rounded-full py-2.5 no-underline"
            onClick={() => setOpen(false)}
          >
            Trở Thành Hội Viên
          </a>
        </div>
      )}
    </nav>
  );
}
