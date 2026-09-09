import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, ShieldCheck, Car, Sparkles, Check } from 'lucide-react';

const LeadCaptureModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dontShowToday, setDontShowToday] = useState(false);
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Outstation Cab');

  const SNOOZE_KEY = 'popup_snooze';
  const SNOOZE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  // Trigger Logic: Auto-open on page load unless snoozed in localStorage
  useEffect(() => {
    const snoozedTimestamp = localStorage.getItem(SNOOZE_KEY);
    const now = Date.now();

    if (snoozedTimestamp) {
      const elapsed = now - parseInt(snoozedTimestamp, 10);
      if (elapsed < SNOOZE_DURATION) {
        return; // Snoozed for 24 hours
      }
    }

    // Auto-open after 1.5 seconds delay for pleasant entry
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    if (dontShowToday) {
      localStorage.setItem(SNOOZE_KEY, Date.now().toString());
    }
    setIsOpen(false);
  };

  const handleManualOpen = () => {
    setIsOpen(true);
  };

  const generateWhatsAppMessage = () => {
    const lines = [
      `Hello Black Rabbit Tours & Travels, I want to request a quick cab quote:`,
      service ? `Service: ${service}` : '',
      pickup ? `Pickup: ${pickup}` : '',
      dropoff ? `Drop-off: ${dropoff}` : '',
      phone ? `Contact Phone: ${phone}` : '',
    ].filter(Boolean);

    return encodeURIComponent(lines.join('\n'));
  };

  const whatsappUrl = `https://wa.me/917284038244?text=${generateWhatsAppMessage()}`;

  return (
    <>
      {/* Floating Action Button (FAB) Widget */}
      <div className="fixed bottom-6 left-6 z-[9998] flex items-center gap-3">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleManualOpen}
          aria-label="Quick Booking & Instant Cab Quote"
          className="relative bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-black font-extrabold px-4 py-3.5 rounded-full shadow-[0_10px_30px_rgba(245,158,11,0.4)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.6)] border-2 border-yellow-200 flex items-center gap-2.5 transition-all duration-300 group"
        >
          <span className="relative flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-black"></span>
          </span>
          <Car size={20} className="text-black group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-sm font-black tracking-wide uppercase hidden sm:inline-block">Quick Cab Quote</span>
          <Sparkles size={16} className="text-black/80 hidden sm:inline-block" />
        </motion.button>
      </div>

      {/* On-Entry Promotional Modal / Popup */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
              className="relative w-full max-w-lg bg-gradient-to-b from-gray-900 via-black-900 to-gray-950 text-white rounded-3xl shadow-2xl border border-amber-500/30 overflow-hidden z-10 my-auto"
            >
              {/* Top Accent Line */}
              <div className="h-2 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 w-full" />

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-20"
                aria-label="Close promotion modal"
              >
                <X size={20} />
              </button>

              <div className="p-6 sm:p-8">
                {/* Header Badge */}
                <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-full text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
                  <ShieldCheck size={14} className="text-amber-400" />
                  Premium Taxi Service Ahmedabad & Kutch
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-2 leading-snug">
                  Need a Reliable Cab <span className="text-amber-400">Right Now?</span>
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-6 font-medium">
                  Book local rentals, airport transfers, or outstation cabs with verified drivers at standard rates.
                </p>

                {/* Feature Highlights */}
                <div className="grid grid-cols-2 gap-3 mb-6 bg-white/5 p-3.5 rounded-2xl border border-white/10 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-gray-200">
                    <Check size={16} className="text-amber-400 shrink-0" />
                    <span>24/7 Instant Pickup</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-200">
                    <Check size={16} className="text-amber-400 shrink-0" />
                    <span>Zero Hidden Charges</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-200">
                    <Check size={16} className="text-amber-400 shrink-0" />
                    <span>Ahmedabad ↔ Bhuj / Kutch</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-200">
                    <Check size={16} className="text-amber-400 shrink-0" />
                    <span>Clean & AC Vehicles</span>
                  </div>
                </div>

                {/* Quick Lead Capture Form */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.open(whatsappUrl, '_blank');
                    handleClose();
                  }}
                  className="space-y-3 mb-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                        Pickup Location
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ahmedabad Airport"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        className="w-full bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                        Drop-off Location
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Bhuj / Gandhidham"
                        value={dropoff}
                        onChange={(e) => setDropoff(e.target.value)}
                        className="w-full bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                        Service Type
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-gray-900 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        <option value="Outstation Cab">Outstation Cab</option>
                        <option value="Local Rental">Local Rental</option>
                        <option value="Airport Transfer">Airport Transfer</option>
                        <option value="Daily Route">Daily Route (Ahmedabad - Kutch)</option>
                      </select>
                    </div>
                  </div>

                  {/* Primary CTA: WhatsApp Booking Link */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClose}
                    className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-extrabold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-green-600/30 transition-all duration-300 mt-4 text-base"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.437-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                    <span>Get Instant WhatsApp Quote</span>
                  </a>
                </form>

                {/* Secondary CTA: Direct Phone Link */}
                <div className="flex items-center gap-3 mb-6">
                  <a
                    href="tel:+917284038244"
                    className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 text-sm"
                  >
                    <Phone size={18} className="text-amber-400" />
                    <span>Call Now: +91 72840 38244</span>
                  </a>
                </div>

                {/* LocalStorage Snooze Option */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs text-gray-400">
                  <label className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
                    <input
                      type="checkbox"
                      checked={dontShowToday}
                      onChange={(e) => setDontShowToday(e.target.checked)}
                      className="rounded border-gray-600 bg-gray-800 text-amber-500 focus:ring-amber-500/50 w-4 h-4 cursor-pointer"
                    />
                    <span>Don't show auto-popup again today</span>
                  </label>
                  <button
                    onClick={handleClose}
                    className="text-gray-400 hover:text-white underline text-xs"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LeadCaptureModal;
