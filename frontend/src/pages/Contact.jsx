import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { contactInfo } from '../data/mock';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    toast({
      title: "Pesan terkirim!",
      description: "Kami akan menghubungi Anda segera.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactDetails = [
    {
      icon: MapPin,
      title: 'Alamat',
      content: contactInfo.address,
      link: `https://maps.google.com/?q=${contactInfo.coordinates.lat},${contactInfo.coordinates.lng}`
    },
    {
      icon: Phone,
      title: 'Telepon',
      content: contactInfo.phone,
      link: `tel:${contactInfo.phone}`
    },
    {
      icon: Mail,
      title: 'Email',
      content: contactInfo.email,
      link: `mailto:${contactInfo.email}`
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      content: `Senin-Jumat: ${contactInfo.operatingHours.weekdays}\nSabtu: ${contactInfo.operatingHours.saturday}\nMinggu: ${contactInfo.operatingHours.sunday}`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-teal-500/5"></div>
          <div className="absolute top-20 left-1/3 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
            <span className="text-sm text-cyan-400 font-medium">Hubungi Kami</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Mari <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Berkolaborasi</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Kami siap membantu kebutuhan fisika medis Anda. Hubungi kami untuk konsultasi atau kolaborasi penelitian
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-8 bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Nama Lengkap
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-slate-800/50 border-slate-700 focus:border-cyan-500 text-white"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-slate-800/50 border-slate-700 focus:border-cyan-500 text-white"
                    placeholder="nama@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subjek
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-slate-800/50 border-slate-700 focus:border-cyan-500 text-white"
                    placeholder="Topik pesan Anda"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Pesan
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-slate-800/50 border-slate-700 focus:border-cyan-500 text-white resize-none"
                    placeholder="Tuliskan pesan Anda di sini..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full group px-8 py-6 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Kirim Pesan</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactDetails.map((detail, index) => (
                <Card
                  key={index}
                  className="group relative p-6 bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  
                  <div className="relative flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-lg"></div>
                        <div className="relative p-3 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-lg border border-cyan-500/30">
                          <detail.icon className="w-6 h-6 text-cyan-400" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{detail.title}</h3>
                      {detail.link ? (
                        <a
                          href={detail.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 whitespace-pre-line"
                        >
                          {detail.content}
                        </a>
                      ) : (
                        <p className="text-slate-400 whitespace-pre-line">{detail.content}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}

              {/* Map placeholder */}
              <Card className="overflow-hidden bg-slate-900/90 border-slate-700/50">
                <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                    <p className="text-slate-400">Peta Lokasi</p>
                    <a
                      href={`https://maps.google.com/?q=${contactInfo.coordinates.lat},${contactInfo.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200"
                    >
                      Buka di Google Maps →
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};