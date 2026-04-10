import ValuationForm from '../components/ValuationForm';

export default function Services() {
  const services = [
    { 
      title: 'Buy Old Tractor', 
      image: `${import.meta.env.BASE_URL}images/services/buy_old_tractor.png`
    },
    { 
      title: 'Sell Old Tractor', 
      image: `${import.meta.env.BASE_URL}images/services/sell_old_tractor.png`
    },
    { 
      title: 'Buy Tractor Insurance', 
      image: `${import.meta.env.BASE_URL}images/services/tractor_insurance.png`
    },
    { 
      title: 'Tractor Loan', 
      image: `${import.meta.env.BASE_URL}images/services/tractor_loan.png`
    },
    { 
      title: 'Tractor Service Kit', 
      image: `${import.meta.env.BASE_URL}images/services/tractor_service.png`
    },
    { 
      title: 'Tractor News', 
      image: `${import.meta.env.BASE_URL}images/services/tractor_news.png`
    },
  ];

  return (
    <div className="w-full pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-3xl font-bold text-forest-green-dark mb-6">Our Services</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
          {services.map((service, idx) => (
            <div 
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
            </div>
          ))}
        </div>

      </div>

      {/* Keep the Valuation Module as it adds value */}
      <section className="py-24 bg-forest-green relative overflow-hidden" id="valuation">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[100%] bg-white/[0.03] rounded-full blur-3xl transform rotate-45"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[100%] bg-saffron-gold/[0.05] rounded-full blur-3xl transform -rotate-45"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Expert Vehicle Valuation</h2>
            <p className="text-lg text-gray-300">
              Thinking about trading in or selling your current vehicle? Provide the details below, upload a few photos, and our experts will get back to you with a competitive valuation estimate.
            </p>
          </div>
          
          <ValuationForm />
        </div>
      </section>
    </div>
  );
}
