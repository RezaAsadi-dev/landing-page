import CardSpotlightDemo from "../cards/CardSpotlight";

export default function ProjectStructureSection() {
  return (
    <section className="flex items-center justify-center mt-8 p-4 sm:p-6 md:p-8 relative">
      <div className="max-w-5xl w-full space-y-6 sm:space-y-8 px-2 sm:px-4">

        <div className="text-center space-y-2 sm:space-y-3 md:space-y-4   mb-[30px] sm:mb-[40px] md:mb-[50px]">
          <p className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] text-black" >ساختار ماژولار پروژه </p>
          <p className="-mt-1 sm:-mt-2 text-[#d8d8d8] tracking-[4px] sm:tracking-[6px] md:tracking-[8px] text-xs sm:text-sm md:text-base">MODULAR PROJECT STRUCTURE </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          <CardSpotlightDemo
            title="Engine"
            text1=""
            list={[
              "زبان پیاده سازی C",
              "مسئول پردازش همزمان (Multithread) و سریع صوت",
              " طراحی برای مقیاس پذیری و عملکرد بلادرنگ (Real-time) ",
              "انجام حذف نویز نرمال سازی صوت و آماده سازی داده برای تبدیل",
            ]}
            text2=""
          />
          <CardSpotlightDemo
            title="Converter"
            text1=""
            list={[
              "مبتنی بر کتابخانه VOSK",
              "تبدیل دقیق گفتار به متن",
              " پشتیبانی از چند زبان در صورت نیاز ",
              "پشتیبانی از واژگان قابل کاستوم (Custom Vocabulary)",
            ]}
            text2=""
          />
          <CardSpotlightDemo
            title="API Layer"
            text1=""
            list={[
              " RESTful API با قابلیت اتصال داخلی و خارجی (Internal & External)  ",
              "مدیریت احراز هویت و مجوزدهی (Token-based Auth)",
              " ارتباط با ماژولهای CRM Call Center VOD و سیستم های سازمانی",
              "پشتیبانی از واژگان قابل کاستوم (Custom Vocabulary)",
            ]}
            text2=""
          />
          <CardSpotlightDemo
            title="Frontend"
            text1=""
            list={[
              "طراحی با React/Vue قابل تغییر  ",
              "نمایش فایلهای متنی خروجی وضعیت فایل گزارش تحلیل",
              "رابط ساده برای بارگذاری فایل صوتی و دریافت خروجی",
              "قابلیت اجرای Local یا Web-based",
            ]}
            text2=""
          />
        </div>
      </div>
    </section>
  );
}


