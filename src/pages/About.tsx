import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
    ShieldCheck,
    Target,
    Eye,
    Clock,
    Users,
    Car,
    Award,
    Phone,
    MessageSquare,
    MapPin,
    Navigation,
    HeartHandshake,
    Check
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const features = [
        {
            icon: <Clock className="w-8 h-8" />,
            title: "24/7 Taxi Service",
            description: "Round-the-clock availability for all your travel needs."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Professional Drivers",
            description: "Experienced, verified, and customer-focused chauffeurs."
        },
        {
            icon: <Car className="w-8 h-8" />,
            title: "Clean & Comfortable",
            description: "Meticulously maintained vehicles for a premium experience."
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Transparent Pricing",
            description: "Fair, competitive, and honest rates with no hidden costs."
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            <Helmet>
                <title>About Us | Black Rabbit Tours & Travels</title>
                <meta name="description" content="Learn about Black Rabbit Tours & Travels, Ahmedabad's trusted taxi service provider. Discover our story, mission, and commitment to safe travel." />
            </Helmet>

            {/* 1. Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
                <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" />
                        <path d="M0,20 Q40,40 80,20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10,5" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gold-500 font-extrabold tracking-[0.3em] uppercase text-xs mb-4 block"
                    >
                        Established Excellence
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-heading font-extrabold text-black-900 mb-6 md:mb-8"
                    >
                        About <span className="text-gold-500">Black Rabbit</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed"
                    >
                        Providing safe, reliable, and comfortable taxi services across
                        Ahmedabad and Gujarat. Every mile driven with care and professionalism.
                    </motion.p>
                </div>
            </section>

            {/* 2. Company Story */}
            <section className="section-padding bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        <motion.div
                            {...fadeIn}
                            className="w-full lg:w-1/2 space-y-6 md:space-y-8"
                        >
                            <div className="text-center lg:text-left">
                                <span className="text-gold-500 font-black uppercase text-xs tracking-widest mb-4 block underline-gold mx-auto lg:mx-0 w-max">Our Journey</span>
                                <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-black-900 mb-6 md:mb-8">Our Story</h2>
                                <p className="text-gray-600 text-base md:text-lg leading-relaxed font-bold mb-6">
                                    Founded with a vision to redefine travel in Gujarat, Black Rabbit Tours & Travels began its journey in the heart of Gandhidham. What started as a small family-owned fleet has grown into Ahmedabad's most trusted premium taxi service, driven by a simple philosophy: "Travel should be as memorable as the destination."
                                </p>
                                <p className="text-gray-600 leading-relaxed font-medium mb-6">
                                    Our story is rooted in the vibrant culture of Kutch. We realized that while Gujarat was becoming a global tourist hub, there was a gap for a service that combined local expertise with international standards of safety and comfort. Whether it's the mystical White Rann or the busy streets of Ahmedabad, we wanted to ensure every traveler felt like a guest, not just a passenger.
                                </p>
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    Today, we take pride in our fleet of over 20+ premium vehicles and a team of chauffeurs who are not just drivers, but local guides. From airport transfers to multi-day Kutch expeditions, Black Rabbit is committed to punctuality, transparency, and the spirit of "Atithi Devo Bhava."
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-sm mx-auto lg:mx-0">
                                <div className="text-center lg:text-left">
                                    <p className="text-3xl md:text-4xl font-heading font-black text-gold-500 mb-1">5000+</p>
                                    <p className="text-gray-400 font-bold text-[10px] md:text-sm uppercase tracking-widest">Happy Clients</p>
                                </div>
                                <div className="text-center lg:text-left">
                                    <p className="text-3xl md:text-4xl font-heading font-black text-gold-500 mb-1">15+</p>
                                    <p className="text-gray-400 font-bold text-[10px] md:text-sm uppercase tracking-widest">Cities Covered</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-1/2 relative"
                        >
                            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3] md:aspect-auto">
                                <img
                                    src="/images/fleet/swift-dzire.jpg"
                                    alt="Black Rabbit Premium Taxi"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black-900/40 to-transparent" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-gold-500 text-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-xl hidden sm:block">
                                <Award size={32} className="md:w-10 md:h-10 mb-2 md:mb-4" />
                                <p className="font-extrabold text-lg md:text-xl">Best Taxi Service</p>
                                <p className="text-xs opacity-80">Awarded in 2024</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Our Mission & Vision */}
            <section className="section-padding bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <motion.div
                            {...fadeIn}
                            className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-soft border border-gray-100 group hover:border-gold-500/30 transition-all duration-500 text-center md:text-left"
                        >
                            <div className="p-4 bg-gold-50 rounded-2xl text-gold-500 inline-block mb-6 md:mb-8 group-hover:bg-gold-500 group-hover:text-white transition-all">
                                <Target size={32} className="w-8 h-8 md:w-10 md:h-10" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-black-900 mb-4 md:mb-6">Our Mission</h3>
                            <p className="text-gray-500 font-medium leading-relaxed text-sm md:text-base">
                                To deliver reliable taxi services with safety, comfort,
                                and punctuality. We strive to exceed expectations with
                                every ride we provide.
                            </p>
                        </motion.div>
                        <motion.div
                            {...fadeIn}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-soft border border-gray-100 group hover:border-gold-500/30 transition-all duration-500 text-center md:text-left"
                        >
                            <div className="p-4 bg-gold-50 rounded-2xl text-gold-500 inline-block mb-6 md:mb-8 group-hover:bg-gold-500 group-hover:text-white transition-all">
                                <Eye size={32} className="w-8 h-8 md:w-10 md:h-10" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-black-900 mb-4 md:mb-6">Our Vision</h3>
                            <p className="text-gray-500 font-medium leading-relaxed text-sm md:text-base">
                                To become one of the most trusted and preferred taxi
                                service providers in Gujarat, known for excellence
                                and integrity in travel.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. Why Choose Black Rabbit */}
            <section className="section-padding bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-black-900 mb-12 md:mb-16">Why Choose Black Rabbit?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                {...fadeIn}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-gray-50 border border-transparent hover:bg-white hover:border-gold-100 hover:shadow-xl transition-all group"
                            >
                                <div className="mb-4 md:mb-6 text-gold-500 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                                    {feature.icon}
                                </div>
                                <h4 className="text-lg md:text-xl font-black text-black-900 mb-2 md:mb-4">{feature.title}</h4>
                                <p className="text-gray-500 font-medium text-xs md:text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Professional Drivers */}
            <section className="section-padding bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative z-10 grid grid-cols-2 gap-3 md:gap-4"
                            >
                                <div className="space-y-3 md:space-y-4 pt-6 md:pt-10">
                                    <div className="bg-white p-1.5 md:p-2 rounded-[1.5rem] md:rounded-[2rem] shadow-lg">
                                        <img src="/images/general/driver-1.jpg" className="w-full h-32 md:h-48 object-cover rounded-[1.3rem] md:rounded-[1.8rem]" alt="Driver" />
                                    </div>
                                    <div className="bg-white p-1.5 md:p-2 rounded-[1.5rem] md:rounded-[2rem] shadow-lg">
                                        <img src="/images/general/driver-2.jpg" className="w-full h-32 md:h-48 object-cover rounded-[1.3rem] md:rounded-[1.8rem]" alt="Driver" />
                                    </div>
                                </div>
                                <div className="space-y-3 md:space-y-4">
                                    <div className="bg-white p-1.5 md:p-2 rounded-[1.5rem] md:rounded-[2rem] shadow-lg">
                                        <img src="/images/general/driver-3.jpg" className="w-full h-32 md:h-48 object-cover rounded-[1.3rem] md:rounded-[1.8rem]" alt="Driver" />
                                    </div>
                                    <div className="bg-white p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] shadow-lg text-center flex flex-col justify-center items-center">
                                        <ShieldCheck className="text-gold-500 w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-4" />
                                        <p className="font-black text-black-900 text-[10px] md:text-sm uppercase tracking-tighter">100% Verified</p>
                                    </div>
                                </div>
                            </motion.div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold-50 rounded-full blur-[60px] md:blur-[100px] opacity-50 -z-10" />
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
                            <motion.span
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-gold-500 font-extrabold uppercase text-xs tracking-widest mb-4 block"
                            >
                                Our Backbone
                            </motion.span>
                            <motion.h2
                                {...fadeIn}
                                className="text-3xl md:text-5xl font-heading font-extrabold text-black-900 mb-6 md:mb-8"
                            >
                                Professional & <span className="text-gold-500">Experienced Drivers</span>
                            </motion.h2>
                            <p className="text-gray-600 font-bold text-base md:text-lg leading-relaxed mb-8">
                                Our drivers are the face of Black Rabbit. Every chauffeur in our team
                                undergoes a rigorous vetting process including background checks and
                                driving skill evaluations.
                            </p>
                            <ul className="space-y-4 inline-block text-left">
                                {[
                                    "Extensive experience in local and outstation routes",
                                    "Verified identity and background checks",
                                    "Trained in premium customer service etiquette",
                                    "Punctual and reliable for every booking"
                                ].map((item, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-center gap-3 md:gap-4 text-gray-700 font-bold text-sm md:text-base"
                                    >
                                        <div className="bg-gold-500 text-white p-1 rounded-full shrink-0">
                                            <Check size={14} strokeWidth={4} />
                                        </div>
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Safety & Comfort */}
            <section className="section-padding bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-black-900 mb-4 tracking-tight">Safety & Comfort First</h2>
                        <p className="text-gray-500 font-medium text-sm md:text-base">Your peace of mind is our highest priority.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { icon: <Navigation size={28} className="md:w-8 md:h-8" />, text: "GPS-Enabled Vehicles" },
                            { icon: <ShieldCheck size={28} className="md:w-8 md:h-8" />, text: "Sanitized Cars" },
                            { icon: <Clock size={28} className="md:w-8 md:h-8" />, text: "On-Time Pickup" },
                            { icon: <HeartHandshake size={28} className="md:w-8 md:h-8" />, text: "24/7 Support" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                {...fadeIn}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-gray-50 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] text-center border border-transparent hover:bg-white hover:border-gold-100 hover:shadow-xl transition-all group"
                            >
                                <div className="mb-4 md:mb-6 text-gold-500 flex justify-center group-hover:scale-110 transition-all">
                                    {item.icon}
                                </div>
                                <h5 className="font-extrabold text-black-900 text-base md:text-lg">{item.text}</h5>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Service Coverage */}
            <section className="section-padding bg-gray-50 overflow-hidden relative">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 shadow-soft border border-gray-100 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-black-900 mb-6 md:mb-8">Service Coverage</h2>
                            <p className="text-gray-600 font-medium text-base md:text-lg leading-relaxed mb-10">
                                Black Rabbit Tours & Travels provides premium taxi services across
                                major cities in Gujarat. Whether you're in the heart of Ahmedabad
                                or traveling to the industrial hubs of Surat and Vadodara, we've
                                got you covered.
                            </p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
                                {["Ahmedabad", "Gandhinagar", "Vadodara", "Surat", "Rajkot", "Bhavnagar"].map((city) => (
                                    <div key={city} className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-gold-600 font-black text-[10px] md:text-sm border border-gray-100 hover:bg-gold-50 transition-colors">
                                        <MapPin size={12} className="md:w-[14px] md:h-[14px]" /> {city}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative opacity-30 lg:opacity-100 mt-8 lg:mt-0">
                            {/* Simple abstract map illustration with nodes */}
                            <div className="relative w-full aspect-square max-w-[300px] md:max-w-none md:h-[300px] bg-gold-50/50 rounded-full flex items-center justify-center mx-auto">
                                <div className="absolute w-full h-full border-4 border-dashed border-gold-200/50 rounded-full animate-[spin_60s_linear_infinite]" />
                                <MapPin className="text-gold-500 w-12 h-12 md:w-16 md:h-16 animate-bounce" />
                                <div className="absolute top-10 right-20 w-3 h-3 bg-gold-500 rounded-full shadow-[0_0_20px_gold]" />
                                <div className="absolute bottom-20 left-10 w-2 h-2 bg-gold-500 rounded-full shadow-[0_0_15px_gold]" />
                                <div className="absolute top-1/2 left-0 w-3 h-3 bg-gold-500 rounded-full shadow-[0_0_20px_gold]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Call To Action */}
            <section className="section-padding bg-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        {...fadeIn}
                        className="bg-gradient-to-br from-gold-50 to-white rounded-[2rem] md:rounded-[4rem] p-8 md:p-24 border border-gold-100 shadow-2xl relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-heading font-black text-black-900 mb-6 md:mb-8">
                                Ready to Experience the <span className="text-gold-500">Premium Difference?</span>
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto mb-8 md:mb-12 text-base md:text-xl font-medium leading-relaxed">
                                Join thousands of satisfied travelers who trust Black Rabbit for their
                                daily commutes and special journeys. Book your ride today.
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 md:gap-6">
                                <Link to="/book" className="px-8 md:px-10 py-4 md:py-5 bg-gold-500 text-white rounded-xl md:rounded-2xl font-black text-lg md:text-xl shadow-xl shadow-gold-500/30 hover:bg-gold-600 hover:scale-105 transition-all w-full sm:w-auto">
                                    Book Ride
                                </Link>
                                <a href="tel:+919876543210" className="px-8 md:px-10 py-4 md:py-5 bg-white text-gold-500 border-2 border-gold-500 rounded-xl md:rounded-2xl font-black text-lg md:text-xl hover:bg-gold-50 hover:scale-105 transition-all w-full sm:w-auto flex items-center justify-center gap-2 md:gap-3">
                                    <Phone size={22} className="shrink-0" /> Call Now
                                </a>
                                <a
                                    href="https://wa.me/919876543210"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-8 md:px-10 py-4 md:py-5 bg-[#25D366] text-white rounded-xl md:rounded-2xl font-black text-lg md:text-xl shadow-xl shadow-green-500/30 hover:bg-[#128C7E] hover:scale-105 transition-all w-full sm:w-auto flex items-center justify-center gap-2 md:gap-3"
                                >
                                    <MessageSquare size={22} className="shrink-0" /> WhatsApp
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
