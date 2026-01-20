export default function Navbar() {
  return (
    <header className="bg-white/90 backdrop-blur sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <a href="#" className="text-2xl font-bold text-blue-700">
          WebCraft Pro
        </a>
        <nav className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-700">
          <a href="#platform-intro" className="hover:text-blue-600 transition">แพลตฟอร์ม</a>
          <a href="#package-list" className="hover:text-blue-600 transition">แพ็คเกจ</a>
          <a href="#contact" className="hover:text-blue-600 transition">ติดต่อเรา</a>
        </nav>
        <a
          href="#contact"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          ขอใบเสนอราคา
        </a>
      </div>
    </header>
  );
}

