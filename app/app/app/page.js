export default function Home() {
  return (
    <main className="px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">풍성공영</h1>
      <p className="text-lg mb-8">우레탄 뿜칠 및 방수·단열 시공 전문</p>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="border rounded-xl p-6">
          <h2 className="font-semibold mb-2">우레탄 뿜칠</h2>
          <p>산업시설·주차장·지붕 방수/단열 시공</p>
        </div>
        <div className="border rounded-xl p-6">
          <h2 className="font-semibold mb-2">현장 방문 견적</h2>
          <p>사진/도면 접수 후 24시간 내 상담</p>
        </div>
        <div className="border rounded-xl p-6">
          <h2 className="font-semibold mb-2">시공 문의</h2>
          <p>전화 · 이메일 · 양식 지원(추가 가능)</p>
        </div>
      </section>

      <a href="mailto:choishen1004@gmail.com"
         className="inline-block mt-10 px-5 py-3 rounded-lg border">
        시공 문의 메일 보내기
      </a>
    </main>
  );
}
