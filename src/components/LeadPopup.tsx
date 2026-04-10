import { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LeadPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    city: '',
    state: '',
    zip: ''
  });

  useEffect(() => {
    const popupShown = sessionStorage.getItem('leadPopupShown');
    
    if (!popupShown) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem('leadPopupShown', 'true');
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct WhatsApp Message
    const message = `*New Lead Details*%0A%0A` +
      `*Name:* ${formData.firstName}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*City:* ${formData.city}%0A` +
      `*State:* ${formData.state}%0A` +
      `*ZIP:* ${formData.zip}%0A%0A` +
      `Sent from MB Tractors Website`;

    const whatsappUrl = `https://wa.me/917470655510?text=${message}`;
    
    setIsSubmitted(true);
    window.open(whatsappUrl, '_blank');
    
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 text-left">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <X size={24} />
            </button>

            {isSubmitted ? (
              <div className="p-12 text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 font-medium">Redirecting you to WhatsApp for submission... 😊</p>
              </div>
            ) : (
              <div className="p-8 sm:p-10">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                  Please Submit Your Details. <br/>Our Team Will Contact You shortly 😊
                </h3>
                
                <form onSubmit={handleSubmit} className="mt-8 space-y-8">
                  <div className="relative">
                    <input 
                      required
                      type="text" 
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder=" "
                      className="block w-full px-0 py-2.5 text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                    />
                    <label 
                      htmlFor="firstName"
                      className="absolute text-base text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600"
                    >
                      First Name *
                    </label>
                  </div>

                  <div className="relative">
                    <input 
                      required
                      type="tel" 
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder=" "
                      className="block w-full px-0 py-2.5 text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                    />
                    <label 
                      htmlFor="phone"
                      className="absolute text-base text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600"
                    >
                      Phone Number *
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="relative">
                      <input 
                        type="text" 
                        id="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder=" "
                        className="block w-full px-0 py-2.5 text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                      />
                      <label 
                        htmlFor="city"
                        className="absolute text-base text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600"
                      >
                        City
                      </label>
                    </div>
                    <div className="relative">
                      <input 
                        type="text" 
                        id="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder=" "
                        className="block w-full px-0 py-2.5 text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                      />
                      <label 
                        htmlFor="state"
                        className="absolute text-base text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600"
                      >
                        State/Province
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <input 
                      type="text" 
                      id="zip"
                      value={formData.zip}
                      onChange={handleChange}
                      placeholder=" "
                      className="block w-full px-0 py-2.5 text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                    />
                    <label 
                      htmlFor="zip"
                      className="absolute text-base text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600"
                    >
                      ZIP / Postal Code
                    </label>
                  </div>

                  <div className="pt-4 pb-2 border-b-8 border-gray-300/30">
                    <button 
                      type="submit" 
                      className="px-10 py-2.5 bg-[#1ea4e1] text-white font-bold rounded-sm shadow-md hover:bg-blue-600 transition-colors uppercase text-sm tracking-wide"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
