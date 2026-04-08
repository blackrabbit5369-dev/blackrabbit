import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">

                    {/* Company Info */}
                    <div className="space-y-6">
                        <div className="text-2xl font-heading font-bold tracking-wider text-black-900 flex flex-col uppercase leading-none">
                            <span>Black</span>
                            <span className="text-gold-500">Rabbit</span>
                            <span className="text-xs text-gray-500 tracking-normal font-medium mt-1">Tours & Travels</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed font-medium">
                            Experience luxury, safety, and comfort with Ahmedabad's premier taxi and tour service. We elevate every journey.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-white shadow-soft border border-gray-100 flex items-center justify-center text-gray-700 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all duration-300 transform hover:-translate-y-1">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white shadow-soft border border-gray-100 flex items-center justify-center text-gray-700 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all duration-300 transform hover:-translate-y-1">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white shadow-soft border border-gray-100 flex items-center justify-center text-gray-700 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all duration-300 transform hover:-translate-y-1">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-black-900 font-heading text-lg font-bold mb-6 flex items-center gap-2">
                            Quick Links
                        </h4>
                        <ul className="space-y-4 text-sm font-medium">
                            {['Home', 'Packages', 'Blog', 'About', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-gold-500 transition-colors flex items-center gap-2 group">
                                        <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-gold-500 transition-colors"></span> {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-black-900 font-heading text-lg font-bold mb-6 flex items-center gap-2">
                            Our Services
                        </h4>
                        <ul className="space-y-4 text-sm font-medium">
                            {['Airport Transfer', 'Local City Taxi', 'Outstation Cabs', 'Corporate Travel', 'Wedding Cars'].map((item) => (
                                <li key={item}>
                                    <Link to="/services" className="text-gray-600 hover:text-gold-500 transition-colors flex items-center gap-2 group">
                                        <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-gold-500 transition-colors"></span> {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-black-900 font-heading text-lg font-bold mb-6 flex items-center gap-2">
                            Contact Us
                        </h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4 text-gray-600 text-sm font-medium leading-relaxed">
                                <div className="bg-white p-2 rounded-lg shadow-sm shrink-0 border border-gray-100 text-gold-500">
                                    <MapPin size={18} />
                                </div>
                                <span className="mt-1">
                                    <strong>Head Office:</strong> 195, Bagirath, Meghper Borichi, Adipur, 370110 (Gandhidham)<br />
                                    <strong>Branch Office:</strong> Ahmedabad, Gujarat
                                </span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-600 text-sm font-medium">
                                <div className="bg-white p-2 rounded-lg shadow-sm shrink-0 border border-gray-100 text-gold-500">
                                    <Phone size={18} />
                                </div>
                                <span>+91 72840 38244 <br /> +91 93137 98636</span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-600 text-sm font-medium">
                                <div className="bg-white p-2 rounded-lg shadow-sm shrink-0 border border-gray-100 text-gold-500">
                                    <Mail size={18} />
                                </div>
                                <span>blackrabbit5369@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-600 text-sm font-medium">
                                <div className="bg-white p-2 rounded-lg shadow-sm shrink-0 border border-gray-100 text-gold-500">
                                    <Clock size={18} />
                                </div>
                                <span>24/7 Available</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm font-medium">
                        &copy; {new Date().getFullYear()} Black Rabbit Tours & Travels. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500 font-medium">
                        <Link to="/privacy-policy" className="hover:text-gold-500 transition-colors">Privacy Policy</Link>
                        <Link to="/disclaimer" className="hover:text-gold-500 transition-colors">Disclaimer</Link>
                        <Link to="/about" className="hover:text-gold-500 transition-colors">About Us</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
