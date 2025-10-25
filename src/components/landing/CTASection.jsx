import React from 'react'
import { FadeInWhenVisible, FloatingElement } from '../../utils/animation';
import Button from '../commonui/ui/Button';



const CTASection = () => {
  return (
    <section className="py-39 bg-gradient-to-r from-blue-800 relative overflow-hidden">
      <FloatingElement duration={6}>
        <div className="absolute top-10 left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
      </FloatingElement>
      <FloatingElement duration={7}>
        <div className="absolute bottom-10 right-20 w-60 h-60 bg-white/10 rounded-full blur-2xl" />
      </FloatingElement>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <FadeInWhenVisible>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8">
            Ready to Transform Your Advertising?
          </h2>
          <p className="text-2xl text-gray-100 mb-12">
            Join thousands of businesses achieving unprecedented growth
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="glass" size="lg">
              Start Your Free Trial →
            </Button>
            <Button variant="outline" size="lg">
              Schedule a Demo
            </Button>
          </div>
          <p className="mt-8 text-gray-200">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default CTASection;