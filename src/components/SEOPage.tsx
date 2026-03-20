import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Phone,
  MapPin,
  CheckCircle2, 
  Car, 
  ShieldCheck, 
  ArrowRight,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface SEOPageProps {
  title: string;
  description: string;
  keywords: string;
  heroHeading: React.ReactNode;
  heroSubheading: string;
  serviceDescription: React.ReactNode;
  popularRoutes: { from: string; to: string; price: string; link: string }[];
  contentSections?: { title: string; content: React.ReactNode; icon: React.ReactNode }[];
  bookingService?: string;
  defaultPickup?: string;
  defaultDropoff?: string;
}

const SEOPage: React.FC<SEOPageProps> = ({
  title,
  description,
  keywords,
  heroHeading,
  heroSubheading,
  serviceDescription,
  popularRoutes,
  contentSections,
  bookingService = "Local Rental",
  defaultPickup = "",
  defaultDropoff = ""
}) => {
  const whatsappNumber = "917284038244";
  const whatsappMsg = encodeURIComponent(`Hello Black Rabbit, I want to book a cab:

Service: ${bookingService}
Pickup: ${defaultPickup}
Drop-off: ${defaultDropoff}
Date:
Time:
Vehicle:`);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

  const fleet = [
    { name: "Sedan", description: "Comfortable for 4 passengers", icon: <Car className="w-6 h-6" /> },
    { name: "SUV", description: "Spacious for 6-7 passengers", icon: <Car className="w-6 h-6 text-gold-500" /> },
    { name: "Innova Crysta", description: "Premium 7-seater comfort", icon: <Car className="w-6 h-6 text-gold-500" /> },
    { name: "Tempo Traveller", description: "Ideal for groups and families", icon: <Car className="w-6 h-6" /> }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 bg-gold-50 text-gold-700 px-4 py-2 rounded-full font-bold text-sm border border-gold-200"
          >
            <ShieldCheck size={18} />
            Trusted by 10,000+ Happy Travelers
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-heading font-extrabold text-black-900 mb-6 leading-tight"
          >
            {heroHeading}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl font-medium"
          >
            {heroSubheading}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary gap-2 text-lg">
              Book Now via WhatsApp
              <ArrowRight size={20} />
            </a>
            <a href="tel:+917284038244" className="btn-secondary gap-2 text-lg">
              <Phone size={20} />
              Call +91 72840 38244
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-gray-100 pt-12"
          >
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-black-900">24/7</span>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Support</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-black-900">0</span>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Happenings</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-black-900">50+</span>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Vehicles</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-black-900">4.9/5</span>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Rating</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Description Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg prose-gold">
            <motion.div {...fadeIn}>
              {serviceDescription}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Daily Taxi Service Ahmedabad (IMPORTANT) */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 text-black-900">
              Daily Taxi Service in <span className="text-gold-500">Ahmedabad</span>
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto font-medium">
              We provide reliable daily taxi service in Ahmedabad for office travel, regular pickup & drop, and monthly bookings. Our daily cab service ensures a smooth commute for professionals and regular travelers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "On-time pickup", icon: <Clock className="w-8 h-8 text-gold-500" /> },
              { title: "Professional drivers", icon: <ShieldCheck className="w-8 h-8 text-gold-500" /> },
              { title: "Comfortable rides", icon: <Car className="w-8 h-8 text-gold-500" /> },
              { title: "Affordable pricing", icon: <CheckCircle2 className="w-8 h-8 text-gold-500" /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h4 className="font-bold text-black-900">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Route Taxi Service (SPECIAL SECTION) */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div {...fadeIn} className="flex-1">
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 text-white">
                Daily Route <span className="text-gold-500">Taxi Service</span>
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed font-medium">
                Our specialized daily routes connect major hubs in Gujarat with fixed schedules and comfortable travel options.
              </p>
              <div className="space-y-6">
                <div className="bg-gray-800 p-6 rounded-2xl border border-gold-500/30">
                  <div className="flex items-center gap-4 mb-4">
                    <MapPin className="text-gold-500" />
                    <h4 className="font-bold text-xl text-white">Popular Daily Routes</h4>
                  </div>
                  <ul className="space-y-3 font-bold text-gold-500 text-lg">
                    <li>Ahmedabad → Gandhidham → Bhuj</li>
                    <li>Bhuj → Gandhidham → Ahmedabad</li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {["Daily availability", "Fixed routes", "One-way & return", "Comfortable travel"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 size={16} className="text-gold-500 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 bg-white/5 p-8 rounded-[40px] border border-white/10 text-center"
            >
              <h4 className="text-2xl font-bold mb-6">Need a Daily Cab?</h4>
              <p className="text-gray-400 mb-8">Get fixed monthly quotes or book a one-time ride on our daily routes.</p>
              <a href={whatsappLink} className="btn-primary w-full">Ask for Daily Rates</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Sections (Custom for each page) */}
      {contentSections && contentSections.map((section, idx) => (
        <section key={idx} className={`section-padding ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <motion.div {...fadeIn} className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gold-50 rounded-xl text-gold-500">{section.icon}</div>
                <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-black-900">{section.title}</h2>
              </div>
              <div className="prose prose-gold max-w-none text-gray-600">
                {section.content}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Fleet Options */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-heading font-extrabold mb-4 text-black-900">
              Our <span className="text-gold-500">Fleet</span> Options
            </motion.h2>
            <motion.p {...fadeIn} className="text-gray-600 max-w-2xl mx-auto font-medium text-lg">
              Choose from our wide range of well-maintained vehicles for a comfortable ride.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {fleet.map((car, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-white border rounded-3xl p-8 text-center hover:border-gold-500 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-gold-500">
                  {car.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
                <p className="text-gray-500 mb-6 text-sm">{car.description}</p>
                <div className="flex justify-center flex-wrap gap-2 mb-8">
                  <span className="text-[10px] font-bold text-gray-400 uppercase border px-2 py-1 rounded">AC</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase border px-2 py-1 rounded">Clean</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase border px-2 py-1 rounded">Safe</span>
                </div>
                <a href={whatsappLink} className="btn-primary w-full py-3 text-sm">Book {car.name}</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gold-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            <motion.div {...fadeIn}>
              <ShieldCheck className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h3 className="text-2xl font-bold mb-4 text-white">Professional Drivers</h3>
              <p className="text-white/80 font-medium font-sans">Our drivers are background-verified, experienced, and highly professional.</p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <Car className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h3 className="text-2xl font-bold mb-4 text-white">Clean & Safe Cars</h3>
              <p className="text-white/80 font-medium font-sans">Every vehicle undergoes regular maintenance and cleaning for your safety.</p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
              <CheckCircle2 className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h3 className="text-2xl font-bold mb-4 text-white">Affordable Pricing</h3>
              <p className="text-white/80 font-medium font-sans">We offer transparent and best-in-market rates with no hidden costs.</p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.6 }}>
              <Clock className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h3 className="text-2xl font-bold mb-4 text-white">On-time Service</h3>
              <p className="text-white/80 font-medium font-sans">Punctuality is our priority. We ensure timely pickups for all your journeys.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Routes Section (Internal Linking) */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 {...fadeIn} className="text-4xl font-heading font-extrabold mb-12 text-black-900">
            More <span className="text-gold-500">Services</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
            {popularRoutes.map((route, idx) => (
              <Link 
                key={idx}
                to={route.link}
                className="group bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-gold-500 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <MapPin className="text-gold-500" />
                  <span className="text-xs font-bold text-gray-400 uppercase">{route.price}</span>
                </div>
                <h4 className="font-bold text-black-900 group-hover:text-gold-500 transition-colors">
                  {route.from} to {route.to} Taxi
                </h4>
                <div className="mt-4 flex items-center gap-2 text-sm text-gold-600 font-bold">
                  View Service <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-white relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-black-900 rounded-[50px] p-12 md:p-20 text-white overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold mb-8 relative z-10 text-white">
              Book Your <span className="text-gold-500">Taxi Now</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 font-medium relative z-10">
              Don't wait! Experience premium taxi service with Black Rabbit Tours & Travels.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary px-12 py-5 text-xl">
                WhatsApp Booking
              </a>
              <a href="tel:+917284038244" className="bg-white/10 hover:bg-white/20 text-white font-bold px-12 py-5 rounded-md transition-all border border-white/20 text-xl inline-flex items-center justify-center gap-2">
                <Phone size={24} />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SEOPage;
