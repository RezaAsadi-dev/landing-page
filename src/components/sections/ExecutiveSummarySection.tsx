import { lazy, Suspense, useEffect, useRef, useState } from "react";
import CardSpotlightDemo from "../cards/CardSpotlight";

const Spline = lazy(() => import("@splinetool/react-spline"));

function LazySpline() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (!isVisible) {
    return (
      <div ref={containerRef} className="w-200 h-200">
        <div className="w-full h-full bg-gray-100 animate-pulse rounded-lg" />
      </div>
    );
  }

  return (
    <div className="w-200 h-200">
      <Suspense >
        <Spline
          scene="https://prod.spline.design/AW850aeqmrW29zxP/scene.splinecode"
        />
      </Suspense>
    </div>
  );
}

export default function ExecutiveSummarySection() {
  return (
    <section className="mt-[120px] flex items-center justify-center relative">
      <LazySpline />

      <div className="w-200 h-200 py-[70px]">
        <div className="text-center space-y-4 transition-transform duration-300 mb-[50px]">
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


