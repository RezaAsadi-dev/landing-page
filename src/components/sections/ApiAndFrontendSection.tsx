import { Globe, Shield, Check } from "lucide-react";

export default function ApiAndFrontendSection() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 relative">
      <div className="max-w-5xl w-full space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700 space-y-4 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center">
                <Globe className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">API Layer</h3>
            </div>
            <ul className="space-y-3 text-right" dir="rtl">
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" /><span className="text-slate-200">RESTful API با قابلیت اتصال داخلی و خارجی (Internal & External)</span></li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" /><span className="text-slate-200">مدیریت احراز هویت و مجوزدهی (Token-based Auth)</span></li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" /><span className="text-slate-200">ارتباط با ماژولهای CRM Call Center VOD و سیستم های سازمانی</span></li>
            </ul>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700 space-y-4 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Frontend</h3>
            </div>
            <ul className="space-y-3 text-right" dir="rtl">
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" /><span className="text-slate-200">طراحی با React/Vue قابل تغییر</span></li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" /><span className="text-slate-200">نمایش فایلهای متنی خروجی وضعیت فایل گزارش تحلیل</span></li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" /><span className="text-slate-200">رابط ساده برای بارگذاری فایل صوتی و دریافت خروجی</span></li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" /><span className="text-slate-200">قابلیت اجرای Local یا Web-based</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


