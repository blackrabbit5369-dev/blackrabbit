import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
    Phone,
    Mail,
    MapPin,
    MessageSquare,
    Send,
    Clock,
    User,
    Smartphone
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        pickup: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = `Hello Black Rabbit, I have a contact inquiry:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nPickup: ${formData.pickup}\nMessage: ${formData.message}`;
        window.open(`https://wa.me/917284038244?text=${encodeURIComponent(text)}`, '_blank');
    };

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="bg-white min-h-screen">
            <Helmet>
                <title>Contact Us | Black Rabbit Tours & Travels</title>
                <meta name="description" content="Get in touch with Black Rabbit Tours & Travels for taxi bookings, airport transfers, and tour packages in Ahmedabad. We are available 24/7." />
            </Helmet>

            {/* 1. Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
                <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0,80 L100,80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10,5" />
                        <path d="M0,20 Q50,40 100,20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10,5" />
                        <Smartphone className="absolute top-40 right-20 text-gold-500 w-32 h-32 opacity-10 rotate-12" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gold-500 font-extrabold tracking-[0.3em] uppercase text-xs mb-4 block"
                    >
                        Available 24/7
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-heading font-extrabold text-black-900 mb-6 md:mb-8"
                    >
                        Contact <span className="text-gold-500">Black Rabbit</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed"
                    >
                        Get in touch with us for taxi bookings, airport transfers, and specialized
                        tour packages across Ahmedabad and Gujarat. We're here to help.
                    </motion.p>
                </div>
            </section>

            {/* 2. Contact Information & Quick Cards */}
            <section className="section-padding bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
                        {[
                            {
                                icon: <Phone className="w-8 h-8 md:w-10 md:h-10" />,
                                title: "Call Us",
                                info: "+91 72840 38244",
                                subInfo: "Tap to call instantly",
                                link: "tel:+917284038244",
                                color: "bg-gold-50 text-gold-500"
                            },
                            {
                                icon: <MessageSquare className="w-8 h-8 md:w-10 md:h-10" />,
                                title: "WhatsApp Booking",
                                info: "+91 72840 38244",
                                subInfo: "Chat for quick booking",
                                link: "https://wa.me/917284038244",
                                color: "bg-green-50 text-green-500"
                            },
                            {
                                icon: <Mail className="w-8 h-8 md:w-10 md:h-10" />,
                                title: "Email Inquiry",
                                info: "blackrabbit5369@gmail.com",
                                subInfo: "Response within 2 hours",
                                link: "mailto:blackrabbit5369@gmail.com",
                                color: "bg-blue-50 text-blue-500"
                            }
                        ].map((card, idx) => (
                            <motion.a
                                key={idx}
                                href={card.link}
                                {...fadeIn}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-soft border border-gray-100 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-500"
                            >
                                <div className={`p-4 md:p-6 rounded-2xl mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500 ${card.color}`}>
                                    {card.icon}
                                </div>
                                <h3 className="text-xl md:text-2xl font-black text-black-900 mb-2">{card.title}</h3>
                                <p className="text-lg md:text-xl font-bold text-gray-800 mb-2">{card.info}</p>
                                <p className="text-xs md:text-sm text-gray-400 font-bold uppercase tracking-widest">{card.subInfo}</p>
                            </motion.a>
                        ))}
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        {/* 4. Contact Form */}
                        <motion.div
                            {...fadeIn}
                            className="w-full lg:w-3/5 bg-white rounded-[2rem] md:rounded-[3rem] shadow-soft border border-gray-100 p-6 md:p-16 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-2 h-full bg-gold-500" />
                            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-black-900 mb-8 md:mb-10 text-center md:text-left">Send a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                                        <div className="flex items-center bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-5 border-2 border-transparent focus-within:bg-white focus-within:border-gold-500/50 transition-all shadow-inner">
                                            <User size={18} className="text-gold-500 mr-3 md:mr-4" />
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="bg-transparent border-none outline-none text-black-900 w-full placeholder-gray-300 font-bold text-base"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                                        <div className="flex items-center bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-5 border-2 border-transparent focus-within:bg-white focus-within:border-gold-500/50 transition-all shadow-inner">
                                            <Phone size={18} className="text-gold-500 mr-3 md:mr-4" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="+91 XXXXX XXXXX"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="bg-transparent border-none outline-none text-black-900 w-full placeholder-gray-300 font-bold text-base"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                                        <div className="flex items-center bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-5 border-2 border-transparent focus-within:bg-white focus-within:border-gold-500/50 transition-all shadow-inner">
                                            <Mail size={18} className="text-gold-500 mr-3 md:mr-4" />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="john@example.com"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="bg-transparent border-none outline-none text-black-900 w-full placeholder-gray-300 font-bold text-base"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Pickup Location</label>
                                        <div className="flex items-center bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-5 border-2 border-transparent focus-within:bg-white focus-within:border-gold-500/50 transition-all shadow-inner">
                                            <MapPin size={18} className="text-gold-500 mr-3 md:mr-4" />
                                            <input
                                                type="text"
                                                name="pickup"
                                                placeholder="Ahmedabad Airport / Hotel"
                                                required
                                                value={formData.pickup}
                                                onChange={handleChange}
                                                className="bg-transparent border-none outline-none text-black-900 w-full placeholder-gray-300 font-bold text-base"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Your Message</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        placeholder="How can we help you?"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-transparent focus-within:bg-white focus-within:border-gold-500/50 transition-all shadow-inner font-bold outline-none resize-none placeholder-gray-300 text-black-900 text-base"
                                    ></textarea>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    type="submit"
                                    className="w-full bg-gold-500 text-white font-black text-lg md:text-xl py-5 md:py-6 rounded-xl md:rounded-2xl shadow-xl shadow-gold-500/30 flex items-center justify-center gap-4 hover:bg-gold-600 transition-all group"
                                >
                                    <span>Send Message</span>
                                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Contact Details & Info */}
                        <div className="w-full lg:w-2/5 space-y-8">
                            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-gray-50 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-gray-100">
                                <h3 className="text-xl md:text-2xl font-black text-black-900 mb-6 md:mb-8 text-center md:text-left">Our Headquarters</h3>
                                <div className="space-y-6 md:space-y-8">
                                    <div className="flex items-start gap-4 md:gap-6">
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl shadow-sm text-gold-500 flex items-center justify-center shrink-0 border border-gray-100">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] md:text-sm font-black text-gray-400 uppercase tracking-widest mb-1">Head Office</p>
                                            <p className="text-base md:text-lg font-bold text-black-900 leading-relaxed">
                                                195, Bagirath, Meghper Borichi,<br />
                                                Adipur, 370110 (Gandhidham)
                                            </p>
                                            <p className="text-[10px] md:text-sm font-black text-gray-400 uppercase tracking-widest mb-1 mt-4">Branch Office</p>
                                            <p className="text-base md:text-lg font-bold text-black-900">Ahmedabad, Gujarat</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 md:gap-6">
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl shadow-sm text-gold-500 flex items-center justify-center shrink-0 border border-gray-100">
                                            <Phone size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] md:text-sm font-black text-gray-400 uppercase tracking-widest mb-1">Phone</p>
                                            <p className="text-base md:text-lg font-bold text-black-900">+91 72840 38244</p>
                                            <p className="text-base md:text-lg font-bold text-black-900">+91 93137 98636</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 md:gap-6">
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl shadow-sm text-gold-500 flex items-center justify-center shrink-0 border border-gray-100">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] md:text-sm font-black text-gray-400 uppercase tracking-widest mb-1">Email</p>
                                            <p className="text-base md:text-lg font-bold text-black-900">blackrabbit5369@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* 6. Business Hours */}
                            <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="bg-black-900 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] text-white">
                                <div className="flex items-center gap-4 mb-6 md:mb-8">
                                    <Clock className="text-gold-500 w-8 h-8 md:w-10 md:h-10" />
                                    <h3 className="text-xl md:text-2xl font-black tracking-tight">Business Hours</h3>
                                </div>
                                <div className="space-y-4 md:space-y-6">
                                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                        <span className="font-bold text-white/60 uppercase text-[10px] md:text-xs tracking-widest">Taxi Service</span>
                                        <span className="font-black text-gold-500 text-sm md:text-base">24/7 Available</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                        <span className="font-bold text-white/60 uppercase text-[10px] md:text-xs tracking-widest">Office Hours</span>
                                        <span className="font-black text-white text-sm md:text-base">9:00 AM - 9:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-white/60 uppercase text-[10px] md:text-xs tracking-widest">Airport Transfers</span>
                                        <span className="font-black text-gold-500 text-sm md:text-base">Anytime Anywhere</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Google Map Section */}
            <section className="section-padding bg-gray-50 overflow-hidden relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12 md:mb-16 underline-gold">
                        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-black-900 mb-4 tracking-tight">Find Us in Ahmedabad</h2>
                        <p className="text-gray-500 font-medium text-sm md:text-base">Clear road access for all visitors.</p>
                    </div>
                    <div className="bg-white p-2 md:p-4 rounded-[2rem] md:rounded-[4rem] shadow-2xl border border-gray-100 relative group overflow-hidden">
                        <div className="absolute top-10 left-10 z-20 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-gray-100 hidden md:block">
                            <p className="text-xs font-black text-gold-500 uppercase tracking-widest mb-1">Our Location</p>
                            <p className="text-sm font-bold text-black-900">Ellisbridge Crossing, Ahmedabad</p>
                        </div>
                        <div className="w-full h-[350px] md:h-[500px] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117506.3980753086!2d72.50207553198956!3d23.019183416173007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fccddf610c7272!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1714574932014!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Final Call To Action */}
            <section className="section-padding bg-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        {...fadeIn}
                        className="bg-gradient-to-br from-gold-50 to-white rounded-[2rem] md:rounded-[4rem] p-8 md:p-24 border border-gold-100 shadow-xl relative overflow-hidden"
                    >
                        <div className="absolute -top-32 -right-32 w-48 md:w-96 h-48 md:h-96 bg-gold-200/20 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />
                        <div className="absolute -bottom-32 -left-32 w-48 md:w-96 h-48 md:h-96 bg-gold-200/20 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-6xl font-heading font-extrabold text-black-900 mb-6 md:mb-8 tracking-tight">Need a Taxi Now?</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto mb-8 md:mb-12 text-base md:text-xl font-medium">
                                Our fleet is active and drivers are ready. Book your premium ride today
                                for a safe and luxurious journey.
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 md:gap-6">
                                <Link to="/book" className="px-8 md:px-10 py-4 md:py-5 bg-gold-500 text-white rounded-xl md:rounded-2xl font-black text-lg md:text-xl shadow-xl shadow-gold-500/20 hover:bg-gold-600 hover:scale-105 transition-all w-full sm:w-auto">
                                    Book Your Ride
                                </Link>
                                <a href="tel:+917284038244" className="px-8 md:px-10 py-4 md:py-5 bg-white text-gold-500 border-2 border-gold-500 rounded-xl md:rounded-2xl font-black text-lg md:text-xl hover:bg-gold-50 hover:scale-105 transition-all w-full sm:w-auto flex items-center justify-center gap-2 md:gap-3">
                                    <Phone size={22} className="shrink-0" /> Call Now
                                </a>
                                <a
                                    href="https://wa.me/917284038244"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-8 md:px-10 py-4 md:py-5 bg-[#25D366] text-white rounded-xl md:rounded-2xl font-black text-lg md:text-xl shadow-xl shadow-green-500/20 hover:bg-[#128C7E] hover:scale-105 transition-all w-full sm:w-auto flex items-center justify-center gap-2 md:gap-3"
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

export default Contact;
