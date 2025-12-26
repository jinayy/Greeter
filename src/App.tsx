import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Membership from './components/Membership';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'products', 'membership', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'products', label: 'Products' },
    { id: 'membership', label: 'Membership' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50 transition-all">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              <img src="/greeter.png" alt="Greeter" className="h-14 w-auto" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">Greeter</span>
                <span className="text-xs text-gray-600">We Greet for You</span>
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors relative pb-1 ${
                    activeSection === item.id
                      ? 'text-coral-500'
                      : 'text-gray-700 hover:text-coral-500'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-coral-400 to-amber-500"></span>
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-coral-500 bg-coral-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      <main className="pt-20">
        <section id="home">
          <Hero scrollToSection={scrollToSection} />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="products">
          <Products />
        </section>

        <section id="membership">
          <Membership scrollToSection={scrollToSection} />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src="/greeter.png" alt="Greeter" className="h-12 w-auto" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">Greeter</span>
                <span className="text-xs text-gray-400">We Greet for You</span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400">&copy; 2024 Greeter. All rights reserved.</p>
              <p className="text-xs text-gray-500 mt-1">We don't just deliver, we greet.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
