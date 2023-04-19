import React from "react";

import AboutUsSection from "components/about";
import HeroSection from "../../../components/hero";
import TestimonialSection from "../../../components/testimonials";
import ShopByCategory from "components/shopbycategory";
import Fabrics from "components/fabrics";
import AbayaSection from "views/section/abaya";
import SuitsSection from "views/section/suits";
import CollaboratorsSection from "views/section/collaboration";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ShopByCategory />
      <Fabrics />
      <AbayaSection />
      <TestimonialSection />
      <SuitsSection />
      <CollaboratorsSection />
    </>
  );
}
