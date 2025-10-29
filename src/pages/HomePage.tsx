"use client";

import HeroSpline from "../components/sections/HeroSpline";
import { useState } from "react";
import Loader from "../components/Loader";
import BackgroundBlobs from "../components/sections/BackgroundBlobs";
import CoverSection from "../components/sections/CoverSection";
import ExecutiveSummarySection from "../components/sections/ExecutiveSummarySection";
import CompetitiveAdvantagesSection from "../components/sections/CompetitiveAdvantagesSection";
import ProjectStructureSection from "../components/sections/ProjectStructureSection";
import ApiAndFrontendSection from "../components/sections/ApiAndFrontendSection";
import AccuracySection from "../components/sections/AccuracySection";
import LanguageSupportSection from "../components/sections/LanguageSupportSection";
import CatalogSection from "../components/sections/CatalogSection";
import DemoCtaSection from "../components/sections/DemoCtaSection";
import ThankYouSection from "../components/sections/ThankYouSection";

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
            <BackgroundBlobs />
            <div className="relative z-10">
              {/* <CoverSection /> */}
              <ExecutiveSummarySection />
              <CompetitiveAdvantagesSection />
              <ProjectStructureSection />
              <ApiAndFrontendSection />
              <AccuracySection />
              <LanguageSupportSection />
              <CatalogSection />
              <DemoCtaSection />
              <ThankYouSection />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
