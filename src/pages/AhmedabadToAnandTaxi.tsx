import SEOPage from '../components/SEOPage';
import { sharedPopularRoutes } from '../utils/seoData';

const AhmedabadToAnandTaxi = () => {
  return (
    <SEOPage 
      title="Ahmedabad to Anand Taxi | Reliable Cab Service | Black Rabbit"
      description="Book Ahmedabad to Anand taxi for a comfortable journey to the Milk Capital of India. Professional service, best rates, and on-time pickup."
      keywords="Ahmedabad to Anand taxi, Anand cab from Ahmedabad, Ahmedabad to Anand daily taxi, intercity cab to Anand"
      heroHeading={<>Ahmedabad to Anand <br /><span className="text-gold-500">Taxi Service</span></>}
      heroSubheading="Quick and comfortable taxi service connecting Ahmedabad to the Milk Capital of India, Anand."
      bookingService="Outstation Trip"
      defaultPickup="Ahmedabad"
      defaultDropoff="Anand"
      serviceDescription={
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-black-900">Reliable Ahmedabad to Anand Cab Service</h2>
          <p>
            Anand, known globally for the Amul dairy cooperative, is a significant educational and industrial center. Our **Ahmedabad to Anand taxi** service offers a convenient and efficient way to travel the 75 km distance, covering it in approximately 1.5 hours via the expressway.
          </p>
          <p>
            Our **Anand cab from Ahmedabad** is used regularly by faculty, corporate professionals, and residents of both cities. We ensure that our vehicles are always clean and our drivers are courteous, providing a stress-free travel experience every time.
          </p>
          <p>
            By choosing Black Rabbit's **Ahmedabad to Anand daily taxi** service, you get the benefit of fixed pricing and guaranteed availability. Whether it's for an admission visit to Charotar or a business trip to GIDC, we are here to provide the best ride.
          </p>
        </div>
      }
      popularRoutes={sharedPopularRoutes.filter(r => r.link !== '/ahmedabad-to-anand-taxi').slice(0, 4)}
    />
  );
};

export default AhmedabadToAnandTaxi;
