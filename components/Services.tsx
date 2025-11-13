'use client';

import { Cloud, Shield, Zap, Code, Database, LineChart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure that grows with your business, ensuring reliability and performance at every stage.',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security solutions to protect your data, systems, and reputation from evolving threats.',
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built to your exact specifications, delivering functionality that matches your vision.',
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Intelligent data strategies that turn information into actionable insights and competitive advantages.',
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamline operations and eliminate manual tasks with smart automation that saves time and reduces errors.',
    },
    {
      icon: LineChart,
      title: 'Analytics & Insights',
      description: 'Advanced analytics platforms that provide real-time visibility into your business performance and trends.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive technology solutions designed to empower your business and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}