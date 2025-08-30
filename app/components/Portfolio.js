export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">시공 사례</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <img src="/portfolio1.jpg" alt="시공 사례1" className="rounded-lg shadow" />
        <img src="/portfolio2.jpg" alt="시공 사례2" className="rounded-lg shadow" />
        <img src="/portfolio3.jpg" alt="시공 사례3" className="rounded-lg shadow" />
      </div>
    </section>
  );
}
