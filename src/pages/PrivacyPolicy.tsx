import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Shield } from 'lucide-react';

const PrivacyPolicy = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="bg-white min-h-screen">
            <Helmet>
                <title>Privacy Policy | Black Rabbit Tours & Travels</title>
                <meta name="description" content="Privacy Policy for Black Rabbit Tours & Travels. Learn how we collect, use, and protect your personal information." />
            </Helmet>

            <section className="pt-32 pb-16 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <motion.div {...fadeIn} className="max-w-3xl mx-auto">
                        <div className="inline-block p-4 bg-gold-50 text-gold-500 rounded-2xl mb-6">
                            <Shield size={40} />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-black-900 mb-6">
                            Privacy <span className="text-gold-500">Policy</span>
                        </h1>
                        <p className="text-gray-500 font-medium">Last Updated: April 2026</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto prose prose-lg prose-gold">
                        <motion.div {...fadeIn}>
                            <h2>1. Information We Collect</h2>
                            <p>
                                At Black Rabbit Tours & Travels, we collect information to provide better services to all our customers. The types of personal information we collect include:
                            </p>
                            <ul>
                                <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address.</li>
                                <li><strong>Booking Details:</strong> Pickup and drop-off locations, travel dates, passenger count, and vehicle preferences.</li>
                                <li><strong>Payment Information:</strong> While we use secure third-party payment processors, we may collect billing information necessary for transactions.</li>
                            </ul>

                            <h2>2. How We Use Your Information</h2>
                            <p>
                                Your information is used solely for the following purposes:
                            </p>
                            <ul>
                                <li>To process and manage your taxi bookings and travel arrangements.</li>
                                <li>To communicate with you regarding your service requests and provide support.</li>
                                <li>To improve our website functionality and customer experience.</li>
                                <li>To send promotional offers and updates (only if you have opted in).</li>
                            </ul>

                            <h2>3. Data Protection and Security</h2>
                            <p>
                                We prioritize the security of your data. We implement a variety of security measures, including encryption and secure socket layer (SSL) technology, to maintain the safety of your personal information when you place a booking or enter your information.
                            </p>

                            <h2>4. Sharing Information with Third Parties</h2>
                            <p>
                                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.
                            </p>

                            <h2>5. Cookies and Web Analytics</h2>
                            <p>
                                Our website uses cookies to enhance user experience. Cookies help us remember and process the items in your booking and understand your preferences for future visits. We also use analytics tools to monitor traffic and usage patterns to improve our service offerings.
                            </p>

                            <h3>5.1 Google AdSense Disclosures</h3>
                            <p>
                                We use Google AdSense to serve ads on our website. Google, as a third-party vendor, uses cookies to serve ads on your site. Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your site and/or other sites on the Internet.
                            </p>
                            <ul>
                                <li>Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.</li>
                                <li>Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.</li>
                                <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Ads Settings</a>.</li>
                            </ul>

                            <h2>6. Your Rights</h2>
                            <p>
                                You have the right to:
                            </p>
                            <ul>
                                <li>Access the personal data we hold about you.</li>
                                <li>Request the correction of inaccurate personal data.</li>
                                <li>Request the deletion of your personal data under certain conditions.</li>
                            </ul>

                            <h2>7. Changes to This Policy</h2>
                            <p>
                                Black Rabbit Tours & Travels reserves the right to update this Privacy Policy at any time. We will notify customers of any significant changes by posting the new policy on this page.
                            </p>

                            <h2>8. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at:
                                <br /><strong>Email:</strong> blackrabbit5369@gmail.com
                                <br /><strong>Phone:</strong> +91 72840 38244
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
