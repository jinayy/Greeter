import { Bell, TrendingUp, Zap, MessageSquare, MapPin, Truck, CreditCard, Building } from 'lucide-react';

export default function Services() {
  const benefits = [
    {
      icon: Bell,
      title: 'Personalized Reminders',
      description: 'Never forget a special moment again with our intelligent reminder system.',
    },
    {
      icon: TrendingUp,
      title: 'Client Retention',
      description: 'Boost your relationship with clients through thoughtful, timely gestures.',
    },
    {
      icon: Zap,
      title: 'Save Time & Energy',
      description: 'We handle everything from selection to delivery, so you can focus on what matters.',
    },
    {
      icon: MessageSquare,
      title: 'Customized Messages',
      description: 'Every delivery includes a personalized message crafted just for your recipient.',
    },
    {
      icon: MapPin,
      title: 'No Delivery Fees',
      description: 'Members in Ahmedabad enjoy free delivery on all orders.',
    },
    {
      icon: Truck,
      title: 'Express Delivery',
      description: 'Need it fast? Get express delivery within 4 hours at special pricing.',
    },
    {
      icon: CreditCard,
      title: 'Flexible Payment',
      description: 'Monthly payment plans with GST billing available for members.',
    },
    {
      icon: Building,
      title: 'Brand Integration',
      description: 'Corporate members can integrate their brand for a professional touch.',
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-coral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-500 to-amber-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of services designed to make your gifting experience effortless and memorable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-coral-500 to-amber-500 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                Coming Soon: Corporate Gifting
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We're expanding our services to include comprehensive corporate gifting solutions.
                Perfect for employee appreciation, client gifts, and special occasions.
              </p>
              <div className="flex items-center space-x-2 text-coral-600">
                <Building className="w-5 h-5" />
                <span className="font-semibold">Stay tuned for more updates</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-coral-100 to-amber-100 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🎁</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Premium Quality Guaranteed</h4>
              <p className="text-gray-600">
                All our products are carefully selected and quality-checked before delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
