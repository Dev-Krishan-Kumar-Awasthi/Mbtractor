import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(nextLang);
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.documents'), path: '/documents' },
    { name: t('nav.emi'), path: '/emi-calculator' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/logo.png" alt="MB Tractors Logo" className="h-16 md:h-20 w-auto object-contain transition-transform group-hover:scale-105" />
              <div className="flex flex-col leading-tight">
                <span className="text-xl md:text-2xl font-black text-forest-green-dark tracking-tighter">MB TRACTORS</span>
                <span className="text-[10px] md:text-xs font-bold text-saffron-gold uppercase tracking-[0.2em] whitespace-nowrap">Powered By MB Finance</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="text-gray-800 hover:text-forest-green font-medium transition-colors">
                {link.name}
              </Link>
            ))}
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1 rounded-full border border-forest-green text-forest-green hover:bg-forest-green hover:text-white transition-all"
            >
              <Globe size={18} />
              <span className="font-bold">{i18n.language === 'en' ? 'HI' : 'EN'}</span>
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleLanguage}
              className="mr-4 flex items-center gap-1 text-forest-green font-bold"
            >
              <Globe size={20} />
              {i18n.language === 'en' ? 'HI' : 'EN'}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:text-forest-green focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-dark text-white absolute top-20 left-0 w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-forest-green hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
