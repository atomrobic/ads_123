import React from 'react';
import { FadeInWhenVisible } from '../../utils/animation';
import helpers from '@/utils/helpers';
import Card from '../commonui/ui/Card';
import { carouselSlides as features } from '../../hooks/landingApi';

const FeaturesTable = () => {
  return (
    <section id="features" className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-90" // Low opacity (80%)
        >
          <source src="public/videos/SSYouTube.online_Coca-Cola® Masterpiece_1080p.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Optional: Overlay to further control opacity/color tint */}
        <div className="absolute inset-0 bg-white/30" />
      </div>
      
      {/* Simple background elements */}
      <div className="absolute inset-0 bg-white/30 z-1" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gray-200/20 rounded-full blur-3xl z-1" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeInWhenVisible>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200/80 border border-gray-300 mb-6">
              <div className="w-2 h-2 bg-gray-600 rounded-full" />
              <span className="text-gray-700 font-semibold text-sm tracking-wider uppercase">Features</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mt-4 mb-8 tracking-tight">
              Everything You
              <span className="block text-gray-800">
                Need to Succeed
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Cutting-edge tools designed to transform your digital advertising strategy
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeInWhenVisible key={feature.id} delay={helpers.getAnimationDelay(index)}>
              <Card 
                className="group cursor-pointer relative overflow-hidden border border-gray-200 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-500 hover:shadow-lg hover:scale-105"
                hover={false}
                gradient={false}
              >
                {/* Feature icon with clean design */}
                <div className={`relative mb-8 inline-flex items-center justify-center p-4 rounded-2xl bg-gray-100 border border-gray-300 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                  <span className="text-4xl text-gray-700">{feature.icon}</span>
                </div>

                {/* Feature content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gray-800 group-hover:w-full transition-all duration-500" />
              </Card>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeInWhenVisible>
          <div className="text-center mt-20">
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-300 shadow-sm">
              <span className="text-gray-700 font-semibold">Ready to get started?</span>
              <button className="px-6 py-2 bg-gray-800 text-white rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105">
                Start Free Trial
              </button>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default FeaturesTable;