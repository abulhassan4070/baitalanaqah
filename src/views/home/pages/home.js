import React from "react";

import Testimonial from "../../../components/testimonials";
import Hero from "../../../components/hero";
import LatestBlogs from "../../../components/latest";
export default function HomePage() {
  return (
    <>
      <Hero />
      <Testimonial />
      <LatestBlogs />
    </>
  );
}
