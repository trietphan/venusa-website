export default function Testimonial() {
  return (
    <section className="py-28 px-6 bg-[#0A1628] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(29,161,242,0.06)_0%,transparent_60%)]" />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="text-8xl opacity-[0.08] font-serif leading-none mb-6 select-none">&ldquo;</div>
        <p className="font-[family-name:var(--font-playfair)] text-xl md:text-[1.65rem] italic leading-[1.8] text-white/80 mb-10 -mt-4">
          Hội hướng đến kết nối nguồn lực từ các doanh nhân, doanh nghiệp người Việt tại Mỹ nhằm tăng cường hợp tác, trao đổi thông tin và cơ hội kinh doanh, đầu tư tại Mỹ, Việt Nam và các nước trên thế giới.
        </p>
        <div className="w-12 h-px bg-accent/40 mx-auto mb-6" />
        <div className="font-semibold text-lg text-white/90">Nguyễn Đình Phú</div>
        <div className="text-sm text-white/30 mt-1 tracking-wide uppercase">Chủ Tịch Hội</div>
      </div>
    </section>
  );
}
