'use client';

import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Press', href: '#' },
    ],
    Services: [
      { name: 'Cloud Solutions', href: '#services' },
      { name: 'Cybersecurity', href: '#services' },
      { name: 'Custom Development', href: '#services' },
      { name: 'Data Management', href: '#services' },
    ],
    Resources: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Support Center', href: '#' },
      { name: 'Case Studies', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold">TechBusiness</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming businesses through innovative technology solutions. We deliver excellence in cloud, security, and custom development.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} />
                <span>hello@techbusiness.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={18} />
                <span>123 Tech Street, San Francisco, CA</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-bold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} TechBusiness. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                  >
                    <IconComponent size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}