import { lazy, Suspense } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

type HeroSplineProps = {
  onLoaded?: () => void;
};

export default function HeroSpline({ onLoaded }: HeroSplineProps) {
  return (
    <div className="bg-white relative">
      <Suspense fallback={
        <div className="w-full h-[600px] bg-gray-100 animate-pulse flex items-center justify-center">
          <div className="text-gray-400">در حال بارگذاری...</div>
        </div>
      }>
        <Spline
          scene="https://prod.spline.design/JW-BARweIA3SQb0p/scene.splinecode"
          onLoad={onLoaded}
        />
      </Suspense>
      <div className="bg-white  absolute w-full h-[70px] bottom-[-25px] shadow-[0_-39px_66px_49px_#fff]"></div>
    </div>
  );
}


