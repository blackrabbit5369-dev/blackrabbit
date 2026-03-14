import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Car, Navigation, ChevronDown } from 'lucide-react';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        pickup: '',
        dropoff: '',
        date: '',
        time: '',
        serviceType: 'local',
        vehicleType: '',
    });

    const dateInputRef = useRef<HTMLInputElement>(null);
    const timeInputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `Hello Black Rabbit, I want to book a cab:
Service: ${formData.serviceType}
Pickup: ${formData.pickup}
Drop-off: ${formData.dropoff}
Date: ${formData.date}
Time: ${formData.time}
Vehicle: ${formData.vehicleType || 'Any'}`;

        window.open(`https://wa.me/917284038244?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section id="booking-form" className="relative z-20 container mx-auto px-4 mb-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-100 p-6 md:p-12 max-w-[1400px] mx-auto"
            >
                {/* Service Tabs */}
                <div className="flex flex-row items-center mb-8 md:mb-12 border-b border-gray-100 pb-6 md:pb-8 gap-2 md:gap-4 overflow-x-auto no-scrollbar">
                    <button
                        type="button"
                        onClick={() => setFormData({ ...formData, serviceType: 'local' })}
                        className={`whitespace-nowrap flex-1 md:flex-none px-6 md:px-10 py-3 md:py-4 font-bold rounded-xl md:rounded-2xl transition-all duration-300 ${formData.serviceType === 'local' ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-white shadow-lg shadow-gold-500/30' : 'bg-gray-50 text-gray-500 hover:text-gold-500'}`}
                    >
                        Local
                    </button>
                    <button
                        type="button"
                        onClick={() => setFormData({ ...formData, serviceType: 'airport' })}
                        className={`whitespace-nowrap flex-1 md:flex-none px-6 md:px-10 py-3 md:py-4 font-bold rounded-xl md:rounded-2xl transition-all duration-300 ${formData.serviceType === 'airport' ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-white shadow-lg shadow-gold-500/30' : 'bg-gray-50 text-gray-500 hover:text-gold-500'}`}
                    >
                        Airport
                    </button>
                    <button
                        type="button"
                        onClick={() => setFormData({ ...formData, serviceType: 'outstation' })}
                        className={`whitespace-nowrap flex-1 md:flex-none px-6 md:px-10 py-3 md:py-4 font-bold rounded-xl md:rounded-2xl transition-all duration-300 ${formData.serviceType === 'outstation' ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-white shadow-lg shadow-gold-500/30' : 'bg-gray-50 text-gray-500 hover:text-gold-500'}`}
                    >
                        Outstation
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-12 gap-5 md:gap-6">

                    {/* Pickup - Span 3 */}
                    <div className="relative group lg:col-span-3 xl:col-span-3">
                        <label className="block text-xs font-black text-gray-400 mb-2 md:mb-3 uppercase tracking-widest ml-1">Pick-up Location</label>
                        <div className="flex items-center bg-gray-50 border-2 border-transparent rounded-xl md:rounded-2xl p-4 md:p-5 group-focus-within:bg-white group-focus-within:border-gold-500/50 transition-all duration-300 shadow-inner">
                            <MapPin size={20} className="text-gold-500 mr-3 md:mr-4 shrink-0" />
                            <input
                                type="text"
                                name="pickup"
                                placeholder="e.g. Ahmedabad Airport"
                                required
                                value={formData.pickup}
                                onChange={handleChange}
                                className="bg-transparent border-none outline-none text-black-900 w-full placeholder-gray-300 text-base md:text-[17px] font-bold"
                            />
                        </div>
                    </div>

                    {/* Dropoff - Span 3 */}
                    <div className="relative group lg:col-span-3 xl:col-span-3">
                        <label className="block text-xs font-black text-gray-400 mb-2 md:mb-3 uppercase tracking-widest ml-1">Drop-off Location</label>
                        <div className="flex items-center bg-gray-50 border-2 border-transparent rounded-xl md:rounded-2xl p-4 md:p-5 group-focus-within:bg-white group-focus-within:border-gold-500/50 transition-all duration-300 shadow-inner">
                            <Navigation size={20} className="text-gold-500 mr-3 md:mr-4 shrink-0" />
                            <input
                                type="text"
                                name="dropoff"
                                placeholder="e.g. Iskcon Cross Road"
                                required={formData.serviceType !== 'local'}
                                value={formData.dropoff}
                                onChange={handleChange}
                                className="bg-transparent border-none outline-none text-black-900 w-full placeholder-gray-300 text-base md:text-[17px] font-bold"
                            />
                        </div>
                    </div>

                    {/* Date - Span 2 */}
                    <div className="relative group cursor-pointer lg:col-span-3 xl:col-span-2" onClick={() => dateInputRef.current?.showPicker()}>
                        <label className="block text-xs font-black text-gray-400 mb-2 md:mb-3 uppercase tracking-widest ml-1">Pick-up Date</label>
                        <div className="flex items-center bg-gray-50 border-2 border-transparent rounded-xl md:rounded-2xl p-4 md:p-5 group-focus-within:bg-white group-focus-within:border-gold-500/50 transition-all duration-300 shadow-inner">
                            <Calendar size={20} className="text-gold-500 mr-3 md:mr-4 shrink-0" />
                            <div className="relative w-full">
                                <input
                                    ref={dateInputRef}
                                    type="date"
                                    name="date"
                                    required
                                    value={formData.date}
                                    onChange={handleChange}
                                    className={`bg-transparent border-none outline-none text-black-900 w-full text-base md:text-[17px] font-bold appearance-none cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer ${!formData.date ? 'text-transparent' : ''}`}
                                />
                                {!formData.date && <span className="absolute left-0 top-0 text-gray-300 pointer-events-none text-base md:text-[17px] font-bold">Select Date</span>}
                            </div>
                        </div>
                    </div>

                    {/* Time & Vehicle - Span 4 */}
                    <div className="relative group lg:col-span-3 xl:col-span-4">
                        <label className="block text-xs font-black text-gray-400 mb-2 md:mb-3 uppercase tracking-widest ml-1">Time & Fleet</label>
                        <div className="flex flex-col sm:flex-row bg-gray-50 border-2 border-transparent rounded-xl md:rounded-2xl group-focus-within:bg-white group-focus-within:border-gold-500/50 transition-all duration-300 shadow-inner overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                            {/* Time sub-input */}
                            <div className="flex items-center p-4 md:p-5 w-full sm:w-1/2 cursor-pointer" onClick={() => timeInputRef.current?.showPicker()}>
                                <Clock size={20} className="text-gold-500 mr-3 shrink-0" />
                                <div className="relative w-full">
                                    <input
                                        ref={timeInputRef}
                                        type="time"
                                        name="time"
                                        required
                                        value={formData.time}
                                        onChange={handleChange}
                                        className={`bg-transparent border-none outline-none text-black-900 w-full text-base md:text-lg font-bold appearance-none cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer ${!formData.time ? 'text-transparent' : ''}`}
                                    />
                                    {!formData.time && <span className="absolute left-0 top-0 text-gray-300 pointer-events-none text-base md:text-lg font-bold">Pick Time</span>}
                                </div>
                            </div>
                            {/* Vehicle sub-input */}
                            <div className="flex items-center p-4 md:p-5 w-full sm:w-1/2 relative bg-white/50 sm:bg-transparent">
                                <Car size={20} className="text-gold-500 mr-3 shrink-0" />
                                <div className="relative w-full flex items-center">
                                    <select
                                        name="vehicleType"
                                        value={formData.vehicleType}
                                        onChange={handleChange}
                                        className="bg-transparent border-none outline-none text-black-900 w-full text-base md:text-lg font-bold appearance-none cursor-pointer z-10 pr-6"
                                    >
                                        <option value="">Any Vehicle</option>
                                        <option value="Sedan">Sedan</option>
                                        <option value="SUV">SUV</option>
                                        <option value="Innova">Innova</option>
                                        <option value="Luxury">Luxury</option>
                                    </select>
                                    <ChevronDown size={14} className="text-gold-500 absolute right-0 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="relative md:col-span-2 lg:col-span-6 xl:col-span-12 flex items-end">
                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            type="submit"
                            className="w-full bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 h-16 md:h-[74px] rounded-xl md:rounded-[1.25rem] flex items-center justify-center gap-4 text-white font-extrabold text-lg md:text-xl transition-all duration-300 shadow-xl md:shadow-2xl shadow-gold-500/40 mt-4 md:mt-6 px-8"
                        >
                            <span>Book Premium Ride Now</span>
                        </motion.button>
                    </div>

                </form>
            </motion.div>
        </section>
    );
};

export default BookingForm;
