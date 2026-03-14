import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: 'Rahul Patel',
        location: 'Ahmedabad',
        text: '"Excellent taxi service! The driver was professional and the car was very clean. Highly recommended."',
        avatar: 'https://ui-avatars.com/api/?name=Rahul+Patel&background=C8A951&color=fff&size=100'
    },
    {
        id: 2,
        name: 'Neha Shah',
        location: 'Gandhinagar',
        text: '"Booked an airport taxi at 4 AM and the driver arrived on time. Very reliable service."',
        avatar: 'https://ui-avatars.com/api/?name=Neha+Shah&background=C8A951&color=fff&size=100'
    },
    {
        id: 3,
        name: 'Amit Desai',
        location: 'Surat',
        text: '"Comfortable trip to Mount Abu with family. The Innova was spacious and well maintained."',
        avatar: 'https://ui-avatars.com/api/?name=Amit+Desai&background=C8A951&color=fff&size=100'
    }
];

const ReviewSlider = () => {
    return (
        <section className="py-24 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 translate-y-1/3" />
            <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-gold-300/10 rounded-full blur-[80px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-extrabold mb-4 text-black-900 leading-tight"
                    >
                        What Our <span className="text-gold-500">Customers Say</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 max-w-2xl mx-auto font-medium text-lg leading-relaxed"
                    >
                        Trusted by hundreds of travelers for safe and comfortable taxi rides.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 transform hover:-translate-y-2 group relative h-full flex flex-col"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-8 right-8 text-gold-500/10 group-hover:text-gold-500/20 transition-colors duration-300">
                                <Quote size={48} />
                            </div>

                            {/* Stars */}
                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill="#C8A951" className="text-gold-500" />
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-600 font-medium leading-relaxed mb-8 relative z-10 flex-grow text-lg italic">
                                {review.text}
                            </p>

                            {/* User Info */}
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold-100 p-0.5">
                                    <img
                                        src={review.avatar}
                                        alt={review.name}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-black-900 text-lg group-hover:text-gold-500 transition-colors">
                                        {review.name}
                                    </h4>
                                    <p className="text-sm font-medium text-gray-500">
                                        {review.location}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ReviewSlider;
