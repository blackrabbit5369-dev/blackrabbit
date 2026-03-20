import SEOPage from '../components/SEOPage';
import { sharedPopularRoutes } from '../utils/seoData';

const AhmedabadToMehsanaTaxi = () => {
  return (
    <SEOPage 
      title="Ahmedabad to Mehsana Taxi | Professional Highway Cabs | Black Rabbit"
      description="Fast and reliable Ahmedabad to Mehsana taxi service. Ideal for dairy visits and industrial travel. Book your Mehsana cab at best prices."
      keywords="Ahmedabad to Mehsana taxi, Mehsana cab from Ahmedabad, Ahmedabad to Mehsana daily taxi, North Gujarat taxi service"
      heroHeading={<>Ahmedabad to Mehsana <br /><span className="text-gold-500">Taxi Service</span></>}
      heroSubheading="Heading to North Gujarat? Book our premium Ahmedabad to Mehsana taxi for a smooth journey."
      bookingService="Outstation Trip"
      defaultPickup="Ahmedabad"
      defaultDropoff="Mehsana"
      serviceDescription={
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-black-900">Efficient Ahmedabad to Mehsana Cab Service</h2>
          <p>
            Explore North Gujarat with our dedicated **Ahmedabad to Mehsana taxi** service. Being a major hub for tourism and the oil and gas industry, Mehsana is a frequent destination for many of our clients. The 75 km journey is covered comfortably in about 1.5 to 2 hours.
          </p>
          <p>
            Our **Mehsana cab from Ahmedabad** provides a reliable link for travelers visiting Modhera Sun Temple or the Dudhsagar Dairy. We offer a fleet of well-maintained sedans and SUVs tailored for North Gujarat's road conditions.
          </p>
          <p>
            With **Ahmedabad to Mehsana daily taxi** services by Black Rabbit, you can be assured of punctuality and fair pricing. Whether you are traveling for work or to explore the heritage of Gujarat, our drivers ensure your journey is safe and pleasant.
          </p>
        </div>
      }
      popularRoutes={sharedPopularRoutes.filter(r => r.link !== '/ahmedabad-to-mehsana-taxi').slice(0, 4)}
    />
  );
};

export default AhmedabadToMehsanaTaxi;
