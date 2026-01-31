
import React, { useState } from 'react';
import { Award, Shield, MessageCircle, Mail, User } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/5 -skew-x-12 transform origin-top-right"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-1.5 bg-blue-900 text-white rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center shadow-lg shadow-blue-900/20">
                <Shield className="w-3.5 h-3.5 mr-2" />
                Class 1 Officer
              </span>
              <span className="px-4 py-1.5 bg-amber-100 text-amber-800 border border-amber-200 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center">
                <Award className="w-3.5 h-3.5 mr-2" />
                Secretary, ICSI
              </span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 mb-6 leading-[0.9]">
              Ajai Kumar <br />
              <span className="text-blue-900 drop-shadow-sm uppercase">Sharma</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl font-medium">
              Bridging Corporate Governance and National Service. A multi-qualified expert in Finance, Law, and Public Administration.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <a 
                href={PROFILE_DATA.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 bg-green-600 text-white font-black rounded-2xl hover:bg-green-700 transition-all shadow-xl shadow-green-600/20 hover:-translate-y-1"
              >
                <MessageCircle className="mr-3 w-6 h-6" />
                Message on WhatsApp
              </a>
              <a 
                href={`mailto:${PROFILE_DATA.email}`}
                className="inline-flex items-center justify-center px-10 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 hover:-translate-y-1"
              >
                <Mail className="mr-3 w-6 h-6" />
                Email Inquiry
              </a>
            </div>

            <div className="flex items-center gap-6 pt-10 border-t border-slate-200">
              <div className="text-center">
                <div className="text-3xl font-black text-slate-900">CA CS</div>
                <div className="text-[10px] font-bold text-blue-600 uppercase">Dual Mastery</div>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div className="text-center">
                <div className="text-3xl font-black text-slate-900">CMA</div>
                <div className="text-[10px] font-bold text-blue-600 uppercase">Cost Control</div>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div className="text-center">
                <div className="text-3xl font-black text-slate-900">LLB</div>
                <div className="text-[10px] font-bold text-blue-600 uppercase">Legal Pillar</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative group">
            {/* Main Profile Photo Frame */}
            <div className="relative z-10 w-full aspect-[4/5] rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] bg-slate-200 flex items-center justify-center">
              {!imgError ? (
                <img 
                  src="ajai_profile.jpg" 
                  alt="Ajai Kumar Sharma" 
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full bg-blue-900 flex flex-col items-center justify-center text-white p-8 text-center">
                  <User className="w-24 h-24 mb-4 opacity-50" />
                  <p className="font-bold text-xl">Ajai Kumar Sharma</p>
                  <p className="text-xs opacity-60 mt-2 italic">(Please save your photo as 'ajai_profile.jpg' in the project folder to see it here)</p>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Featured Event</p>
                <h3 className="text-lg font-black uppercase">National Aviation Summit</h3>
              </div>
            </div>
            
            {/* Achievement Badge */}
            <div className="absolute -bottom-8 -left-8 z-20 bg-white p-6 rounded-[2rem] shadow-2xl border border-slate-100 max-w-[200px] animate-fade-in-up">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-3">
                <Shield className="w-5 h-5 text-blue-900" />
              </div>
              <h4 className="font-black text-slate-900 text-sm mb-1 leading-tight">MoD Officer</h4>
              <p className="text-[10px] text-slate-500 font-medium italic">Ministry of Defence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
