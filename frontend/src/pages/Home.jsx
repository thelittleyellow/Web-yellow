import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, FlaskConical, Shield, Zap, Target } from 'lucide-react';
import { labInfo } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export const Home = () => {
  const features = [
    {
      icon: Zap,
      title: 'Teknologi Terkini',
      description: 'Peralatan medis canggih dengan teknologi terbaru untuk hasil optimal'
    },
    {
      icon: Users,
      title: 'Tim Profesional',
      description: 'Didukung oleh fisikawan medis bersertifikat dan berpengalaman'
    },
    {
      icon: Shield,
      title: 'Standar Keselamatan',
      description: 'Komitmen terhadap proteksi radiasi dan keselamatan pasien'
    },
    {
      icon: FlaskConical,
      title: 'Penelitian & Inovasi',
      description: 'Aktif dalam penelitian untuk kemajuan fisika medis di Indonesia'
    }
  ];

  const stats = [
    { value: '15+', label: 'Tahun Pengalaman' },
    { value: '100+', label: 'Publikasi Ilmiah' },
    { value: '50+', label: 'Proyek Penelitian' },
    { value: '1000+', label: 'Pasien Terlayani' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-teal-500/5 to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 backdrop-blur-sm mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
            <span className="text-sm text-cyan-400 font-medium">Established {labInfo.established}</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="block text-white mb-2">Laboratorium</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Fisika Medik
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {labInfo.tagline}
          </p>

          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {labInfo.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/staff">
              <Button className="group relative px-8 py-6 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105">
                <span className="flex items-center space-x-2">
                  <span>Lihat Tim Kami</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </Link>
            <Link to="/research">
              <Button variant="outline" className="px-8 py-6 border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 font-semibold rounded-xl transition-all duration-300">
                Penelitian Kami
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-cyan-500/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 border-y border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-block mb-2">
                  <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full group-hover:bg-cyan-400/30 transition-all duration-300"></div>
                  <p className="relative text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                </div>
                <p className="text-slate-400 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 backdrop-blur-sm mb-4">
              <Target className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">Keunggulan Kami</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Mengapa Memilih Kami
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Komitmen kami untuk memberikan layanan fisika medis terbaik dengan standar internasional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative p-6 bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                <div className="relative">
                  <div className="mb-4 inline-block">
                    <div className="relative">
                      <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-lg group-hover:bg-cyan-400/30 transition-all duration-300"></div>
                      <div className="relative p-3 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-lg border border-cyan-500/30">
                        <feature.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="relative py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 backdrop-blur-sm mb-6">
            <Award className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">Sertifikasi & Akreditasi</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Terakreditasi & Tersertifikasi
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {labInfo.certifications.map((cert, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-cyan-500/30 rounded-lg hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <span className="text-cyan-400 font-semibold">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-cyan-500/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Siap Berkolaborasi?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Hubungi kami untuk konsultasi, kolaborasi penelitian, atau informasi lebih lanjut tentang layanan kami
          </p>
          <Link to="/contact">
            <Button className="group px-8 py-6 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105">
              <span className="flex items-center space-x-2">
                <span>Hubungi Kami</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};