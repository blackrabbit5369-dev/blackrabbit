import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { AlertCircle, Scale } from 'lucide-react';

const Disclaimer = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="bg-white min-h-screen">
            <Helmet>
                <title>Disclaimer | Black Rabbit Tours & Travels</title>
                <meta name="description" content="Legal disclaimer for Black Rabbit Tours & Travels. Important information regarding our services, content accuracy, and travel liabilities." />
            </Helmet>

            <section className="pt-32 pb-16 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <motion.div {...fadeIn} className="max-w-3xl mx-auto">
                        <div className="inline-block p-4 bg-gold-50 text-gold-500 rounded-2xl mb-6">
                            <Scale size={40} />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-black-900 mb-6">
                            Legal <span className="text-gold-500">Disclaimer</span>
                        </h1>
                        <p className="text-gray-500 font-medium tracking-wide">PLEASE READ THIS CAREFULLY</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto prose prose-lg prose-gold">
                        <motion.div {...fadeIn}>
                            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl mb-12">
                                <div className="flex items-center gap-3 mb-2 text-amber-700">
                                    <AlertCircle size={20} />
                                    <span className="font-bold uppercase tracking-wider text-sm">General Notice</span>
                                </div>
                                <p className="text-amber-800 text-sm m-0">
                                    The information provided by Black Rabbit Tours & Travels ("we," "us," or "our") on this website is for general informational purposes only. All information is provided in good faith, however, we make no representation or warranty of any kind.
                                </p>
                            </div>

                            <h2>1. Professional Advice Disclaimer</h2>
                            <p>
                                The travel information, routes, and pricing provided on this website are for guidance purposes and do not constitute professional travel or legal advice. While we strive for accuracy, travel conditions in Kutch and surrounding areas (including weather, road conditions, and permits) are subject to change without notice.
                            </p>

                            <h2>2. Service Availability</h2>
                            <p>
                                All taxi bookings and tour packages are subject to availability. Black Rabbit Tours & Travels reserves the right to cancel or reschedule a booking due to unforeseen circumstances, vehicle breakdown, or force majeure events. In such cases, our liability is limited to the refund of any advance payment received.
                            </p>

                            <h2>3. Third-Party Links</h2>
                            <p>
                                This website may contain links to external websites that are not provided or maintained by or in any way affiliated with Black Rabbit Tours & Travels. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                            </p>

                            <h2>4. Pricing and Quotes</h2>
                            <p>
                                Estimated quotes provided on our pages (such as cost breakdowns) are indicative of standard market rates and our current service pricing. Final prices for outstation trips, airport transfers, and customized tours will be confirmed at the time of booking via WhatsApp or phone.
                            </p>

                            <h2>5. Limitation of Liability</h2>
                            <p>
                                To the maximum extent permitted by applicable law, Black Rabbit Tours & Travels shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, resulting from your use of our taxi services or your visit to the Kutch region based on our guides.
                            </p>

                            <h2>6. Errors and Omissions</h2>
                            <p>
                                While we have made every attempt to ensure that the information contained on this site has been obtained from reliable sources, Black Rabbit Tours & Travels is not responsible for any errors or omissions, or for the results obtained from the use of this information.
                            </p>

                            <h2>7. Contact and Support</h2>
                            <p>
                                For any legal clarifications or service-related queries, please write to us directly:
                                <br /><strong>Email:</strong> blackrabbit5369@gmail.com
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Disclaimer;
