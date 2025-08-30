export default function Hero() {
  return (
    <section
      className="h-screen bg-[url('/hero.jpg')] bg-cover bg-center flex flex-col justify-center items-center text-white text-center"
    >
      <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">풍성건설</h1>
      <p className="mt-6 text-xl md:text-2xl">우레탄 뿜칠 & 방수 전문 시공업체</p>
      <a
        href="#contact"
        className="mt-8 px-6 py-3 bg-blue-600 rounded-lg shadow hover:bg-blue-700"
      >
        상담문의
      </a>
    </section>
  );
}
