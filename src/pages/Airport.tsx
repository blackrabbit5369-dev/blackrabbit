import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
    Users,
    MapPin,
    Calendar,
    Clock,
    Car,
    Navigation,
    Plane,
    PlaneTakeoff,
    PlaneLanding,
    CheckCircle2,
    Phone,
    MessageSquare,
    Star,
    ArrowRight,
    ChevronDown,
    ShieldCheck,
    Radar
} from 'lucide-react';
import { Link } from 'react-router-dom';


const Airport = () => {
    const [formData, setFormData] = useState({
        pickup: '',
        dropoff: '',
        flightNumber: '',
        date: '',
        time: '',
        vehicleType: '',
    });

    const dateInputRef = useRef<HTMLInputElement>(null);
    const timeInputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `Hello Black Rabbit, I want to book an Airport Taxi:
Pickup: ${formData.pickup}
Drop-off: ${formData.dropoff}
Flight No: ${formData.flightNumber || 'Not provided'}
Date: ${formData.date}
Time: ${formData.time}
Vehicle: ${formData.vehicleType || 'Any'}`;

        window.open(`https://wa.me/917284038244?text=${encodeURIComponent(message)}`, '_blank');
    };

    const fleet = [
        { name: 'Swift Dzire', image: '/images/fleet/swift-dzire-white.png', capacity: 4, price: '₹12/km' },
        { name: 'SUV', image: '/images/fleet/suv-white.png', capacity: 6, price: '₹15/km' },
        { name: 'Innova Crysta', image: '/images/fleet/innova-white.png', capacity: 7, price: '₹19/km' },
        { name: 'Tempo Traveller', image: '/images/fleet/tempo-traveller.jpg', capacity: 12, price: '₹28/km' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <Helmet>
                <title>Airport Transfers Ahmedabad | Black Rabbit Tours & Travels</title>
                <meta name="description" content="Reliable 24/7 airport pickup and drop taxi service in Ahmedabad. Luxury cars and professional drivers for SVPI Airport." />
            </Helmet>

            {/* 1. Hero Section */}
            <section className="pt-40 pb-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
                <div className="absolute top-0 right-0 w-full h-full opacity-[0.05] pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0,80 L100,80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10,5" />
                        <path d="M0,85 L100,85" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10,5" />
                        <Plane className="absolute top-20 right-20 text-gold-500 w-24 h-24 rotate-12 opacity-10" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gold-50 rounded-full text-gold-600 font-extrabold text-xs uppercase tracking-widest mb-6"
                    >
                        <Plane size={14} /> Official SLPI Partner
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-heading font-extrabold text-black-900 mb-8"
                    >
                        Ahmedabad <span className="text-gold-500 text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-gold-400">Airport Taxi</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto font-medium text-lg md:text-xl leading-relaxed mb-10"
                    >
                        Reliable airport pickup and drop taxi service available 24/7 with professional drivers
                        and comfortable vehicles. Your journey begins with excellence.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a href="#airport-form" className="px-8 py-4 bg-gold-500 text-white rounded-2xl font-black text-lg shadow-xl shadow-gold-500/20 hover:bg-gold-600 hover:scale-105 transition-all w-full sm:w-auto">
                            Book Airport Taxi
                        </a>
                        <a href="tel:+917284038244" className="px-8 py-4 bg-white text-gold-500 border-2 border-gold-500 rounded-2xl font-black text-lg hover:bg-gold-50 hover:scale-105 transition-all w-full sm:w-auto flex items-center justify-center gap-2">
                            <Phone size={20} /> Call Now
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* 2. Airport Booking Form */}
            <section id="airport-form" className="relative z-30 -mt-10 px-4 mb-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-[2.5rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-100 p-8 md:p-12 max-w-[1400px] mx-auto"
                >
                    <div className="flex items-center gap-4 mb-10 border-b border-gray-100 pb-8 uppercase font-black text-xs tracking-widest text-gold-500">
                        <Radar size={18} /> Specialized Airport Booking
                    </div>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">

                        {/* Pickup */}
                        <div className="relative group lg:col-span-3">
                            <label className="block text-xs font-black text-gray-400 mb-3 uppercase tracking-widest ml-1">Pickup Location</label>
                            <div className="flex items-center bg-gray-50 border-2 border-transparent rounded-2xl p-5 group-focus-within:bg-white group-focus-within:border-gold-500/50 group-focus-within:ring-4 group-focus-within:ring-gold-500/5 transition-all duration-300 shadow-inner">
                                <MapPin size={22} className="text-gold-500 mr-4 shrink-0" />
                                <input
                                    type="text"
                                    name="pickup"
                                    placeholder="e.g. SVPI Airport Terminal 2"
                                    required
                                    value={formData.pickup}
                                    onChange={handleChange}
                                    className="bg-transparent border-none outline-none text-black-900 w-full placeholder-gray-300 text-[17px] font-bold"
                                />
                            </div>
                        </div>

                        {/* Drop */}
                        <div className="relative group lg:col-span-3">
                            <label className="block text-xs font-black text-gray-400 mb-3 uppercase tracking-widest ml-1">Drop Location</label>
                            <div className="flex items-center bg-gray-50 border-2 border-transparent rounded-2xl p-5 group-focus-within:bg-white group-focus-within:border-gold-500/50 group-focus-within:ring-4 group-focus-within:ring-gold-500/5 transition-all duration-300 shadow-inner">
                                <Navigation size={22} className="text-gold-500 mr-4 shrink-0" />
                                <input
                                    type="text"
                                    name="dropoff"
                                    placeholder="e.g. Your Hotel or Address"
                                    required
                                    value={formData.dropoff}
                                    onChange={handleChange}
                                    className="bg-transparent border-none outline-none text-black-900 w-full placeholder-gray-300 text-[17px] font-bold"
                                />
                            </div>
                        </div>

                        {/* Flight No */}
                        <div className="relative group lg:col-span-2">
                            <label className="block text-xs font-black text-gray-400 mb-3 uppercase tracking-widest ml-1">Flight Number (Optional)</label>
                            <div className="flex items-center bg-gray-50 border-2 border-transparent rounded-2xl p-5 group-focus-within:bg-white group-focus-within:border-gold-500/50 group-focus-within:ring-4 group-focus-within:ring-gold-500/5 transition-all duration-300 shadow-inner">
                                <Plane size={22} className="text-gold-500 mr-4 shrink-0" />
                                <input
                                    type="text"
                                    name="flightNumber"
                                    placeholder="e.g. AI-102"
                                    value={formData.flightNumber}
                                    onChange={handleChange}
                                    className="bg-transparent border-none outline-none text-black-900 w-full placeholder-gray-300 text-[17px] font-bold"
                                />
                            </div>
                        </div>

                        {/* Date */}
                        <div className="relative group cursor-pointer lg:col-span-2" onClick={() => dateInputRef.current?.showPicker()}>
                            <label className="block text-xs font-black text-gray-400 mb-3 uppercase tracking-widest ml-1">Pickup Date</label>
                            <div className="flex items-center bg-gray-50 border-2 border-transparent rounded-2xl p-5 group-focus-within:bg-white group-focus-within:border-gold-500/50 group-focus-within:ring-4 group-focus-within:ring-gold-500/5 transition-all duration-300 shadow-inner">
                                <Calendar size={22} className="text-gold-500 mr-4 shrink-0" />
                                <div className="relative w-full">
                                    <input
                                        ref={dateInputRef}
                                        type="date"
                                        name="date"
                                        required
                                        value={formData.date}
                                        onChange={handleChange}
                                        className={`bg-transparent border-none outline-none text-black-900 w-full text-[17px] font-bold appearance-none cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer ${!formData.date ? 'text-transparent' : ''}`}
                                    />
                                    {!formData.date && <span className="absolute left-0 top-0 text-gray-300 pointer-events-none text-[17px] font-bold">Date</span>}
                                </div>
                            </div>
                        </div>

                        {/* Time */}
                        <div className="relative group cursor-pointer lg:col-span-2" onClick={() => timeInputRef.current?.showPicker()}>
                            <label className="block text-xs font-black text-gray-400 mb-3 uppercase tracking-widest ml-1">Pickup Time</label>
                            <div className="flex items-center bg-gray-50 border-2 border-transparent rounded-2xl p-5 group-focus-within:bg-white group-focus-within:border-gold-500/50 group-focus-within:ring-4 group-focus-within:ring-gold-500/5 transition-all duration-300 shadow-inner">
                                <Clock size={22} className="text-gold-500 mr-4 shrink-0" />
                                <div className="relative w-full">
                                    <input
                                        ref={timeInputRef}
                                        type="time"
                                        name="time"
                                        required
                                        value={formData.time}
                                        onChange={handleChange}
                                        className={`bg-transparent border-none outline-none text-black-900 w-full text-[17px] font-bold appearance-none cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer ${!formData.time ? 'text-transparent' : ''}`}
                                    />
                                    {!formData.time && <span className="absolute left-0 top-0 text-gray-300 pointer-events-none text-[17px] font-bold">Time</span>}
                                </div>
                            </div>
                        </div>

                        {/* Vehicle + Submit */}
                        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                            <div className="md:col-span-1 relative group">
                                <label className="block text-xs font-black text-gray-400 mb-3 uppercase tracking-widest ml-1">Select Fleet</label>
                                <div className="flex items-center bg-gray-50 border-2 border-transparent rounded-2xl p-5 group-focus-within:bg-white group-focus-within:border-gold-500/50 transition-all shadow-inner">
                                    <Car size={22} className="text-gold-500 mr-4 shrink-0" />
                                    <div className="relative w-full flex items-center">
                                        <select
                                            name="vehicleType"
                                            value={formData.vehicleType}
                                            onChange={handleChange}
                                            className="bg-transparent border-none outline-none text-black-900 w-full text-[17px] font-bold appearance-none cursor-pointer z-10 pr-6"
                                        >
                                            <option value="">Any Premium Vehicle</option>
                                            <option value="Sedan">Luxury Sedan</option>
                                            <option value="SUV">Premium SUV</option>
                                            <option value="Innova">Innova Crysta</option>
                                        </select>
                                        <ChevronDown size={14} className="text-gold-500 absolute right-0 pointer-events-none" />
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-2 flex items-end">
                                <motion.button
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 h-[74px] rounded-[1.25rem] flex items-center justify-center gap-4 text-white font-extrabold text-xl transition-all duration-300 shadow-2xl shadow-gold-500/40"
                                >
                                    <span>Book Airport Ride</span>
                                    <ArrowRight size={22} />
                                </motion.button>
                            </div>
                        </div>
                    </form>
                </motion.div>
            </section>

            {/* 3. Airport Services Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-heading font-extrabold text-black-900 mb-4">How We Serve You</h2>
                        <p className="text-gray-500 font-medium">Seamless airport transitions for every traveler.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-soft flex items-start gap-6 group"
                        >
                            <div className="p-5 bg-gold-50 rounded-2xl text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-all duration-500">
                                <PlaneLanding size={35} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-black-900 mb-4">Airport Pickup</h3>
                                <p className="text-gray-500 font-medium leading-relaxed">
                                    Our professional driver waits at the arrival gate with a personalized nameboard.
                                    Expect full luggage assistance and a cool vehicle waiting for you.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-soft flex items-start gap-6 group"
                        >
                            <div className="p-5 bg-gold-50 rounded-2xl text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-all duration-500">
                                <PlaneTakeoff size={35} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-black-900 mb-4">Airport Drop</h3>
                                <p className="text-gray-500 font-medium leading-relaxed">
                                    Punctual door-to-terminal service. We calculate traffic and ensure you reach
                                    Ahmedabad Airport with plenty of time for check-in.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* 5. Fleet Options */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-heading font-extrabold text-black-900 mb-4">Airport Fleet</h2>
                        <p className="text-gray-500 font-medium">Choose your premium ride for a comfortable transition.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {fleet.map((car, idx) => (
                            <motion.div
                                key={car.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-[2rem] overflow-hidden shadow-soft border border-gray-100 group"
                            >
                                <div className="h-44 overflow-hidden">
                                    <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="p-6">
                                    <h4 className="text-lg font-black text-black-900 mb-4">{car.name}</h4>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-2 text-sm font-bold text-gray-500">
                                            <Users size={16} className="text-gold-500" />
                                            <span>{car.capacity} Seats</span>
                                        </div>
                                        <span className="text-gold-600 font-black">{car.price}</span>
                                    </div>
                                    <Link to="/book" className="w-full py-3 bg-gray-50 text-black-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gold-500 hover:text-white transition-all group-hover:shadow-lg">
                                        Book Ride <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Why Choose Our Airport Taxi */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-16">
                        <div className="order-2 lg:order-1 relative">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-2 gap-4"
                            >
                                <div className="space-y-4 pt-10">
                                    <div className="bg-gold-50 p-8 rounded-[2rem] text-center border border-gold-100">
                                        <Radar className="w-10 h-10 text-gold-500 mx-auto mb-4" />
                                        <h5 className="font-black text-black-900 mb-2">Flight Tracking</h5>
                                        <p className="text-xs text-gray-500 font-medium">We monitor delays</p>
                                    </div>
                                    <div className="bg-gray-50 p-8 rounded-[2rem] text-center border border-gray-100">
                                        <Users className="w-10 h-10 text-gold-500 mx-auto mb-4" />
                                        <h5 className="font-black text-black-900 mb-2">Pro Drivers</h5>
                                        <p className="text-xs text-gray-500 font-medium">Verified & Polite</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-gray-50 p-8 rounded-[2rem] text-center border border-gray-100">
                                        <Clock className="w-10 h-10 text-gold-500 mx-auto mb-4" />
                                        <h5 className="font-black text-black-900 mb-2">On-Time</h5>
                                        <p className="text-xs text-gray-500 font-medium">Punctuality first</p>
                                    </div>
                                    <div className="bg-gold-50 p-8 rounded-[2rem] text-center border border-gold-100">
                                        <ShieldCheck className="w-10 h-10 text-gold-500 mx-auto mb-4" />
                                        <h5 className="font-black text-black-900 mb-2">Clean Cars</h5>
                                        <p className="text-xs text-gray-500 font-medium">Daily sanitized</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <motion.span
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-gold-500 font-extrabold uppercase text-xs tracking-[0.2em] mb-4 block"
                            >
                                Transit Perfection
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-heading font-extrabold text-black-900 mb-8 leading-tight"
                            >
                                We Bridge the Gap Between <br />
                                <span className="text-gold-500">Flight & Doorstep</span>
                            </motion.h2>
                            <div className="space-y-6 mb-10">
                                {[
                                    "No hidden charges for waiting (up to 45 mins).",
                                    "Luxury interiors with water and magazines.",
                                    "Safe and child-friendly seating available.",
                                    "Instant invoicing and digital billing."
                                ].map((step, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-center gap-4 text-gray-600 font-bold"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-gold-500/10 text-gold-500 flex items-center justify-center shrink-0">
                                            <CheckCircle2 size={14} />
                                        </div>
                                        <span>{step}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Customer Reviews */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-heading font-extrabold text-black-900 mb-4">Traveler Experiences</h2>
                        <p className="text-gray-500 font-medium">What our airport passengers say about our service.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { name: "Suresh Mehta", review: "Seamless pickup. The driver was waiting exactly where they said with my name on a board. Very professional!", city: "Ahmedabad" },
                            { name: "Priya Shah", review: "Booked a late-night drop for 3 AM. The driver arrived 10 mins early. Extremely reliable service!", city: "Gandhinagar" },
                            { name: "Vikram Singh", review: "Cleanest taxi I've used. The Innova was perfect for our family and all our heavy airport luggage.", city: "Mumbai" },
                        ].map((rev, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-[2rem] shadow-soft border border-gray-100 italic"
                            >
                                <div className="flex text-gold-500 mb-6 gap-1">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="text-gray-600 font-medium mb-8 leading-relaxed">"{rev.review}"</p>
                                <div className="flex items-center gap-4 not-italic">
                                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-gold-600 font-black text-lg">
                                        {rev.name[0]}
                                    </div>
                                    <div>
                                        <p className="font-black text-black-900">{rev.name}</p>
                                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{rev.city}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. Booking Call To Action */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="bg-gradient-to-br from-gold-50 to-white rounded-[4rem] p-12 md:p-24 border border-gold-100 shadow-2xl shadow-gold-100/20 relative overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-black-900 mb-8">Need Airport Taxi Now?</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg md:text-xl font-medium">
                                Don't wait in long queues. Book your premium transit and have a professional chauffeur
                                waiting for you at SVPI Airport or your doorstep.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Link to="/book" className="px-10 py-5 bg-gold-500 text-white rounded-2xl font-black text-xl shadow-xl shadow-gold-500/30 hover:bg-gold-600 hover:scale-105 transition-all w-full sm:w-auto">
                                    Book Ride
                                </Link>
                                <a href="tel:+917284038244" className="px-10 py-5 bg-white text-gold-500 border-2 border-gold-500 rounded-2xl font-black text-xl hover:bg-gold-50 hover:scale-105 transition-all w-full sm:w-auto flex items-center justify-center gap-3">
                                    <Phone size={24} /> Call Now
                                </a>
                                <a
                                    href="https://wa.me/917284038244"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-10 py-5 bg-[#25D366] text-white rounded-2xl font-black text-xl shadow-xl shadow-green-500/30 hover:bg-[#128C7E] hover:scale-105 transition-all w-full sm:w-auto flex items-center justify-center gap-3"
                                >
                                    <MessageSquare size={24} /> WhatsApp Booking
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Airport;
