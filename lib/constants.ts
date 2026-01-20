export type Platform = {
  platform: string;
  icon: string;
  color: string;
  years: string;
  users: string;
  websites: string;
  awards: string;
  clients: string;
  suitable: string;
};

export type Package = {
  title: string;
  price: string;
  original: string;
  discount: string;
  features: string[];
  highlight?: string;
};

export const platforms: Platform[] = [
  {
    platform: "WordPress",
    icon: "wordpress",
    color: "bg-blue-600",
    years: "20 ปี",
    users: "533 ล้าน",
    websites: "38 ล้าน",
    awards: "8 รางวัล",
    clients: "Microsoft, Sony, The New York Times",
    suitable: "องค์กร, ร้านค้าออนไลน์, สถาบันการศึกษา"
  },
  {
    platform: "Wix",
    icon: "wix",
    color: "bg-teal-500",
    years: "19 ปี",
    users: "263 ล้าน",
    websites: "8.1 ล้าน",
    awards: "5 รางวัล",
    clients: "Nike, Coca-Cola, Starbucks",
    suitable: "ร้านค้าออนไลน์, บล็อกเกอร์, ธุรกิจขนาดเล็ก"
  },
  {
    platform: "Squarespace",
    icon: "squarespace",
    color: "bg-black",
    years: "21 ปี",
    users: "10 ล้าน",
    websites: "4.9 ล้าน",
    awards: "6 รางวัล",
    clients: "HBO, National Geographic, NASA",
    suitable: "แบรนด์พรีเมียม, นักออกแบบ, คอร์สออนไลน์"
  },
  {
    platform: "Shopify",
    icon: "shopify",
    color: "bg-green-600",
    years: "19 ปี",
    users: "5.6 ล้าน",
    websites: "2.5 ล้าน",
    awards: "4 รางวัล",
    clients: "Tesla, Gymshark, Kylie Cosmetics",
    suitable: "ร้านค้าออนไลน์, Drop Shipping, Startup"
  },
  {
    platform: "Weebly",
    icon: "weebly",
    color: "bg-blue-400",
    years: "19 ปี",
    users: "40 ล้าน",
    websites: "807,688",
    awards: "5 รางวัล",
    clients: "Duke Photography, Backwoods Soap",
    suitable: "ธุรกิจขนาดเล็ก, ฟรีแลนซ์"
  }
];

export const packages: Package[] = [
  {
    title: "One Page",
    price: "35,990",
    original: "39,990",
    discount: "10%",
    features: [
      "แนะนำและช่วยวางแนวทางแต่ละเซคชั่น",
      "พื้นที่ใช้งาน 50 GB",
      "ออกแบบภาพประกอบ 10 ภาพ",
      "ออกแบบเว็บไซต์ไม่เกิน 8 เซคชั่น",
      "ตั้งค่าพื้นฐาน SEO",
      "รองรับทุก Device",
      "สอนการใช้งาน"
    ]
  },
  {
    title: "Business Website",
    price: "59,990",
    original: "75,990",
    discount: "21%",
    highlight: "BEST VALUE",
    features: [
      "แนะนำและช่วยวาง Sitemap",
      "Themes ลิขสิทธิ์ 1 ปี",
      "พื้นที่ใช้งาน 50 GB",
      "ออกแบบภาพประกอบ 20 ภาพ",
      "ออกแบบหน้าเว็บไซต์ 7 เมนู",
      "ลงข้อมูลสูงสุด 50 รายการ",
      "ออกแบบโลโก้ 1 โลโก้"
    ]
  },
  {
    title: "Business Website Plus+",
    price: "79,990",
    original: "109,990",
    discount: "27%",
    highlight: "MOST POPULAR",
    features: [
      "แนะนำและช่วยวาง Sitemap",
      "Themes ลิขสิทธิ์ 1 ปี",
      "พื้นที่ใช้งานไม่จำกัด",
      "ออกแบบภาพประกอบ 30 ภาพ",
      "ออกแบบหน้าเว็บไซต์ 10 เมนู",
      "ลงข้อมูลสูงสุด 100 รายการ",
      "ออกแบบโลโก้พร้อมแก้ไข 2 ครั้ง"
    ]
  }
];

