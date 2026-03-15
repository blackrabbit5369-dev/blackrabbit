import { motion } from 'framer-motion';
import { Users, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fleetData = [
    {
        id: 1,
        name: 'Swift Dzire',
        capacity: 4,
        bestFor: 'City rides and airport transfers',
        price: '₹12/km',
        image: '/images/fleet/swift-dzire-white.png',
    },
    {
        id: 2,
        name: 'SUV',
        capacity: 6,
        bestFor: 'Family travel',
        price: '₹15/km',
        image: '/images/fleet/suv-white.png',
    },
    {
        id: 3,
        name: 'Innova Crysta',
        capacity: 7,
        bestFor: 'Premium long-distance travel',
        price: '₹19/km',
        image: '/images/fleet/innova-white.png',
    },
    {
        id: 4,
        name: 'Tempo Traveller',
        capacity: 12,
        bestFor: 'Group travel and tours',
        price: '₹28/km',
        image: '/images/fleet/tempo-traveller.jpg',
    }
];

const FleetCards = () => {
    return (
        <section className="section-padding bg-gray-50 border-t border-gray-100 relative overflow-hidden">
            {/* Decorative subtle background circle */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-50 rounded-full blur-3xl opacity-50 pointer-events-none -mt-20 -mr-20" />

            <div className="container mx-auto px-4 relative z-10">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-extrabold mb-4 text-black-900 leading-tight"
                    >
                        Our Premium <span className="text-gold-500">Fleet</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 max-w-2xl mx-auto font-medium text-lg"
                    >
                        Choose from our comfortable and well-maintained vehicles for every type of journey.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {fleetData.map((car, index) => (
                        <motion.div
                            key={car.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white rounded-3xl shadow-soft border border-gray-100 overflow-hidden group hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 transform hover:-translate-y-2 flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="relative h-56 overflow-hidden bg-gray-100">
                                <img
                                    src={car.image}
                                    alt={car.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-black-900 text-sm font-extrabold shadow-sm border border-white/50">
                                    {car.price}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow relative">
                                <h3 className="text-2xl font-heading font-bold text-black-900 group-hover:text-gold-500 transition-colors mb-4">
                                    {car.name}
                                </h3>

                                <div className="space-y-3 mb-8 flex-grow">
                                    <div className="flex items-center gap-3 text-gray-600 font-medium bg-gray-50/50 p-2 rounded-lg border border-gray-100/50">
                                        <div className="p-1.5 bg-gold-50 text-gold-500 rounded-md shrink-0">
                                            <Users size={16} />
                                        </div>
                                        <span className="text-sm">{car.capacity} Passengers</span>
                                    </div>

                                    <div className="flex items-start gap-3 text-gray-600 font-medium bg-gray-50/50 p-2 rounded-lg border border-gray-100/50">
                                        <div className="p-1.5 bg-gold-50 text-gold-500 rounded-md shrink-0 mt-0.5">
                                            <Info size={16} />
                                        </div>
                                        <span className="text-sm leading-snug">{car.bestFor}</span>
                                    </div>
                                </div>

                                <Link
                                    to="/book"
                                    className="w-full btn-primary text-center py-3.5 text-sm shadow-md group-hover:shadow-[0_10px_20px_rgba(200,169,81,0.3)] flex justify-center items-center gap-2"
                                >
                                    Book Ride
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FleetCards;
