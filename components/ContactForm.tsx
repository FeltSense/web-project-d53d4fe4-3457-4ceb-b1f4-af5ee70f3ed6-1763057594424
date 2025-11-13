'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          founder_id: 'FOUNDER_ID_PLACEHOLDER',
          project_id: 'PROJECT_ID_PLACEHOLDER',
        }),
      });

      if (response.ok) {
        setSubmitMessage('Thank you! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@techbusiness.com',
      link: 'mailto:hello@techbusiness.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Office',
      content: '123 Tech Street, San Francisco, CA 94105',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to transform your business? Let's start a conversation about your goals and how we can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-start space-x-4 group hover:bg-blue-50 p-4 rounded-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                        <p className="text-gray-600">{info.content}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <span>10+ years of industry experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <span>100+ successful projects delivered</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <span>24/7 dedicated support team</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <span>99.9% client satisfaction rate</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="founder_id" value="FOUNDER_ID_PLACEHOLDER" />
              <input type="hidden" name="project_id" value="PROJECT_ID_PLACEHOLDER" />
              
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send size={20} />
              </button>

              {submitMessage && (
                <p className={`text-center font-medium ${
                  submitMessage.includes('Thank you') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}