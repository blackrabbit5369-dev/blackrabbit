import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, MapPin, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
    {
        id: 1,
        title: "Rann Utsav Special - 3 Days",
        duration: "2 Nights / 3 Days",
        location: "White Desert, Bhuj",
        price: "From ₹8,999",
        image: "https://images.unsplash.com/photo-1590483734724-38ff174407c6?auto=format&fit=crop&q=80",
        features: ["AC Transport", "Luxury Tent Stay", "Cultural Shows", "White Rann Permit"],
        description: "Experience the magic of the endless white salt desert under the moonlight. The most popular package for Kutch visitors."
    },
    {
        id: 2,
        title: "Kutch Heritage Tour",
        duration: "3 Nights / 4 Days",
        location: "Bhuj, Mandvi, Lakhpat",
        price: "From ₹12,499",
        image: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80",
        features: ["Palace Visits", "Private Beach", "Craft Village Tour", "Heritage Hotels"],
        description: "Dive deep into the rich history of Kutch. Visit ancient palaces, remote forts, and the beautiful Mandvi beach."
    },
    {
        id: 3,
        title: "Ahmedabad-Bhuj Weekend",
        duration: "1 Night / 2 Days",
        location: "Bhuj, Ahmedabad",
        price: "From ₹6,999",
        image: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80",
        features: ["Sedan/SUV Pickup", "All Tolls Included", "Local Sightseeing", "Expert Drivers"],
        description: "Perfect for a quick escape. Reliable taxi service from Ahmedabad to Bhuj with local sightseeing included."
    }
];

const Packages = () => {
    return (
        <>
            <Helmet>
                <title>Tour Packages | Black Rabbit Tours & Travels</title>
                <meta name="description" content="Explore our curated Rann of Kutch and Gujarat tour packages. Best prices and premium taxi services." />
            </Helmet>

            <div className="pt-32 pb-24 min-h-screen bg-stone-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-4 block">Tailored Experiences</span>
                        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-black-900 mb-6">
                            Exclusive <span className="text-gold-500">Travel Packages</span>
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto font-medium text-lg">
                            We offer more than just a ride. Discover our handpicked tour packages designed for comfort, luxury, and unforgettable memories.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {packages.map((pkg) => (
                            <motion.div
                                key={pkg.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-black-900/5 group border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute top-4 left-4 bg-black-900/90 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
                                        <Clock size={16} className="text-gold-500" />
                                        {pkg.duration}
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-gold-500 text-black-900 px-4 py-2 rounded-xl text-lg font-black shadow-lg">
                                        {pkg.price}
                                    </div>
                                </div>

                                <div className="p-8 flex-grow flex flex-col">
                                    <div className="flex items-center gap-2 text-gold-600 font-bold text-sm mb-3">
                                        <MapPin size={16} />
                                        {pkg.location}
                                    </div>
                                    <h3 className="text-2xl font-heading font-extrabold text-black-900 mb-4 group-hover:text-gold-600 transition-colors">
                                        {pkg.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 font-medium leading-relaxed">
                                        {pkg.description}
                                    </p>

                                    <div className="space-y-3 mb-8">
                                        {pkg.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                                                <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-auto">
                                        <Link
                                            to="/contact"
                                            className="block w-full text-center bg-black-900 text-white py-4 rounded-2xl font-bold hover:bg-gold-500 hover:text-black-900 transition-all duration-300 transform active:scale-95 shadow-lg shadow-black-900/10"
                                        >
                                            Book This Package
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Custom Package CTA */}
                    <div className="mt-24 p-12 bg-black-900 rounded-[3rem] text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6">
                                Want a <span className="text-gold-500">Customized</span> Itinerary?
                            </h2>
                            <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10 font-medium italic">
                                Tell us your travel dates and preferences, and we'll create a perfectly tailored Kutch experience for you.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 bg-gold-500 text-black-900 px-10 py-5 rounded-full font-black text-lg hover:bg-white hover:scale-105 transition-all shadow-xl shadow-gold-500/20"
                            >
                                Get a Quote Now →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Packages;
