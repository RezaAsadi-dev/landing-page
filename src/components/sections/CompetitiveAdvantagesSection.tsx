import GlowingEffectDemo from "../../components/glowing-effect/glowing-effect-demo";

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
    <section className=" flex items-center justify-center p-8 relative">
      <div className="w-[60%]">
        <div className="text-center space-y-4 transition-transform duration-300 mb-[50px]">
          <p className="text-[35px] text-black" >مزیت های رقابتی</p>
          <p className="-mt-2 text-[#d8d8d8] tracking-[8px]">COMPETITIVE ADVANTAGES</p>
        </div>
        <GlowingEffectDemo data={advantages} />
      </div>
    </section>
  );
}


