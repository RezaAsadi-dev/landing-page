import Spline from '@splinetool/react-spline';

type HeroSplineProps = {
  onLoaded?: () => void;
};

export default function HeroSpline({ onLoaded }: HeroSplineProps) {
  return (
    <div className="bg-white relative">
      <Spline
        scene="https://prod.spline.design/JW-BARweIA3SQb0p/scene.splinecode"
        onLoad={onLoaded}
      />
      <div className="bg-white  absolute w-full h-[70px] bottom-[-25px] shadow-[0_-39px_66px_49px_#fff]"></div>
    </div>
  );
}


