import { Cpu, Zap, Check } from "lucide-react";

export default function ProjectStructureSection() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 relative">
      <div className="max-w-5xl w-full space-y-8">
        <div className="text-center space-y-2 transition-transform duration-300">
          <h2 className="text-4xl md:text-5xl font-bold text-white" dir="rtl">ساختار ماژولار پروژه</h2>
          <p className="text-xl text-slate-400">MODULAR PROJECT STRUCTURE</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700 space-y-4 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Engine</h3>
            </div>
            <ul className="space-y-3 text-right" dir="rtl">
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" /><span className="text-slate-200">زبان پیاده سازی C</span></li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" /><span className="text-slate-200">مسئول پردازش همزمان (Multithread) و سریع صوت</span></li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" /><span className="text-slate-200">طراحی برای مقیاس پذیری و عملکرد بلادرنگ (Real-time)</span></li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" /><span className="text-slate-200">انجام حذف نویز نرمال سازی صوت و آماده سازی داده برای تبدیل</span></li>
            </ul>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700 space-y-4 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Converter</h3>
            </div>
            <ul className="space-y-3 text-right" dir="rtl">
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" /><span className="text-slate-200">مبتنی بر کتابخانه VOSK</span></li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" /><span className="text-slate-200">تبدیل دقیق گفتار به متن</span></li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" /><span className="text-slate-200">پشتیبانی از چند زبان در صورت نیاز</span></li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" /><span className="text-slate-200">پشتیبانی از واژگان قابل کاستوم (Custom Vocabulary)</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


