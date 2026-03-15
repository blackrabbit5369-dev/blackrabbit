import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
    CheckCircle2,
    Car,
    MapPin,
    Clock,
    Users,
    PhoneCall,
    MessageCircle,
    TrendingUp,
    Plane
} from 'lucide-react';
import BookingForm from '../components/BookingForm';

const BookRide = () => {
    const vehicles = [
        {
            name: 'Swift Dzire',
            capacity: '4 seats',
            description: 'Best for city travel & short trips',
            image: '/images/fleet/swift-dzire-white.png',
        },
        {
            name: 'SUV',
            capacity: '6 seats',
            description: 'Perfect for family rides and extra luggage',
            image: '/images/fleet/suv-white.png',
        },
        {
            name: 'Innova Crysta',
            capacity: '7 seats',
            description: 'Premium choice for long distance travel',
            image: '/images/fleet/innova-white.png',
        },
        {
            name: 'Tempo Traveller',
            capacity: '12 seats',
            description: 'The ultimate option for group travel',
            image: '/images/fleet/tempo-traveller.jpg',
        }
    ];

    const fareEstimates = [
        {
            title: 'Local City Ride',
            price: 'Starting ₹12/km',
            icon: <MapPin className="text-gold-500" size={24} />,
            details: 'Includes pickup/drop within Ahmedabad city limits.'
        },
        {
            title: 'Airport Transfer',
            price: 'Starting ₹12/km',
            icon: <Plane className="text-gold-500" size={24} />,
            details: 'Clear pricing for stress-free airport pickup/drop.'
        },
        {
            title: 'Outstation Taxi',
            price: 'Starting ₹15/km',
            icon: <TrendingUp className="text-gold-500" size={24} />,
            details: 'Intercity travel with experienced outstation drivers.'
        }
    ];

    const steps = [
        { id: 1, title: 'Enter Pickup & Destination', icon: <MapPin size={24} /> },
        { id: 2, title: 'Choose Vehicle', icon: <Car size={24} /> },
        { id: 3, title: 'Confirm Booking', icon: <CheckCircle2 size={24} /> },
        { id: 4, title: 'Driver Arrives', icon: <Clock size={24} /> }
    ];

    return (
        <div className="bg-white min-h-screen">
            <Helmet>
                <title>Book a Ride | Black Rabbit Tours & Travels</title>
                <meta name="description" content="Book your premium taxi safely and quickly online with Black Rabbit Tours & Travels Ahmedabad." />
            </Helmet>

            {/* 1. Hero Section */}
            <section className="pt-40 pb-32 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
                <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                        <path d="M0,70 Q25,50 50,70 T100,70" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gold-500 font-extrabold tracking-[0.2em] uppercase text-xs mb-4 block"
                    >
                        Secure Reservation
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-heading font-extrabold text-black-900 mb-8"
                    >
                        Book Your <span className="text-gold-500">Premium Ride</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto font-medium text-lg md:text-xl leading-relaxed"
                    >
                        Instantly book reliable taxi services for local rides, airport transfers, and outstation travel.
                        Safe, comfortable, and always on time.
                    </motion.p>
                </div>
            </section>

            {/* 2. Main Booking Form */}
            <div className="relative z-30">
                <BookingForm />
            </div>

            {/* 3. Vehicle Options Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-heading font-extrabold text-black-900 mb-4">Choose Your Vehicle</h2>
                        <p className="text-gray-500 font-medium">Select the best fleet option for your specific journey needs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {vehicles.map((vehicle, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-[2rem] p-6 shadow-soft border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
                            >
                                <div className="h-44 rounded-2xl overflow-hidden mb-6 bg-gray-100">
                                    <img
                                        src={vehicle.image}
                                        alt={vehicle.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-black-900 mb-2">{vehicle.name}</h3>
                                <div className="flex items-center gap-2 text-gold-500 font-bold text-sm mb-4">
                                    <Users size={16} />
                                    <span>{vehicle.capacity}</span>
                                </div>
                                <p className="text-gray-500 text-sm font-medium mb-6 leading-relaxed">
                                    {vehicle.description}
                                </p>
                                <button className="w-full py-3 bg-gray-50 text-black-900 font-bold rounded-xl border border-gray-100 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all duration-300">
                                    Book This Vehicle
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Fare Estimate Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-heading font-extrabold text-black-900 mb-4">Transparent Fare Estimates</h2>
                        <p className="text-gray-500 font-medium">Clear and affordable pricing for every type of ride.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {fareEstimates.map((fare, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-3xl p-8 border-2 border-gray-50 hover:border-gold-100 shadow-soft transition-all duration-300 text-center flex flex-col items-center"
                            >
                                <div className="w-16 h-16 bg-gold-50 rounded-2xl flex items-center justify-center mb-6">
                                    {fare.icon}
                                </div>
                                <h3 className="text-xl font-heading font-bold text-black-900 mb-2">{fare.title}</h3>
                                <div className="text-2xl font-extrabold text-gold-500 mb-4">{fare.price}</div>
                                <p className="text-gray-500 text-sm font-medium">
                                    {fare.details}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. How Booking Works */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-heading font-extrabold text-black-900 mb-4">How It Works</h2>
                        <p className="text-gray-500 font-medium">Book your premium ride in 4 simple steps.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />

                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center relative z-10 hover:shadow-md transition-shadow"
                            >
                                <div className="w-14 h-14 bg-gold-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-gold-500/20">
                                    {step.icon}
                                </div>
                                <h3 className="font-heading font-bold text-black-900 mb-2">{step.title}</h3>
                                <div className="absolute top-4 right-4 text-gray-100 font-extrabold text-4xl leading-none select-none">
                                    0{step.id}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Help / Contact Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-gold-500 to-gold-400 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl shadow-gold-500/30 relative overflow-hidden group"
                    >
                        {/* Decorative orbs */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-125 transition-transform duration-700" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-20 -mb-20" />

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
                                <PhoneCall size={36} />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6">Need Help Booking Your Ride?</h2>
                            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
                                Our support team is available 24/7 to assist you with your taxi bookings and travel arrangements.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <a
                                    href="tel:+917284038244"
                                    className="w-full sm:w-auto px-10 py-5 bg-white text-gold-600 font-bold rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                                >
                                    <PhoneCall size={20} />
                                    <span>Call Now</span>
                                </a>
                                <a
                                    href="https://wa.me/917284038244"
                                    className="w-full sm:w-auto px-10 py-5 bg-black/20 backdrop-blur-md text-white font-extrabold rounded-2xl border-2 border-white/30 hover:bg-white hover:text-gold-500 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                                >
                                    <MessageCircle size={20} />
                                    <span>WhatsApp Booking</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default BookRide;
