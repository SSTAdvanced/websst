import Image from "next/image";
import {
  CheckCircle,
  Code,
  Cpu,
  Globe,
  Headphones,
  Layers,
  Megaphone,
  MessageSquare,
  Package,
  Shield,
  ShoppingBag,
  Smartphone,
  TrendingUp,
  Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlatformCard from "@/components/PlatformCard";
import PackageCard from "@/components/PackageCard";
import ContactForm from "@/components/ContactForm";
import { packages, platforms } from "@/lib/constants";

export default function Home() {
  return (
    <div>
      <Navbar />

      <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">สร้างเว็บไซต์ระดับมืออาชีพ</h1>
          <p className="text-xl md:text-2xl mb-8">
            ออกแบบเว็บไซต์สำเร็จรูป รองรับมือถือ ด้วยแพลตฟอร์มอันดับ 1 ในเมืองไทย
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="#package-list"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-300"
            >
              เลือกแพ็คเกจ
            </a>
            <a
              href="#contact"
              className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              ติดต่อเรา
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">ทำไมต้องเลือกเรา</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Code className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">ไม่ต้องเขียนโค้ด</h3>
              </div>
              <p className="text-gray-600">ใช้งานง่ายด้วยระบบลากวาง ไม่ต้องมีความรู้ด้านโปรแกรมมิ่ง</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Shield className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold">เว็บเสถียรและปลอดภัย</h3>
              </div>
              <p className="text-gray-600">มาตรฐานระดับโลก ระบบป้องกันข้อมูลและความปลอดภัยสูงสุด</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Smartphone className="text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">รองรับมือถือ</h3>
              </div>
              <p className="text-gray-600">ดีไซน์ Responsive ดูดีทุกหน้าจอ ทั้งคอมพิวเตอร์ แท็บเล็ต และสมาร์ทโฟน</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <Zap className="text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold">AI ช่วยสร้างเนื้อหา</h3>
              </div>
              <p className="text-gray-600">ระบบ AI Content Generator ช่วยวิเคราะห์และสร้างเนื้อหาเว็บไซต์</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <TrendingUp className="text-red-600" />
                </div>
                <h3 className="text-xl font-bold">SEO มืออาชีพ</h3>
              </div>
              <p className="text-gray-600">AI SEO Assistant ช่วยวิเคราะห์คีย์เวิร์ดและเพิ่มอันดับการค้นหา</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <Headphones className="text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold">สนับสนุนตลอด 24/7</h3>
              </div>
              <p className="text-gray-600">ทีมงานมืออาชีพพร้อมให้คำปรึกษาตลอด 24 ชั่วโมง</p>
            </div>
          </div>
        </div>
      </section>

      <section id="platform-intro" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">ทำความรู้จักกับ 5 แพลตฟอร์มระดับโลก</h2>
          <p className="text-xl text-center text-gray-600 mb-12">ที่เราจะเลือกใช้ให้คุณ</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {platforms.map((platform) => (
              <PlatformCard key={platform.platform} {...platform} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">ทุกเรื่องเว็บไซต์ บริการครบ จบเดียวที่เรา</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
                <Globe className="text-blue-600 w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">ไม่ต้องยุ่งยาก</h3>
              <p className="text-gray-600">ติดต่อประสานงานต่างชาติเอง เราดูแลทุกขั้นตอนตั้งแต่การเปิดเว็บไซต์จนถึงการออนไลน์</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
                <Layers className="text-purple-600 w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">วางแผนและพัฒนา</h3>
              <p className="text-gray-600">ทีมงานมืออาชีพช่วยวางแผนและพัฒนาเว็บไซต์ให้ตรงกับความต้องการของคุณ</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-green-600 w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">ที่เดียวครบจบ</h3>
              <p className="text-gray-600">บริการครบวงจรตั้งแต่สร้างเว็บไซต์ ออกแบบ ติดตั้งปลั๊กอิน จนถึงการปรับปรุง SEO</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-red-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
                <Cpu className="text-red-600 w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">เทคโนโลยีทันสมัย</h3>
              <p className="text-gray-600">นำ AI และเทคโนโลยีใหม่ล่าสุดมาใช้ในการพัฒนาเว็บไซต์ให้ทันสมัยอยู่เสมอ</p>
            </div>
          </div>
        </div>
      </section>

      <section id="package-list" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">เริ่มต้นทำเว็บกับเราได้ง่ายๆ</h2>
          <p className="text-xl text-center text-gray-600 mb-12">เลือกแพ็คเกจที่ใช่สำหรับคุณ</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <PackageCard key={pkg.title} {...pkg} />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg mb-6">โทรหาเราขอทราบรายละเอียดเพิ่มเติมได้ที่ <span className="font-bold">02 832 3222</span> (30 คู่สาย)</p>
            <p className="text-lg">หรือแอดไลน์ <span className="font-bold">@igetweb.com</span></p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">ตัวอย่างเว็บไซต์ที่ใช้บริการกับเรา</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <Image
                src="http://static.photos/technology/640x360/1"
                alt="ตัวอย่างเว็บไซต์ 1"
                width={640}
                height={360}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">เว็บไซต์ร้านค้าออนไลน์</h3>
                <p className="text-gray-600">ออกแบบด้วยแพลตฟอร์ม Shopify</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <Image
                src="http://static.photos/office/640x360/2"
                alt="ตัวอย่างเว็บไซต์ 2"
                width={640}
                height={360}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">เว็บไซต์บริษัท</h3>
                <p className="text-gray-600">ออกแบบด้วยแพลตฟอร์ม WordPress</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <Image
                src="http://static.photos/education/640x360/3"
                alt="ตัวอย่างเว็บไซต์ 3"
                width={640}
                height={360}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">เว็บไซต์สถาบันการศึกษา</h3>
                <p className="text-gray-600">ออกแบบด้วยแพลตฟอร์ม Squarespace</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">สนใจขอรับรายละเอียดทำเว็บไซต์</h2>
            <p className="text-xl text-center mb-8">และโปรโมชั่นเพิ่มเติม ได้ที่นี่</p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">บริการอื่นๆ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Megaphone className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">บริการแอดมินเพจ</h3>
              </div>
              <p className="text-gray-600">บริการเปิดและดูแล Facebook Page, Tiktok และช่องทางโซเชียลมีเดีย</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <ShoppingBag className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold">บริการรีวิวผลิตภัณฑ์</h3>
              </div>
              <p className="text-gray-600">รีวิวผลิตภัณฑ์ผ่านช่องทางโซเชียลมีเดียเพื่อเพิ่มการขาย</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <MessageSquare className="text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">ออกแบบ Rich Menu</h3>
              </div>
              <p className="text-gray-600">ออกแบบเมนู Line Application เพื่อเพิ่มประสบการณ์ผู้ใช้</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <Package className="text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold">ออกแบบ Packaging</h3>
              </div>
              <p className="text-gray-600">ออกแบบ Label, โบชัวร์ และบรรจุภัณฑ์สินค้า</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

