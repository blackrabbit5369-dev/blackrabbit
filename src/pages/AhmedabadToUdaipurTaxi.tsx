import SEOPage from '../components/SEOPage';
import { sharedPopularRoutes } from '../utils/seoData';
import { MapPin } from 'lucide-react';

const AhmedabadToUdaipurTaxi = () => {
  return (
    <SEOPage 
      title="Ahmedabad to Udaipur Taxi | Best Udaipur Cab Service | Black Rabbit"
      description="Book Ahmedabad to Udaipur taxi at best rates. Premium outstation cab service from Ahmedabad to Udaipur. Reliable, clean cars and expert drivers."
      keywords="Ahmedabad to Udaipur taxi, Udaipur cab from Ahmedabad, Ahmedabad to Udaipur outstation taxi, Udaipur taxi service"
      heroHeading={<>Ahmedabad to Udaipur <br /><span className="text-gold-500">Taxi Service</span></>}
      heroSubheading="Experience the royal vibes of Udaipur with our premium Ahmedabad to Udaipur intercity taxi service."
      bookingService="Outstation Trip"
      defaultPickup="Ahmedabad"
      defaultDropoff="Udaipur"
      serviceDescription={
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-black-900">Reliable Ahmedabad to Udaipur Cab</h2>
          <p>
            Experience a royal journey from the Manchester of the East to the City of Lakes with our **Ahmedabad to Udaipur taxi** service. The distance of approximately 260 km is covered in about 5 hours through scenic routes, and our professional drivers ensure a safe and enjoyable trip.
          </p>
          <p>
            Whether it's a weekend getaway, a family vacation, or a destination wedding, our **Udaipur cab from Ahmedabad** provides the perfect travel solution. We offer one-way drops as well as round-trip packages at competitive prices. Our outstation specialty ensures you get drivers experienced with highway travel.
          </p>
          <p>
            Looking for a specialized **Ahmedabad to Udaipur outstation taxi**? We provide a range of vehicles from compact sedans to luxury SUVs like Innova Crysta, perfect for the hilly terrain near Rajasthan. Book your Udaipur trip today and travel in style.
          </p>
        </div>
      }
      popularRoutes={sharedPopularRoutes.filter(r => r.link !== '/ahmedabad-to-udaipur-taxi').slice(0, 4)}
      contentSections={[
        {
          title: "Travel Information",
          icon: <MapPin size={24} />,
          content: (
            <div className="space-y-2">
              <p>Key information for your trip to Udaipur:</p>
              <ul className="list-disc pl-5">
                <li>**Distance**: ~260 Kilometers</li>
                <li>**Duration**: 5 - 6 hours via NH 48</li>
                <li>**Must-visit in Udaipur**: City Palace, Lake Pichola, Fatehsagar Lake, Saheliyon-ki-Bari</li>
                <li>**Suggested Starting Time**: Early morning (5 AM - 7 AM) to beat the traffic and enjoy the day in Udaipur</li>
              </ul>
            </div>
          )
        }
      ]}
    />
  );
};

export default AhmedabadToUdaipurTaxi;
