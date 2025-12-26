import { Cake, Flower, Mail } from 'lucide-react';

export default function Products() {
  const cakes = [
    { name: 'Black Forest', price: '₹550 - ₹950' },
    { name: 'Premium Chocolate / Vanilla / Pineapple', price: '₹600 - ₹1050' },
    { name: 'Exotic Red Velvet / Strawberry / Truffle', price: '₹650 - ₹1150' },
  ];

  const bouquets = [
    { name: 'Premium Assorted Flowers - Regular Size', price: '₹400' },
    { name: 'Premium Assorted Flowers - Large Size', price: '₹600' },
    { name: 'Premium RED Roses - Regular', price: '₹500' },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-500 to-amber-500">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Carefully curated selection of premium cakes, beautiful bouquets, and personalized greeting cards.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-white to-coral-50 rounded-2xl shadow-xl overflow-hidden border border-coral-100 transform hover:-translate-y-2 transition-all">
            <div className="bg-gradient-to-r from-coral-500 to-coral-600 p-6 text-white">
              <Cake className="w-12 h-12 mb-2" />
              <h3 className="text-2xl font-bold">Assorted Cakes</h3>
              <p className="text-sm opacity-90">500g / 1kg</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {cakes.map((cake, index) => (
                  <div key={index} className="flex justify-between items-start pb-4 border-b border-coral-100 last:border-0">
                    <span className="text-gray-700 font-medium flex-1">{cake.name}</span>
                    <span className="text-coral-600 font-bold ml-4">{cake.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-amber-50 rounded-2xl shadow-xl overflow-hidden border border-amber-100 transform hover:-translate-y-2 transition-all">
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 text-white">
              <Flower className="w-12 h-12 mb-2" />
              <h3 className="text-2xl font-bold">Fresh Bouquets</h3>
              <p className="text-sm opacity-90">Premium Quality</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {bouquets.map((bouquet, index) => (
                  <div key={index} className="flex justify-between items-start pb-4 border-b border-amber-100 last:border-0">
                    <span className="text-gray-700 font-medium flex-1">{bouquet.name}</span>
                    <span className="text-amber-600 font-bold ml-4">{bouquet.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-coral-50 rounded-2xl shadow-xl overflow-hidden border border-coral-100 transform hover:-translate-y-2 transition-all">
            <div className="bg-gradient-to-r from-coral-600 to-amber-500 p-6 text-white">
              <Mail className="w-12 h-12 mb-2" />
              <h3 className="text-2xl font-bold">Greeting Cards <span className="text-sm font-semibold text-amber-200">(Add On)</span></h3>
              <p className="text-sm opacity-90">Personalized Messages</p>
            </div>
            <div className="p-6">
              <div className="text-center py-8">
                <div className="text-5xl font-bold text-coral-600 mb-2">₹100</div>
                <p className="text-gray-600">Per Card</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-4 mt-4">
                <p className="text-sm text-gray-700 font-medium">
                  Add a personal touch with our custom-designed greeting cards featuring your heartfelt message.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-6 text-center">
          <p className="text-gray-700 font-medium">
            <span className="text-coral-600 font-bold">Note:</span> Taxes are excluded.
            Customization of products and services will incur additional charges.
          </p>
        </div>
      </div>
    </div>
  );
}
