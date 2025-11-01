export default function AccuracySection() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 relative">
      <div className="max-w-5xl w-full space-y-6 sm:space-y-8 px-2 sm:px-4">
        <div className="text-center space-y-1 sm:space-y-2 transition-transform duration-300">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white" dir="rtl">نمودار دقت FarsiFlow برای زبان فارسی</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400">FARSIFLOW ACCURACY CHART FOR PERSIAN LANGUAGE</p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-12 shadow-2xl border border-slate-700 space-y-5 sm:space-y-6 md:space-y-8 transition-transform duration-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            <div className="text-center space-y-2 sm:space-y-3 p-4 sm:p-5 md:p-6 bg-slate-900/50 rounded-lg sm:rounded-xl border border-blue-500/30">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400">90%+</div>
              <div className="text-base sm:text-lg font-semibold text-white">Ideal</div>
              <p className="text-xs sm:text-sm text-slate-300 text-right leading-relaxed" dir="rtl">دقت بسیار بالا در شرایط ایده آل (داده های باکیفیت، لهجه استاندارد)</p>
            </div>
            <div className="text-center space-y-2 sm:space-y-3 p-4 sm:p-5 md:p-6 bg-slate-900/50 rounded-lg sm:rounded-xl border border-cyan-500/30">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400">80%+</div>
              <div className="text-base sm:text-lg font-semibold text-white">Average Conditions</div>
              <p className="text-xs sm:text-sm text-slate-300 text-right leading-relaxed" dir="rtl">دقت خوب در شرایط متوسط (داده های با کیفیت متوسط لهجه های مختلف)</p>
            </div>
            <div className="text-center space-y-2 sm:space-y-3 p-4 sm:p-5 md:p-6 bg-slate-900/50 rounded-lg sm:rounded-xl border border-teal-500/30 sm:col-span-2 md:col-span-1">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-400">70-80%</div>
              <div className="text-base sm:text-lg font-semibold text-white">Challenging</div>
              <p className="text-xs sm:text-sm text-slate-300 text-right leading-relaxed" dir="rtl">دقت پایینتر در شرایط چالش برانگیز (نویز زیاد کیفیت پایین داده)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


