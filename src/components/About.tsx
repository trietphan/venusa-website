const values = [
  { emoji: "🤝", label: "Hợp Tác" },
  { emoji: "💡", label: "Đổi Mới" },
  { emoji: "🌏", label: "Kết Nối" },
  { emoji: "❤️", label: "Thiện Nguyện" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary">Về Chúng Tôi</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-[2.5rem] font-bold mt-3 mb-6">
            Sứ Mệnh Kết Nối & Phát Triển
          </h2>
          <p className="text-slate-500 leading-relaxed mb-5">
            Hội Doanh nhân người Việt tại Mỹ (VENUSA) được thành lập với sứ mệnh kết nối và hỗ trợ các doanh nhân người Việt trên con đường phát triển doanh nghiệp tại Mỹ cũng như tại Việt Nam và các nước trên thế giới.
          </p>
          <p className="text-slate-500 leading-relaxed mb-5">
            Bằng cách tăng cường sự hợp tác cũng như trao đổi thông tin và cơ hội kinh doanh giữa các thành viên, VENUSA hướng tới mục tiêu xây dựng một cộng đồng doanh nhân người Việt vững mạnh và ngày càng phát triển.
          </p>
          <p className="text-slate-500 leading-relaxed">
            Được thành lập và hoạt động dưới hình thức phi lợi nhuận 501(c)(3) theo luật pháp Hoa Kỳ, VENUSA thúc đẩy và phát triển các quan hệ hợp tác trên nhiều lĩnh vực như kinh tế, thương mại, đầu tư, khoa học công nghệ, khởi nghiệp, văn hóa, nghệ thuật và thiện nguyện.
          </p>
        </div>

        {/* Visual card */}
        <div className="bg-gradient-to-br from-primary to-[#1A237E] rounded-3xl p-10 text-white relative overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-[radial-gradient(circle,rgba(255,179,0,0.15)_0%,transparent_60%)]" />
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-4 relative z-10">
            Ý Nghĩa Biểu Tượng
          </h3>
          <p className="text-white/85 leading-relaxed relative z-10">
            Biểu tượng của Hội dựa trên đường nét của chữ V, viết tắt của Việt Nam và người Việt. Hình tượng cánh chim vươn mình bay cao thể hiện khát vọng thành công và không ngừng chinh phục những đỉnh cao mới của người Việt.
          </p>
          <p className="text-white/85 leading-relaxed mt-4 relative z-10">
            Màu xanh tượng trưng cho sự tin tưởng và chữ tín — nền tảng của sự hợp tác và kết nối của cộng đồng doanh nhân người Việt tại Mỹ.
          </p>
          <div className="grid grid-cols-2 gap-3 mt-8 relative z-10">
            {values.map((v) => (
              <div key={v.label} className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl mb-1">{v.emoji}</div>
                <span className="text-sm font-semibold">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
