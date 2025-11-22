import React, { useState } from 'react';
import { Search, Calendar, CheckCircle2, Filter } from 'lucide-react';
import { equipment } from '../data/mock';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';

export const Equipment = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(equipment.map(item => item.category))];

  const filteredEquipment = equipment.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-teal-500/5"></div>
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
            <span className="text-sm text-cyan-400 font-medium">Peralatan Lab</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Fasilitas & <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Peralatan</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Teknologi medis terkini untuk penelitian dan layanan fisika medis berkualitas tinggi
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative py-8 border-y border-cyan-500/20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Cari peralatan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-800/50 border-slate-700 focus:border-cyan-500 text-white placeholder:text-slate-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-slate-400" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/25'
                        : 'bg-slate-800/50 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 border border-slate-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEquipment.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEquipment.map((item) => (
                <Card
                  key={item.id}
                  className="group relative overflow-hidden bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                    
                    {/* Status badge */}
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-green-500/90 text-white border-none flex items-center space-x-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{item.status}</span>
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6 space-y-4">
                    <div>
                      <Badge className="mb-3 bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                        {item.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-sm text-slate-400 mb-2">
                        {item.manufacturer} • {item.model}
                      </p>
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                      <div className="flex items-center space-x-2 text-xs text-slate-500">
                        <Calendar className="w-3 h-3" />
                        <span>Tahun {item.year}</span>
                      </div>
                      <button className="text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200">
                        Detail →
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-block p-6 bg-slate-800/50 rounded-full mb-4">
                <Search className="w-12 h-12 text-slate-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-400 mb-2">Tidak ada hasil</h3>
              <p className="text-slate-500">Coba gunakan kata kunci atau filter yang berbeda</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};