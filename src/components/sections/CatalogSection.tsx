import { Download, FileText, ImageIcon, Cpu, Zap } from "lucide-react";
import { CardSpotlight } from "../cards/ui/card-spotlight";

export default function CatalogSection() {
  return (
    <section className="flex flex-col items-center justify-center p-4 mt-20 sm:p-6 md:p-8 relative">
      <div className="text-center space-y-2 sm:space-y-3 md:space-y-4   mb-[30px] sm:mb-[40px] md:mb-[50px]">
        <p className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] text-black" dir="rtl">دریافت کاتالوگ</p>
        <p className="-mt-1 sm:-mt-2 text-[#d8d8d8] tracking-[4px] sm:tracking-[6px] md:tracking-[8px] text-xs sm:text-sm md:text-base">GET CATALOG</p>
      </div>
      
      <div className="max-w-6xl w-full px-2 sm:px-4  ">
        <CardSpotlight className=" bg-gray-600 border-slate-800/50">
          <div className=" backdrop-blur-sm grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
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
              <button className="w-full bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold text-sm sm:text-base md:text-lg h-11 sm:h-12 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center gap-2     active:scale-[0.98]">
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span dir="rtl">دانلود کاتالوگ</span>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 order-1 md:order-2">
              <div className="aspect-square rounded-lg sm:rounded-xl bg-linear-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center   ">
                <FileText className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-blue-400" />
              </div>
              <div className="aspect-square rounded-lg sm:rounded-xl bg-linear-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 flex items-center justify-center   ">
                <ImageIcon className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-cyan-400" />
              </div>
              <div className="aspect-square rounded-lg sm:rounded-xl bg-linear-to-br from-teal-500/20 to-blue-500/20 border border-teal-500/30 flex items-center justify-center   ">
                <Cpu className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-teal-400" />
              </div>
              <div className="aspect-square rounded-lg sm:rounded-xl bg-linear-to-br from-blue-500/20 to-teal-500/20 border border-blue-500/30 flex items-center justify-center   ">
                <Zap className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-blue-400" />
              </div>
            </div>
          </div>
        </CardSpotlight>
      </div>
    </section>
  );
}


