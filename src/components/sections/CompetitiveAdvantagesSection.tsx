import GlowingEffectDemo from "../../components/glowing-effect/glowing-effect-demo";

const advantages = [
  "آفلاین بودن کامل سیستم امنیت بالا و بدون نیاز به اتصال دائم به اینترنت",
  "پردازش سریع با استفاده از زبانهای سطح پایین",
  "ارائه API داخلی برای اتصال سریع به سایر سرویسها",
  "حذف نویز محیطی در ورودی صوت",
  "Multi-threading",
  "تمرکز بر امنیت اطلاعات کاربران",
];

export default function CompetitiveAdvantagesSection() {
  return (
    <section className="flex items-center justify-center p-4 sm:p-6 md:p-8 relative mt-12">
      <div className="w-full max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center space-y-2 sm:space-y-3 md:space-y-4 mb-[30px] sm:mb-[40px] md:mb-[50px]">
          <p className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] text-black" >مزیت های رقابتی</p>
          <p className="-mt-1 sm:-mt-2 text-[#d8d8d8] tracking-[4px] sm:tracking-[6px] md:tracking-[8px] text-xs sm:text-sm md:text-base">COMPETITIVE ADVANTAGES</p>
        </div>
        <div className="w-[80%] m-auto">

          <GlowingEffectDemo data={advantages} />
        </div>
      </div>
    </section>
  );
}


