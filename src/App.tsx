import { motion } from "motion/react";
import { 
  Zap, 
  Play, 
  ArrowRight, 
  User, 
  Smile, 
  Utensils, 
  Tent, 
  MapPin, 
  ShoppingBag, 
  Facebook, 
  Youtube, 
  PhoneCall,
  Flame
} from "lucide-react";

interface Category {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  isFeatured?: boolean;
  colSpan?: string;
}

const categories: Category[] = [
  {
    title: "Phim Hành Động",
    description: "Chuyển động kịch tính, nhịp độ nhanh với góc máy cinematic.",
    icon: <User className="w-6 h-6" />,
    link: "https://hanhdong.vercel.app/",
  },
  {
    title: "Phim Hài",
    description: "Tình huống hài hước, biểu cảm nhân vật vui nhộn từ trí tuệ AI.",
    icon: <Smile className="w-6 h-6" />,
    link: "https://haihanhdong.vercel.app/",
  },
  {
    title: "Mukbang AI",
    description: "Hình ảnh món ăn siêu thực, mâm đồ ăn hoành tráng gây ấn tượng mạnh.",
    icon: <Utensils className="w-6 h-6" />,
    link: "https://ai.studio/apps/6275d4e2-0de4-41f1-9323-20bc56371416?fullscreenApplet=true",
    isFeatured: true,
  },
  {
    title: "Nấu Ăn",
    description: "Quy trình ẩm thực chuyên nghiệp, ánh sáng bếp ấm cúng và tinh tế.",
    icon: <Flame className="w-6 h-6" />,
    link: "https://hainauan.vercel.app/",
  },
  {
    title: "Sinh tồn",
    description: "Thước phim thiên nhiên hùng vĩ, timelapse thay đổi bối cảnh kỳ ảo.",
    icon: <Tent className="w-6 h-6" />,
    link: "https://namlv.io.vn",
  },
  {
    title: "Du Lịch",
    description: "Khám phá vẻ đẹp thế giới qua các góc quay POV độc bản của AI.",
    icon: <MapPin className="w-6 h-6" />,
    link: "https://dulich-cyan.vercel.app/",
  },
  {
    title: "AI Bán Hàng",
    description: "Video quảng cáo sản phẩm, livestream ảo bùng nổ doanh thu cho doanh nghiệp.",
    icon: <ShoppingBag className="w-6 h-6" />,
    link: "https://namlv.io.vn",
    colSpan: "lg:col-span-2",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <nav className="fixed w-full z-50 nav-container">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="p-2 bg-primary-orange rounded-lg">
              <Zap className="text-white w-5 h-5 fill-current" />
            </div>
            <span className="text-xl font-black tracking-tighter text-black uppercase">NAM AI</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden lg:flex flex-1 justify-center px-4"
          >
            <div className="bg-primary-orange text-white px-6 py-2.5 rounded-full shadow-[0_8px_20px_rgba(255,95,0,0.3)] border-2 border-white/20 transform hover:scale-[1.02] transition-all duration-300">
              <p className="text-[11px] xl:text-[12px] font-black uppercase tracking-wider leading-none">
                Đầu tư vào kiến thức AI hôm nay là cách tốt nhất để cắt giảm chi phí của ngày mai
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-4 items-center"
          >
            <a href="#the-loai" className="btn-try-nav text-[11px] uppercase tracking-widest">
              DÙNG THỬ NGAY
            </a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Banner Section */}
      <header className="hero-banner pt-48 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="badge mb-6"
          >
            Trí tuệ nhân tạo điện ảnh
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black mb-8 leading-tight text-gray-900"
          >
            Sáng tạo phim <br />
            <span className="text-primary-orange">Chuyên nghiệp</span> cùng AI
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto mb-12 text-gray-500 font-medium text-base md:text-lg leading-relaxed"
          >
            Nền tảng hỗ trợ xuất chuỗi Prompt Mukbang, hành động, sinh tồn mượt mà. <br className="hidden md:block" />
            Tối ưu hóa hình ảnh đồ ăn và bối cảnh chân thực nhất.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a href="#the-loai" className="btn-primary">
              <Play className="w-5 h-5 fill-current" /> TRUY CẬP DÙNG THỬ
            </a>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>
      </header>

      {/* Category Section */}
      <section id="the-loai" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-orange text-[11px] font-black uppercase tracking-widest block mb-3">Lựa chọn phong cách</span>
              <h2 className="text-4xl font-black text-black section-title">Danh Mục Sáng Tạo</h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm max-w-sm font-medium"
            >
              Bấm "Xem thêm" ở từng mục để khám phá các mẫu video AI mới nhất của chúng tôi.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`glass-card p-8 ${cat.isFeatured ? 'border-primary-orange/30 bg-primary-orange/5' : ''} ${cat.colSpan || ''}`}
              >
                <div>
                  <div className={`category-icon ${cat.isFeatured ? 'icon-featured' : ''}`}>
                    {cat.icon}
                  </div>
                  <h3 className={`text-xl font-extrabold mb-4 ${cat.isFeatured ? 'text-primary-orange' : 'text-black'}`}>
                    {cat.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${cat.isFeatured ? 'text-primary-orange/70' : 'text-gray-500'}`}>
                    {cat.description}
                  </p>
                </div>
                <a 
                  href={cat.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-more"
                  style={cat.isFeatured ? { background: 'var(--color-primary-orange)' } : {}}
                >
                  Xem thêm <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Footer */}
      <footer className="sticky-footer">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-primary-orange transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary-orange transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.525.02c1.31-.032 2.617-.023 3.91-.006.77.155 1.447.538 1.96 1.15.572.68.86 1.5.874 2.378.01 2.52.002 5.04.002 7.56v.378a15.34 15.34 0 0 0 1.56-.14c.456-.06.915-.12 1.354-.31a4.21 4.21 0 0 0 1.455-1.05c.46-.49.715-1.11.832-1.78.02-.12.028-.24.03-.36.012-.66.006-1.32.006-1.98V4.02h2.25c.01 1.01.01 2.02-.01 3.03-.046 1.554-.514 2.946-1.507 4.155-.91.956-2.126 1.576-3.415 1.83a7.49 7.49 0 0 1-1.3.11c-.5 0-1 .01-1.49.01v4.53c0 1.25.01 2.5-.01 3.75-.02.6-.05 1.16-.213 1.74-.32 1.14-.94 2.14-1.85 2.92-1.1.91-2.43 1.41-3.85 1.41-1.6 0-3.14-.62-4.28-1.75-1.12-1.11-1.74-2.61-1.74-4.18 0-1.56.62-3.07 1.74-4.18 1.13-1.13 2.67-1.75 4.28-1.75.31 0 .62.02.93.06v2.33c-.3-.06-.6-.08-.91-.08-.97 0-1.9.38-2.58 1.07-.63.63-1 1.48-1 2.39s.37 1.76 1 2.39c.68.69 1.61 1.07 2.58 1.07.97 0 1.9-.38 2.58-1.07.57-.57.94-1.33 1-2.15.02-1.53.01-3.07.01-4.6V0h2.25v.02z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-primary-orange transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          <motion.a 
            href="tel:0981028794" 
            className="contact-highlight"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <PhoneCall className="w-4 h-4 text-white animate-pulse-custom" />
            <span className="text-xs sm:text-sm uppercase tracking-wider">Hỗ trợ liên hệ Nam 0981028794</span>
          </motion.a>
        </div>
      </footer>
    </div>
  );
}
