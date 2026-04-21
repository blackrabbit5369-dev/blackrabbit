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
                <title>Black Rabbit Tours & Travels | Premium Taxi Service Ahmedabad</title>
                <meta name="description" content="Experience premium taxi service in Ahmedabad with Black Rabbit. Elevate your journey with our reliable fleet and professional drivers. Book local and outstation cabs 24/7." />
                <link rel="canonical" href="https://blackrabbittravels.com/" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://blackrabbittravels.com/" />
                <meta property="og:title" content="Black Rabbit Tours & Travels | Premium Taxi Service Ahmedabad" />
                <meta property="og:description" content="Experience premium taxi service in Ahmedabad with Black Rabbit. Reliable local and outstation cabs." />
                <meta property="og:image" content="https://blackrabbittravels.com/logo.jfif" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://blackrabbittravels.com/" />
                <meta property="twitter:title" content="Black Rabbit Tours & Travels | Premium Taxi Service Ahmedabad" />
                <meta property="twitter:description" content="Experience premium taxi service in Ahmedabad with Black Rabbit. Reliable local and outstation cabs." />
                <meta property="twitter:image" content="https://blackrabbittravels.com/logo.jfif" />

                {/* JSON-LD Structured Data */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Black Rabbit Tours & Travels",
                        "image": "https://blackrabbittravels.com/logo.jfif",
                        "@id": "https://blackrabbittravels.com/#organization",
                        "url": "https://blackrabbittravels.com/",
                        "telephone": "+917284038244",
                        "priceRange": "₹₹",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Ahmedabad",
                            "addressRegion": "Gujarat",
                            "postalCode": "380001",
                            "addressCountry": "IN"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 23.0225,
                            "longitude": 72.5714
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday",
                                "Sunday"
                            ],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "sameAs": [
                            "https://www.facebook.com/blackrabbittravels",
                            "https://www.instagram.com/blackrabbittravels"
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
