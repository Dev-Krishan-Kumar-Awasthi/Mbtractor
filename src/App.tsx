import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Services from './pages/Services';
import Documents from './pages/Documents';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import EMICalculator from './components/EMICalculator';
import LeadPopup from './components/LeadPopup';
import BackHomeButton from './components/BackHomeButton';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <ScrollToTop />
      <Navbar />
      <BackHomeButton />
      <LeadPopup />
      
      <main className="flex-grow pt-20"> {/* Unified padding-top to account for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/emi-calculator" element={
            <div className="py-24 bg-gray-50 min-h-screen px-4">
              <div className="max-w-7xl mx-auto">
                <EMICalculator />
              </div>
            </div>
          } />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
