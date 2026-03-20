import SEOPage from '../components/SEOPage';
import { sharedPopularRoutes } from '../utils/seoData';

const AhmedabadToRajkotTaxi = () => {
  return (
    <SEOPage 
      title="Ahmedabad to Rajkot Taxi | Reliable Highway Cabs | Black Rabbit"
      description="Professional Ahmedabad to Rajkot taxi service. Best rates for one-way drops and round trips. Safe travel with experienced drivers. Book now."
      keywords="Ahmedabad to Rajkot taxi, Rajkot cab from Ahmedabad, Ahmedabad to Rajkot highway taxi, daily cab Ahmedabad to Rajkot"
      heroHeading={<>Ahmedabad to Rajkot <br /><span className="text-gold-500">Taxi Service</span></>}
      heroSubheading="The most reliable and comfortable way to travel from Ahmedabad to the heart of Saurashtra, Rajkot."
      bookingService="Outstation Trip"
      defaultPickup="Ahmedabad"
      defaultDropoff="Rajkot"
      serviceDescription={
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-black-900">Premium Ahmedabad to Rajkot Cab Service</h2>
          <p>
            Connect with the cultural and economic heart of Saurashtra with our dedicated **Ahmedabad to Rajkot taxi** service. Spanning approximately 215 km, the journey takes you through the industrial belts and scenic plains of Gujarat in about 4 hours.
          </p>
          <p>
            Our **Rajkot cab from Ahmedabad** is the preferred choice for regular travelers and business executives. We maintain a top-tier fleet to ensure your highway travel is smooth and fatigue-free. Punctuality is our core promise, ensuring you're never late for your appointments in Rajkot.
          </p>
          <p>
            Black Rabbit provides the best **Ahmedabad to Rajkot highway taxi** experience with professional, well-trained drivers. Whether it's a quick one-way drop or a comprehensive business tour, we offer customized packages to suit every traveler's needs and budget.
          </p>
        </div>
      }
      popularRoutes={sharedPopularRoutes.filter(r => r.link !== '/ahmedabad-to-rajkot-taxi').slice(0, 4)}
    />
  );
};

export default AhmedabadToRajkotTaxi;
