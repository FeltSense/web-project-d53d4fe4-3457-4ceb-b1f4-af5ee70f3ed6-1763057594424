import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Testimonials />
      <Pricing />
      <ContactForm />
      <Footer />
    </main>
  );
}

      {/* Contact Form - Supabase Integration */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <form onSubmit={async (e: FormEvent) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const formData = new FormData(form);
            
            try {
              await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  name: formData.get('name'),
                  email: formData.get('email'),
                  phone: formData.get('phone'),
                  message: formData.get('message')
                })
              });
              alert('Message sent successfully!');
              form.reset();
            } catch (error) {
              alert('Failed to send message. Please try again.');
            }
          }} className="space-y-6">
            <input name="name" placeholder="Your Name" required className="w-full px-4 py-3 rounded-lg border" />
            <input name="email" type="email" placeholder="Email" required className="w-full px-4 py-3 rounded-lg border" />
            <input name="phone" placeholder="Phone" className="w-full px-4 py-3 rounded-lg border" />
            <textarea name="message" placeholder="Message" rows={4} className="w-full px-4 py-3 rounded-lg border"></textarea>
            <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700">
              Send Message
            </button>
          </

      {/* Pricing - Stripe Integration */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Get Started Today</h2>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
            <div className="text-5xl font-bold text-indigo-600 mb-4">$49</div>
            <p className="text-xl text-gray-600 mb-6">Professional Package</p>
            <ul className="text-left max-w-sm mx-auto space-y-3 mb-8">
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Complete service access</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Priority support</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Money-back guarantee</li>
            </ul>
            <button onClick={() => window.location.href = 'https://buy.stripe.com/test_5kQ7sN0IX2Pqalc8WP0VO00'} 
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-700 transition-colors">
              Get Started Now
            </button>
            <p className="text-sm text-gray-500 mt-4">🔒 Secure payment via Stripe</p>
          </div>
        </div>
      </section>
form>
        </div>
      </section>