import { lazy, Suspense } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

type HeroSplineProps = {
  onLoaded?: () => void;
};

export default function HeroSpline({ onLoaded }: HeroSplineProps) {
  return (
    <div className="bg-white relative">
      <Suspense fallback={
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gray-100 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-sm sm:text-base">در حال بارگذاری...</div>
        </div>
      }>
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <Spline
            scene="https://prod.spline.design/JW-BARweIA3SQb0p/scene.splinecode"
            onLoad={onLoaded}
          />
        </div>
      </Suspense>
      <div className="bg-white absolute w-full h-[40px] sm:h-[50px] md:h-[60px] lg:h-[70px] bottom-[-15px] sm:bottom-[-20px] md:bottom-[-25px] shadow-[0_-20px_40px_30px_#fff] sm:shadow-[0_-30px_50px_40px_#fff] md:shadow-[0_-39px_66px_49px_#fff]"></div>
    </div>
  );
}


