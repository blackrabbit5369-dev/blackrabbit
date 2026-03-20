import SEOPage from '../components/SEOPage';
import { sharedPopularRoutes } from '../utils/seoData';
import { MapPin } from 'lucide-react';

const AhmedabadToDwarkaTaxi = () => {
  return (
    <SEOPage 
      title="Ahmedabad to Dwarka Taxi | Pilgrimage Cab Service | Black Rabbit"
      description="Book Ahmedabad to Dwarka taxi for a spiritual journey. Reliable outstation taxi service for Dwarkadhish temple visit. Best rates guaranteed."
      keywords="Ahmedabad to Dwarka taxi, Ahmedabad to Dwarka outstation taxi, Dwarka cab service from Ahmedabad, Dwarkadhish temple taxi"
      heroHeading={<>Ahmedabad to Dwarka <br /><span className="text-gold-500">Taxi Service</span></>}
      heroSubheading="Spiritual journey made comfortable with our premium Ahmedabad to Dwarka taxi service."
      bookingService="Outstation Trip"
      defaultPickup="Ahmedabad"
      defaultDropoff="Dwarka"
      serviceDescription={
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-black-900">Safe Pilgrimage: Ahmedabad to Dwarka Cab</h2>
          <p>
            Embark on a divine journey to the holy abode of Lord Krishna with our **Ahmedabad to Dwarka taxi** service. Dwarka is approximately 440 km from Ahmedabad, a journey that takes about 8 to 9 hours. Our experienced drivers ensure a fatigue-free trip so you can focus on your pilgrimage.
          </p>
          <p>
            Our **Ahmedabad to Dwarka outstation taxi** is perfect for families traveling for darshan at the Dwarkadhish Temple. We also provide extended trips that include visits to Somnath, Nageshwar Jyotirlinga, and Bet Dwarka.
          </p>
          <p>
            When you book a **Dwarka cab service from Ahmedabad** with us, you get a clean, reliable vehicle and a professional driver who knows the Gujarat highways well. We offer competitive pricing for round-trips and multi-day pilgrimage tours.
          </p>
        </div>
      }
      popularRoutes={sharedPopularRoutes.filter(r => r.link !== '/ahmedabad-to-dwarka-taxi').slice(0, 4)}
      contentSections={[
        {
          title: "Pilgrimage Guide",
          icon: <MapPin size={24} />,
          content: (
            <div className="space-y-2">
              <p>Plan your Dwarka visit:</p>
              <ul className="list-disc pl-5">
                <li>**Distance**: ~440 Kilometers</li>
                <li>**Duration**: 8 - 9 hours</li>
                <li>**Key Destinations**: Dwarkadhish Temple, Bet Dwarka, Rukmini Devi Temple, Gomti Ghat</li>
                <li>**Tip**: Consider a 2-3 day trip to cover both Dwarka and Somnath comfortably</li>
              </ul>
            </div>
          )
        }
      ]}
    />
  );
};

export default AhmedabadToDwarkaTaxi;
