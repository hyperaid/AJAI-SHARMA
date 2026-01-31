
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'Financial' | 'Legal' | 'Corporate' | 'Government';
}

export interface Qualification {
  title: string;
  institution: string;
  year?: string;
  details?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}