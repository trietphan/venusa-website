const articles = [
  {
    date: "23 Tháng 11, 2021",
    title: "The National Innovative Entrepreneurship Festival — TECHFEST Vietnam 2021",
    desc: "The 7th National Innovation Festival TECHFEST VIETNAM 2021 officially kicked off with virtual events connecting entrepreneurs worldwide.",
  },
  {
    date: "07 Tháng 11, 2020",
    title: "Việt Nam và Hoa Kỳ ký thỏa thuận hợp tác trị giá hàng tỷ USD",
    desc: "Các cơ quan chính phủ, tập đoàn Việt Nam và Mỹ đã ký các thỏa thuận hợp tác quan trọng trên nhiều lĩnh vực.",
  },
  {
    date: "07 Tháng 11, 2020",
    title: "23,48 tỷ USD vốn đầu tư nước ngoài vào Việt Nam trong 10 tháng",
    desc: "Trong 10 tháng qua, vẫn có 23,48 tỷ USD vốn đầu tư nước ngoài đổ vào Việt Nam, thể hiện sức hút mạnh mẽ.",
  },
  {
    date: "02 Tháng 11, 2020",
    title: "Hội nghị kết nối doanh nghiệp đồng bằng sông Cửu Long với kiều bào tại Hoa Kỳ",
    desc: "Trung tâm Dịch vụ Đối ngoại tổ chức hội nghị kết nối doanh nghiệp Mekong Delta với doanh nhân Việt kiều tiềm năng.",
  },
];

export default function News() {
  return (
    <section id="news" className="py-28 px-6 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">Tin Tức</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            Tin Tức Mới Nhất
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((a, i) => (
            <article
              key={i}
              className="group bg-white rounded-2xl border border-slate-100 p-8 hover:border-primary/15 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-0.5 transition-all duration-500"
            >
              <div className="text-xs font-semibold text-accent tracking-wide mb-4">{a.date}</div>
              <h3 className="font-bold text-lg leading-snug mb-3 text-slate-800 group-hover:text-primary transition-colors">{a.title}</h3>
              <p className="text-slate-400 text-[0.9rem] leading-relaxed">{a.desc}</p>
              <a href="#" className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-primary/70 group-hover:text-primary group-hover:gap-3 transition-all no-underline">
                Đọc Thêm
                <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
