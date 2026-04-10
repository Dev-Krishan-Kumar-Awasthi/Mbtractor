import { useState } from 'react';
import { Camera, Upload, CheckCircle } from 'lucide-react';

export default function ValuationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    vehicleType: '',
    makeModel: '',
    year: '',
    hoursKms: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id || e.target.name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct WhatsApp Message
    const message = `*Used Vehicle Valuation Request*%0A%0A` +
      `*Name:* ${formData.fullName}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Vehicle:* ${formData.vehicleType}%0A` +
      `*Make & Model:* ${formData.makeModel}%0A` +
      `*Year:* ${formData.year}%0A` +
      `*Usage:* ${formData.hoursKms} (Hrs/KMs)%0A%0A` +
      `Sent from MB Tractors Website`;

    const whatsappUrl = `https://wa.me/917470655510?text=${message}`;
    
    setSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  if (submitted) {
    return (
      <div className="glass p-10 rounded-2xl w-full max-w-2xl mx-auto text-center flex flex-col items-center justify-center min-h-[400px] text-left">
        <CheckCircle className="h-20 w-20 text-forest-green mb-4" />
        <h3 className="text-3xl font-bold text-forest-green-dark mb-4">Request Submitted Successfully!</h3>
        <p className="text-gray-600 font-medium text-lg">
          Opening WhatsApp for the final step... Our team will review the details shortly. 😊
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-8 text-forest-green font-bold underline hover:text-forest-green-light"
        >
          Submit another vehicle
        </button>
      </div>
    );
  }

  return (
    <div className="glass p-8 rounded-2xl w-full max-w-2xl mx-auto border-t-4 border-t-saffron-gold shadow-2xl text-left">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-forest-green-dark mb-2">Used Vehicle Valuation</h2>
        <p className="text-gray-600">Want to sell or trade-in your current vehicle? Get a fast, accurate quote from us.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Full Name *</label>
            <input 
              required 
              id="fullName"
              type="text" 
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Rahul Yadav" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-green focus:border-transparent outline-none transition-all" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Phone Number *</label>
            <input 
              required 
              id="phone"
              type="tel" 
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 9876543210" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-green focus:border-transparent outline-none transition-all" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Vehicle Type *</label>
            <select 
              required 
              id="vehicleType"
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-green focus:border-transparent outline-none bg-white"
            >
              <option value="">Select a type...</option>
              <option value="tractor">Tractor</option>
              <option value="car">Car</option>
              <option value="jcb">JCB / Heavy Machinery</option>
              <option value="bike">Bike / Two Wheeler</option>
              <option value="truck">Truck / Auto</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Make & Model *</label>
            <input 
              required 
              id="makeModel"
              type="text" 
              value={formData.makeModel}
              onChange={handleChange}
              placeholder="e.g. Mahindra 575 DI" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-green focus:border-transparent outline-none transition-all" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Year of Purchase *</label>
            <input 
              required 
              id="year"
              type="number" 
              min="1990" 
              max={new Date().getFullYear()} 
              value={formData.year}
              onChange={handleChange}
              placeholder="2018" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-green focus:border-transparent outline-none transition-all" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Hours Driven / KMs</label>
            <input 
              id="hoursKms"
              type="number" 
              value={formData.hoursKms}
              onChange={handleChange}
              placeholder="5000" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-green focus:border-transparent outline-none transition-all" 
            />
          </div>
        </div>

        <div className="space-y-2 pt-2">
          <label className="text-sm font-semibold text-gray-700 flex justify-between items-center">
            <span>Upload Photos (Optional but recommended)</span>
            <span className="text-xs text-gray-500">Max 3 photos</span>
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 hover:border-forest-green transition-all cursor-pointer group group-hover:bg-green-50">
            <input type="file" multiple accept="image/*" className="hidden" id="photo-upload" />
            <label htmlFor="photo-upload" className="cursor-pointer flex flex-col items-center justify-center">
              <Camera className="h-10 w-10 text-gray-400 group-hover:text-forest-green mb-3 transition-colors" />
              <span className="text-forest-green font-medium underline mb-1">Click to upload</span>
              <span className="text-xs text-gray-500">or drag and drop images here</span>
              <span className="text-xs text-gray-400 mt-2">JPG, PNG format (Max 5MB per image)</span>
            </label>
          </div>
        </div>

        <button type="submit" className="btn-secondary w-full text-lg mt-4 flex items-center justify-center gap-2 py-4">
          <Upload size={20} />
          Submit for Valuation
        </button>
      </form>
    </div>
  );
}
