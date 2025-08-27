import "./globals.css";

export const metadata = {
  title: "풍성공영 | 우레탄 뿜칠 전문",
  description: "우레탄 뿜칠 및 방수·단열 시공 전문 업체",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
