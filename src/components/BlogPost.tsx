import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  title: string;
  date: string;
  author: string;
  category: string;
  image: string;
  children: React.ReactNode;
  seoDescription: string;
  seoKeywords: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  date,
  author,
  category,
  image,
  children,
  seoDescription,
  seoKeywords
}) => {
  const whatsappNumber = "917284038244";
  const whatsappMsg = encodeURIComponent("Hello Black Rabbit, I want to book a cab:\n\nService: Outstation Trip\nPickup:\nDrop-off:\nDate:\nTime:\nVehicle:");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>{title} | Black Rabbit Tours Blog</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gold-600 font-bold mb-8 hover:gap-3 transition-all">
            <ArrowLeft size={20} /> Back to Blog
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <span className="bg-gold-50 text-gold-700 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider border border-gold-100 mb-6 inline-block">
              {category}
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-black-900 mb-8 leading-tight">
              {title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-500 font-medium border-b border-gray-100 pb-8">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-gold-500" />
                {date}
              </div>
              <div className="flex items-center gap-2">
                <User size={18} className="text-gold-500" />
                By {author}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="-mt-12 mb-16 px-4">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white"
          >
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-gold max-w-none text-gray-600 leading-relaxed font-medium">
              {children}
            </div>

            {/* CTA Box */}
            <div className="mt-16 bg-black-900 rounded-[30px] p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Planning a trip to <span className="text-gold-500">Kutch?</span>
                </h3>
                <p className="text-gray-400 mb-8 text-lg">
                  Book your premium taxi with Black Rabbit Tours & Travels for a comfortable and safe journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Book Now via WhatsApp
                  </a>
                  <a href="tel:+917284038244" className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-md transition-all border border-white/20 inline-flex items-center justify-center gap-2">
                    <Phone size={20} /> Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
