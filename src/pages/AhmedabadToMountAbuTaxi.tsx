import SEOPage from '../components/SEOPage';
import { sharedPopularRoutes } from '../utils/seoData';
import { MapPin } from 'lucide-react';

const AhmedabadToMountAbuTaxi = () => {
  return (
    <SEOPage 
      title="Ahmedabad to Mount Abu Taxi | Hill Station Cab Service | Black Rabbit"
      description="Book Ahmedabad to Mount Abu taxi. Premium hill station cab service. Safe, comfortable rides to Mount Abu from Ahmedabad at best prices."
      keywords="Ahmedabad to Mount Abu taxi, Cab Ahmedabad to Mount Abu, Ahmedabad to Mount Abu outstation taxi, Mount Abu taxi service"
      heroHeading={<>Ahmedabad to Mount Abu <br /><span className="text-gold-500">Taxi Service</span></>}
      heroSubheading="Cool breeze and comfortable rides to the only hill station in Rajasthan from Ahmedabad."
      bookingService="Outstation Trip"
      defaultPickup="Ahmedabad"
      defaultDropoff="Mount Abu"
      serviceDescription={
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-black-900">Premium Cab from Ahmedabad to Mount Abu</h2>
          <p>
            Escape the heat of Ahmedabad with our dedicated **Ahmedabad to Mount Abu taxi** service. Mount Abu, the only hill station in Rajasthan, is a popular destination for families and honeymooners, located roughly 225 km from Ahmedabad.
          </p>
          <p>
            When you book a **cab from Ahmedabad to Mount Abu** with Black Rabbit, you get a vehicle that is well-prepared for hill climbing and a driver experienced in mountain roads. The 4.5 to 5-hour journey is smooth and enjoyable in our air-conditioned fleet.
          </p>
          <p>
            Our **Ahmedabad to Mount Abu outstation taxi** service includes pick-up from your home, the airport, or the railway station. We provide flexible packages for one-day trips or multi-day stays, ensuring you have a vehicle ready for local sightseeing in Mount Abu as well.
          </p>
        </div>
      }
      popularRoutes={sharedPopularRoutes.filter(r => r.link !== '/ahmedabad-to-mount-abu-taxi').slice(0, 4)}
      contentSections={[
        {
          title: "Trip Highlights",
          icon: <MapPin size={24} />,
          content: (
            <div className="space-y-2">
              <p>What to expect on your Mount Abu trip:</p>
              <ul className="list-disc pl-5">
                <li>**Distance**: ~225 Kilometers</li>
                <li>**Duration**: 4.5 - 5 hours</li>
                <li>**Sightseeing**: Nakki Lake, Delwara Temples, Guru Shikhar, Sunset Point</li>
                <li>**Best Time**: Year-round, especially enjoyable during summers and monsoon</li>
              </ul>
            </div>
          )
        }
      ]}
    />
  );
};

export default AhmedabadToMountAbuTaxi;
