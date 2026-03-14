import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const cities = [
    'Ahmedabad',
    'Gandhinagar',
    'Vadodara',
    'Surat',
    'Rajkot',
    'Bhavnagar',
    'Mehsana',
    'Mumbai',
    'Gandhidham'
];

const ServiceAreas = () => {
    return (
        <section className="py-24 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
            {/* Subtle decorative background gradient */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-400/5 rounded-full blur-[80px] pointer-events-none -mr-20 -mt-20" />

            <div className="container mx-auto px-4 relative z-10">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-extrabold mb-4 text-black-900 leading-tight"
                    >
                        Our Service <span className="text-gold-500">Areas</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 max-w-2xl mx-auto font-medium text-lg leading-relaxed"
                    >
                        Providing reliable taxi services across Gujarat.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
                    {cities.map((city, index) => (
                        <Link
                            key={index}
                            to={`#`} // Optional future SEO page link e.g., `/service-area/${city.toLowerCase()}`
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.4 }}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1.5 group flex flex-col items-center justify-center text-center hover:bg-gold-50/30"
                            >
                                <div className="w-12 h-12 bg-gold-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold-100 transition-colors duration-300">
                                    <MapPin size={24} className="text-gold-500" />
                                </div>

                                <h3 className="text-xl font-heading font-bold text-black-900 mb-2 group-hover:text-gold-600 transition-colors">
                                    {city}
                                </h3>

                                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider group-hover:text-gold-500/80 transition-colors">
                                    Taxi Service Available
                                </p>
                            </motion.div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServiceAreas;
