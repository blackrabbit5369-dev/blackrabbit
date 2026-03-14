import { Helmet } from 'react-helmet-async';
import BookingForm from '../components/BookingForm';

const Outstation = () => {
    return (
        <>
            <Helmet>
                <title>Outstation Taxi | Black Rabbit Tours & Travels</title>
                <meta name="description" content="Comfortable and safe outstation cabs from Ahmedabad to any city in Gujarat and beyond. Book one-way or round trips." />
            </Helmet>

            <div className="pt-32 pb-20 min-h-screen bg-white">
                <div className="container mx-auto px-4 mb-20 text-center">
                    <span className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-4 block">Long Distance</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-black-900 mb-6">
                        Intercity & <span className="text-gold-500">Outstation</span> Travel
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
                        Planning a trip to Udaipur, Mount Abu, Mumbai, or Rajkot? Choose our premium outstation taxi service for a highly relaxing journey with professional drivers.
                    </p>
                </div>

                <div className="mt-12">
                    <BookingForm />
                </div>

                <div className="container mx-auto px-4 mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 text-center border-t border-gray-100 pt-20">
                    <div className="luxury-card p-8 bg-gray-50 border-none shadow-sm h-full">
                        <h3 className="text-xl font-heading font-bold text-black-900 mb-4">Transparent Pricing</h3>
                        <p className="text-gray-600 font-medium">No hidden charges. Outstation taxi starts at just ₹15/km. Pay per km or opt for fixed route packages with clearly defined toll details.</p>
                    </div>
                    <div className="luxury-card p-8 bg-gray-50 border-none shadow-sm h-full">
                        <h3 className="text-xl font-heading font-bold text-black-900 mb-4">Experienced Drivers</h3>
                        <p className="text-gray-600 font-medium">Chauffeurs familiar with highway routes, night driving safety protocols, and local languages.</p>
                    </div>
                    <div className="luxury-card p-8 bg-gray-50 border-none shadow-sm h-full">
                        <h3 className="text-xl font-heading font-bold text-black-900 mb-4">Flexible Stops</h3>
                        <p className="text-gray-600 font-medium">Your journey, your rules. Take as many breaks as you need during the trip for maximum comfort.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Outstation;
