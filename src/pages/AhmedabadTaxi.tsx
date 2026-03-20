import SEOPage from '../components/SEOPage';
import { sharedPopularRoutes } from '../utils/seoData';

const AhmedabadTaxi = () => {
  return (
    <SEOPage 
      title="Ahmedabad Taxi Service | Cab Service in Ahmedabad | Black Rabbit Tours"
      description="Book reliable Ahmedabad taxi service with Black Rabbit Tours & Travels. Local rides, airport transfers, and outstation cabs at best prices."
      keywords="Ahmedabad taxi service, cab service Ahmedabad, Ahmedabad daily taxi service, Ahmedabad airport taxi, outstation taxi Ahmedabad"
      heroHeading={<>Ahmedabad Taxi Service <br /><span className="text-gold-500">You Can Trust</span></>}
      heroSubheading="Reliable and premium taxi service in Ahmedabad for local, outstation, and airport transfers."
      bookingService="Local Rental"
      defaultPickup="Ahmedabad"
      defaultDropoff="Ahmedabad City"
      serviceDescription={
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-black-900">Premium Taxi Service in Ahmedabad</h2>
          <p>
            Black Rabbit Tours & Travels is your premier destination for high-quality **Ahmedabad taxi service**. Whether you're a local resident needing a quick ride across town or a visitor exploring the heritage city of Ahmedabad, our fleet of modern vehicles and professional drivers are at your service 24/7.
          </p>
          <p>
            As a leading **cab service in Ahmedabad**, we understand the importance of punctuality and comfort. Our service covers all major areas including SG Highway, Vastrapur, Satellite, Prahlad Nagar, and the historic Walled City. We pride ourselves on offering transparent pricing with no hidden costs, making us the most trusted name for **taxi service in Ahmedabad**.
          </p>
          <p>
            From solo travelers to large groups, our diverse fleet including Sedans, SUVs, and Tempo Travellers ensures that we have the perfect vehicle for every need. Book your ride today and experience why we are the top-rated **Ahmedabad taxi service**.
          </p>
        </div>
      }
      popularRoutes={sharedPopularRoutes.filter(r => r.link !== '/ahmedabad-taxi-service').slice(0, 4)}
    />
  );
};

export default AhmedabadTaxi;
