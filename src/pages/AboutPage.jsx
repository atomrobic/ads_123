import React from 'react';
import { FadeInWhenVisible } from '../utils/animation';
import Card from '../components/commonui/ui/Card';
import Button from '../components/commonui/ui/Button';


const AboutPage = () => {
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <span className="text-purple-600 font-semibold text-sm tracking-wider uppercase">About Us</span>
            <h2 className="text-5xl font-extrabold text-gray-900 mt-4 mb-6">
              Pioneering the Future of Digital Advertising
            </h2>
          </div>
        </FadeInWhenVisible>
        
        <FadeInWhenVisible delay={0.2}>
          <Card gradient className="mb-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              We're on a mission to democratize digital advertising by making enterprise-level tools accessible to businesses of all sizes. Our AI-powered platform helps you reach the right audience at the right time with the right message.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Founded by advertising veterans and technology innovators, we combine decades of industry expertise with cutting-edge machine learning to deliver unprecedented results for our clients.
            </p>
          </Card>
        </FadeInWhenVisible>
        
        <FadeInWhenVisible delay={0.4}>
          <div className="text-center">
            <Button variant="primary" size="lg">
              Join Our Journey →
            </Button>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};
export default AboutPage;