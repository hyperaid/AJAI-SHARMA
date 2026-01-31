
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Qualifications from './components/Qualifications';
import Contact from './components/Contact';
import AIChatbot from './components/AIChatbot';
import EventsGallery from './components/EventsGallery';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Expertise Summary Section */}
        <section id="about" className="py-20 bg-blue-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold mb-8">Professional Philosophy</h2>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                In an era of complex regulations and dynamic financial markets, a multi-disciplinary approach is no longer optional—it is essential. My goal is to synthesize legal frameworks with financial strategy to deliver results that are both compliant and optimized for growth.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                <div>
                  <div className="text-3xl font-bold mb-1">MoD</div>
                  <div className="text-sm text-blue-300 font-medium">Domain Expert</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">ICSI</div>
                  <div className="text-sm text-blue-300 font-medium">Secretary</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">LLB</div>
                  <div className="text-sm text-blue-300 font-medium">Legal Advisor</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">CMA</div>
                  <div className="text-sm text-blue-300 font-medium">Finance Master</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />
        <EventsGallery />
        <Qualifications />
        <Contact />
      </main>
      
      <AIChatbot />
    </div>
  );
};

export default App;
