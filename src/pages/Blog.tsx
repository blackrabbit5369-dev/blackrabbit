import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { sharedPopularRoutes } from '../utils/seoData';
import { MapPin, ArrowRight } from 'lucide-react';

const posts = [
    {
        id: 1,
        title: 'Best time to visit Rann of Kutch',
        excerpt: 'Discover the best time to visit the Rann of Kutch. From the Rann Utsav to the monsoons, find out when the white desert is at its most beautiful.',
        date: 'April 08, 2026',
        category: 'Seasonal Guide',
        image: 'https://images.unsplash.com/photo-1590483734724-38ff174407c6?auto=format&fit=crop&q=80',
        link: '/blog/best-time-to-visit-rann-of-kutch'
    },
    {
        id: 2,
        title: 'Rann of Kutch Travel Guide',
        excerpt: 'The essential travel guide for your trip to Kutch. Best routes, heritage sites, and tips for Rann Utsav.',
        date: 'April 08, 2026',
        category: 'Travel Guide',
        image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80',
        link: '/blog/rann-of-kutch-travel-guide'
    },
    {
        id: 3,
        title: 'Bhuj Itinerary 2 Days',
        excerpt: 'Discover the best of Bhuj in just 2 days. Explore palaces, temples, and the vibrant local markets with our curated 48-hour itinerary.',
        date: 'April 08, 2026',
        category: 'Itinerary',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80',
        link: '/blog/bhuj-itinerary-2-days'
    },
    {
        id: 4,
        title: 'How to Reach Bhuj',
        excerpt: 'Planning a trip to Kutch? Learn the best ways to reach Bhuj by air, rail, and road. Comprehensive guide for travelers.',
        date: 'April 08, 2026',
        category: 'Travel Tips',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80',
        link: '/blog/how-to-reach-bhuj'
    },
    {
        id: 5,
        title: 'Top Places in Kutch',
        excerpt: 'Explore the best tourist attractions in Kutch. From the White Rann to historical palaces and wildlife sanctuaries.',
        date: 'April 08, 2026',
        category: 'Must Visit',
        image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80',
        link: '/blog/top-places-in-kutch'
    },
    {
        id: 6,
        title: 'Budget Trip to Kutch',
        excerpt: 'Expert tips for a budget trip to Kutch. Learn how to save on accommodation, travel, and food while experiencing the best of the Rann.',
        date: 'April 08, 2026',
        category: 'Budget Travel',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80',
        link: '/blog/budget-trip-to-kutch'
    },
    {
        id: 7,
        title: 'Rann Utsav Guide',
        excerpt: 'Your complete guide to the Rann Utsav. Learn about festival dates, tent bookings, and cultural activities.',
        date: 'April 08, 2026',
        category: 'Festival Guide',
        image: 'https://images.unsplash.com/photo-1590483734724-38ff174407c6?auto=format&fit=crop&q=80',
        link: '/blog/rann-utsav-guide'
    },
    {
        id: 8,
        title: 'Hotels in Bhuj',
        excerpt: 'Looking for a place to stay in Bhuj? Discover the best hotels, heritage guesthouses, and budget stays in the gateway to Kutch.',
        date: 'April 08, 2026',
        category: 'Accommodation',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80',
        link: '/blog/hotels-in-bhuj'
    },
    {
        id: 9,
        title: 'Kutch Tour Cost Breakdown',
        excerpt: 'Wondering how much a trip to Kutch costs? Our detailed breakdown covers accommodation, transport, and food for every budget.',
        date: 'April 08, 2026',
        category: 'Planning',
        image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80',
        link: '/blog/kutch-tour-cost-breakdown'
    },
    {
        id: 10,
        title: 'Ahmedabad to Kutch Travel Guide',
        excerpt: 'Planning a road trip from Ahmedabad to Kutch? Our guide covers the best routes, stopovers, and travel tips for a perfect journey.',
        date: 'April 08, 2026',
        category: 'Road Trip',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80',
        link: '/blog/ahmedabad-to-kutch-travel-guide'
    }
];

