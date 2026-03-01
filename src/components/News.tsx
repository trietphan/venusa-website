const articles = [
  {
    date: "23 Tháng 11, 2021",
    title: "The National Innovative Entrepreneurship Festival Launching Day – TECHFEST Vietnam 2021",
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
    title: "Hội nghị trực tuyến kết nối doanh nghiệp đồng bằng sông Cửu Long với kiều bào tại Hoa Kỳ",
    desc: "Trung tâm Dịch vụ Đối ngoại tổ chức hội nghị kết nối doanh nghiệp Mekong Delta với doanh nhân Việt kiều tiềm năng.",
  },
];

export default function News() {
  return (
    <section id="news" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary">Tin Tức</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-[2.5rem] font-bold mt-3">
            Tin Tức Mới Nhất
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((a) => (
            <article
              key={a.title}
              className="bg-white rounded-2xl border border-slate-200 p-8 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/[0.04] transition-all duration-300"
            >
              <div className="text-sm font-semibold text-primary mb-3">{a.date}</div>
              <h3 className="font-bold text-lg leading-snug mb-3">{a.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{a.desc}</p>
              <a href="#" className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-primary hover:gap-3 transition-all no-underline">
                Đọc Thêm →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
