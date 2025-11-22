import React, { useState } from 'react';
import { Calendar, User, BookOpen, ExternalLink, Filter, FileText } from 'lucide-react';
import { researchProjects, publications } from '../data/mock';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

export const Research = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projectCategories = ['All', ...new Set(researchProjects.map(p => p.category))];

  const filteredProjects = selectedCategory === 'All'
    ? researchProjects
    : researchProjects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-teal-500/5"></div>
          <div className="absolute top-20 right-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
            <span className="text-sm text-cyan-400 font-medium">Penelitian & Publikasi</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Riset & <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Inovasi</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Kontribusi kami dalam pengembangan fisika medis melalui penelitian berkualitas dan publikasi internasional
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-slate-800/50 border border-slate-700">
              <TabsTrigger value="projects" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-teal-500 data-[state=active]:text-white">
                Proyek Penelitian
              </TabsTrigger>
              <TabsTrigger value="publications" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-teal-500 data-[state=active]:text-white">
                Publikasi
              </TabsTrigger>
            </TabsList>

            {/* Research Projects Tab */}
            <TabsContent value="projects" className="space-y-8">
              {/* Filter */}
              <div className="flex items-center justify-center space-x-2 flex-wrap gap-2">
                <Filter className="w-5 h-5 text-slate-400" />
                {projectCategories.map((category) => (
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

              {/* Projects Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredProjects.map((project) => (
                  <Card
                    key={project.id}
                    className="group relative p-6 bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    
                    <div className="relative space-y-4">
                      <div className="flex items-start justify-between">
                        <Badge className={`${
                          project.status === 'Ongoing'
                            ? 'bg-green-500/20 text-green-400 border-green-500/30'
                            : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                        }`}>
                          {project.status}
                        </Badge>
                        <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                          {project.category}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-slate-400 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2 text-slate-500">
                          <User className="w-4 h-4" />
                          <span>PI: {project.principal}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-slate-500">
                          <Calendar className="w-4 h-4" />
                          <span>Mulai: {project.startDate}</span>
                          {project.endDate && <span>• Selesai: {project.endDate}</span>}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-700/50">
                        <p className="text-xs text-slate-500 mb-2">Kolaborasi:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.collaborators.map((collab, index) => (
                            <Badge key={index} variant="outline" className="text-xs border-slate-600 text-slate-400">
                              {collab}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {project.publications && (
                        <div className="flex items-center space-x-2 text-sm text-cyan-400">
                          <BookOpen className="w-4 h-4" />
                          <span>{project.publications} Publikasi</span>
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Publications Tab */}
            <TabsContent value="publications" className="space-y-6">
              <div className="space-y-4">
                {publications.map((pub) => (
                  <Card
                    key={pub.id}
                    className="group relative p-6 bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    
                    <div className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                            {pub.title}
                          </h3>
                          <p className="text-sm text-slate-400 mb-2">
                            {pub.authors.join(', ')}
                          </p>
                        </div>
                        <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                          {pub.year}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-3">
                        <span className="font-medium text-slate-400">{pub.journal}</span>
                        <span>Vol. {pub.volume}</span>
                        <span>pp. {pub.pages}</span>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                        <div className="flex items-center space-x-4 text-xs text-slate-500">
                          <div className="flex items-center space-x-1">
                            <FileText className="w-3 h-3" />
                            <span>DOI: {pub.doi}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <BookOpen className="w-3 h-3" />
                            <span>{pub.citations} Citations</span>
                          </div>
                        </div>
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200"
                        >
                          <span>View</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};