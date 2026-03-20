import SEOPage from '../components/SEOPage';
import { sharedPopularRoutes } from '../utils/seoData';

const GandhidhamToAhmedabadTaxi = () => {
  return (
    <SEOPage 
      title="Gandhidham to Ahmedabad Taxi | Return Cab Service | Black Rabbit"
      description="Book Gandhidham to Ahmedabad taxi at best prices. Reliable return cabs for SVPI airport and Ahmedabad city. Professional drivers."
      keywords="Gandhidham to Ahmedabad taxi, Ahmedabad cab from Gandhidham, Gandhidham to Ahmedabad airport taxi"
      heroHeading={<>Gandhidham to Ahmedabad <br /><span className="text-gold-500">Taxi Service</span></>}
      heroSubheading="Returning to Ahmedabad? Book our premium Gandhidham to Ahmedabad taxi for a relaxing journey."
      bookingService="Outstation Trip"
      defaultPickup="Gandhidham"
      defaultDropoff="Ahmedabad"
      serviceDescription={
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-black-900">Comfortable Gandhidham to Ahmedabad Cab</h2>
          <p>
            Returning to Ahmedabad from Gandhidham? Our **Gandhidham to Ahmedabad taxi** service provides a stress-free travel experience. Whether you're heading back home or catching a flight at the **Ahmedabad airport**, we ensure you reach your destination on time.
          </p>
          <p>
            Our **Ahmedabad cab from Gandhidham** is popular among professionals who travel frequently between these two major cities. We offer dedicated services for **Gandhidham to Ahmedabad airport taxi** bookings, with drivers who are punctual and familiar with the route.
          </p>
          <p>
            With Black Rabbit Tours & Travels, you get the assurance of a clean vehicle and a safe journey. We offer highly competitive rates for one-way drops from Gandhidham to any part of Ahmedabad.
          </p>
        </div>
      }
      popularRoutes={sharedPopularRoutes.filter(r => r.link !== '/gandhidham-to-ahmedabad-taxi').slice(0, 4)}
    />
  );
};

export default GandhidhamToAhmedabadTaxi;
