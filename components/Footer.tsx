export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-3">WebCraft Pro</h3>
          <p className="text-slate-300">
            ทีมงานมืออาชีพพร้อมดูแลทุกขั้นตอน ตั้งแต่วางแผนจนถึงออนไลน์จริง
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">ลิงก์สำคัญ</h4>
          <ul className="space-y-2 text-slate-300">
            <li><a href="#platform-intro" className="hover:text-white">แพลตฟอร์ม</a></li>
            <li><a href="#package-list" className="hover:text-white">แพ็คเกจ</a></li>
            <li><a href="#contact" className="hover:text-white">ติดต่อเรา</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">ติดต่อ</h4>
          <p className="text-slate-300">โทร 02 832 3222</p>
          <p className="text-slate-300">Line: @igetweb.com</p>
          <p className="text-slate-300">อีเมล: hello@webcraftpro.co</p>
        </div>
      </div>
      <div className="border-t border-slate-800 text-center text-sm py-4 text-slate-400">
        ? 2024 WebCraft Pro. All rights reserved.
      </div>
    </footer>
  );
}

