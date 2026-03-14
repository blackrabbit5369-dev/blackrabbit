import { motion } from 'framer-motion';
import { Car, ShieldCheck, Clock, BadgeIndianRupee } from 'lucide-react';

const reasons = [
    {
        title: 'Premium Vehicles',
        description: 'Clean, comfortable, and well-maintained vehicles for every journey.',
        icon: Car,
    },
    {
        title: 'Professional Drivers',
        description: 'Experienced and verified drivers ensuring a safe travel experience.',
        icon: ShieldCheck,
    },
    {
        title: '24/7 Availability',
        description: 'Book rides anytime for airport transfers, outstation trips, or local travel.',
        icon: Clock,
    },
    {
        title: 'Transparent Pricing',
        description: 'No hidden fees. Outstation taxi starts at just ₹15/km. Clear pricing for every ride.',
        icon: BadgeIndianRupee,
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">

                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-extrabold mb-4 text-black-900 leading-tight"
                    >
                        Why Choose <span className="text-gold-500">Black Rabbit</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 max-w-2xl mx-auto font-medium text-lg"
                    >
                        Reliable, safe, and premium taxi services in Ahmedabad.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-gold-50/50 flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-300 border border-gold-100 shadow-sm">
                                <reason.icon size={32} className="text-gold-500 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-black-900 mb-3 group-hover:text-gold-500 transition-colors">
                                {reason.title}
                            </h3>
                            <p className="text-gray-600 font-medium leading-relaxed p-1">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;
