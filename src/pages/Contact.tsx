import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct WhatsApp Message
    const whatsappMessage = `*Contact Us Message*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Message:* ${formData.message}%0A%0A` +
      `Sent from MB Tractors Website`;

    const whatsappUrl = `https://wa.me/917470655510?text=${whatsappMessage}`;
    
    setIsSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full pt-20 bg-gray-50 min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-forest-green-dark mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Have questions? We're here to help you get the best vehicle financing.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <motion.div 
                  className="bg-green-50 p-3 rounded-xl text-forest-green"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <MapPin size={24} />
                </motion.div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Office Location</h3>
                  <p className="text-gray-600 mt-1">Fatehpur Chauraha, Fatehpur,<br/>Shivpuri, Madhya Pradesh - 473638</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <motion.div 
                  className="bg-green-50 p-3 rounded-xl text-forest-green"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                >
                  <Phone size={24} />
                </motion.div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Phone Numbers</h3>
                  <p className="text-gray-600 mt-1">+91 7470655510<br/>+91 9009788071</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <motion.div 
                  className="bg-green-50 p-3 rounded-xl text-forest-green"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                >
                  <Mail size={24} />
                </motion.div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Email Address</h3>
                  <p className="text-gray-600 mt-1">mbfinance10@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <motion.div 
                  className="bg-yellow-50 p-3 rounded-xl text-saffron-gold-dark"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                >
                  <Clock size={24} />
                </motion.div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Business Hours</h3>
                  <p className="text-gray-600 mt-1">Visit us or apply online. Our digital office is open 24/7!</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-forest-green text-white rounded-2xl relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                <MapPin size={120} />
              </div>
              <h3 className="text-xl font-bold mb-2 relative z-10">Founder: Maneesh Lodhi</h3>
              <p className="text-gray-200 text-sm relative z-10">Established in October 2023, bringing transparent financing to Shivpuri.</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col justify-center"
          >
            {isSubmitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h2>
                <p className="text-gray-600 text-lg mb-8">Opening WhatsApp for the final step... 😊</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-forest-green font-bold underline hover:text-forest-green-light"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-2">Your Name *</label>
                    <input 
                      required
                      id="name"
                      type="text" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-green outline-none" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-2">Phone Number *</label>
                    <input 
                      required
                      id="phone"
                      type="tel" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-green outline-none" 
                      placeholder="+91 XXXX XXXXXX" 
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-2">Message</label>
                    <textarea 
                      id="message"
                      rows={4} 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-green outline-none resize-none" 
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-secondary w-full py-4 text-lg">Send Message</button>
                </form>
              </>
            )}
          </motion.div>

        </div>

        {/* Map Integration */}
        <div className="mt-16 bg-white p-4 rounded-3xl shadow-lg border border-gray-100 h-[450px] overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!4v1776189266094!6m8!1m7!1sATmVOhKyOvhS6dLMcPvpeQ!2m2!1d25.41374394508005!2d77.64602921291022!3f235.82!4f-0.9899999999999949!5f0.7820865974627469" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="MB Tractors Office Location"
            className="rounded-2xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
