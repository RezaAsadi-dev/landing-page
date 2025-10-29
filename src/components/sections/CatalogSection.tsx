import { Download, FileText, ImageIcon, Cpu, Zap } from "lucide-react";

export default function CatalogSection() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 relative">
      <div className="max-w-6xl w-full space-y-8">
        <div className="text-center space-y-2 transition-transform duration-300">
          <h2 className="text-4xl md:text-5xl font-bold text-white" dir="rtl">دریافت کاتالوگ</h2>
          <p className="text-xl text-slate-400">GET CATALOG</p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border border-slate-700 transition-transform duration-300">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white text-right" dir="rtl">کاتالوگ کامل محصولات و خدمات</h3>
              <p className="text-lg text-slate-300 leading-relaxed text-right" dir="rtl">
                برای دریافت اطلاعات کامل درباره محصولات، قیمت‌گذاری، و راهنمای فنی FarsiFlow، کاتالوگ جامع ما را دانلود کنید. این کاتالوگ شامل مشخصات فنی، نمونه‌های کاربردی، و راهنمای پیاده‌سازی است.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                  <FileText className="w-8 h-8 text-blue-400" />
                  <div>
                    <div className="text-sm text-slate-400">صفحات</div>
                    <div className="text-xl font-bold text-white">24+</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                  <ImageIcon className="w-8 h-8 text-cyan-400" />
                  <div>
                    <div className="text-sm text-slate-400">تصاویر</div>
                    <div className="text-xl font-bold text-white">50+</div>
                  </div>
                </div>
              </div>
              <button className="w-full bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold text-lg h-14">
                <Download className="w-5 h-5 ml-2" />
                <span dir="rtl">دانلود کاتالوگ</span>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-xl bg-linear-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center transition-transform duration-300">
                <FileText className="w-16 h-16 text-blue-400" />
              </div>
              <div className="aspect-square rounded-xl bg-linear-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 flex items-center justify-center transition-transform duration-300">
                <ImageIcon className="w-16 h-16 text-cyan-400" />
              </div>
              <div className="aspect-square rounded-xl bg-linear-to-br from-teal-500/20 to-blue-500/20 border border-teal-500/30 flex items-center justify-center transition-transform duration-300">
                <Cpu className="w-16 h-16 text-teal-400" />
              </div>
              <div className="aspect-square rounded-xl bg-linear-to-br from-blue-500/20 to-teal-500/20 border border-blue-500/30 flex items-center justify-center transition-transform duration-300">
                <Zap className="w-16 h-16 text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