const Blog = () => {
    return (
        <>
            <Helmet>
                <title>Blog | Black Rabbit Tours & Travels</title>
                <meta name="description" content="Read our latest travel guides, tips, and articles about tourism in Gujarat." />
            </Helmet>

            <div className="pt-32 pb-24 min-h-screen bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-4 block">Our Journal</span>
                        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-black-900 mb-6">
                            Latest <span className="text-gold-500">Insights</span>
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
                            Travel tips, guides, and news from the Black Rabbit team. Stay updated with the best travel experiences across Gujarat.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {posts.map((post) => (
                          <Link key={post.id} to={post.link} className="flex flex-col">
                            <article className="luxury-card overflow-hidden group cursor-pointer border-t-[3px] border-t-white hover:border-t-gold-500 flex flex-col h-full transition-all">
                                <div className="h-56 overflow-hidden relative">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-black-900 text-xs font-extrabold px-3 py-1.5 rounded-full uppercase shadow-sm">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-8 flex-grow flex flex-col">
                                    <p className="text-gold-600 text-sm mb-3 font-semibold">{post.date}</p>
                                    <h3 className="text-2xl font-heading font-bold text-black-900 mb-4 group-hover:text-gold-500 transition-colors leading-snug">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 font-medium leading-relaxed mb-6 flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <div className="pt-6 border-t border-gray-100 mt-auto">
                                        <span className="text-gold-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                            Read Article <span>→</span>
                                        </span>
                                    </div>
                                </div>
                            </article>
                          </Link>
                        ))}
                    </div>

                    {/* Popular Routes Section */}
                    <div className="mt-24 pt-16 border-t border-gray-100">
                        <div className="text-center mb-12">
                            <span className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-4 block">Our Network</span>
                            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-black-900 mb-6">
                                Popular <span className="text-gold-500">Taxi Routes</span>
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto font-medium">
                                Explore our most frequent routes and daily taxi services across Gujarat. Premium comfort at affordable rates.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {sharedPopularRoutes.map((route, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link 
                                        to={route.link}
                                        className="group relative block bg-white p-8 rounded-[2rem] border border-gray-100 hover:border-gold-500/50 shadow-sm hover:shadow-[0_20px_50px_-15px_rgba(212,175,55,0.15)] transition-all duration-500 overflow-hidden h-full"
                                    >
                                        {/* Background Decoration */}
                                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-gold-500/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                                        
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-4 mb-8">
                                                <div className="w-12 h-12 bg-black-900 rounded-2xl flex items-center justify-center group-hover:bg-gold-500 transition-colors duration-500 shadow-lg shadow-black-900/10 group-hover:shadow-gold-500/30">
                                                    <MapPin size={22} className="text-gold-500 group-hover:text-white transition-colors duration-500" />
                                                </div>
                                                <div className="h-px flex-grow bg-gradient-to-r from-gray-200 to-transparent" />
                                            </div>

                                            <div className="space-y-1">
                                                <span className="text-[10px] font-black text-gold-600 uppercase tracking-[0.2em]">Service Route</span>
                                                <h4 className="text-xl font-heading font-extrabold text-black-900 flex flex-col gap-1">
                                                    <span className="text-gray-400 text-sm font-medium italic mb-1">From</span>
                                                    {route.from}
                                                    <div className="w-8 h-1 bg-gold-500 my-2 rounded-full group-hover:w-16 transition-all duration-500" />
                                                    <span className="text-gray-400 text-sm font-medium italic mb-1">To</span>
                                                    {route.to}
                                                </h4>
                                            </div>

                                            <div className="mt-8 flex items-center justify-between">
                                                <span className="text-sm font-bold text-black-800 group-hover:text-gold-600 transition-colors">Book Now</span>
                                                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
                                                    <ArrowRight size={18} />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Bottom Accent */}
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
