import { Heart, Sparkles, Clock, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Heart,
      title: 'Personalized Touch',
      description: 'Every gift comes with a customized message and greeting that speaks from your heart.',
    },
    {
      icon: Clock,
      title: 'Never Forget Again',
      description: 'Our reminder system ensures you never miss an important occasion or special moment.',
    },
    {
      icon: Users,
      title: 'Build Relationships',
      description: 'Strengthen bonds with clients, family, and friends through thoughtful gestures.',
    },
    {
      icon: Sparkles,
      title: 'Premium Quality',
      description: 'We source only the finest gifts, freshest flowers, and most delicious cakes.',
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900">About </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-500 to-amber-500">Greeter</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe that every special moment deserves to be celebrated with love and care.
            Greeter is not just a delivery service – we're your partner in creating lasting memories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-coral-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-coral-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-coral-500 to-amber-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-coral-500 to-amber-500 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            We Don't Just Deliver, We Greet
          </h3>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Our mission is to transform ordinary deliveries into extraordinary experiences.
            Every package we deliver carries not just a gift, but emotions, memories, and heartfelt wishes.
          </p>
        </div>
      </div>
    </div>
  );
}
