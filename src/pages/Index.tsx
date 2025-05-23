
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import RulesSection from '@/components/RulesSection';
import FeaturesSection from '@/components/FeaturesSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FooterSection from '@/components/FooterSection';
import { Toaster } from "@/components/ui/toaster";

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
      <Toaster />
    </div>
  );
};

export default Index;
