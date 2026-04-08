import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
    return (
        <>
            <Helmet>
                <title>Privacy Policy | Black Rabbit Tours & Travels</title>
                <meta name="description" content="Privacy Policy for Black Rabbit Tours & Travels. Learn how we collect, use, and protect your data." />
            </Helmet>

            <div className="pt-32 pb-24 bg-white text-gray-800">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl font-heading font-extrabold text-black-900 mb-8 border-b pb-4">Privacy Policy</h1>
                    
                    <div className="prose prose-lg max-w-none space-y-6">
                        <section>
                            <h2 className="text-2xl font-bold text-black-800">1. Introduction</h2>
                            <p>
                                Welcome to Black Rabbit Tours & Travels. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black-800">2. Data We Collect</h2>
                            <p>
                                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                                <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                                <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black-800">3. How We Use Your Data</h2>
                            <p>
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>To register you as a new customer.</li>
                                <li>To process and deliver your booking including: (a) Manage payments, fees and charges; (b) Collect and recover money owed to us.</li>
                                <li>To manage our relationship with you.</li>
                                <li>To improve our website, products/services, marketing, customer relationships and experiences.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black-800">4. Data Security</h2>
                            <p>
                                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black-800">5. Cookies</h2>
                            <p>
                                You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black-800">6. Contact Us</h2>
                            <p>
                                If you have any questions about this privacy policy or our privacy practices, please contact us at:
                            </p>
                            <p className="font-bold">
                                Black Rabbit Tours & Travels<br />
                                Email: info@blackrabbit.in<br />
                                Phone: +91 72840 38244
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;
