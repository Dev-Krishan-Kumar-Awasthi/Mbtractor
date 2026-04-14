import { ShieldCheck, Clock, CheckCircle2, MapPin, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import EMICalculator from '../components/EMICalculator';

export default function Home() {

  const services = [
    { title: 'Buy Old Tractor', image: `${import.meta.env.BASE_URL}images/services/buy_old_tractor.png` },
    { title: 'Sell Old Tractor', image: `${import.meta.env.BASE_URL}images/services/sell_old_tractor.png` },
    { title: 'Buy Tractor Insurance', image: `${import.meta.env.BASE_URL}images/services/tractor_insurance.png` },
    { title: 'Tractor Loan', image: `${import.meta.env.BASE_URL}images/services/tractor_loan.png` },
    { title: 'Tractor Service Kit', image: `${import.meta.env.BASE_URL}images/services/tractor_service.png` },
    { title: 'Tractor News', image: `${import.meta.env.BASE_URL}images/services/tractor_news.png` },
  ];

  const brands = [
    { name: 'New Holland', bgPos: '0% 0%', image: `${import.meta.env.BASE_URL}New-Holland-Logo.png` },
    { name: 'John Deere', bgPos: '25% 0%', image: `${import.meta.env.BASE_URL}36895aac77d66defd7b40e40254f929d.jpg` },
    { name: 'Mahindra', bgPos: '50% 0%', image: `${import.meta.env.BASE_URL}Mahindra_Auto.png` },
    { name: 'Escorts', bgPos: '75% 0%', image: `${import.meta.env.BASE_URL}Escorts.webp` },
    { name: 'Eicher', bgPos: '100% 0%', image: `${import.meta.env.BASE_URL}Eicher-Logo-Font.webp` },
    { name: 'Swaraj', bgPos: '25% 33.33%', image: `${import.meta.env.BASE_URL}Swaraj-Logo.png` },
    { name: 'Sonalika', bgPos: '50% 33.33%', image: `${import.meta.env.BASE_URL}sonalika-international-logo-png_seeklogo-304150.png` },
    { name: 'Kubota', bgPos: '0% 66.66%', image: `${import.meta.env.BASE_URL}Kubota-logo.png` },
    { name: 'Force Motors', bgPos: '0% 100%', image: `${import.meta.env.BASE_URL}Force_Motors-Logo.wine.png` },
    { name: 'Indo Farm', bgPos: '50% 66.66%', image: `${import.meta.env.BASE_URL}r040alevqyklbif9gwex.avif` },
  ];

  const usedTractors = [
    { name: 'New Holland 3037 NX', price: '1,80,000', oldPrice: '2,00,000', hours: '5500', hp: '39', loc: 'Gwalior', img: `${import.meta.env.BASE_URL}New Holland 3037 NX.jpg` },
    { name: 'Massey 1035', price: '2,50,000', oldPrice: '2,75,000', hours: '3200', hp: '35', loc: 'Gwalior', img: `${import.meta.env.BASE_URL}Massey 1035.jpg` },
    { name: 'Swaraj 735 FE', price: '3,90,000', oldPrice: '4,00,000', hours: '2200', hp: '39', loc: 'Gwalior', img: `${import.meta.env.BASE_URL}Swaraj 735 FE.webp` },
    { name: 'MAHINDRA 265 D', price: '4,00,000', oldPrice: '4,10,000', hours: '850', hp: '35', loc: 'Gwalior', img: `${import.meta.env.BASE_URL}MAHINDRA 265 D.webp` },
    { name: 'New Holland 3037 NX', price: '4,45,000', oldPrice: '4,65,000', hours: '250', hp: '39', loc: 'Gwalior', img: `${import.meta.env.BASE_URL}New Holland 3037 NX 1.jpg` },
    { name: 'Mahindra 275 Di', price: '3,95,000', oldPrice: '4,25,000', hours: '2800', hp: '39', loc: 'Gwalior', img: `${import.meta.env.BASE_URL}Mahindra 275 Di.webp` },
    { name: 'New Holland 3032 Nx', price: '4,25,000', oldPrice: '4,45,000', hours: '350', hp: '35', loc: 'Gwalior', img: `${import.meta.env.BASE_URL}New Holland 3032 Nx.jpg` },
    { name: 'Massey Ferguson 7250', price: '2,20,000', oldPrice: '2,50,000', hours: '3450', hp: '50', loc: 'Gwalior', img: `${import.meta.env.BASE_URL}Massey Ferguson 7250.jpeg` }
  ];

  const features = [
    {
      image: `${import.meta.env.BASE_URL}images/features/financing.png`,
      title: "100% Financing",
      desc: "Get full coverage on new vehicles so you can drive away worry-free."
    },
    {
      image: `${import.meta.env.BASE_URL}images/features/approvals.png`,
      title: "Fast Approvals",
      desc: "Quick documentation and lightning-fast loan approvals locally in Shivpuri."
    },
    {
      image: `${import.meta.env.BASE_URL}images/features/tenure.png`,
      title: "Flexible Tenure",
      desc: "Choose an EMI plan that works for you, ranging securely from 3 to 5 years."
    }
  ];

  return (
    <div className="w-full">
      {/* SEO H1 - Visually hidden but readable by search engines */}
      <div className="bg-white py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-3xl font-black text-forest-green-dark text-center tracking-tight uppercase">
            MB Tractor and MB Finance Shivpuri <br className="md:hidden" />
            <span className="text-saffron-gold text-lg md:text-xl block md:inline md:ml-2">| Shivpuri's Trusted Vehicle Finance Partner</span>
          </h1>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="w-full bg-[#0d1310]">
        <img 
          src={`${import.meta.env.BASE_URL}banner.png`} 
          alt="MB Tractors" 
          className="w-full h-auto object-contain block"
        />
      </section>

      {/* Feature Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-green-dark mb-4">Why Choose MB Finance?</h2>
            <div className="h-1 w-24 bg-saffron-gold mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((f, i) => (
              <Link 
                to="/contact"
                key={i} 
                className="p-8 pb-12 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group flex flex-col items-start text-left cursor-pointer"
              >
                <div className="w-full h-44 mb-8 flex items-center justify-center p-4 bg-gray-50/50 rounded-2xl relative overflow-hidden group-hover:bg-white transition-colors duration-500">
                  <motion.img 
                    src={f.image} 
                    alt={f.title} 
                    className="max-h-full max-w-full object-contain relative z-10"
                    animate={{ 
                      y: [0, -6, 0],
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: i * 0.3 
                    }}
                  />
                  {/* Subtle background glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-forest-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base font-medium opacity-90">{f.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-green-dark mb-4">Our Services</h2>
            <div className="h-1 w-24 bg-saffron-gold mx-auto rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">We provide a comprehensive range of professional services to meet all your agricultural needs.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Link 
                to="/services"
                key={idx} 
                className="bg-white border border-gray-400 rounded-lg p-0 overflow-hidden flex flex-col items-center justify-between h-72 hover:shadow-xl transition-all duration-300 cursor-pointer shadow-sm group"
              >
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="w-full bg-white p-4 flex-grow flex items-center justify-center border-t border-gray-100">
                  <h3 className="text-forest-green-dark font-bold text-lg text-center">
                    {service.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Categories Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Brand Categories</h2>
            <p className="text-gray-500">We deal in 10+ top tractor brands across India</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {brands.map((brand, idx) => (
              <Link 
                to="/contact"
                key={idx} 
                className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-md hover:border-forest-green transition-all duration-300 cursor-pointer"
              >
                {brand.image ? (
                  <div className="w-24 h-14 mb-4 flex items-center justify-center">
                    <img src={brand.image} alt={brand.name} className="max-w-full max-h-full object-contain" />
                  </div>
                ) : (
                  <div 
                    className="w-24 h-14 mb-4"
                    style={{
                      backgroundImage: "url('/brands.png.webp')",
                      backgroundSize: "500% 400%",
                      backgroundPosition: brand.bgPos,
                      backgroundRepeat: "no-repeat"
                    }}
                  ></div>
                )}
                <h3 className="text-gray-800 font-bold text-sm text-center">{brand.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Most Searched Used Tractors Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 pb-4 border-b border-gray-100">
            <div>
              <span className="text-emerald-500 font-bold text-xs tracking-wider uppercase mb-2 block">Available Brand Tractor</span>
              <h2 className="text-3xl font-extrabold text-gray-900">Most Searched Used Tractors</h2>
            </div>
            <div className="mt-4 md:mt-0 flex items-center bg-white border border-gray-200 rounded px-3 py-2 shadow-sm relative overflow-hidden">
              <span className="text-sm text-gray-500 mr-2 relative z-10">Filter By :</span>
              <select className="bg-emerald-400 text-white text-sm font-bold focus:outline-none border-none py-1 px-3 rounded cursor-pointer relative z-10 appearance-none">
                <option>Select Location</option>
                <option>Gwalior</option>
                <option>Shivpuri</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {usedTractors.map((tractor, idx) => (
              <Link 
                to="/contact"
                key={idx} 
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer"
              >
                <div className="relative h-72 overflow-hidden bg-gray-100 p-1">
                  <img src={tractor.img} alt={tractor.name} className="w-full h-full object-cover rounded shadow-[0_4px_10px_rgba(0,0,0,0.1)] group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-extrabold text-gray-900 text-sm mb-2 uppercase">{tractor.name}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center flex-wrap">
                      <span className="font-extrabold text-gray-900 text-sm">₹{tractor.price}</span>
                      <span className="text-[10px] text-gray-400 line-through ml-2 font-bold">₹{tractor.oldPrice}</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-[10px] font-bold uppercase">
                      <MapPin className="w-3 h-3 mr-1 stroke-[2.5]" />
                      {tractor.loc}
                    </div>
                  </div>
                  
                  <div className="flex space-x-5 text-gray-500 text-[10px] mb-4 font-bold uppercase">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1 stroke-[2.5]" />
                      {tractor.hours} Hours
                    </div>
                    <div className="flex items-center">
                      <Settings className="w-3 h-3 mr-1 stroke-[2.5]" />
                      {tractor.hp} HP
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-3 border-t border-gray-100">
                    <span className="text-xs font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">Buy Now</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-green-dark mb-4">Tractors Sold by Us</h2>
            <div className="h-1 w-24 bg-saffron-gold mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Take a look at the high-quality tractors we have successfully financed and delivered to our happy farmers across the Shivpuri region.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "WhatsApp Image 2026-04-09 at 11.35.43.jpeg",
              "WhatsApp Image 2026-04-09 at 11.35.48.jpeg",
              "WhatsApp Image 2026-04-09 at 11.35.49.jpeg",
              "WhatsApp Image 2026-04-09 at 11.35.50.jpeg",
              "WhatsApp Image 2026-04-09 at 11.35.53.jpeg",
              "WhatsApp Image 2026-04-09 at 11.35.54.jpeg"
            ].map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg aspect-w-4 aspect-h-3 cursor-pointer">
                <img 
                  src={`${import.meta.env.BASE_URL}images/${img}`} 
                  alt={`Sold Tractor ${i+1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-forest-green text-white font-bold text-sm rounded-full mb-2 shadow-sm border border-white/20">Sold 🎉</span>
                    <h3 className="text-white font-bold text-xl drop-shadow-md">Happy Customer</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* EMI Calculator Section */}
      <section className="py-24 bg-gray-100 relative overflow-hidden" id="emi-calculator-section">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-saffron-gold opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[30rem] h-[30rem] bg-forest-green opacity-5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <EMICalculator />
        </div>
      </section>
    </div>
  );
}
