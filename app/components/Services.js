export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">주요 서비스</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { img: "/service1.jpg", title: "우레탄 뿜칠", desc: "산업시설, 주차장, 지붕 방수·단열 전문 시공" },
            { img: "/service2.jpg", title: "옥상 방수", desc: "누수 방지와 내구성이 뛰어난 방수 시공" },
            { img: "/service3.jpg", title: "단열 시공", desc: "효율적인 단열로 에너지 절감 효과" }
          ].map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
              <img src={s.img} alt={s.title} className="h-40 w-full object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-gray-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
