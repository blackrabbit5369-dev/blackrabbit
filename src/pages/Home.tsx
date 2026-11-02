import { Helmet } from 'react-helmet-async';
import VideoHero from '../components/VideoHero';
import BookingForm from '../components/BookingForm';
import WhyChooseUs from '../components/WhyChooseUs';
import FleetCards from '../components/FleetCards';
import PopularRoutes from '../components/PopularRoutes';
import ServiceAreas from '../components/ServiceAreas';
import CallToAction from '../components/CallToAction';
import ReviewSlider from '../components/ReviewSlider';

const Home = () => {
    return (
        <div className="bg-white">
            <Helmet>
                <title>Taxi Service Ahmedabad &amp; Kutch | Black Rabbit Travels</title>
                <meta name="description" content="Black Rabbit Tours &amp; Travels – premium taxi in Ahmedabad, Gandhidham &amp; Kutch. Airport transfers, outstation &amp; local cabs. Call +91 72840 38244. Available 24/7." />
                <link rel="canonical" href="https://blackrabbittravels.com/" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://blackrabbittravels.com/" />
                <meta property="og:title" content="Taxi Service Ahmedabad &amp; Kutch | Black Rabbit Travels" />
                <meta property="og:description" content="Premium taxi service in Ahmedabad, Gandhidham &amp; Kutch. Airport transfers &amp; outstation cabs 24/7. Call +91 72840 38244." />
                <meta property="og:image" content="https://blackrabbittravels.com/images/fleet/innova.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://blackrabbittravels.com/" />
                <meta property="twitter:title" content="Taxi Service Ahmedabad &amp; Kutch | Black Rabbit Travels" />
                <meta property="twitter:description" content="Premium taxi service in Ahmedabad, Gandhidham &amp; Kutch. Call +91 72840 38244. 24/7 airport &amp; outstation cabs." />
                <meta property="twitter:image" content="https://blackrabbittravels.com/images/fleet/innova.png" />

                {/* JSON-LD Structured Data – @graph with TaxiService + LocalBusiness + BreadcrumbList + FAQPage */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "TaxiService",
                                "@id": "https://blackrabbittravels.com/#taxiservice",
                                "name": "Black Rabbit Tour And Travels",
                                "alternateName": "Black Rabbit Travels",
                                "legalName": "Black Rabbit Tour And Travels",
                                "description": "Premium taxi service in Ahmedabad, Gandhidham, Adipur and Kutch. Airport transfers, outstation cabs, and local rides available 24/7.",
                                "url": "https://blackrabbittravels.com/",
                                "telephone": "+917284038244",
                                "priceRange": "₹₹",
                                "currenciesAccepted": "INR",
                                "paymentAccepted": "Cash, UPI, Credit Card",
                                "image": "https://blackrabbittravels.com/images/fleet/innova.png",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "195, Bagirath, Meghper Borichi",
                                    "addressLocality": "Adipur",
                                    "addressRegion": "Gujarat",
                                    "postalCode": "370110",
                                    "addressCountry": "IN"
                                },
                                "geo": {
                                    "@type": "GeoCoordinates",
                                    "latitude": 23.0948,
                                    "longitude": 70.1378
                                },
                                "areaServed": [
                                    "Ahmedabad", "Gandhidham", "Adipur", "Bhuj", "Kutch", "Rajkot", "Gujarat"
                                ],
                                "openingHoursSpecification": {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                                    "opens": "00:00",
                                    "closes": "23:59"
                                },
                                "provider": {
                                    "@type": "LocalBusiness",
                                    "@id": "https://blackrabbittravels.com/#organization",
                                    "name": "Black Rabbit Tour And Travels",
                                    "legalName": "Black Rabbit Tour And Travels",
                                    "url": "https://blackrabbittravels.com/",
                                    "telephone": "+917284038244",
                                    "priceRange": "₹₹",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "195, Bagirath, Meghper Borichi",
                                        "addressLocality": "Adipur",
                                        "addressRegion": "Gujarat",
                                        "postalCode": "370110",
                                        "addressCountry": "IN"
                                    },
                                    "sameAs": [
                                        "https://www.facebook.com/blackrabbittravels",
                                        "https://www.instagram.com/blackrabbittravels",
                                        "https://wa.me/917284038244"
                                    ]
                                }
                            },
                            {
                                "@type": "BreadcrumbList",
                                "@id": "https://blackrabbittravels.com/#breadcrumb",
                                "itemListElement": [
                                    {
                                        "@type": "ListItem",
                                        "position": 1,
                                        "name": "Home",
                                        "item": "https://blackrabbittravels.com/"
                                    }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "@id": "https://blackrabbittravels.com/#faq",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "How do I book a cab with Black Rabbit Travels?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "You can book a cab by calling us at +91 72840 38244, messaging us on WhatsApp at the same number, or filling out the booking form on our website at https://blackrabbittravels.com/book."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What areas does Black Rabbit Travels serve?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "We provide taxi services across Ahmedabad, Gandhidham, Adipur, Bhuj, Kutch, Rajkot, and throughout Gujarat. We also offer outstation trips to Udaipur, Dwarka, Mount Abu, and Surat."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What types of vehicles does Black Rabbit offer?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Our fleet includes Swift Dzire (sedan), SUVs, Innova Crysta (7-seater), and Tempo Traveller (12-seater) to cater to individuals, families, and groups."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Does Black Rabbit Travels operate 24 hours?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes, our taxi service is available 24/7, including airport pickups and drops at any time of day or night."
                                        }
                                    }
                                ]
                            }
                        ]
                    })
                }} />
            </Helmet>

            {/* Hero Section Container */}
            <VideoHero />

            {/* Booking Form Overlay */}
            <div className="bg-gradient-to-b from-transparent to-gray-50 pb-12">
                <BookingForm />
            </div>

            {/* Why Choose Us */}
            <WhyChooseUs />

            {/* Fleet Showcase */}
            <FleetCards />

            {/* Popular Routes Section */}
            <PopularRoutes />

            {/* Service Areas */}
            <ServiceAreas />

            {/* New Main Call to Action Section */}
            <CallToAction />

            {/* Customer Reviews */}
            <ReviewSlider />

        </div>
    );
};

export default Home;
