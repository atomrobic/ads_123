import React from "react";
import HeroSection from "../components/landing/HeroSection.jsx";
import FeaturesTable from "../components/landing/FeaturesTable.jsx";
import Testimonials from "../components/landing/Testimonials.jsx";
import PricingSection from "../components/landing/PricingSection.jsx";
import CTASection from "../components/landing/CTASection.jsx";
import AuthForm from "../components/landing/Authform.jsx";  
import ArtGallery from "../components/landing/ArtGallery.jsx";


const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesTable />
      <Testimonials />
      <ArtGallery />
      <PricingSection />
      <AuthForm />
      <CTASection />
    </div>
  );
};
export default LandingPage;