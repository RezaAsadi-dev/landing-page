import { PlayCircle } from "lucide-react";

export default function DemoCtaSection() {
  return (
    <section className="flex items-center justify-center p-4 mt-20 sm:p-6 md:p-8 relative">
      <div className="max-w-3xl w-full space-y-6 sm:space-y-8 px-2 sm:px-4">
        <div className="text-center space-y-2 sm:space-y-3 md:space-y-4   mb-[30px] sm:mb-[40px] md:mb-[50px]">
          <p className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] text-black" dir="rtl">درخواست دمو</p>
          <p className="-mt-1 sm:-mt-2 text-[#d8d8d8] tracking-[4px] sm:tracking-[6px] md:tracking-[8px] text-xs sm:text-sm md:text-base">REQUEST DEMO</p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl border border-slate-700 text-center space-y-4 sm:space-y-5 md:space-y-6  ">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-blue-500/20 mb-2 sm:mb-3 md:mb-4">
            <PlayCircle className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-blue-400" />
          </div>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-xl mx-auto px-2 leading-relaxed" dir="rtl">برای مشاهده نسخه آزمایشی FarsiFlow و تست قابلیت‌های سیستم، همین حالا درخواست دمو دهید.</p>
          <button className="bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold text-sm sm:text-base md:text-lg h-11 sm:h-12 md:h-14 px-6 sm:px-8 md:px-12 rounded-lg sm:rounded-xl flex items-center justify-center gap-2 mx-auto    hover:scale-[1.02] active:scale-[0.98]">
            <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            <span dir="rtl">درخواست دمو رایگان</span>
          </button>
        </div>
      </div>
    </section>
  );
}


