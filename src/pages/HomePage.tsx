"use client";

import HeroSpline from "../components/sections/HeroSpline";
import { useState, lazy, Suspense, memo } from "react";
import Loader from "../components/Loader";
import BackgroundBlobs from "../components/sections/BackgroundBlobs";
import ExecutiveSummarySection from "../components/sections/ExecutiveSummarySection";

// Lazy load heavy sections
const CompetitiveAdvantagesSection = lazy(() => import("../components/sections/CompetitiveAdvantagesSection"));
const ProjectStructureSection = lazy(() => import("../components/sections/ProjectStructureSection"));
const AccuracySection = lazy(() => import("../components/sections/AccuracySection"));
const LanguageSupportSection = lazy(() => import("../components/sections/LanguageSupportSection"));
const CatalogSection = lazy(() => import("../components/sections/CatalogSection"));
const DemoCtaSection = lazy(() => import("../components/sections/DemoCtaSection"));
const ThankYouSection = lazy(() => import("../components/sections/ThankYouSection"));

const LazySectionLoader = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={null}>
    {children}
  </Suspense>
);

const MemoizedBackgroundBlobs = memo(BackgroundBlobs);

export default function FarsiFlowPresentation() {
  const [heroReady, setHeroReady] = useState(false);
  return (
    <div className=" ">
      <HeroSpline onLoaded={() => setHeroReady(true)} />
      <div
        className="bg-white scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
      >
        {!heroReady ? (
          <Loader />
        ) : (
          <>
            <MemoizedBackgroundBlobs />
            <div className="relative z-10">
              <ExecutiveSummarySection />
              <LazySectionLoader>
                <CompetitiveAdvantagesSection />
              </LazySectionLoader>
              <LazySectionLoader>
                <ProjectStructureSection />
              </LazySectionLoader>
              <LazySectionLoader>
                <AccuracySection />
              </LazySectionLoader>
              <LazySectionLoader>
                <LanguageSupportSection />
              </LazySectionLoader>
              <LazySectionLoader>
                <CatalogSection />
              </LazySectionLoader>
              <LazySectionLoader>
                <DemoCtaSection />
              </LazySectionLoader>
              <LazySectionLoader>
                <ThankYouSection />
              </LazySectionLoader>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
