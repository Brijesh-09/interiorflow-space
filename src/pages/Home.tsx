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
        <h1 className="font-serif text-4xl md:text-5xl mb-6">Welcome to InteriorFlow</h1>
        <p className="text-muted-foreground">
          Your premier interior design partner, transforming spaces into beautiful, functional environments.
        </p>
      </div>

      {/* Featured Projects Section */}
      <div className="mb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Featured Projects</h2>
          <p className="text-muted-foreground">
            Explore our showcase of exceptional interior design projects that demonstrate our expertise and creativity.
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
    </div>
  );
};

export default Home; 