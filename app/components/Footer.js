export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center text-sm">
        © {new Date().getFullYear()} 풍성건설. All Rights Reserved.
      </div>
    </footer>
  );
}
