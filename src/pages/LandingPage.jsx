import React from "react";
import HeroSection from "../components/landing/HeroSection.jsx";
import FeaturesTable from "../components/landing/FeaturesTable.jsx";
import Testimonials from "../components/landing/Testimonials.jsx";
import PricingSection from "../components/landing/PricingSection.jsx";
import CTASection from "../components/landing/CTASection.jsx";
import AuthForm from "../components/landing/Authform.jsx";  
import FlipCard from "../components/landing/FlipCard.jsx";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesTable />
      <Testimonials />
      <FlipCard />
      <PricingSection />
      <AuthForm />
      <CTASection />
    </div>
  );
};
export default LandingPage;