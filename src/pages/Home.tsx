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
                <meta name="description" content="Experience premium taxi service in Ahmedabad with Black Rabbit. Elevate your journey with our reliable fleet and professional drivers." />
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
