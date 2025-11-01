import { PlayCircle } from "lucide-react";

export default function DemoCtaSection() {
  return (
    <section className="min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center p-4 sm:p-6 md:p-8 relative">
      <div className="max-w-3xl w-full transition-transform duration-300 px-2 sm:px-4">
        <div className="bg-linear-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl border border-blue-500/30 text-center space-y-4 sm:space-y-5 md:space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-blue-500/20 mb-2 sm:mb-3 md:mb-4">
            <PlayCircle className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-blue-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white" dir="rtl">درخواست دمو</h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-xl mx-auto px-2" dir="rtl">برای مشاهده نسخه آزمایشی FarsiFlow و تست قابلیت‌های سیستم، همین حالا درخواست دمو دهید.</p>
          <button className="bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold text-sm sm:text-base md:text-lg h-11 sm:h-12 md:h-14 px-6 sm:px-8 md:px-12 rounded-lg sm:rounded-xl flex items-center justify-center gap-2 mx-auto">
            <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            <span dir="rtl">درخواست دمو رایگان</span>
          </button>
        </div>
      </div>
    </section>
  );
}


