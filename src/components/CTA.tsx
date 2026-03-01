export default function CTA() {
  return (
    <section id="membership" className="py-24 px-6 bg-gradient-to-br from-primary to-[#1A237E] text-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-[2.5rem] font-bold mb-4">
          Trở Thành Hội Viên VENUSA
        </h2>
        <p className="text-lg text-white/85 mb-8">
          Gia nhập mạng lưới doanh nhân người Việt tại Mỹ. Cùng kết nối, hợp tác và phát triển.
        </p>
        <a
          href="https://venusa.us/membership/"
          className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-3.5 rounded-xl hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20 transition-all no-underline"
        >
          Đăng Ký Ngay →
        </a>
      </div>
    </section>
  );
}
