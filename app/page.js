export default function Home() {
  return (
    <main className="font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">풍성공영</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-blue-600">회사소개</a>
            <a href="#services" className="hover:text-blue-600">서비스</a>
            <a href="#portfolio" className="hover:text-blue-600">시공사례</a>
            <a href="#contact" className="hover:text-blue-600">문의하기</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="h-screen bg-[url('/hero.jpg')] bg-cover bg-center flex flex-col justify-center items-center text-white text-center">
        <h2 className="text-5xl font-bold mb-4">풍성공영</h2>
        <p className="text-xl mb-6">우레탄 방수·단열 시공 전문</p>
        <a href="#contact" className="bg-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600">
          시공 문의하기
        </a>
      </section>

      {/* About */}
      <section id="about" className="py-20 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">회사 소개</h2>
        <p className="text-gray-600 leading-relaxed">
          풍성공영은 우레탄 뿜칠 및 방수·단열 시공 전문 업체로, 
          다년간의 경험과 기술력을 바탕으로 고객에게 최적의 솔루션을 제공합니다.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">서비스 안내</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-6">
          <div className="p-8 bg-white rounded-xl shadow hover:shadow-lg">
            <h3 className="font-semibold text-xl mb-2">우레탄 뿜칠</h3>
            <p>산업시설, 주차장, 지붕 방수·단열 전문 시공</p>
          </div>
          <div className="p-8 bg-white rounded-xl shadow hover:shadow-lg">
            <h3 className="font-semibold text-xl mb-2">현장 방문 견적</h3>
            <p>사진/도면 접수 후 24시간 내 상담 및 방문</p>
          </div>
          <div className="p-8 bg-white rounded-xl shadow hover:shadow-lg">
            <h3 className="font-semibold text-xl mb-2">사후 관리</h3>
            <p>시공 후 1년 무상 A/S 지원</p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">시공 사례</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-200 h-48 rounded-lg"></div>
          <div className="bg-gray-200 h-48 rounded-lg"></div>
          <div className="bg-gray-200 h-48 rounded-lg"></div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-6">문의하기</h2>
        <p className="mb-4">📞 010-1234-5678 | ✉️ choishen1004@gmail.com</p>
        <a href="mailto:choishen1004@gmail.com" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          메일 보내기
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p>© 2024 풍성공영 | 사업자등록번호 123-45-67890</p>
      </footer>
    </main>
  );
}
