export default function CTA() {
  return (
    <section id="membership" className="py-28 px-6 bg-[#0A1628] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(29,161,242,0.08)_0%,transparent_70%)]" />
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
          Trở Thành Hội Viên VENUSA
        </h2>
        <p className="text-lg text-white/50 mb-10 leading-relaxed">
          Gia nhập mạng lưới doanh nhân người Việt tại Mỹ. Cùng kết nối, hợp tác và phát triển.
        </p>
        <a
          href="https://venusa.us/membership/"
          className="group inline-flex items-center gap-2 bg-white text-dark font-semibold px-10 py-4 rounded-full hover:shadow-xl hover:shadow-white/10 transition-all no-underline"
        >
          Đăng Ký Ngay
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </section>
  );
}
