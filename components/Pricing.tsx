'use client';

import { Check, Shield, Zap, Star } from 'lucide-react';

export default function Pricing() {
  const features = [
    'Cloud Infrastructure Setup',
    'Security Implementation',
    'Custom Development Hours',
    'Data Management Tools',
    'Process Automation',
    'Analytics Dashboard',
    '24/7 Technical Support',
    'Monthly Strategy Session',
  ];

  const trustIndicators = [
    { icon: Shield, text: 'Secure Payment' },
    { icon: Zap, text: 'Instant Access' },
    { icon: Star, text: '100+ Happy Clients' },
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get started with our comprehensive technology solution package designed for growing businesses.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="bg-white/10 backdrop-blur-sm p-8 text-center border-b border-white/20">
              <h3 className="text-3xl font-bold text-white mb-2">Business Starter Package</h3>
              <p className="text-blue-100">Everything you need to transform your business</p>
            </div>

            <div className="p-12">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span className="text-6xl md:text-7xl font-bold text-white">$29</span>
                  <span className="text-2xl text-blue-200">/month</span>
                </div>
                <p className="text-blue-100">Billed monthly, cancel anytime</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mt-1">
                      <Check className="text-white" size={16} />
                    </div>
                    <span className="text-white text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                className="block w-full bg-white text-blue-600 py-5 rounded-xl font-bold text-xl text-center hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Get Started Now
              </a>

              <div className="grid grid-cols-3 gap-4 mt-8">
                {trustIndicators.map((indicator, index) => {
                  const IconComponent = indicator.icon;
                  return (
                    <div key={index} className="flex flex-col items-center space-y-2">
                      <IconComponent className="text-blue-200" size={24} />
                      <span className="text-blue-100 text-sm text-center">{indicator.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 rounded-2xl p-8">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h4>
              <p className="text-gray-600 mb-6">
                We offer enterprise packages tailored to your specific needs. Contact us for a personalized quote.
              </p>
              <a
                href="#contact"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}