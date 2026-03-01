const activities = [
  {
    icon: "🤝",
    title: "Kết Nối Doanh Nhân",
    desc: "Kết nối các doanh nhân, doanh nghiệp tại Mỹ, Việt Nam và trên toàn thế giới, tạo cầu nối hợp tác bền vững.",
    num: "01",
  },
  {
    icon: "🎤",
    title: "Hội Thảo & Diễn Đàn",
    desc: "Tổ chức các hội thảo, hội chợ, diễn đàn về các chủ đề kinh tế, thương mại, đầu tư và khởi nghiệp.",
    num: "02",
  },
  {
    icon: "📰",
    title: "Tin Tức Kinh Tế",
    desc: "Cập nhật các tin tức về kinh tế, tài chính, cơ hội đầu tư và thông tin thị trường mới nhất.",
    num: "03",
  },
];

export default function Activities() {
  return (
    <section id="activities" className="py-28 px-6 bg-blue-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">Các Hoạt Động</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mt-4 mb-5 tracking-tight">
            Các Hoạt Động Của VENUSA
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Hỗ trợ hợp tác đầu tư, kinh doanh, thương mại và văn hoá trong các lĩnh vực được pháp luật cho phép.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((a) => (
            <div
              key={a.title}
              className="group bg-white rounded-2xl p-10 border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/[0.04] hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl shadow-lg shadow-primary/20">
                  {a.icon}
                </div>
                <span className="text-4xl font-bold text-slate-100 group-hover:text-primary/10 transition-colors">{a.num}</span>
              </div>
              <h3 className="font-bold text-lg mb-3 text-slate-800">{a.title}</h3>
              <p className="text-slate-400 text-[0.9rem] leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
