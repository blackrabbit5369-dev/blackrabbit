import SEOPage from '../components/SEOPage';
import { sharedPopularRoutes } from '../utils/seoData';
import { Building } from 'lucide-react';

const AhmedabadToGandhidhamTaxi = () => {
  return (
    <SEOPage 
      title="Ahmedabad to Gandhidham Taxi | Business Cab Service | Black Rabbit"
      description="Professional Ahmedabad to Gandhidham taxi service. Ideal for business travel and regular commutes. Book your Gandhidham cab now."
      keywords="Ahmedabad to Gandhidham taxi, Gandhidham cab from Ahmedabad, Ahmedabad to Gandhidham daily taxi"
      heroHeading={<>Ahmedabad to Gandhidham <br /><span className="text-gold-500">Taxi Service</span></>}
      heroSubheading="Seamless business travel from Ahmedabad to the commercial hub of Gandhidham."
      bookingService="Outstation Trip"
      defaultPickup="Ahmedabad"
      defaultDropoff="Gandhidham"
      serviceDescription={
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-black-900">Premium Ahmedabad to Gandhidham Cab</h2>
          <p>
            Gandhidham, being a major economic and transport hub near Kandla Port, generates high demand for professional travel. Our **Ahmedabad to Gandhidham taxi** service is designed specifically to meet the needs of business executives and regular travelers.
          </p>
          <p>
            The 300 km distance is covered efficiently by our well-maintained fleet. Our **Gandhidham cab from Ahmedabad** offers doorstep pickup and drop, ensuring you can focus on your work while we handle the road. We understand the value of time in business, which is why punctuality is our hallmark.
          </p>
          <p>
            Our **Ahmedabad to Gandhidham daily taxi** service offers fixed rates and professional management, making us the top choice for corporate clients and individual business travelers alike.
          </p>
        </div>
      }
      popularRoutes={sharedPopularRoutes.filter(r => r.link !== '/ahmedabad-to-gandhidham-taxi').slice(0, 4)}
      contentSections={[
        {
          title: "Ideal for Business",
          icon: <Building size={24} />,
          content: (
            <div className="space-y-2">
              <p>Why choose us for your Gandhidham trip:</p>
              <ul className="list-disc pl-5">
                <li>Professional, background-verified drivers</li>
                <li>Clean, well-maintained Sedans and SUVs</li>
                <li>Fixed, transparent pricing for corporate billing</li>
                <li>Daily availability with flexible departure times</li>
              </ul>
            </div>
          )
        }
      ]}
    />
  );
};

export default AhmedabadToGandhidhamTaxi;
