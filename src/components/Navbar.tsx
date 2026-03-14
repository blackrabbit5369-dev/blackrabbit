import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Book Ride', path: '/book' },
        { name: 'Our Fleet', path: '/fleet' },
        { name: 'Airport Transfer', path: '/airport' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-500 bg-white ${isScrolled ? 'shadow-soft py-3' : 'py-5 shadow-sm'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="text-2xl font-heading font-bold tracking-wider text-black-900 flex flex-col uppercase leading-none">
                            <span>Black</span>
                            <span className="text-gold-500 group-hover:text-gold-600 transition-colors">Rabbit</span>
                        </div>
                        <div className="hidden sm:flex flex-col text-[10px] text-gray-500 font-medium leading-tight uppercase ml-2 border-l border-gray-200 pl-2">
                            <span>Tours &</span>
                            <span>Travels</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative text-sm font-semibold transition-colors duration-300 py-2 group ${location.pathname === link.path ? 'text-gold-500' : 'text-gray-700 hover:text-gold-500'
                                    }`}
                            >
                                {link.name}
                                {/* Active Indicator Line */}
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-500 rounded-full"
                                    />
                                )}
                                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full rounded-full opacity-0 group-hover:opacity-100" />
                            </Link>
                        ))}

                        <a href="tel:+917284038244" className="flex items-center gap-2 bg-gold-500 text-white hover:bg-gold-600 transition-all shadow-md hover:shadow-lg rounded-full py-2.5 px-6 transform hover:-translate-y-0.5">
                            <Phone size={16} />
                            <span className="text-sm font-semibold tracking-wide">Call Now</span>
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-black-900 p-2 hover:text-gold-500 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className={`fixed inset-0 z-40 lg:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black-900/20 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />

                {/* Menu Content */}
                <motion.div
                    variants={{
                        open: { x: 0 },
                        closed: { x: "100%" }
                    }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="absolute top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl flex flex-col p-8"
                >
                    <div className="flex justify-end mb-8">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 text-black-900 hover:text-gold-500 transition-colors"
                        >
                            <X size={32} />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-6">
                        {navLinks.map((link, idx) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 20 }}
                                transition={{ delay: idx * 0.05 + 0.2 }}
                            >
                                <Link
                                    to={link.path}
                                    className={`text-xl font-heading font-bold transition-colors ${location.pathname === link.path ? 'text-gold-500' : 'text-black-800 hover:text-gold-500'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    <div className="mt-auto pt-8 border-t border-gray-100">
                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
                            transition={{ delay: 0.5 }}
                            href="tel:+917284038244"
                            className="flex items-center justify-center gap-3 bg-gold-500 text-white font-extrabold py-4 rounded-2xl shadow-lg shadow-gold-500/30 active:scale-95 transition-all text-lg"
                        >
                            <Phone size={20} />
                            <span>Call Now</span>
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>
        </header>
    );
};

export default Navbar;
