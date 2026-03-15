import { Helmet } from 'react-helmet-async';

const posts = [
    {
        id: 1,
        title: 'Top 5 Tourist Destinations Near Ahmedabad',
        excerpt: 'Explore the best weekend getaways from Ahmedabad. Our luxury cabs make the journey as impressive as the destination.',
        date: 'Oct 15, 2026',
        category: 'Travel Tips',
        image: '/images/general/blog-1.jpg'
    },
    {
        id: 2,
        title: 'Why Choose Premium Cabs Over Regular Taxis?',
        excerpt: 'Find out why upgrading your travel to a premium sedan or SUV is a safer, more comfortable, and logical choice for corporate travel.',
        date: 'Sep 28, 2026',
        category: 'Insights',
        image: '/images/fleet/swift-dzire.jpg'
    },
    {
        id: 3,
        title: 'A Guide to Heritage Walks in the Old City',
        excerpt: 'Leave your car behind and take a walking tour. We provide pickup and drop to the core of the walled city.',
        date: 'Sep 10, 2026',
        category: 'Local Guide',
        image: '/images/general/blog-2.jpg'
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
                            <article key={post.id} className="luxury-card overflow-hidden group cursor-pointer border-t-[3px] border-t-white hover:border-t-gold-500 flex flex-col h-full">
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
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
