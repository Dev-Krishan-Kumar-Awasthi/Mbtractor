import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-forest-green-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="MB Tractors Logo" className="h-12 w-auto object-contain transition-transform group-hover:scale-105" />
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-black text-white tracking-tighter">MB TRACTORS</span>
                <span className="text-[10px] font-bold text-saffron-gold uppercase tracking-[0.2em]">POWERED BY MB FINANCE</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              Your trusted partner for tractor and vehicle financing in Shivpuri. Founded by Maneesh Lodhi in Oct 2023.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/people/MB-Finance-Service-Shivpuri/61552727040737/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-gray-300 hover:text-saffron-gold transition-colors font-bold text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                Facebook
              </a>
              <a href="https://www.instagram.com/mb_finance_service_?igsh=MWxmdmtscHRwM3hqbQ==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-gray-300 hover:text-saffron-gold transition-colors font-bold text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-outfit font-bold text-lg mb-4 text-saffron-gold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/documents" className="hover:text-white transition-colors">Required Documents</Link></li>
              <li><Link to="/emi-calculator" className="hover:text-white transition-colors">EMI Calculator</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">News & Updates</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-outfit font-bold text-lg mb-4 text-saffron-gold">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Tractor Loans</li>
              <li>Car & Bike Financing</li>
              <li>JCB & Truck Loans</li>
              <li>Used Vehicle Valuation</li>
              <li>100% Financing Available</li>
            </ul>
          </div>

          <div>
            <h3 className="font-outfit font-bold text-lg mb-4 text-saffron-gold">Contact Info</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-saffron-gold shrink-0" />
                <span>Fatehpur Chauraha, Fatehpur,<br/>Shivpuri, Madhya Pradesh - 473638</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-saffron-gold shrink-0" />
                <div className="flex flex-col">
                  <span>+91 7470655510</span>
                  <span>+91 9009788071</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-saffron-gold shrink-0" />
                <span>mbfinance10@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} MB Tractor and MB Finance. All rights reserved.</p>
          <p className="mt-2 text-xs flex items-center justify-center gap-1 flex-wrap">
            <span>Design and Developed by</span>
            <a 
              href="https://kkawasthi.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group inline-flex items-center gap-1.5 text-saffron-gold hover:text-white transition-all duration-300 font-extrabold tracking-tight"
            >
              <span className="border-b border-saffron-gold/30 group-hover:border-white transition-colors pb-0.5">
                Krishan Kumar Awasthi
              </span>
              <span className="text-gray-500 font-medium">&</span>
              <span className="border-b border-saffron-gold/30 group-hover:border-white transition-colors pb-0.5">
                Ankit Dhakad
              </span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
