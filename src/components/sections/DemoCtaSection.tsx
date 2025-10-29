import { PlayCircle } from "lucide-react";

export default function DemoCtaSection() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center p-8 relative">
      <div className="max-w-3xl w-full transition-transform duration-300">
        <div className="bg-linear-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-blue-500/30 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-500/20 mb-4">
            <PlayCircle className="w-10 h-10 text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white" dir="rtl">درخواست دمو</h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto" dir="rtl">برای مشاهده نسخه آزمایشی FarsiFlow و تست قابلیت‌های سیستم، همین حالا درخواست دمو دهید.</p>
          <button className="bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold text-lg h-14 px-12">
            <PlayCircle className="w-5 h-5 ml-2" />
            <span dir="rtl">درخواست دمو رایگان</span>
          </button>
        </div>
      </div>
    </section>
  );
}


