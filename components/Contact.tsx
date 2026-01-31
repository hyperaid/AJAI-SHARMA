
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-4xl font-bold mb-6">Let's Discuss Your Needs</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-lg">
              Whether you're seeking corporate legal advice, financial planning, or specialized government accountancy, I'm here to help.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-bold uppercase">Email Address</div>
                  <a href={`mailto:${PROFILE_DATA.email}`} className="text-lg hover:text-blue-400 transition-colors">{PROFILE_DATA.email}</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-bold uppercase">Contact Number</div>
                  <a href={`tel:${PROFILE_DATA.phone}`} className="text-lg hover:text-blue-400 transition-colors">{PROFILE_DATA.phone}</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-bold uppercase">Base Location</div>
                  <div className="text-lg">{PROFILE_DATA.location}</div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide">Name</label>
                  <input type="text" className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide">Subject</label>
                  <select className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none">
                    <option>Financial Planning</option>
                    <option>Corporate CS</option>
                    <option>Legal Advisory</option>
                    <option>Audit Services</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide">Message</label>
                <textarea rows={4} className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"></textarea>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-blue-600/20">
                Send Request
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-white uppercase">Ajai Kumar Sharma</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-500 text-sm">Class 1 Officer, MoD</span>
          </div>
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Ajai Kumar Sharma. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
