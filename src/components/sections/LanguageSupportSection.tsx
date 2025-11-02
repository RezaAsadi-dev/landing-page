import { Check } from "lucide-react";

const languages = [
  "فارسی (Persian)",
  "عربی (Arabic)",
  "مجاری (Hungarian)",
  "فنلاندی (Finnish)",
  "چکی (Czech)",
  "ژاپنی (Japanese)",
  "کره ای (Korean)",
  "لهستانی (Polish)",
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

];

export default function LanguageSupportSection() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 mt-20 sm:p-6 md:p-8 relative">
      <div className="max-w-5xl w-full space-y-6 sm:space-y-8 px-2 sm:px-4">

        <div className="text-center space-y-2 sm:space-y-3 md:space-y-4 transition-transform duration-300 mb-[30px] sm:mb-[40px] md:mb-[50px]">
          <p className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] text-black" >پشتیبانی از زبانها </p>
          <p className="-mt-1 sm:-mt-2 text-[#d8d8d8] tracking-[4px] sm:tracking-[6px] md:tracking-[8px] text-xs sm:text-sm md:text-base">LANGUAGE SUPPORT </p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl border border-slate-700 transition-transform duration-300">
          <p className="text-sm sm:text-base md:text-lg mb-5 sm:mb-6 md:mb-8 text-right leading-relaxed text-slate-200" dir="rtl">
            موتور پردازش صوت از زبانهای متعددی پشتیبانی میکند که امکان استفاده در پروژه های چند زبانه را فراهم می سازد. برخی از زبانهای پشتیبانی شده عبارتند از:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {languages.map((language, index) => (
              <div key={index} className="flex items-center gap-2 p-2.5 sm:p-3 rounded-md sm:rounded-lg bg-slate-900/50 hover:bg-slate-900 transition-all duration-300 border border-slate-700" dir="rtl">
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 shrink-0" />
                <span className="text-xs sm:text-sm text-justify text-slate-200" dir="rtl">{language}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


