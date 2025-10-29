export default function AccuracySection() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 relative">
      <div className="max-w-5xl w-full space-y-8">
        <div className="text-center space-y-2 transition-transform duration-300">
          <h2 className="text-3xl md:text-4xl font-bold text-white" dir="rtl">نمودار دقت FarsiFlow برای زبان فارسی</h2>
          <p className="text-xl text-slate-400">FARSIFLOW ACCURACY CHART FOR PERSIAN LANGUAGE</p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-700 space-y-8 transition-transform duration-300">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-3 p-6 bg-slate-900/50 rounded-xl border border-blue-500/30">
              <div className="text-5xl font-bold text-blue-400">90%+</div>
              <div className="text-lg font-semibold text-white">Ideal</div>
              <p className="text-sm text-slate-300 text-right leading-relaxed" dir="rtl">دقت بسیار بالا در شرایط ایده آل (داده های باکیفیت، لهجه استاندارد)</p>
            </div>
            <div className="text-center space-y-3 p-6 bg-slate-900/50 rounded-xl border border-cyan-500/30">
              <div className="text-5xl font-bold text-cyan-400">80%+</div>
              <div className="text-lg font-semibold text-white">Average Conditions</div>
              <p className="text-sm text-slate-300 text-right leading-relaxed" dir="rtl">دقت خوب در شرایط متوسط (داده های با کیفیت متوسط لهجه های مختلف)</p>
            </div>
            <div className="text-center space-y-3 p-6 bg-slate-900/50 rounded-xl border border-teal-500/30">
              <div className="text-5xl font-bold text-teal-400">70-80%</div>
              <div className="text-lg font-semibold text-white">Challenging</div>
              <p className="text-sm text-slate-300 text-right leading-relaxed" dir="rtl">دقت پایینتر در شرایط چالش برانگیز (نویز زیاد کیفیت پایین داده)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


