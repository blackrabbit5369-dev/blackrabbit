import { Helmet } from 'react-helmet-async';

const Disclaimer = () => {
    return (
        <>
            <Helmet>
                <title>Disclaimer | Black Rabbit Tours & Travels</title>
                <meta name="description" content="Disclaimer for Black Rabbit Tours & Travels. Please read our terms and limitations of service." />
            </Helmet>

            <div className="pt-32 pb-24 bg-white text-gray-800">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl font-heading font-extrabold text-black-900 mb-8 border-b pb-4">Disclaimer</h1>
                    
                    <div className="prose prose-lg max-w-none space-y-6">
                        <section>
                            <h2 className="text-2xl font-bold text-black-800">General Information</h2>
                            <p>
                                The information provided by Black Rabbit Tours & Travels ("we," "us," or "our") on this website is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black-800">Travel & Service Risks</h2>
                            <p>
                                Traveling involves inherent risks. Black Rabbit Tours & Travels acts only as an agent for the various independent suppliers that provide transportation, sightseeing, activities, or other services connected with the tours. Such services are subject to the terms and conditions of those suppliers. We are not responsible for any injury, loss, death, accident, delay, or irregularity which may be occasioned by either reason or defect of any vehicle, or through the acts or default of any company or person engaged in conveying the passenger or in carrying out the arrangements of the tour.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black-800">External Links Disclaimer</h2>
                            <p>
                                The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black-800">Professional Advice</h2>
                            <p>
                                The site cannot and does not contain travel-specific legal or safety advice. The travel information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black-800">Limited Liability</h2>
                            <p>
                                Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black-800">Contact Us</h2>
                            <p>
                                If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at info@blackrabbit.in.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Disclaimer;
