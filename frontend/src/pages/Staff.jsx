import React, { useState } from 'react';
import { GraduationCap, BookOpen, Star, Mail, Trophy } from 'lucide-react';
import { staffMembers } from '../data/mock';
import { Badge } from '../components/ui/badge';

export const Staff = () => {
  const [selectedStaff, setSelectedStaff] = useState(staffMembers[0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20">
      {/* Top Section - Character Selection */}
      <section className="relative pt-16 pb-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-teal-500/5"></div>
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 backdrop-blur-sm mb-4">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
              <span className="text-sm text-cyan-300 font-medium uppercase tracking-wider">Staff Selection</span>
            </div>
          </div>

          {/* Character Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
            {staffMembers.map((staff) => (
              <div
                key={staff.id}
                onClick={() => setSelectedStaff(staff)}
                className={`group relative cursor-pointer transition-all duration-300 ${
                  selectedStaff?.id === staff.id
                    ? 'scale-110 z-20'
                    : 'hover:scale-105 opacity-80 hover:opacity-100'
                }`}
              >
                {/* Card Container */}
                <div className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                  selectedStaff?.id === staff.id
                    ? 'border-cyan-400 shadow-lg shadow-cyan-500/50'
                    : 'border-slate-700/50 hover:border-cyan-500/50'
                }`}>
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={staff.image}
                      alt={staff.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>
                    
                    {/* Locked/Unlocked Badge */}
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-cyan-500/90 text-white text-xs border-none">
                        Available
                      </Badge>
                    </div>

                    {/* Name */}
                    <div className="absolute bottom-0 left-0 right-0 p-2 text-center">
                      <p className="text-white text-xs font-bold drop-shadow-lg">
                        {staff.name.split(' ')[0]}
                      </p>
                      <p className="text-white text-xs font-bold drop-shadow-lg">
                        {staff.name.split(' ').slice(1).join(' ')}
                      </p>
                    </div>

                    {/* Selected Indicator */}
                    {selectedStaff?.id === staff.id && (
                      <div className="absolute inset-0 border-4 border-cyan-400 rounded-lg pointer-events-none">
                        <div className="absolute inset-0 bg-cyan-400/10"></div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Glow effect for selected */}
                {selectedStaff?.id === staff.id && (
                  <div className="absolute inset-0 -z-10 bg-cyan-400/30 blur-xl rounded-lg"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Section - Character Details */}
      <section className="relative py-8 border-t border-cyan-500/20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedStaff && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Side - Large Character Display */}
              <div className="lg:col-span-1 relative">
                {/* Title */}
                <div className="mb-6">
                  <h2 className="text-4xl font-bold text-white mb-2 uppercase tracking-wider">
                    Staff
                  </h2>
                  <h3 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent uppercase">
                    Select
                  </h3>
                </div>

                {/* Large Character Image */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent blur-2xl"></div>
                  <div className="relative overflow-hidden rounded-2xl border-2 border-cyan-500/30">
                    <img
                      src={selectedStaff.image}
                      alt={selectedStaff.name}
                      className="w-full aspect-[3/4] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                    
                    {/* Bottom Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900 to-transparent">
                      <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                        {selectedStaff.name}
                      </h3>
                      <div className="flex items-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-cyan-400 fill-cyan-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Publications Count */}
                <div className="mt-6 p-4 bg-gradient-to-r from-slate-800/80 to-slate-900/80 rounded-lg border border-slate-700/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-cyan-500/20 rounded-lg">
                        <Trophy className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Total Publikasi</p>
                        <p className="text-2xl font-bold text-white">{selectedStaff.publications}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Character Details */}
              <div className="lg:col-span-2 space-y-6">
                {/* Role & Specialization */}
                <div className="p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl border border-slate-700/50">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-cyan-400 mb-2">{selectedStaff.role}</h4>
                      <p className="text-lg text-slate-300">{selectedStaff.specialization}</p>
                    </div>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      {selectedStaff.status.toUpperCase()}
                    </Badge>
                  </div>
                </div>

                {/* Biography */}
                <div className="p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl border border-slate-700/50">
                  <h4 className="text-sm uppercase tracking-wider text-cyan-400 mb-3 flex items-center space-x-2">
                    <BookOpen className="w-4 h-4" />
                    <span>Biografi</span>
                  </h4>
                  <p className="text-slate-300 leading-relaxed">{selectedStaff.bio}</p>
                </div>

                {/* Education */}
                <div className="p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl border border-slate-700/50">
                  <h4 className="text-sm uppercase tracking-wider text-cyan-400 mb-3 flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>Pendidikan</span>
                  </h4>
                  <p className="text-slate-300">{selectedStaff.education}</p>
                </div>

                {/* Specialties/Abilities */}
                <div className="p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl border border-cyan-500/30">
                  <h4 className="text-sm uppercase tracking-wider text-cyan-400 mb-4">Keahlian Khusus</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-cyan-400 pl-4 py-2">
                      <p className="text-white font-semibold mb-1">{selectedStaff.specialization}</p>
                      <p className="text-sm text-slate-400">Spesialisasi utama dalam bidang fisika medis</p>
                    </div>
                    <div className="border-l-4 border-teal-400 pl-4 py-2">
                      <p className="text-white font-semibold mb-1">Penelitian & Publikasi</p>
                      <p className="text-sm text-slate-400">Kontributor aktif dengan {selectedStaff.publications} publikasi ilmiah</p>
                    </div>
                  </div>
                </div>

                {/* Contact Button */}
                <div className="flex items-center space-x-4">
                  <a
                    href={`mailto:${selectedStaff.name.toLowerCase().replace(/\s+/g, '.')}@labfismed.ac.id`}
                    className="flex-1 group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <Mail className="w-5 h-5" />
                      <span>Hubungi Staff</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};