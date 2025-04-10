import React from 'react';
import ProjectCard from '../components/ui/ProjectCard';
import { projectService } from '../services/projectService';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Projects = () => {
  const projects = projectService.getAllProjects();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-6">Our Projects</h1>
        <p className="text-muted-foreground">
          Explore our portfolio of interior design projects, where we transform spaces into beautiful, functional environments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {projects.map((project) => (
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

      {/* Call to Action Section */}
      <section className="py-24 relative overflow-hidden bg-secondary/30 rounded-lg">
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-fixed opacity-10"
            style={{ 
              backgroundImage: `url(${projects[0]?.images[0]?.url || ''})`
            }}
          ></div>
        </div>
        
        <div className="container mx-auto relative z-10 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready to Transform Your Space?</h2>
            <p className="text-muted-foreground mb-10">
              Let's collaborate to bring your vision to life. Our team of experienced designers is ready to create a space that reflects your unique style and meets your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="premium-button-filled inline-flex items-center justify-center"
              >
                Start Your Project <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;