import React, { useState } from 'react';
import { IMAGES, TESTIMONIALS, BOOKED_DATES, SOCIAL_LINKS } from '../constants';
import { BookingFormData } from '../types';
import { Calendar, CheckCircle, Star } from 'lucide-react';

const BookNow: React.FC = () => {
  const weddingImage = IMAGES.find(img => img.name === "Wedding")?.url;
  const weddingCakeImage = IMAGES.find(img => img.name === "Wedding Cake")?.url;

  const [formData, setFormData] = useState<BookingFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    guests: 30,
    eventType: 'Wedding',
    message: '',
    date: null
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Calendar Helpers
  const currentMonth = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });
  const daysInMonth = 31; // Simplified for demo
  
  const handleDateSelect = (day: number) => {
    if (BOOKED_DATES.includes(day)) return; // Cannot select booked dates
    setFormData(prev => ({ ...prev, date: `${day} ${currentMonth}` }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate Email Trigger
    console.log("SENDING EMAIL TO:", SOCIAL_LINKS.email);
    console.log("PAYLOAD:", formData);
    
    // In a real app, this would be an API call
    // For now, we alert the user and show a success state
    alert(`Booking Request Sent!\n\nWe have sent the details to ${SOCIAL_LINKS.email}.\nWe will call you back to confirm.`);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50 p-4">
        <div className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-lg">
          <CheckCircle className="w-20 h-20 text-sicilian-green mx-auto mb-6" />
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">Grazie Mille!</h2>
          <p className="text-gray-600 mb-8">
            Your booking request has been received. Our team will review your details and contact you shortly to confirm your authentic Sicilian experience.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="text-sicilian-green font-bold hover:underline"
          >
            Submit another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen pb-20">
      <div className="bg-sicilian-green text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Book Your Event</h1>
        <p className="text-xl opacity-90">Let us take care of the food while you make memories.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT COLUMN: Form & Calendar */}
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-serif font-bold mb-6 text-gray-800 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-sicilian-red" />
              Select a Date & Enter Details
            </h2>

            {/* Visual Calendar */}
            <div className="mb-8">
              <div className="text-center font-bold text-lg mb-4">{currentMonth}</div>
              <div className="grid grid-cols-7 gap-2">
                {['S','M','T','W','T','F','S'].map(d => (
                  <div key={d} className="text-center text-xs text-gray-500 font-bold">{d}</div>
                ))}
                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
                  const isBooked = BOOKED_DATES.includes(day);
                  const isSelected = formData.date === `${day} ${currentMonth}`;
                  return (
                    <button
                      key={day}
                      disabled={isBooked}
                      onClick={() => handleDateSelect(day)}
                      className={`
                        aspect-square rounded-full flex items-center justify-center text-sm font-medium transition-all
                        ${isBooked 
                          ? 'bg-red-100 text-red-500 cursor-not-allowed opacity-50' 
                          : isSelected
                            ? 'bg-sicilian-green text-white scale-110 shadow-md'
                            : 'bg-green-50 text-green-700 hover:bg-green-100'
                        }
                      `}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
              <div className="flex gap-4 mt-4 text-sm justify-center">
                <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-red-100 border border-red-200"></div> Booked</div>
                <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-green-50 border border-green-200"></div> Available</div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input required name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sicilian-green focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input required name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sicilian-green focus:border-transparent" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sicilian-green focus:border-transparent" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sicilian-green focus:border-transparent" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Guests (Approx)</label>
                  <input required type="number" min="30" max="500" name="guests" value={formData.guests} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sicilian-green focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                  <select name="eventType" value={formData.eventType} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sicilian-green focus:border-transparent">
                    <option>Wedding</option>
                    <option>Birthday</option>
                    <option>Corporate</option>
                    <option>Anniversary</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {formData.date && (
                 <div className="bg-sicilian-cream border border-sicilian-yellow p-3 rounded text-sm text-sicilian-dark font-medium">
                   Selected Date: {formData.date}
                 </div>
              )}

              <button 
                type="submit" 
                disabled={!formData.date}
                className="w-full bg-sicilian-red text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              >
                {formData.date ? 'Confirm Booking Inquiry' : 'Please Select a Date'}
              </button>
            </form>
          </div>

          {/* RIGHT COLUMN: Visuals & Testimonials */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg h-64">
                <img src={weddingImage} alt="Wedding Setup" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg h-64">
                <img src={weddingCakeImage} alt="Wedding Cake" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h2 className="text-2xl font-serif font-bold mb-6 text-center text-gray-800">What Our Clients Say</h2>
              <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {TESTIMONIALS.map(t => (
                  <div key={t.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center gap-1 text-sicilian-yellow mb-2">
                      {[...Array(t.rating)].map((_, i) => <Star key={i} fill="currentColor" className="w-4 h-4" />)}
                    </div>
                    <p className="text-gray-600 italic mb-2">"{t.text}"</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-800 text-sm">{t.name}</span>
                      <span className="text-xs text-sicilian-green uppercase tracking-wide font-semibold">{t.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookNow;