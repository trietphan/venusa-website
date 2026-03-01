export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-primary via-[#1A237E] to-[#0D47A1] pt-20 relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
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

        {/* Right card */}
        <div className="flex justify-center">
          <div className="bg-white/[0.08] backdrop-blur-xl border border-white/15 rounded-3xl p-10 text-center text-white max-w-sm w-full">
            <div className="text-6xl mb-4">🦅</div>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-2">VENUSA</h2>
            <p className="text-white/70 text-sm leading-relaxed">
              The Vietnamese Entrepreneurs Network<br />in the United States of America
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/15">
              <div>
                <div className="text-2xl font-extrabold text-gold">501</div>
                <div className="text-xs text-white/60">(c)(3) Nonprofit</div>
              </div>
              <div>
                <div className="text-2xl">🇺🇸</div>
                <div className="text-xs text-white/60">Toàn Nước Mỹ</div>
              </div>
              <div>
                <div className="text-2xl">🌏</div>
                <div className="text-xs text-white/60">Kết Nối Toàn Cầu</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
