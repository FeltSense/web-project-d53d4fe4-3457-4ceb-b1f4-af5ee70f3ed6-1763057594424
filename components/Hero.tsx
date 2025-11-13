'use client';

import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={
          {
            backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }
        }
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-gray-900/90"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <Zap className="text-yellow-400" size={20} />
            <span className="text-white font-medium">Innovation Meets Excellence</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            Transform Your Business
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              With Technology
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We deliver cutting-edge technology solutions that drive growth, efficiency, and innovation for businesses of all sizes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a
              href="#pricing"
              className="group bg-blue-600 text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#services"
              className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}