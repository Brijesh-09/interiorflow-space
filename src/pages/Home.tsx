import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ui/ProjectCard';
import { projectService } from '../services/projectService';
import { Project } from '../types/project';

export const Home = () => {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projects = projectService.getFeaturedProjects();
        if (!projects || projects.length === 0) {
          setError('No featured projects found');
        } else {
          setFeaturedProjects(projects);
        }
      } catch (error) {
        console.error('Error loading featured projects:', error);
        setError('Failed to load featured projects');
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p>Loading projects...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">

      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-6">
          Luxury Interior Designers in Mumbai
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          S.A. Atelier & Co. is a Mumbai-based luxury interior design studio 
          specialising in residential homes, commercial spaces, and bespoke office 
          interiors. From concept to completion, we craft spaces that reflect your 
          personality and elevate everyday living.
        </p>
      </div>

      {/* Services Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-center">
        <div className="p-6 border border-gray-100 rounded-lg">
          <h3 className="font-serif text-xl mb-3">Residential Interiors</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Thoughtfully designed homes and apartments across Mumbai — 
            from compact 2BHKs to sprawling luxury residences.
          </p>
        </div>
        <div className="p-6 border border-gray-100 rounded-lg">
          <h3 className="font-serif text-xl mb-3">Commercial & Office Design</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Inspiring workplaces and retail spaces in Mumbai that reflect 
            your brand and energise the people within them.
          </p>
        </div>
        <div className="p-6 border border-gray-100 rounded-lg">
          <h3 className="font-serif text-xl mb-3">Luxury Bespoke Interiors</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            High-end, fully customised interiors crafted for discerning 
            clients who expect exceptional design and flawless execution.
          </p>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="mb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Featured Projects</h2>
          <p className="text-muted-foreground">
            A selection of our interior design work across residential and 
            commercial spaces in Mumbai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.images[0]}
              featured={project.featured}
            />
          ))}
        </div>
      </div>

      {/* Why S.A. Atelier Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="font-serif text-3xl mb-6">Why S.A. Atelier & Co.</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Based in Mumbai, we bring together design expertise, local craft knowledge, 
          and a deep understanding of how our clients live and work. Every project 
          is personal — we listen first, then design. The result is always a space 
          that feels uniquely yours.
        </p>
        <a
          href="/contact"
          className="inline-block bg-black text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-gray-800 transition-colors"
        >
          Book a Free Consultation
        </a>
      </div>

      {/* Location Footer Strip — important for local SEO */}
      <div className="text-center text-sm text-muted-foreground border-t border-gray-100 pt-8">
        <p>
          S.A. Atelier & Co. — Interior Designers serving Mumbai, Bandra, Juhu, 
          Worli, Powai, Andheri, Lower Parel & surrounding areas.
        </p>
      </div>

    </div>
  );
};

export default Home;