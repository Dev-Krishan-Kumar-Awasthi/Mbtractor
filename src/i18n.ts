import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
  en: {
    translation: {
      "nav.home": "Home",
      "nav.services": "Our Services",
      "nav.documents": "Documents Required",
      "nav.emi": "EMI Calculator",
      "nav.contact": "Contact Us",
      "nav.loan": "Apply for Loan",
      
      "hero.title": "Your Trusted Partner in Vehicle Financing",
      "hero.subtitle": "MB Tractors powered by MB Finance offers 100% financing with easy EMI options for 3-5 years.",
      "hero.cta": "Calculate EMI",
      
      // More translations can be added here
    }
  },
  hi: {
    translation: {
      "nav.home": "होम",
      "nav.services": "हमारी सेवाएँ",
      "nav.documents": "आवश्यक दस्तावेज़",
      "nav.emi": "EMI कैलकुलेटर",
      "nav.contact": "संपर्क करें",
      "nav.loan": "लोन के लिए आवेदन करें",
      
      "hero.title": "वाहन फाइनेंसिंग में आपका भरोसेमंद साथी",
      "hero.subtitle": "MB ट्रैक्टर्स (MB फाइनेंस) प्रदान करता है 100% फाइनेंसिंग 3-5 साल की आसान किश्तों (EMI) के साथ।",
      "hero.cta": "EMI कैलकुलेट करें",
      
      // More translations can be added here
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
