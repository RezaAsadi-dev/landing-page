import { Check } from "lucide-react";

const languages = [
  "عربی (Arabic)",
  "مجاری (Hungarian)",
  "فنلاندی (Finnish)",
  "چکی (Czech)",
  "ژاپنی (Japanese)",
  "کره ای (Korean)",
  "لهستانی (Polish)",
  "کاتالان (Catalan)",
  "رومانیایی (Romanian)",
  "اسلواکی (Slovak)",
  "یونانی (Greek)",
  "عبری (Hebrew)",
  "آذربایجانی (Azerbaijani)",
  "انگلیسی (English)",
  "چینی (Chinese)",
  "آلمانی (German)",
  "اسپانیایی (Spanish)",
  "فرانسوی (French)",
  "پرتغالی (Portuguese)",
  "روسی (Russian)",
  "ترکی استانبولی (Turkish)",
  "ویتنامی (Vietnamese)",
  "ایتالیایی (Italian)",
  "هلندی (Dutch)",
  "فارسی (Persian)",
  "سوئدی (Swedish)",
];

export default function LanguageSupportSection() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 relative">
      <div className="max-w-5xl w-full space-y-8">
        <div className="text-center space-y-2 transition-transform duration-300">
          <h2 className="text-4xl md:text-5xl font-bold text-white" dir="rtl">پشتیبانی از زبانها</h2>
          <p className="text-xl text-slate-400">LANGUAGE SUPPORT</p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700 transition-transform duration-300">
          <p className="text-lg mb-8 text-right leading-relaxed text-slate-200" dir="rtl">
            موتور پردازش صوت از زبانهای متعددی پشتیبانی میکند که امکان استفاده در پروژه های چند زبانه را فراهم می سازد. برخی از زبانهای پشتیبانی شده عبارتند از:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {languages.map((language, index) => (
              <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-slate-900/50 hover:bg-slate-900 transition-all duration-300 border border-slate-700">
                <Check className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-sm text-justify text-slate-200" dir="rtl">{language}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


