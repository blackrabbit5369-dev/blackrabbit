import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Users, Briefcase, CheckCircle2, Phone, MessageSquare, Car, Wind, ShieldCheck, Clock, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fleetVehicles = [
    {
        name: 'Swift Dzire',
        seats: 4,
        luggage: '2 bags',
        bestFor: 'City rides and airport transfers',
        price: '₹12/km',
        image: '/images/fleet/swift-dzire-white.png',
    },
    {
        name: 'SUV',
        seats: 6,
        luggage: '3 bags',
        bestFor: 'Family travel and local tours',
        price: '₹15/km',
        image: '/images/fleet/suv-white.png',
    },
    {
        name: 'Innova Crysta',
        seats: 7,
        luggage: '4 bags',
        bestFor: 'Premium long-distance travel',
        price: '₹19/km',
        image: '/images/fleet/innova-white.png',
    },
    {
        name: 'Tempo Traveller',
        seats: 12,
        luggage: '8 bags',
        bestFor: 'Group travel and large family tours',
        price: '₹28/km',
        image: '/src/assets/images/fleet/tempo-traveller.jpg',
    }
];

const features = [
    {
        icon: <Wind className="w-8 h-8" />,
        title: "Air Conditioned",
        description: "Fully climate-controlled vehicles for your comfort."
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "Clean & Sanitized",
        description: "Daily deep cleaning and sanitation after every ride."
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Professional Drivers",
        description: "Experienced, verified, and polite chauffeurs."
    },
    {
        icon: <Star className="w-8 h-8" />,
        title: "Comfortable Seating",
        description: "Plush interiors and ample legroom for relaxation."
    },
    {
        icon: <Clock className="w-8 h-8" />,
        title: "24/7 Availability",
        description: "Book your ride anytime, day or night, all year round."
    }
];

const Fleet = () => {
    return (
        <div className="bg-white min-h-screen">
            <Helmet>
                <title>Our Premium Fleet | Black Rabbit Tours & Travels</title>
                <meta name="description" content="Explore our premium range of Sedans, SUVs, and luxury vehicles for your travel needs in Ahmedabad and Gujarat." />
            </Helmet>

            {/* 1. Hero Section */}
            <section className="pt-40 pb-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
                <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                        <path d="M0,20 Q40,40 80,20" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10,5" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gold-500 font-extrabold tracking-[0.2em] uppercase text-xs mb-4 block"
                    >
                        Luxury Collection
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-heading font-extrabold text-black-900 mb-8"
                    >
                        Our Premium <span className="text-gold-500">Taxi Fleet</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto font-medium text-lg md:text-xl leading-relaxed"
                    >
                        Choose from our comfortable and well-maintained vehicles for city rides,
                        airport transfers, and long-distance travel. Experience the difference.
                    </motion.p>
                </div>
            </section>

            {/* 2. Fleet Vehicles Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {fleetVehicles.map((vehicle, index) => (
                            <motion.div
                                key={vehicle.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-white rounded-[2rem] shadow-soft border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={vehicle.image}
                                        alt={vehicle.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-white/50 shadow-sm">
                                        <p className="text-gold-600 font-black text-lg">{vehicle.price}</p>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-heading font-black text-black-900 mb-4 group-hover:text-gold-500 transition-colors">
                                        {vehicle.name}
                                    </h3>
                                    <div className="flex flex-wrap gap-4 mb-6">
                                        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg text-gray-500 font-bold text-sm">
                                            <Users size={16} className="text-gold-500" />
                                            <span>{vehicle.seats} Seats</span>
                                        </div>
                                        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg text-gray-500 font-bold text-sm">
                                            <Briefcase size={16} className="text-gold-500" />
                                            <span>{vehicle.luggage}</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-500 font-medium mb-8 leading-relaxed">
                                        {vehicle.bestFor}
                                    </p>
                                    <Link
                                        to="/book"
                                        className="w-full btn-primary h-14 rounded-xl flex items-center justify-center gap-2 text-lg font-bold group-hover:shadow-lg group-hover:shadow-gold-500/30 transition-all duration-300"
                                    >
                                        Book Ride <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Vehicle Features Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-heading font-extrabold text-black-900 mb-4">Elite Standards</h2>
                        <p className="text-gray-500 font-medium">Why our fleet stands out from the rest.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-3xl text-center shadow-sm border border-gray-100 hover:border-gold-200 transition-colors group"
                            >
                                <div className="mb-6 inline-block p-4 bg-gold-50 rounded-2xl text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                                    {feature.icon}
                                </div>
                                <h4 className="text-lg font-black text-black-900 mb-3">{feature.title}</h4>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Why Choose Our Fleet */}
            <section className="py-24 bg-white overflow-hidden relative">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-gold-500 font-extrabold uppercase text-xs tracking-widest mb-4 block"
                            >
                                Commitment to Excellence
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-heading font-black text-black-900 mb-8 leading-tight"
                            >
                                Safety, Comfort & Reliability <br />
                                <span className="text-gold-500">In Every Mile</span>
                            </motion.h2>
                            <div className="space-y-6">
                                {[
                                    "Rigorous maintenance schedules for peak performance.",
                                    "GPS tracked vehicles for real-time safety monitoring.",
                                    "Punctuality is our priority – we are always on time.",
                                    "Transparent per-kilometer pricing with no hidden costs."
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-center gap-4 text-gray-600 font-semibold"
                                    >
                                        <div className="bg-gold-500/10 text-gold-500 p-1 rounded-full">
                                            <CheckCircle2 size={18} />
                                        </div>
                                        <span>{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative rounded-[3rem] overflow-hidden shadow-2xl"
                            >
                                <img
                                    src="/src/assets/images/fleet/fleet-hero.jpg"
                                    alt="Luxury Car Interior"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black-900/60 to-transparent" />
                                <div className="absolute bottom-10 left-10 text-white">
                                    <p className="text-3xl font-heading font-bold mb-2">Premium Experience</p>
                                    <p className="opacity-80">Redefining luxury travel in Gujarat</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Booking Call To Action */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-to-br from-gold-50 to-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-gold-100 shadow-xl shadow-gold-100/20">
                        <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none">
                            <Car className="absolute top-10 left-10 w-32 h-32 rotate-12" />
                            <Car className="absolute bottom-10 right-10 w-32 h-32 -rotate-12" />
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-heading font-black text-black-900 mb-6">Need a Taxi Right Now?</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg font-medium">
                                Our fleet is ready and waiting. Book your ride instantly via our portal,
                                give us a call, or message us on WhatsApp for lightning-fast service.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Link
                                    to="/book"
                                    className="px-8 py-4 bg-gold-500 text-white rounded-2xl font-black text-lg transition-all hover:bg-gold-600 hover:scale-105 shadow-lg shadow-gold-500/20 w-full sm:w-auto"
                                >
                                    Book Your Ride
                                </Link>
                                <a
                                    href="tel:+917284038244"
                                    className="px-8 py-4 bg-white text-gold-500 border-2 border-gold-500 rounded-2xl font-black text-lg transition-all hover:bg-gold-50 hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2"
                                >
                                    <Phone size={20} /> Call Now
                                </a>
                                <a
                                    href="https://wa.me/917284038244"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-8 py-4 bg-[#25D366] text-white rounded-2xl font-black text-lg transition-all hover:bg-[#128C7E] hover:scale-105 shadow-lg shadow-green-500/20 w-full sm:w-auto flex items-center justify-center gap-2"
                                >
                                    <MessageSquare size={20} /> WhatsApp Booking
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Fleet;
