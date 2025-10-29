import Spline from "@splinetool/react-spline";
import CardSpotlightDemo from "../cards/CardSpotlight";

export default function ExecutiveSummarySection() {
  return (
    <section className="mt-[200px] flex items-center justify-center relative">
      <div className="w-200 h-200">

        <Spline
          scene="https://prod.spline.design/AW850aeqmrW29zxP/scene.splinecode"
        />
      </div>

      <div className="w-200 h-200  space-y-8">
        <div className="text-center space-y-2 transition-transform duration-300">
          <p className="text-[35px] text-black" >چکیده اجرایی</p>
          <p className="-mt-2 text-[#d8d8d8] tracking-[8px]">EXECUTIVE SUMMARY</p>
        </div>
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
      <div className="bg-white  absolute w-full h-[70px] bottom-[-9px] shadow-[0_0px_65px_50px_#fff]"></div>
    </section>
  );
}


