import CardSpotlightDemo from "../cards/CardSpotlight";



export default function ExecutiveSummarySection() {
  return (
    <>
      <div className="mt-[60px] sm:mt-[80px] md:mt-[100px] lg:mt-[120px]  px-4 sm:px-6 md:px-8">

        <div className="text-center space-y-2 sm:space-y-3 md:space-y-4   mb-[30px] sm:mb-[40px] md:mb-[50px]">
          <p className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] text-black" >چکیده اجرایی</p>
          <p className="-mt-1 sm:-mt-2 text-[#d8d8d8] tracking-[4px] sm:tracking-[6px] md:tracking-[8px] text-xs sm:text-sm md:text-base">EXECUTIVE SUMMARY</p>
        </div>
      </div>
      <section className=" flex items-center justify-center relative">
        <div className="w-full max-w-7xl flex items-center justify-center">
          {/* <LazySpline /> */}

          <div className="w-[80%] py-[40px] sm:py-[50px] md:py-[60px] lg:py-[70px] px-2 sm:px-4">
            <CardSpotlightDemo
              title=""
              text1="پروژه حاضر یک سیستم یکپارچه پردازش صوت است که به صورت آفلاین عمل کرده و قابلیت تبدیل دقیق گفتار به متن تحلیل خودکار محتوا و ارائه API داخلی به سایر سرویسها را دارد این سامانه متشکل از ۴ بخش اصلی است "
              list={[
                "موتور پردازش (Engine)",
                "رابط کاربری (Frontend)",
                "لایه API ",
                "مبدل (Converter) صوت به متن",
              ]}
              text2="ویژگی هایی چون حذف نویز سرعت پردازش بالا با زبان C پردازش موازی امنیت اطلاعات پشتیبانی از سیستمهای ابری و قابلیت کاستوم سازی واژگان این پروژه را به راه حلی منحصر به فرد برای بازارهای گسترده ای چون CRM، Call Center، VOD مراکز پشتیبانی و تحلیل دادههای صوتی تبدیل می کند."
            />
          </div>
        </div>
        {/* <div className="bg-white absolute w-full h-[40px] sm:h-[50px] md:h-[60px] lg:h-[70px] bottom-[-5px] sm:bottom-[-7px] md:bottom-[-9px] shadow-[0_0px_30px_25px_#fff] sm:shadow-[0_0px_45px_35px_#fff] md:shadow-[0_0px_65px_50px_#fff]"></div> */}
      </section>
    </>
  );
}


