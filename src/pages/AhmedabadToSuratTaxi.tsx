import SEOPage from '../components/SEOPage';
import { sharedPopularRoutes } from '../utils/seoData';

const AhmedabadToSuratTaxi = () => {
  return (
    <SEOPage 
      title="Ahmedabad to Surat Taxi | Premium Intercity Cabs | Black Rabbit"
      description="Book Ahmedabad to Surat taxi at best prices. Reliable intercity cab service for business and leisure. Safe, comfortable, and on-time pickup."
      keywords="Ahmedabad to Surat taxi, Surat cab from Ahmedabad, Ahmedabad to Surat intercity taxi, best taxi service Ahmedabad to Surat"
      heroHeading={<>Ahmedabad to Surat <br /><span className="text-gold-500">Taxi Service</span></>}
      heroSubheading="Experience a premium and comfortable journey from the textile hub of Ahmedabad to the Diamond City of Surat."
      bookingService="Outstation Trip"
      defaultPickup="Ahmedabad"
      defaultDropoff="Surat"
      serviceDescription={
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-black-900">Direct Ahmedabad to Surat Cab Service</h2>
          <p>
            Traveling between Gujarat's two largest economic hubs has never been easier. Our **Ahmedabad to Surat taxi** service provides a seamless connection for business professionals, families, and solo travelers. The 260 km distance is covered in about 4.5 to 5 hours through the well-maintained NH 48.
          </p>
          <p>
            Our **Surat cab from Ahmedabad** is highly regarded for its reliability and premium comfort. We offer a variety of vehicles including sedans for quick business trips and spacious SUVs for family outings. Each journey with Black Rabbit Tours is managed by professional drivers who prioritize your safety and punctuality.
          </p>
          <p>
            As a leading provider of **Ahmedabad to Surat intercity taxi** services, we offer transparent pricing with both one-way and round-trip options. Whether you're heading to Surat for its famous textile markets or for corporate meetings, we ensure you arrive refreshed and on time.
          </p>
        </div>
      }
      popularRoutes={sharedPopularRoutes.filter(r => r.link !== '/ahmedabad-to-surat-taxi').slice(0, 4)}
    />
  );
};

export default AhmedabadToSuratTaxi;
