import React, { useState, useCallback } from 'react';
import { GraduationCap, BookOpen, Star, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { staffMembers } from '../data/mock';
import { Badge } from '../components/ui/badge';
import useEmblaCarousel from 'embla-carousel-react';

export const Staff = () => {
  const [selectedStaff, setSelectedStaff] = useState(staffMembers[0]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false, 
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps'
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-teal-500/5"></div>
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
            <span className="text-sm text-cyan-400 font-medium uppercase tracking-wider">Staff Selection</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Tim <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Profesional</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Bertemu dengan para ahli fisika medis kami yang berdedikasi untuk kemajuan layanan kesehatan
          </p>
        </div>
      </section>

      {/* Staff to Select Section */}
      <section className="relative py-16 border-t border-cyan-500/20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 uppercase tracking-wider">
              Staff to Select
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto"></div>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 p-3 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white rounded-full shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-110"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 p-3 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white rounded-full shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-110"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Embla Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {staffMembers.map((staff) => (
                  <div
                    key={staff.id}
                    className="flex-[0_0_280px] min-w-0"
                  >
                    <div
                      onClick={() => setSelectedStaff(staff)}
                      className={`group relative cursor-pointer transition-all duration-300 ${
                        selectedStaff?.id === staff.id
                          ? 'scale-105'
                          : 'hover:scale-105 opacity-90 hover:opacity-100'
                      }`}
                    >
                      {/* Card Container */}
                      <div className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                        selectedStaff?.id === staff.id
                          ? 'border-cyan-400 shadow-xl shadow-cyan-500/50'
                          : 'border-slate-700/50 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20'
                      }`}>
                        {/* Image */}
                        <div className="relative aspect-[3/4] overflow-hidden">
                          <img
                            src={staff.image}
                            alt={staff.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                          
                          {/* Status Badge */}
                          <div className="absolute top-3 left-3">
                            <Badge className="bg-cyan-500 text-white text-xs border-none shadow-lg shadow-cyan-500/50">
                              Available
                            </Badge>
                          </div>

                          {/* Name at Bottom */}
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-white text-lg font-bold text-center drop-shadow-lg mb-1">
                              {staff.name}
                            </h3>
                            <p className="text-cyan-300 text-sm text-center drop-shadow-lg">
                              {staff.role}
                            </p>
                          </div>

                          {/* Selected Border Glow */}
                          {selectedStaff?.id === staff.id && (
                            <>
                              <div className="absolute inset-0 border-4 border-cyan-400 rounded-xl pointer-events-none">
                                <div className="absolute inset-0 bg-cyan-400/10"></div>
                              </div>
                              <div className="absolute -inset-1 bg-cyan-400/30 blur-xl -z-10 rounded-xl"></div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Staff Detail */}
      {selectedStaff && (
        <section className="relative py-16 border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Side - Staff Info */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  {/* Large Staff Card */}
                  <div className="relative group mb-6">
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent blur-2xl"></div>
                    <div className="relative overflow-hidden rounded-2xl border-2 border-cyan-500/30 shadow-xl shadow-cyan-500/20">
                      <img
                        src={selectedStaff.image}
                        alt={selectedStaff.name}
                        className="w-full aspect-[3/4] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                      
                      {/* Bottom Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
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

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-lg border border-slate-700/50 text-center">
                      <p className="text-3xl font-bold text-cyan-400 mb-1">{selectedStaff.publications}</p>
                      <p className="text-sm text-slate-400">Publikasi</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-lg border border-slate-700/50 text-center">
                      <p className="text-3xl font-bold text-teal-400 mb-1">★</p>
                      <p className="text-sm text-slate-400">Available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Details */}
              <div className="lg:col-span-2 space-y-6">
                {/* Role & Specialization */}
                <div className="p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl border border-cyan-500/30">
                  <h4 className="text-2xl font-bold text-cyan-400 mb-2">{selectedStaff.role}</h4>
                  <p className="text-lg text-slate-300 mb-4">{selectedStaff.specialization}</p>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    {selectedStaff.status.toUpperCase()}
                  </Badge>
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

                {/* Contact */}
                <div className="flex items-center space-x-4">
                  <a
                    href={`mailto:${selectedStaff.name.toLowerCase().replace(/\s+/g, '.')}@labfismed.ac.id`}
                    className="flex-1 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 text-center"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <Mail className="w-5 h-5" />
                      <span>Hubungi Staff</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};