import { ArrowRight, Heart, Gift } from 'lucide-react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <div className="relative bg-gradient-to-br from-coral-50 via-white to-amber-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZhYTRhNCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <Heart className="w-4 h-4 text-coral-500" fill="currentColor" />
              <span className="text-sm font-medium text-gray-700">Making Every Moment Special</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gray-900">We Don't Just</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-500 to-coral-600">Deliver,</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">We Greet.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              Personalized gift delivery service that helps you celebrate every special moment with customized messages, premium gifts, and heartfelt greetings.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection('products')}
                className="group bg-gradient-to-r from-coral-500 to-coral-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2"
              >
                <span>Explore Gifts</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('membership')}
                className="bg-white text-coral-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all border-2 border-coral-200"
              >
                View Membership
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 max-w-lg mx-auto md:mx-0">
              <div className="text-center">
                <div className="text-3xl font-bold text-coral-600">1500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-coral-600">99%</div>
                <div className="text-sm text-gray-600">On-Time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-coral-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-coral-400/20 to-amber-400/20 blur-3xl rounded-full"></div>
            <img
              src="/greeter.png"
              alt="Greeter Service"
              className="relative w-full max-w-md mx-auto drop-shadow-2xl animate-float"
            />
            <div className="absolute top-10 right-10 bg-white p-4 rounded-2xl shadow-xl animate-float-delayed">
              <Gift className="w-8 h-8 text-coral-500" />
            </div>
            <div className="absolute bottom-10 left-10 bg-white p-4 rounded-2xl shadow-xl animate-float">
              <Heart className="w-8 h-8 text-amber-500" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
