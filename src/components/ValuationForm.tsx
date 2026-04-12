import { useState, useRef } from 'react';
import { Camera, Upload, CheckCircle, X, Paperclip } from 'lucide-react';

export default function ValuationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    vehicleType: '',
    makeModel: '',
    year: '',
    hoursKms: ''
  });
  const [images, setImages] = useState<{ file: File, preview: string }[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id || e.target.name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImages = Array.from(files).slice(0, 3 - images.length).map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));

    setImages(prev => [...prev, ...newImages]);
    
    // Reset input so the same file can be selected again if removed
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeImage = (index: number) => {
    setImages(prev => {
      const newImages = [...prev];
      URL.revokeObjectURL(newImages[index].preview);
      newImages.splice(index, 1);
      return newImages;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const photoCount = images.length;
    const photoInstruction = photoCount > 0 
      ? `%0A%0A*⚠️ ACTION REQUIRED:*%0AI have selected *${photoCount} photos* for valuation. I am attaching them below this message. 👇`
      : '';

    // Construct WhatsApp Message
    const rawMessage = `*Used Vehicle Valuation Request*\n\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Vehicle:* ${formData.vehicleType}\n` +
      `*Make & Model:* ${formData.makeModel}\n` +
      `*Year:* ${formData.year}\n` +
      `*Usage:* ${formData.hoursKms} (Hrs/KMs)` + 
      (images.length > 0 ? `\n\n*⚠️ ACTION REQUIRED:*\nI have selected *${images.length} photos* for valuation. I am attaching them below this message. 👇` : '') + 
      `\n\n_Sent from MB Tractors Website_`;

    const whatsappUrl = `https://wa.me/917470655510?text=${encodeURIComponent(rawMessage)}`;
    
    setSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  if (submitted) {
    return (
      <div className="glass p-10 rounded-2xl w-full max-w-2xl mx-auto text-center flex flex-col items-center justify-center min-h-[450px]">
        <div className="bg-green-100 p-4 rounded-full mb-6">
          <CheckCircle className="h-16 w-16 text-forest-green" />
        </div>
        <h3 className="text-3xl font-bold text-forest-green-dark mb-4">Almost Done!</h3>
        <p className="text-gray-600 font-medium text-lg mb-8 max-w-md">
          We've opened WhatsApp for you. 
          <span className="block mt-4 text-forest-green font-bold flex items-center justify-center gap-2">
            <Paperclip className="h-5 w-5" /> 
            Final Step: Please attach the {images.length > 0 ? images.length : ''} photos you selected in the WhatsApp chat.
          </span>
        </p>
        
        <div className="bg-saffron-gold/10 border border-saffron-gold/30 p-4 rounded-xl mb-8 animate-pulse">
          <p className="text-sm text-amber-800 font-semibold">
            Tip: Click the attachment icon (📎) in WhatsApp to send your photos!
          </p>
        </div>

        <button 
          onClick={() => {
            setSubmitted(false);
            setImages([]);
          }}
          className="text-forest-green font-bold underline hover:text-forest-green-light transition-colors"
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
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-green focus:border-transparent outline-none transition-all hover:border-forest-green/50" 
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
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-green focus:border-transparent outline-none transition-all hover:border-forest-green/50" 
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
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-green focus:border-transparent outline-none bg-white cursor-pointer hover:border-forest-green/50"
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
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-green focus:border-transparent outline-none transition-all hover:border-forest-green/50" 
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
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-green focus:border-transparent outline-none transition-all hover:border-forest-green/50" 
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
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-green focus:border-transparent outline-none transition-all hover:border-forest-green/50" 
            />
          </div>
        </div>

        <div className="space-y-4 pt-2">
          <label className="text-sm font-semibold text-gray-700 flex justify-between items-center">
            <span>Upload Photos (Optional but recommended)</span>
            <span className={`text-xs ${images.length >= 3 ? 'text-red-500 font-bold' : 'text-gray-500'}`}>
              {images.length}/3 photos
            </span>
          </label>
          
          {/* Upload Box */}
          {images.length < 3 && (
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:bg-forest-green/5 hover:border-forest-green transition-all cursor-pointer group"
            >
              <input 
                ref={fileInputRef}
                type="file" 
                multiple 
                accept="image/*" 
                className="hidden" 
                onChange={handleImageChange}
              />
              <div className="flex flex-col items-center justify-center">
                <Camera className="h-10 w-10 text-gray-400 group-hover:text-forest-green mb-2 transition-colors" />
                <span className="text-forest-green font-semibold underline mb-1">Click to upload</span>
                <span className="text-xs text-gray-500 leading-relaxed">
                  Select up to 3 photos of your vehicle<br/>
                  JPG, PNG format (Max 5MB each)
                </span>
              </div>
            </div>
          )}

          {/* Previews Grid */}
          {images.length > 0 && (
            <div className="grid grid-cols-3 gap-4 mt-4">
              {images.map((img, idx) => (
                <div key={idx} className="relative aspect-square rounded-lg overflow-hidden border border-gray-200 shadow-sm group">
                  <img 
                    src={img.preview} 
                    alt={`Preview ${idx + 1}`} 
                    className="w-full h-full object-cover"
                  />
                  <button 
                    type="button"
                    onClick={() => removeImage(idx)}
                    className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <button 
          type="submit" 
          className="btn-secondary w-full text-lg mt-4 flex items-center justify-center gap-2 py-4 shadow-xl hover:shadow-forest-green/20"
        >
          <Upload size={20} />
          {images.length > 0 ? `Submit & Send ${images.length} Photos` : 'Submit for Valuation'}
        </button>
      </form>
    </div>
  );
}
