import { lazy } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

type HeroSplineProps = {
  onLoaded?: () => void;
};

export default function HeroSpline({ onLoaded }: HeroSplineProps) {
  return (
    <div className="bg-white relative">
    
        <div className="w-full  ">
          <Spline
            scene="/scene.splinecode"
            onLoad={onLoaded}
          />
        </div>
   
      <div className="bg-white absolute w-full h-[60px] sm:h-[50px] md:h-[60px] lg:h-[70px] bottom-[-5px] sm:bottom-[-20px] md:bottom-[-25px] shadow-[0_-20px_40px_30px_#fff] sm:shadow-[0_-30px_50px_40px_#fff] md:shadow-[0_-39px_66px_49px_#fff]"></div>
    </div>
  );
}


