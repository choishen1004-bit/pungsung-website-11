export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">풍성건설</div>
        <ul className="flex space-x-6 font-medium">
          <li><a href="#about" className="hover:text-blue-600">회사소개</a></li>
          <li><a href="#services" className="hover:text-blue-600">서비스</a></li>
          <li><a href="#portfolio" className="hover:text-blue-600">시공사례</a></li>
          <li><a href="#contact" className="hover:text-blue-600">문의하기</a></li>
        </ul>
      </div>
    </nav>
  );
}
