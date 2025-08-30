export const metadata = {
  title: "풍성건설",
  description: "우레탄 뿜칠 & 방수 전문 시공업체",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="font-sans bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
