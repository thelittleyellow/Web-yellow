import React, { useState } from 'react';
import { GraduationCap, BookOpen, Star, Mail } from 'lucide-react';
import { staffMembers } from '../data/mock';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export const Staff = () => {
  const [selectedStaff, setSelectedStaff] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-teal-500/5"></div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
            <span className="text-sm text-cyan-400 font-medium">Staff & Anggota</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Tim <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Profesional</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Bertemu dengan para ahli fisika medis kami yang berdedikasi untuk kemajuan layanan kesehatan
          </p>
        </div>
      </section>

      {/* Staff Selection */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pilih Staff untuk Detail
            </h2>
            <p className="text-slate-400">Klik karakter untuk melihat profil lengkap</p>
          </div>

          {/* Staff Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {staffMembers.map((staff) => (
              <Card
                key={staff.id}
                onClick={() => setSelectedStaff(staff)}
                className={`group relative cursor-pointer transition-all duration-300 overflow-hidden ${
                  selectedStaff?.id === staff.id
                    ? 'ring-2 ring-cyan-400 scale-105 shadow-xl shadow-cyan-500/30'
                    : 'hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20'
                } bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-slate-700/50 hover:border-cyan-500/50`}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Status badge */}
                {selectedStaff?.id === staff.id && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-cyan-500 text-white border-none shadow-lg shadow-cyan-500/50">
                      Selected
                    </Badge>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={staff.image}
                    alt={staff.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                </div>

                {/* Info */}
                <div className="relative p-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                    {staff.name}
                  </h3>
                  <p className="text-cyan-400 text-sm font-medium mb-2">{staff.role}</p>
                  <p className="text-slate-400 text-sm mb-3">{staff.specialization}</p>
                  
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center space-x-1">
                      <BookOpen className="w-3 h-3" />
                      <span>{staff.publications} Publikasi</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-cyan-400 fill-cyan-400" />
                      <span className="text-cyan-400">Available</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Selected Staff Detail */}
          {selectedStaff && (
            <div className="relative animate-fade-in">
              <Card className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 border border-cyan-500/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5"></div>
                
                <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  {/* Left: Image */}
                  <div className="lg:col-span-1">
                    <div className="relative rounded-xl overflow-hidden">
                      <img
                        src={selectedStaff.image}
                        alt={selectedStaff.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h2 className="text-3xl font-bold text-white mb-2">
                          {selectedStaff.name}
                        </h2>
                        <div className="flex items-center space-x-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Details */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-cyan-400 mb-2">{selectedStaff.role}</h3>
                      <p className="text-lg text-slate-300 mb-4">{selectedStaff.specialization}</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm uppercase tracking-wider text-slate-500 mb-2 flex items-center space-x-2">
                          <BookOpen className="w-4 h-4" />
                          <span>Biografi</span>
                        </h4>
                        <p className="text-slate-300 leading-relaxed">{selectedStaff.bio}</p>
                      </div>

                      <div>
                        <h4 className="text-sm uppercase tracking-wider text-slate-500 mb-2 flex items-center space-x-2">
                          <GraduationCap className="w-4 h-4" />
                          <span>Pendidikan</span>
                        </h4>
                        <p className="text-slate-300">{selectedStaff.education}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                          <p className="text-3xl font-bold text-cyan-400 mb-1">{selectedStaff.publications}</p>
                          <p className="text-sm text-slate-400">Publikasi</p>
                        </div>
                        <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                          <p className="text-3xl font-bold text-teal-400 mb-1">Available</p>
                          <p className="text-sm text-slate-400">Status</p>
                        </div>
                      </div>

                      <div className="pt-4">
                        <a
                          href={`mailto:${selectedStaff.name.toLowerCase().replace(/\s+/g, '.')}@labfismed.ac.id`}
                          className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
                        >
                          <Mail className="w-4 h-4" />
                          <span>Hubungi</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};