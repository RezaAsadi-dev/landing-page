import { Download, FileText, ImageIcon, Cpu, Zap } from "lucide-react";

export default function CatalogSection() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 relative">
      <div className="max-w-6xl w-full space-y-6 sm:space-y-8 px-2 sm:px-4">
        <div className="text-center space-y-1 sm:space-y-2 transition-transform duration-300">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white" dir="rtl">دریافت کاتالوگ</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400">GET CATALOG</p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-12 shadow-2xl border border-slate-700 transition-transform duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-5 md:space-y-6 order-2 md:order-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-right" dir="rtl">کاتالوگ کامل محصولات و خدمات</h3>
              <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed text-right" dir="rtl">
                برای دریافت اطلاعات کامل درباره محصولات، قیمت‌گذاری، و راهنمای فنی FarsiFlow، کاتالوگ جامع ما را دانلود کنید. این کاتالوگ شامل مشخصات فنی، نمونه‌های کاربردی، و راهنمای پیاده‌سازی است.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
                <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                  <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                  <div>
                    <div className="text-xs sm:text-sm text-slate-400">صفحات</div>
                    <div className="text-lg sm:text-xl font-bold text-white">24+</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                  <ImageIcon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
                  <div>
                    <div className="text-xs sm:text-sm text-slate-400">تصاویر</div>
                    <div className="text-lg sm:text-xl font-bold text-white">50+</div>
                  </div>
                </div>
              </div>
              <button className="w-full bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold text-sm sm:text-base md:text-lg h-11 sm:h-12 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center gap-2">
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span dir="rtl">دانلود کاتالوگ</span>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 order-1 md:order-2">
              <div className="aspect-square rounded-lg sm:rounded-xl bg-linear-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center transition-transform duration-300">
                <FileText className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-blue-400" />
              </div>
              <div className="aspect-square rounded-lg sm:rounded-xl bg-linear-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 flex items-center justify-center transition-transform duration-300">
                <ImageIcon className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-cyan-400" />
              </div>
              <div className="aspect-square rounded-lg sm:rounded-xl bg-linear-to-br from-teal-500/20 to-blue-500/20 border border-teal-500/30 flex items-center justify-center transition-transform duration-300">
                <Cpu className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-teal-400" />
              </div>
              <div className="aspect-square rounded-lg sm:rounded-xl bg-linear-to-br from-blue-500/20 to-teal-500/20 border border-blue-500/30 flex items-center justify-center transition-transform duration-300">
                <Zap className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


