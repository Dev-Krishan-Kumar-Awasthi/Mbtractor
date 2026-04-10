import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackHomeButton() {
  const location = useLocation();
  const { t } = useTranslation();
  
  // Only show the button if we are NOT on the homepage
  const isHome = location.pathname === '/';

  return (
    <AnimatePresence>
      {!isHome && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="fixed top-24 left-4 z-40 md:left-8"
        >
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full text-forest-green-dark font-bold shadow-md hover:bg-forest-green hover:text-white transition-all group"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            <span>{t('nav.home') || 'Back Home'}</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
