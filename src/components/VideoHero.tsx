import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useRef } from 'react';
const heroCar = '/images/hero/luxury-suv-hero.png';


const VideoHero = () => {
    const ref = useRef(null);

    // Setup Parallax Scroll Effect
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]); // Reduced for mobile
    const carY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

    return (
        <div ref={ref} className="relative min-h-[80vh] lg:min-h-[85vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-white to-[#F7F3E8] pt-24 lg:pt-28 pb-16 lg:pb-32">

            {/* Background with Decorative Elements (Parallax) */}
            <motion.div style={{ y: backgroundY }} className="absolute inset-0 pointer-events-none">
                {/* Soft Map Pattern */}
                <div className="absolute inset-0 bg-[url('/images/general/pattern-cubes.png')] opacity-10" />

                {/* Abstract Curved Lines Suggesting Roads */}
                <svg className="absolute top-0 right-0 w-full h-full opacity-[0.03] text-black-900" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,100 C30,80 70,20 100,0 L100,100 Z" fill="currentColor" />
                    <path d="M-20,100 C10,80 50,20 80,0 L80,100 Z" fill="currentColor" />
                </svg>

                {/* Floating blurred gradient shapes */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-gold-400/20 rounded-full blur-[80px] md:blur-[120px]" />
                <div className="absolute top-1/3 right-10 md:right-20 -translate-y-1/2 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-gold-300/25 rounded-full blur-[60px] md:blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-white/60 rounded-full blur-[50px] md:blur-[90px]" />

                {/* Thin gold travel route lines & subtle moving GPS dots */}
                <svg className="absolute top-1/4 left-1/4 w-[50%] h-[50%] opacity-20 md:opacity-30" viewBox="0 0 200 100" preserveAspectRatio="none overflow-visible">
                    <path id="route1" d="M0,50 Q50,10 100,50 T200,50" fill="none" stroke="#C8A951" strokeWidth="0.5" strokeDasharray="4 4" />
                    <circle r="1.5" fill="#C8A951">
                        <animateMotion dur="10s" repeatCount="indefinite">
                            <mpath href="#route1" />
                        </animateMotion>
                    </circle>
                </svg>
            </motion.div>

            <div className="container mx-auto px-4 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-4 lg:min-h-[500px]">

                    {/* Content Section: Heading & Subheading (Mobile Central, Desktop Left) */}
                    <motion.div style={{ y: textY }} className="w-full lg:w-1/2 text-center lg:text-left space-y-6 lg:pl-4 xl:pl-8 z-20">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            className="inline-block px-4 py-1.5 rounded-full border border-gold-500/30 bg-white/60 backdrop-blur-md text-gold-600 text-xs font-bold tracking-widest uppercase mb-2 shadow-sm"
                        >
                            Ahmedabad's Premium Choice
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-black-900 leading-[1.1] tracking-tight relative z-20"
                        >
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-yellow-600 drop-shadow-sm">Luxury</span> Taxi
                            <br />Service in <br className="hidden md:block" />Ahmedabad
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium relative z-20"
                        >
                            Premium airport transfers, outstation travel, and city rides with professional drivers and luxury vehicles.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="pt-4 md:pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 relative z-20"
                        >
                            <a href="#booking-form" className="w-full sm:w-auto btn-primary text-center text-lg hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_10px_20px_rgba(200,169,81,0.3)] hover:shadow-[0_15px_30px_rgba(200,169,81,0.4)] px-10">
                                Book Your Ride
                            </a>
                            <a href="/fleet" className="w-full sm:w-auto btn-secondary text-center text-lg hover:scale-105 active:scale-95 transition-all duration-300 bg-white/80 backdrop-blur-sm px-10">
                                Explore Our Fleet
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right/Bottom Column: Car Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8, type: "spring", bounce: 0.4 }}
                        style={{ y: carY }}
                        className="w-full lg:w-1/2 relative h-[250px] sm:h-[350px] lg:h-[600px] flex items-center justify-center mt-6 lg:mt-0"
                    >
                        {/* Soft gold glow directly behind car */}
                        <div className="absolute inset-x-0 bottom-0 lg:inset-0 bg-gold-400/20 rounded-full blur-[60px] md:blur-[80px] transform scale-90 lg:scale-75 animate-pulse" style={{ animationDuration: '4s' }} />

                        {/* The actual floating car image */}
                        <motion.img
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            src={heroCar}
                            loading="lazy"
                            alt="Premium SUV"
                            className="object-contain w-full max-w-[500px] md:max-w-[700px] lg:w-[140%] lg:max-w-[1000px] relative z-20 lg:translate-x-16"
                            style={{ filter: 'drop-shadow(0 20px 20px rgba(0,0,0,0.2)) drop-shadow(0 10px 10px rgba(0,0,0,0.1))' }}
                        />
                    </motion.div>

                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold-500 drop-shadow-sm flex flex-col items-center z-10 lg:bottom-10"
            >
                <span className="text-[10px] font-bold tracking-widest uppercase mb-1 text-gray-400">Scroll</span>
                <ArrowDown size={18} />
            </motion.div>
        </div>
    );
};

export default VideoHero;
