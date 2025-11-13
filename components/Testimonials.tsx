'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'CEO',
      company: 'TechStart Inc',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      quote: 'Working with TechBusiness transformed our operations completely. Their cloud solutions reduced our costs by 40% while improving performance dramatically.',
    },
    {
      name: 'Michael Chen',
      title: 'CTO',
      company: 'Digital Innovations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      quote: 'The custom development team delivered beyond our expectations. They understood our vision and created a solution that perfectly fits our needs.',
    },
    {
      name: 'Emily Rodriguez',
      title: 'Operations Director',
      company: 'Global Solutions',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      quote: 'Their cybersecurity expertise gave us peace of mind. We can now focus on growth knowing our data and systems are protected by the best.',
    },
    {
      name: 'David Thompson',
      title: 'Founder',
      company: 'NextGen Apps',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      quote: 'The analytics platform they built provides insights we never had before. Data-driven decisions have become our competitive advantage.',
    },
    {
      name: 'Lisa Anderson',
      title: 'VP of Technology',
      company: 'Enterprise Corp',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
      quote: 'Process automation has revolutionized how we work. Tasks that took hours now complete in minutes, freeing our team to focus on innovation.',
    },
    {
      name: 'James Wilson',
      title: 'Managing Director',
      company: 'Future Tech',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80',
      quote: 'Professional, responsive, and incredibly skilled. TechBusiness is more than a vendor - they are a true partner in our success.',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Don't just take our word for it - hear from the businesses we've helped transform.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.title}</p>
                    <p className="text-blue-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center space-x-4 mt-12">
            <button
              onClick={prevTestimonial}
              className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-600 hover:text-white group"
            >
              <ChevronLeft className="text-gray-700 group-hover:text-white" size={24} />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-600 hover:text-white group"
            >
              <ChevronRight className="text-gray-700 group-hover:text-white" size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}