
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import RulesSection from '@/components/RulesSection';
import FeaturesSection from '@/components/FeaturesSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <RulesSection />
      <FeaturesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
