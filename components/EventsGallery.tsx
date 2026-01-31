
import React from 'react';
import { PROFESSIONAL_EVENTS } from '../constants';
import { Camera, MapPin, ExternalLink } from 'lucide-react';

const EventsGallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-900 rounded-lg text-xs font-bold uppercase tracking-wider mb-4">
              <Camera className="w-4 h-4" />
              Professional Portfolio
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-4">Leadership in Action</h2>
            <p className="text-xl text-slate-600">
              A glimpse into professional engagements across Ministry of Defence forums and national seminars.
            </p>
          </div>
          <a href="#contact" className="flex items-center font-bold text-blue-900 hover:text-blue-700 transition-colors">
            Contact for Collaboration <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROFESSIONAL_EVENTS.map((event, idx) => (
            <div 
              key={idx} 
              className={`group relative rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="aspect-[4/3] relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=800&sig=${idx}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-90"></div>
                
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 bg-white/95 backdrop-blur-md text-slate-900 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                    {event.tag}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{event.title}</h3>
                  <div className="flex items-center text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">
                    <MapPin className="w-3.5 h-3.5 mr-1" />
                    New Delhi, India
                  </div>
                  <p className="text-sm text-slate-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsGallery;
