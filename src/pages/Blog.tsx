import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { sharedPopularRoutes } from '../utils/seoData';
import { MapPin, ArrowRight } from 'lucide-react';

const posts = [
    {
        id: 16,
        title: 'Ahmedabad to Kutch: The Ultimate Road Trip Guide',
        excerpt: 'Planning a road trip from Ahmedabad to Kutch? Our guide covers the best routes and driving times.',
        date: 'April 28, 2026',
        category: 'Travel Guide',
        image: '/images/general/blog-2.jpg',
        link: '/blog/ahmedabad-to-kutch-travel-guide'
    },
    {
        id: 15,
        title: 'How Much Does a Kutch Trip Cost?',
        excerpt: 'A comprehensive budget breakdown for your Kutch adventure, from budget to luxury tiers.',
        date: 'April 26, 2026',
        category: 'Travel Tips',
        image: '/images/general/blog-1.jpg',
        link: '/blog/kutch-tour-cost-breakdown'
    },
    {
        id: 14,
        title: 'Where to Stay in Bhuj: Best Hotels and Resorts',
        excerpt: 'Discover a curated guide to the best accommodations in Bhuj for every budget.',
        date: 'April 24, 2026',
        category: 'Travel Tips',
        image: '/images/general/blog-2.jpg',
        link: '/blog/hotels-in-bhuj'
    },
    {
        id: 13,
        title: 'The Comprehensive Rann Utsav Guide',
        excerpt: 'Everything you need to know about the festival of the white desert, packages, and activities.',
        date: 'April 22, 2026',
        category: 'Travel Guide',
        image: '/images/general/blog-1.jpg',
        link: '/blog/rann-utsav-guide'
    },
    {
        id: 12,
        title: 'Kutch on a Budget: Pro Saving Tips',
        excerpt: 'Experience the magic of the salt desert without breaking the bank with these local tips.',
        date: 'April 20, 2026',
        category: 'Travel Tips',
        image: '/images/general/blog-2.jpg',
        link: '/blog/budget-trip-to-kutch'
    },
    {
        id: 11,
        title: 'Top Places to Visit in Kutch Beyond the Rann',
        excerpt: 'Discover Harappan ruins, pristine beaches, and ancient hills in the diverse Kutch district.',
        date: 'April 18, 2026',
        category: 'Travel Guide',
        image: '/images/general/blog-1.jpg',
        link: '/blog/top-places-in-kutch'
    },
    {
        id: 10,
        title: 'How to Reach Bhuj: Multi-City Transport Guide',
        excerpt: 'A complete logistical guide for reaching Bhuj by air, rail, and road from major Indian cities.',
        date: 'April 16, 2026',
        category: 'Travel Guide',
        image: '/images/general/blog-2.jpg',
        link: '/blog/how-to-reach-bhuj'
    },
    {
        id: 9,
        title: 'The Perfect 2-Day Bhuj Itinerary',
        excerpt: 'How to spend 48 hours exploring palace heritage and the magical white salt desert.',
        date: 'April 14, 2026',
        category: 'Travel Guide',
        image: '/images/general/blog-1.jpg',
        link: '/blog/bhuj-itinerary-2-days'
    },
    {
        id: 8,
        title: 'The Ultimate Rann of Kutch Travel Guide',
        excerpt: 'Everything you need to know about permits, sightseeing, and the white desert adventure.',
        date: 'April 12, 2026',
        category: 'Travel Guide',
        image: '/images/general/blog-2.jpg',
        link: '/blog/rann-of-kutch-travel-guide'
    },
    {
        id: 7,
        title: 'Best Time to Visit Rann of Kutch',
        excerpt: 'A season-by-season guide on weather, full moon dates, and when to see the white desert.',
        date: 'April 10, 2026',
        category: 'Travel Tips',
        image: '/images/general/blog-1.jpg',
        link: '/blog/best-time-to-visit-rann-of-kutch'
    },
    {
        id: 4,
        title: 'Ahmedabad to Bhuj Travel Guide',
        excerpt: 'The essential travel guide for your trip to Kutch. Best routes, heritage sites, and tips for Rann Utsav.',
        date: 'March 15, 2026',
        category: 'Travel Guide',
        image: '/images/general/blog-1.jpg',
        link: '/blog/ahmedabad-to-bhuj-travel-guide'
    },
    {
        id: 5,
        title: 'Best Time to Visit Dwarka',
        excerpt: 'Plan your spiritual pilgrimage to Dwarka with our detailed guide on weather and temple festivals.',
        date: 'March 10, 2026',
        category: 'Spiritual',
        image: '/images/general/blog-2.jpg',
        link: '/blog/best-time-to-visit-dwarka'
    },
    {
        id: 6,
        title: 'Top 5 Places to Visit in Udaipur',
        excerpt: 'Explore the City of Lakes like a local. Must-visit palaces, lakes, and cultural spots in Udaipur.',
        date: 'March 05, 2026',
        category: 'Travel Tips',
        image: '/images/general/blog-1.jpg',
        link: '/blog/top-places-in-udaipur'
    },
    {
        id: 1,
        title: 'Top 5 Tourist Destinations Near Ahmedabad',
        excerpt: 'Explore the best weekend getaways from Ahmedabad. Our luxury cabs make the journey as impressive as the destination.',
        date: 'Oct 15, 2026',
        category: 'Travel Tips',
        image: '/images/general/blog-1.jpg',
        link: '#'
    },
    {
        id: 2,
        title: 'Why Choose Premium Cabs Over Regular Taxis?',
        excerpt: 'Find out why upgrading your travel to a premium sedan or SUV is a safer, more comfortable, and logical choice for corporate travel.',
        date: 'Sep 28, 2026',
        category: 'Insights',
        image: '/images/fleet/swift-dzire.jpg',
        link: '#'
    },
    {
        id: 3,
        title: 'A Guide to Heritage Walks in the Old City',
        excerpt: 'Leave your car behind and take a walking tour. We provide pickup and drop to the core of the walled city.',
        date: 'Sep 10, 2026',
        category: 'Local Guide',
        image: '/images/general/blog-2.jpg',
        link: '#'
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
