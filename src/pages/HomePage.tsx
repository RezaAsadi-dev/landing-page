"use client";

import HeroSpline from "../components/sections/HeroSpline";
import { useState, lazy } from "react";
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



export default function FarsiFlowPresentation() {
  const [heroReady, setHeroReady] = useState(false);
  return (
    <div>
      <HeroSpline onLoaded={() => setHeroReady(true)} />
      <div
        className="bg-white "
      style={{ scrollBehavior: "smooth" }}
      >
        {!heroReady ? (
          <Loader />
        ) : (
          <>
            <BackgroundBlobs />
            <div className="relative z-10">
              <ExecutiveSummarySection />
              <CompetitiveAdvantagesSection />
              <ProjectStructureSection />
              <AccuracySection />
              <LanguageSupportSection />
              <CatalogSection />
              <DemoCtaSection />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
