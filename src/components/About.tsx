const values = [
  { emoji: "🤝", label: "Hợp Tác" },
  { emoji: "💡", label: "Đổi Mới" },
  { emoji: "🌏", label: "Kết Nối" },
  { emoji: "❤️", label: "Thiện Nguyện" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Text */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">Về Chúng Tôi</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mt-4 mb-8 tracking-tight leading-tight">
            Sứ Mệnh Kết Nối<br />& Phát Triển
          </h2>
          <div className="space-y-5 text-slate-400 leading-[1.85]">
            <p>
              Hội Doanh nhân người Việt tại Mỹ (VENUSA) được thành lập với sứ mệnh kết nối và hỗ trợ các doanh nhân người Việt trên con đường phát triển doanh nghiệp tại Mỹ cũng như tại Việt Nam và các nước trên thế giới.
            </p>
            <p>
              Bằng cách tăng cường sự hợp tác cũng như trao đổi thông tin và cơ hội kinh doanh giữa các thành viên, VENUSA hướng tới mục tiêu xây dựng một cộng đồng doanh nhân người Việt vững mạnh.
            </p>
            <p>
              Hoạt động dưới hình thức phi lợi nhuận 501(c)(3), VENUSA thúc đẩy hợp tác trên nhiều lĩnh vực: kinh tế, thương mại, đầu tư, khoa học công nghệ, khởi nghiệp, văn hóa và thiện nguyện.
            </p>
          </div>
        </div>

        {/* Visual card */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-[2rem] blur-2xl" />
          <div className="relative bg-gradient-to-br from-[#0A1628] to-[#132042] rounded-3xl p-10 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-5 relative z-10">
              Ý Nghĩa Biểu Tượng
            </h3>
            <p className="text-white/60 leading-relaxed relative z-10 text-[0.95rem]">
              Biểu tượng của Hội dựa trên đường nét của chữ V — Việt Nam và người Việt. Hình tượng cánh chim vươn mình bay cao thể hiện khát vọng thành công và không ngừng chinh phục đỉnh cao mới.
            </p>
            <p className="text-white/60 leading-relaxed mt-4 relative z-10 text-[0.95rem]">
              Màu xanh tượng trưng cho sự tin tưởng và chữ tín — nền tảng của kết nối cộng đồng doanh nhân người Việt tại Mỹ.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-8 relative z-10">
              {values.map((v) => (
                <div key={v.label} className="bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] rounded-xl p-5 text-center hover:bg-white/[0.1] transition-colors">
                  <div className="text-2xl mb-2">{v.emoji}</div>
                  <span className="text-sm font-medium text-white/80">{v.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
