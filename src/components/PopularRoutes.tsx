import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

const routes = [
    {
        id: 1,
        name: 'Ahmedabad → Udaipur',
        distance: '260 km',
        duration: '5 hours',
        price: '₹4500'
    },
    {
        id: 2,
        name: 'Ahmedabad → Mount Abu',
        distance: '225 km',
        duration: '4.5 hours',
        price: '₹3200'
    },
    {
        id: 3,
        name: 'Ahmedabad → Dwarka',
        distance: '440 km',
        duration: '8 hours',
        price: '₹6500'
    },
    {
        id: 4,
        name: 'Ahmedabad → Somnath',
        distance: '410 km',
        duration: '7 hours',
        price: '₹6500'
    },
    {
        id: 5,
        name: 'Ahmedabad → Statue of Unity',
        distance: '200 km',
        duration: '4 hours',
        price: '₹4000'
    },
    {
        id: 6,
        name: 'Ahmedabad → Rann of Kutch',
        distance: '500 km',
        duration: '6 hours',
        price: '₹7000'
    }
];

const PopularRoutes = () => {
    return (
        <section className="section-padding bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-extrabold mb-4 text-black-900 leading-tight"
                    >
                        Popular Taxi <span className="text-gold-500">Routes</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 max-w-2xl mx-auto font-medium text-lg leading-relaxed"
                    >
                        Explore our most booked taxi routes from Ahmedabad.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {routes.map((route, idx) => (
                        <motion.div
                            key={route.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 transform hover:-translate-y-2 group flex flex-col h-full"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 bg-gold-50 rounded-2xl flex items-center justify-center border border-gold-100 group-hover:bg-gold-500 transition-colors duration-300">
                                    <MapPin size={24} className="text-gold-500 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div className="text-right">
                                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Starting at</span>
                                    <span className="text-xl font-heading font-extrabold text-black-900 group-hover:text-gold-500 transition-colors">{route.price}</span>
                                </div>
                            </div>

                            <h3 className="text-2xl font-heading font-bold text-black-900 mb-6 group-hover:text-gold-500 transition-colors">
                                {route.name}
                            </h3>

                            <div className="space-y-3 mb-8 flex-grow">
                                <div className="flex items-center gap-3 text-gray-600 font-medium bg-gray-50/50 p-2.5 rounded-xl border border-gray-100/50">
                                    <div className="p-1.5 bg-white shadow-sm border border-gray-100 rounded-md text-gold-500 shrink-0">
                                        <MapPin size={16} />
                                    </div>
                                    <span className="text-sm">Distance: {route.distance}</span>
                                </div>

                                <div className="flex items-center gap-3 text-gray-600 font-medium bg-gray-50/50 p-2.5 rounded-xl border border-gray-100/50">
                                    <div className="p-1.5 bg-white shadow-sm border border-gray-100 rounded-md text-gold-500 shrink-0 mt-0.5">
                                        <Clock size={16} />
                                    </div>
                                    <span className="text-sm leading-snug">Travel Time: {route.duration}</span>
                                </div>
                            </div>

                            <a
                                href="#booking-form"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="w-full btn-primary text-center py-3.5 text-sm font-bold shadow-md group-hover:shadow-[0_10px_20px_rgba(200,169,81,0.3)] flex justify-center items-center gap-2 mt-auto"
                            >
                                Book Taxi
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularRoutes;
