import SEOPage from '../components/SEOPage';
import { sharedPopularRoutes } from '../utils/seoData';
import { Plane } from 'lucide-react';

const AhmedabadAirportTaxi = () => {
  return (
    <SEOPage 
      title="Ahmedabad Airport Taxi | SVPI Airport Cab Service | Black Rabbit"
      description="Reliable Ahmedabad airport taxi service. 24/7 airport pickup and drop at SVPI Ahmedabad. Book your airport cab with Black Rabbit Tours & Travels."
      keywords="Ahmedabad airport taxi, airport cab Ahmedabad, SVPI airport taxi, Ahmedabad airport pickup, Ahmedabad airport drop taxi"
      heroHeading={<>Ahmedabad Airport <br /><span className="text-gold-500">Taxi Service</span></>}
      heroSubheading="Fastest and most reliable airport transfer service to and from Sardar Vallabhbhai Patel International Airport."
      bookingService="Airport Transfer"
      defaultPickup="Ahmedabad Airport"
      defaultDropoff="Ahmedabad City"
      serviceDescription={
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-black-900">On-Time Ahmedabad Airport Taxi</h2>
          <p>
            Arriving at or departing from Sardar Vallabhbhai Patel International Airport? Ensure a smooth transition with our specialized **Ahmedabad airport taxi** service. We provide dedicated **airport pickup Ahmedabad** and drop-off services that are punctual, reliable, and comfortable.
          </p>
          <p>
            Our drivers are well-versed with airport protocols and flight timings. Don't worry about flight delays; we monitor your flight status to ensure your **airport cab Ahmedabad** is waiting for you when you land. No more long queues or over-priced on-the-spot bookings.
          </p>
          <p>
            Whether you're traveling for business or leisure, our **Ahmedabad airport pickup** service offers the convenience of doorstep service. Looking for an **airport drop taxi in Ahmedabad**? Book in advance for early morning or late-night flights to ensure you never miss your departure.
          </p>
        </div>
      }
      popularRoutes={sharedPopularRoutes.filter(r => r.link !== '/ahmedabad-airport-taxi').slice(0, 4)}
      contentSections={[
        {
          title: "Airport Logistics",
          icon: <Plane size={24} />,
          content: (
            <div className="space-y-2">
              <p>We provide coverage for both Domestic (Terminal 1) and International (Terminal 2) terminals at SVPI Airport. Our service includes:</p>
              <ul className="list-disc pl-5">
                <li>Professional meet and greet service at arrivals</li>
                <li>Assistance with luggage handling</li>
                <li>Clean, sanitized vehicles for a fresh start or end to your journey</li>
                <li>Fixed, transparent rates from the airport to any part of Ahmedabad or outstation</li>
              </ul>
            </div>
          )
        }
      ]}
    />
  );
};

export default AhmedabadAirportTaxi;
