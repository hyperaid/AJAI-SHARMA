
import React from 'react';
import { 
  GraduationCap, 
  Users, 
  Heart, 
  ShieldCheck, 
  PieChart, 
  FileText, 
  Building2, 
  Gavel 
} from 'lucide-react';
import { Service, Qualification } from './types';

export const PROFILE_DATA = {
  name: "Ajai Kumar Sharma",
  title: "Class 1 Officer, Ministry of Defence (Accounts) | Secretary, ICSI",
  shortBio: "Secretary of ICSI and a multifaceted Class 1 Officer with the Ministry of Defence. A passionate teacher, guest lecturer, and social worker dedicated to professional ethics, legal governance, and national service.",
  location: "New Delhi, India",
  email: "cmaajaikumarsharma@gmail.com",
  phone: "6388842022",
  whatsapp: "https://wa.me/916388842022",
  education: "Alumna of Allahabad University (M.Com, B.Com)",
};

export const QUALIFICATIONS: Qualification[] = [
  { title: "CA (Inter)", institution: "ICAI", details: "Chartered Accountancy Intermediate" },
  { title: "CS", institution: "ICSI", details: "Company Secretary (Secretary of ICSI)" },
  { title: "CMA", institution: "ICMAI", details: "Cost and Management Accountant" },
  { title: "CFA Level 1", institution: "CFA Institute", details: "Chartered Financial Analyst" },
  { title: "LLB", institution: "Legal Degree", details: "Bachelor of Laws" },
  { title: "JRF", institution: "UGC", details: "Junior Research Fellowship" },
  { title: "M.Com", institution: "Allahabad University", details: "Masters of Commerce" },
  { title: "B.Com", institution: "Allahabad University", details: "Bachelors of Commerce" },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Financial Advisory',
    description: 'Strategic guidance on budgeting and investment leveraging CFA and CMA expertise.',
    icon: <PieChart className="w-6 h-6" />,
    category: 'Financial'
  },
  {
    id: '2',
    title: 'Corporate Compliance',
    description: 'Expert secretarial audits and governance advice as an active Secretary of ICSI.',
    icon: <Building2 className="w-6 h-6" />,
    category: 'Corporate'
  },
  {
    id: '3',
    title: 'Legal Consultancy',
    description: 'Specialized legal support for corporate and civil matters backed by LLB qualification.',
    icon: <Gavel className="w-6 h-6" />,
    category: 'Legal'
  },
  {
    id: '4',
    title: 'Guest Lecturer',
    description: 'Sharing professional wisdom at national seminars and academic institutions.',
    icon: <GraduationCap className="w-6 h-6" />,
    category: 'Government'
  },
  {
    id: '5',
    title: 'Social Service',
    description: 'Active social worker dedicated to helping the community through various initiatives.',
    icon: <Heart className="w-6 h-6" />,
    category: 'Government'
  },
  {
    id: '6',
    title: 'Govt Audit & Accounts',
    description: 'Class 1 officer level oversight for government accounts and internal compliance.',
    icon: <ShieldCheck className="w-6 h-6" />,
    category: 'Government'
  }
];

export const PROFESSIONAL_EVENTS = [
  {
    title: "National Aviation Summit",
    description: "Strategic engagement at the 4300+ Aircraft Defence Aviation forum.",
    image: "ajai_profile.jpg",
    tag: "National Security"
  },
  {
    title: "Global Ethics Day 2024",
    description: "Honored guest at the Global Ethics Day forum alongside industry leaders.",
    image: "ethics.jpg",
    tag: "Professional Ethics"
  },
  {
    title: "India Vision 2047 Seminar",
    description: "Addressing the panel at the India Vision 2047 national summit.",
    image: "seminar.jpg",
    tag: "Guest Lecturer"
  },
  {
    title: "MoD Strategic Presence",
    description: "Official administrative visit to the Ministry of Defence headquarters.",
    image: "mod.jpg",
    tag: "Ministry of Defence"
  },
  {
    title: "Diwali Kavi Sammelan",
    description: "Promoting professional and cultural synergy at the ICMAI Diwali event.",
    image: "diwali.jpg",
    tag: "Cultural Events"
  }
];
