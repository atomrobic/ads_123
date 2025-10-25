import React from 'react'
import { FadeInWhenVisible } from '../../utils/animation';
import helpers from '@/utils/helpers';
import Button from '../commonui/ui/Button';

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      features: ['10K impressions/month', 'Basic analytics', 'Email support', '3 campaigns', '30-day free trial'],
      color: 'from-cyan-400 to-blue-500',
      gradient: 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10',
      border: 'border-cyan-500/20',
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      features: ['100K impressions/month', 'Advanced analytics', 'Priority support', 'Unlimited campaigns', 'A/B testing', 'Custom reports'],
      color: 'from-purple-400 to-pink-500',
      gradient: 'bg-gradient-to-br from-purple-500/15 to-pink-500/15',
      border: 'border-purple-500/30',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: ['Unlimited impressions', 'Custom analytics', 'Dedicated manager', 'White-label solution', 'API access', 'SLA guarantee'],
      color: 'from-orange-400 to-red-500',
      gradient: 'bg-gradient-to-br from-orange-500/10 to-red-500/10',
      border: 'border-orange-500/20',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/3 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-cyan-400/30 rounded-full animate-float" />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-purple-400/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-2/3 right-1/2 w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeInWhenVisible>
          <div className="text-center mb-20">
            <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase mb-4 inline-block bg-cyan-400/10 px-4 py-1 rounded-full">
              Pricing Plans
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mt-4 mb-6">
              Choose Your <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Perfect Plan</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Flexible pricing designed to scale with your business growth
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <FadeInWhenVisible key={index} delay={helpers.getAnimationDelay(index)}>
              <div className={`relative group ${
                plan.popular ? 'transform lg:scale-105' : ''
              } transition-all duration-500 hover:transform hover:scale-105`}>
                
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-yellow-500/25">
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                )}
                
                {/* Card Container */}
                <div className={`relative rounded-2xl p-8 backdrop-blur-sm border ${
                  plan.popular 
                    ? `${plan.gradient} ${plan.border} shadow-2xl shadow-purple-500/20` 
                    : `${plan.gradient} ${plan.border} shadow-xl`
                } transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden`}>
                  
                  {/* Animated Background Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-8 text-center">
                      <h3 className={`text-2xl font-bold mb-4 ${
                        plan.popular ? 'text-white' : 'text-gray-100'
                      }`}>
                        {plan.name}
                      </h3>
                      <div className="flex items-baseline justify-center">
                        <span className={`text-5xl font-extrabold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                          {plan.price}
                        </span>
                        <span className={`ml-2 ${plan.popular ? 'text-gray-300' : 'text-gray-400'}`}>
                          {plan.period}
                        </span>
                      </div>
                    </div>

                    {/* Features List */}
                    <ul className="mb-8 space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center group/item">
                          <div className={`mr-3 p-1 rounded-full bg-gradient-to-r ${plan.color} shadow-md`}>
                            <span className="text-white text-xs">✓</span>
                          </div>
                          <span className={`${
                            plan.popular ? 'text-gray-100' : 'text-gray-300'
                          } group-hover/item:text-white transition-colors duration-200`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button 
                      variant={plan.popular ? 'glass' : 'outline'}
                      className={`w-full py-4 font-semibold text-lg transition-all duration-300 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-purple-500/25' 
                          : 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
                      }`}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${plan.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
                <div className={`absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r ${plan.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 blur-sm`} />
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* Additional Info */}
        <FadeInWhenVisible delay={0.6}>
          <div className="text-center mt-16 p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center">
                <span className="text-cyan-400 mr-2">✓</span>
                No credit card required to start
              </div>
              <div className="flex items-center">
                <span className="text-cyan-400 mr-2">✓</span>
                30-day money-back guarantee
              </div>
              <div className="flex items-center">
                <span className="text-cyan-400 mr-2">✓</span>
                Cancel anytime
              </div>
              <div className="flex items-center">
                <span className="text-cyan-400 mr-2">✓</span>
                Free migration assistance
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default PricingSection;