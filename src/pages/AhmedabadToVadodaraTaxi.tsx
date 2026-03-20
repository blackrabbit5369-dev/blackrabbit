import SEOPage from '../components/SEOPage';
import { sharedPopularRoutes } from '../utils/seoData';

const AhmedabadToVadodaraTaxi = () => {
  return (
    <SEOPage 
      title="Ahmedabad to Vadodara Taxi | Express Cab Service | Black Rabbit"
      description="Book Ahmedabad to Vadodara taxi via NE1 Expressway. Fast and reliable cab service for the cultural city. Best prices for intercity travel."
      keywords="Ahmedabad to Vadodara taxi, Vadodara cab from Ahmedabad, Ahmedabad to Vadodara expressway taxi, Baroda taxi service"
      heroHeading={<>Ahmedabad to Vadodara <br /><span className="text-gold-500">Taxi Service</span></>}
      heroSubheading="Speed and comfort on the National Expressway 1 with our premium Ahmedabad to Vadodara taxi service."
      bookingService="Outstation Trip"
      defaultPickup="Ahmedabad"
      defaultDropoff="Vadodara"
      serviceDescription={
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-black-900">Fast Ahmedabad to Vadodara Cab via NE1</h2>
          <p>
            The route between Ahmedabad and Vadodara via the National Expressway 1 is one of the busiest in the state. Our **Ahmedabad to Vadodara taxi** service provides a fast, safe, and premium way to cover the 110 km distance in less than 2 hours.
          </p>
          <p>
            Whether you are a student, a business professional, or visiting the cultural city for leisure, our **Vadodara cab from Ahmedabad** offers doorstep pickup and drop. Our vehicles are perfectly maintained for expressway travel, ensuring a smooth and noiseless journey.
          </p>
          <p>
            We take pride in being the most trusted **Ahmedabad to Vadodara expressway taxi** provider. With fixed, transparent rates and a fleet of premium sedans and SUVs, Black Rabbit Tours & Travels is your ideal partner for frequent travel on this route.
          </p>
        </div>
      }
      popularRoutes={sharedPopularRoutes.filter(r => r.link !== '/ahmedabad-to-vadodara-taxi').slice(0, 4)}
    />
  );
};

export default AhmedabadToVadodaraTaxi;
