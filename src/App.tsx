import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BookRide from './pages/BookRide';
import Fleet from './pages/Fleet';
import Airport from './pages/Airport';
import Outstation from './pages/Outstation';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import AhmedabadTaxi from './pages/AhmedabadTaxi';
import AhmedabadAirportTaxi from './pages/AhmedabadAirportTaxi';
import AhmedabadToUdaipurTaxi from './pages/AhmedabadToUdaipurTaxi';
import AhmedabadToMountAbuTaxi from './pages/AhmedabadToMountAbuTaxi';
import AhmedabadToDwarkaTaxi from './pages/AhmedabadToDwarkaTaxi';
import AhmedabadToBhujTaxi from './pages/AhmedabadToBhujTaxi';
import AhmedabadToGandhidhamTaxi from './pages/AhmedabadToGandhidhamTaxi';
import GandhidhamToAhmedabadTaxi from './pages/GandhidhamToAhmedabadTaxi';
import BhujToAhmedabadTaxi from './pages/BhujToAhmedabadTaxi';
import AdipurToAhmedabadTaxi from './pages/AdipurToAhmedabadTaxi';
import AhmedabadToSuratTaxi from './pages/AhmedabadToSuratTaxi';
import AhmedabadToRajkotTaxi from './pages/AhmedabadToRajkotTaxi';
import AhmedabadToVadodaraTaxi from './pages/AhmedabadToVadodaraTaxi';
import AhmedabadToAnandTaxi from './pages/AhmedabadToAnandTaxi';
import AhmedabadToMehsanaTaxi from './pages/AhmedabadToMehsanaTaxi';
import GandhidhamToBhujTaxi from './pages/GandhidhamToBhujTaxi';
import BhujToGandhidhamTaxi from './pages/BhujToGandhidhamTaxi';
import AdipurToBhujTaxi from './pages/AdipurToBhujTaxi';
import AdipurToGandhidhamTaxi from './pages/AdipurToGandhidhamTaxi';
import LocalTaxiAhmedabad from './pages/LocalTaxiAhmedabad';
import AhmedabadToBhujTravelGuide from './pages/blog/AhmedabadToBhujTravelGuide';
import BestTimeToVisitDwarka from './pages/blog/BestTimeToVisitDwarka';
import TopPlacesInUdaipur from './pages/blog/TopPlacesInUdaipur';
import BestTimeToVisitRannOfKutch from './pages/blog/BestTimeToVisitRannOfKutch';
import RannOfKutchTravelGuide from './pages/blog/RannOfKutchTravelGuide';
import BhujItinerary2Days from './pages/blog/BhujItinerary2Days';
import HowToReachBhuj from './pages/blog/HowToReachBhuj';
import TopPlacesInKutch from './pages/blog/TopPlacesInKutch';
import BudgetTripToKutch from './pages/blog/BudgetTripToKutch';
import RannUtsavGuide from './pages/blog/RannUtsavGuide';
import HotelsInBhuj from './pages/blog/HotelsInBhuj';
import KutchTourCostBreakdown from './pages/blog/KutchTourCostBreakdown';
import AhmedabadToKutchTravelGuide from './pages/blog/AhmedabadToKutchTravelGuide';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';

