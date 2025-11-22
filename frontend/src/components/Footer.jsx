import React from 'react';
import { Link } from 'react-router-dom';
import { Atom, Mail, Phone, MapPin, Twitter, Instagram, Linkedin } from 'lucide-react';
import { contactInfo, labInfo } from '../data/mock';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-slate-950 to-slate-900 border-t border-cyan-500/20">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-full"></div>
                <Atom className="w-8 h-8 text-cyan-400 relative z-10" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
                Lab Fisika Medik
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {labInfo.tagline}
            </p>
            <div className="flex items-center space-x-3">
              {[Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300"
                  aria-label="Social media"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Staff & Anggota', 'Peralatan', 'Penelitian', 'Kontak'].map((item, index) => (
                <li key={index}>
                  <Link
                    to={index === 0 ? '/' : `/${item.toLowerCase().split(' ')[0]}`}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200 inline-block hover:translate-x-1"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Layanan</h3>
            <ul className="space-y-2">
              {['Radioterapi', 'Pencitraan Medis', 'Dosimetri Radiasi', 'Proteksi Radiasi', 'Quality Assurance'].map((service, index) => (
                <li key={index}>
                  <span className="text-sm text-slate-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-400 leading-relaxed">
                  {contactInfo.address}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-500">
              © {currentYear} {labInfo.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="#" className="text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};