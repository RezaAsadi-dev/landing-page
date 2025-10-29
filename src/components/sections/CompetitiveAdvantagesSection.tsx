import { Check } from "lucide-react";

const advantages = [
  "آفلاین بودن کامل سیستم امنیت بالا و بدون نیاز به اتصال دائم به اینترنت",
  "پردازش سریع با استفاده از زبانهای سطح پایین",
  "Multi-threading",
  "حذف نویز محیطی در ورودی صوت",
  "تمرکز بر امنیت اطلاعات کاربران",
  "ارائه API داخلی برای اتصال سریع به سایر سرویسها",
];

export default function CompetitiveAdvantagesSection() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 relative">
      <div className="max-w-5xl w-full space-y-8">
        <div className="text-center space-y-2 transition-transform duration-300">
          <h2 className="text-4xl md:text-5xl font-bold text-white" dir="rtl">مزیت های رقابتی</h2>
          <p className="text-xl text-slate-400">COMPETITIVE ADVANTAGES</p>
        </div>
        <div className="grid gap-4 md:gap-6">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-slate-700 flex items-start gap-4 hover:border-blue-500/50 transition-all duration-300">
              <div className="shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-blue-400" />
              </div>
              <p className="text-lg flex-1 text-right text-slate-200" dir="rtl">{advantage}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


