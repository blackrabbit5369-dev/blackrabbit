import SEOPage from '../components/SEOPage';
import { sharedPopularRoutes } from '../utils/seoData';

const LocalTaxiAhmedabad = () => {
  return (
    <SEOPage 
      title="Local Taxi Service Ahmedabad | City Tour & Daily Cabs | Black Rabbit"
      description="Premium local taxi service in Ahmedabad. Book for city tours, daily commutes, or hourly rentals. Safe and affordable local cab rentals."
      keywords="local taxi Ahmedabad, city taxi service Ahmedabad, Ahmedabad local cab rental, daily taxi Ahmedabad"
      heroHeading={<>Local Taxi Service <br /><span className="text-gold-500">in Ahmedabad</span></>}
      heroSubheading="Explore the heritage and modernity of Ahmedabad with our premium local taxi services."
      bookingService="Local Rental"
      defaultPickup="Ahmedabad"
      defaultDropoff="Ahmedabad Local"
      serviceDescription={
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-black-900">Comprehensive Local Cab Service in Ahmedabad</h2>
          <p>
            Whether you're a resident of the city or a visitor, our **local taxi Ahmedabad** service is designed to make your city travel effortless. We offer hourly rentals, full-day packages, and simple point-to-point drops across common areas like C.G. Road, S.G. Highway, and Manek Chowk.
          </p>
          <p>
            Our **city taxi service Ahmedabad** is ideal for sightseeing tours to the Sabarmati Ashram, Adalaj Stepwell, and the historic Walled City. We provide the most professional drivers who can act as local guides, ensuring you don't miss any of Ahmedabad's hidden gems.
          </p>
          <p>
            Black Rabbit's **Ahmedabad local cab rental** options include a variety of vehicles to suit your group size and budget. From quick hatchbacks for single travelers to luxury sedans and SUVs for family outings, we provide a safe, sanitized, and premium experience for all your local travel needs.
          </p>
        </div>
      }
      popularRoutes={sharedPopularRoutes.filter(r => r.link !== '/local-taxi-ahmedabad').slice(0, 4)}
    />
  );
};

export default LocalTaxiAhmedabad;
