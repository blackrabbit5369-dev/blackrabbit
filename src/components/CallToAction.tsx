import { motion } from 'framer-motion';
import { PhoneCall, MessageCircle, Navigation, Car } from 'lucide-react';

const CallToAction = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#FFF9E8] to-white border-y border-gold-100/50">

            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Soft curving road line */}
                <svg
                    className="absolute top-0 left-0 w-full h-full opacity-[0.05] text-gold-600"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <path d="M-20,50 Q30,80 50,50 T120,50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                </svg>

                {/* Floating gradient orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/60 rounded-full blur-[80px]" />
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">

                {/* Animated Taxi Icon Above Header */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-soft text-gold-500 mb-8 border border-gold-100"
                >
                    <Car size={32} />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-heading font-extrabold text-black-900 mb-6"
                >
                    Need a Taxi <span className="text-gold-500">Right Now?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
                >
                    Book your ride with Black Rabbit Tours & Travels for safe, comfortable, and reliable taxi service in Ahmedabad.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-4xl mx-auto"
                >
                    {/* Button 1: Book Your Ride (Gold) */}
                    <a
                        href="#booking-form"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full sm:w-auto px-8 py-4 bg-gold-500 text-white font-bold rounded-2xl shadow-lg shadow-gold-500/30 hover:shadow-xl hover:shadow-gold-500/40 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                    >
                        <Navigation size={20} />
                        Book Your Ride
                    </a>

                    {/* Button 2: Call Now (White outline) */}
                    <a
                        href="tel:+917284038244"
                        className="w-full sm:w-auto px-8 py-4 bg-white text-gold-600 font-bold rounded-2xl shadow-sm border-2 border-gold-200 hover:border-gold-500 hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                    >
                        <PhoneCall size={20} />
                        Call Now
                    </a>

                    {/* Button 3: WhatsApp Booking (Green accent) */}
                    <a
                        href="https://wa.me/917284038244"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white font-bold rounded-2xl shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                    >
                        <MessageCircle size={20} />
                        WhatsApp Booking
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default CallToAction;
