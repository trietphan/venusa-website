const activities = [
  {
    icon: "🤝",
    title: "Kết Nối Doanh Nhân",
    desc: "Kết nối các doanh nhân, doanh nghiệp tại Mỹ, Việt Nam và trên toàn thế giới, tạo cầu nối hợp tác bền vững.",
  },
  {
    icon: "🎤",
    title: "Hội Thảo & Diễn Đàn",
    desc: "Tổ chức các hội thảo, hội chợ, diễn đàn về các chủ đề kinh tế, thương mại, đầu tư và khởi nghiệp.",
  },
  {
    icon: "📰",
    title: "Tin Tức Kinh Tế",
    desc: "Cập nhật các tin tức về kinh tế, tài chính, cơ hội đầu tư và thông tin thị trường mới nhất.",
  },
];

export default function Activities() {
  return (
    <section id="activities" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary">Các Hoạt Động</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-[2.5rem] font-bold mt-3 mb-4">
            Các Hoạt Động Của VENUSA
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            VENUSA ủng hộ và hỗ trợ các hoạt động hợp tác đầu tư, kinh doanh, thương mại, văn hoá, nghệ thuật trong các lĩnh vực được pháp luật cho phép.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((a) => (
            <div
              key={a.title}
              className="bg-white rounded-2xl p-10 text-center border border-slate-200 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/[0.06] hover:border-primary transition-all duration-300"
            >
              <div className="w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mx-auto mb-6 text-3xl">
                {a.icon}
              </div>
              <h3 className="font-bold text-lg mb-3">{a.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
