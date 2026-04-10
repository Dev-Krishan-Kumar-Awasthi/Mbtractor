import { Calendar, ChevronRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "How to apply for Kisan Credit Card (KCC) benefits in MP",
      excerpt: "Learn about the latest government schemes available for farmers in Madhya Pradesh and how MB Finance can guide you.",
      date: "Oct 15, 2025",
      category: "Government Schemes",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&q=80"
    },
    {
      id: 2,
      title: "Top 5 Mahindra Tractors for Medium Scale Farming",
      excerpt: "Choosing the right tractor can save you money and time. Check out our expert review of the best models this year.",
      date: "Sep 28, 2025",
      category: "Vehicle Reviews",
      image: "https://images.unsplash.com/photo-1592837920366-410d29623e1e?w=800&q=80"
    },
    {
      id: 3,
      title: "Essential Tractor Maintenance Tips for Winter",
      excerpt: "Keep your machinery running perfectly through the colder months with these simple DIY maintenance tips.",
      date: "Aug 10, 2025",
      category: "Maintenance",
      image: "https://images.unsplash.com/photo-1628135898852-5c4d3daeb7a4?w=800&q=80"
    }
  ];

  return (
    <div className="w-full pt-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-forest-green-dark mb-4">News & Updates</h1>
          <p className="text-xl text-gray-600">The latest reviews, farming tips, and financing news from MB Tractors.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20 bg-saffron-gold text-forest-green-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span>{post.date}</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight group-hover:text-forest-green transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                  {post.excerpt}
                </p>
                
                <button className="text-forest-green font-semibold text-sm flex items-center group-hover:underline">
                  Read Article <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
