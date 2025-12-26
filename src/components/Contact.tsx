import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-20 bg-gradient-to-br from-coral-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900">Get in </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-500 to-amber-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to us and let's make your special moments unforgettable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-coral-500 to-coral-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Phone</div>
                    <a href="tel:+919104065405" className="text-lg font-semibold text-gray-900 hover:text-coral-600 transition-colors">
                      +91 9104065405
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Email</div>
                    <a href="mailto:wegreetforyou@gmail.com" className="text-lg font-semibold text-gray-900 hover:text-coral-600 transition-colors break-all">
                      wegreetforyou@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-coral-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Service Area</div>
                    <div className="text-lg font-semibold text-gray-900">
                      Ahmedabad, Gujarat
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="text-sm text-gray-600 mb-2">Contact Person</div>
                <div className="text-xl font-bold text-gray-900">Krunal Shah</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-coral-500 to-amber-500 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Business Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span className="font-semibold">9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">10:00 AM - 6:00 PM</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20 text-sm opacity-90">
                Express delivery available 24/7 for members
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Send us a Message</h3>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-all"
                  placeholder="+91 9876543210"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-coral-500 to-amber-500 text-white py-4 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
