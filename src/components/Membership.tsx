import { Check, Users, Building2 } from 'lucide-react';

interface MembershipProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Membership({ scrollToSection }: MembershipProps) {
  const individualFeatures = [
    'No Delivery Fees in Ahmedabad',
    'Customized Message & Greeting',
    'Personalized Gifts with Special Pricing',
    'Personalized Reminders',
    'Never forget a special moment again',
  ];

  const corporateFeatures = [
    'Everything in Individual/Family Plan',
    'Acquire Clients & Improve Retention',
    'Brand Integration',
    'Monthly payment plan with GST billing',
    'Dedicated account manager',
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900">Membership </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-500 to-amber-500">Plans</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your gifting needs. Enjoy exclusive benefits and special pricing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-coral-200 transform hover:scale-105 transition-all">
            <div className="bg-gradient-to-r from-coral-500 to-coral-600 p-8 text-white text-center">
              <Users className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">Individual/Family</h3>
              <p className="text-coral-100">Perfect for personal gifting</p>
            </div>

            <div className="p-8">
              <div className="mb-8 text-center">
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-gray-400 line-through text-2xl">₹2500</div>
                  <div className="text-5xl font-bold text-coral-600">₹1500</div>
                </div>
                <p className="text-gray-600 mt-2">5 Years Membership</p>
              </div>

              <div className="space-y-4 mb-8">
                {individualFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-coral-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-coral-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button onClick={() => scrollToSection('contact')} className="w-full bg-gradient-to-r from-coral-500 to-coral-600 text-white py-4 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                Get Started
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-amber-200 transform hover:scale-105 transition-all relative">
            <div className="absolute top-4 right-4 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-bold">
              POPULAR
            </div>

            <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-8 text-white text-center">
              <Building2 className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">Corporate</h3>
              <p className="text-amber-100">Ideal for businesses</p>
            </div>

            <div className="p-8">
              <div className="mb-8 text-center">
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-gray-400 line-through text-2xl">₹5000</div>
                  <div className="text-5xl font-bold text-amber-600">₹3500</div>
                </div>
                <p className="text-gray-600 mt-2">5 Years Membership</p>
              </div>

              <div className="space-y-4 mb-8">
                {corporateFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-amber-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button onClick={() => scrollToSection('contact')} className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            All prices are exclusive of taxes. Special customization available on request.
          </p>
        </div>
      </div>
    </div>
  );
}
