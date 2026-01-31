
import React from 'react';
import { QUALIFICATIONS } from '../constants';
import { GraduationCap, CheckCircle } from 'lucide-react';

const Qualifications: React.FC = () => {
  return (
    <section id="qualifications" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Academic Excellence & Professional Accreditation</h2>
            <p className="text-lg text-slate-600 mb-10">
              A robust academic foundation from the historic University of Allahabad, complemented by prestigious professional certifications in every pillar of corporate governance.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                <GraduationCap className="w-8 h-8 text-blue-900 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Allahabad University Alumnus</h4>
                  <p className="text-sm text-slate-600">Masters & Bachelors of Commerce with Distinguished Record</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Triple Financial Mastery</h4>
                  <p className="text-sm text-slate-600">Qualified across CA (Inter), CS, and CMA platforms</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {QUALIFICATIONS.map((q, idx) => (
              <div 
                key={idx}
                className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="text-xl font-black text-blue-900 mb-1">{q.title}</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-2">{q.institution}</div>
                <div className="text-xs text-slate-500 leading-tight">{q.details}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