// ScrollToTop component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-black-900 text-white font-sans">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/book" element={<BookRide />} />
              <Route path="/fleet" element={<Fleet />} />
              <Route path="/airport" element={<Airport />} />
              <Route path="/outstation" element={<Outstation />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/ahmedabad-taxi-service" element={<AhmedabadTaxi />} />
            <Route path="/ahmedabad-airport-taxi" element={<AhmedabadAirportTaxi />} />
            <Route path="/ahmedabad-to-udaipur-taxi" element={<AhmedabadToUdaipurTaxi />} />
            <Route path="/ahmedabad-to-mount-abu-taxi" element={<AhmedabadToMountAbuTaxi />} />
            <Route path="/ahmedabad-to-dwarka-taxi" element={<AhmedabadToDwarkaTaxi />} />
            <Route path="/ahmedabad-to-bhuj-taxi" element={<AhmedabadToBhujTaxi />} />
            <Route path="/ahmedabad-to-gandhidham-taxi" element={<AhmedabadToGandhidhamTaxi />} />
            <Route path="/gandhidham-to-ahmedabad-taxi" element={<GandhidhamToAhmedabadTaxi />} />
            <Route path="/bhuj-to-ahmedabad-taxi" element={<BhujToAhmedabadTaxi />} />
            <Route path="/adipur-to-ahmedabad-taxi" element={<AdipurToAhmedabadTaxi />} />
            <Route path="/ahmedabad-to-surat-taxi" element={<AhmedabadToSuratTaxi />} />
            <Route path="/ahmedabad-to-rajkot-taxi" element={<AhmedabadToRajkotTaxi />} />
            <Route path="/ahmedabad-to-vadodara-taxi" element={<AhmedabadToVadodaraTaxi />} />
            <Route path="/ahmedabad-to-anand-taxi" element={<AhmedabadToAnandTaxi />} />
            <Route path="/ahmedabad-to-mehsana-taxi" element={<AhmedabadToMehsanaTaxi />} />
            <Route path="/gandhidham-to-bhuj-taxi" element={<GandhidhamToBhujTaxi />} />
            <Route path="/bhuj-to-gandhidham-taxi" element={<BhujToGandhidhamTaxi />} />
            <Route path="/adipur-to-bhuj-taxi" element={<AdipurToBhujTaxi />} />
            <Route path="/adipur-to-gandhidham-taxi" element={<AdipurToGandhidhamTaxi />} />
            <Route path="/local-taxi-ahmedabad" element={<LocalTaxiAhmedabad />} />
            
            {/* Blog Routes */}
            <Route path="/blog/ahmedabad-to-bhuj-travel-guide" element={<AhmedabadToBhujTravelGuide />} />
            <Route path="/blog/best-time-to-visit-dwarka" element={<BestTimeToVisitDwarka />} />
            <Route path="/blog/top-places-in-udaipur" element={<TopPlacesInUdaipur />} />
            <Route path="/blog/best-time-to-visit-rann-of-kutch" element={<BestTimeToVisitRannOfKutch />} />
            <Route path="/blog/rann-of-kutch-travel-guide" element={<RannOfKutchTravelGuide />} />
            <Route path="/blog/bhuj-itinerary-2-days" element={<BhujItinerary2Days />} />
            <Route path="/blog/how-to-reach-bhuj" element={<HowToReachBhuj />} />
            <Route path="/blog/top-places-in-kutch" element={<TopPlacesInKutch />} />
            <Route path="/blog/budget-trip-to-kutch" element={<BudgetTripToKutch />} />
            <Route path="/blog/rann-utsav-guide" element={<RannUtsavGuide />} />
            <Route path="/blog/hotels-in-bhuj" element={<HotelsInBhuj />} />
            <Route path="/blog/kutch-tour-cost-breakdown" element={<KutchTourCostBreakdown />} />
            <Route path="/blog/ahmedabad-to-kutch-travel-guide" element={<AhmedabadToKutchTravelGuide />} />
              {/* Catch-all route mapping any unknown service pages to Home or Contact */}
              <Route path="/services" element={<Home />} />
              <Route path="/privacy-policy" element={<Home />} />
              <Route path="/terms-conditions" element={<Home />} />
            </Routes>
          </main>
          <Footer />

          {/* Floating WhatsApp Button */}
          <a
            href="https://wa.me/917284038244"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-[9999] hover:scale-110 flex items-center justify-center animate-bounce"
            aria-label="Contact on WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.437-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
          </a>
        </div>
        <Analytics />
      </Router>
    </HelmetProvider>
  );
}

export default App;
