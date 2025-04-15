
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin, Award, Users } from 'lucide-react';
import { Project } from '@/types/project';
import { Button } from './button';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  if (!project) {
    return <div className="py-20 text-center">Project not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header with navigation */}
      <div className="mb-8">
        <Link to="/projects" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-accent mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
        <h1 className="text-4xl md:text-5xl font-serif mb-4">{project.title}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">{project.description}</p>
      </div>

      {/* Main image */}
      <div className="mb-12 overflow-hidden rounded-lg shadow-lg">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Project details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-secondary/30 p-6 rounded-lg">
          <h3 className="font-serif text-lg mb-4">Project Details</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <MapPin className="mr-3 h-5 w-5 text-accent" />
              <span>{project.location || 'Bengaluru, India'}</span>
            </li>
            <li className="flex items-center">
              <Clock className="mr-3 h-5 w-5 text-accent" />
              <span>{project.duration || '3 months'}</span>
            </li>
            <li className="flex items-center">
              <Award className="mr-3 h-5 w-5 text-accent" />
              <span>{project.category}</span>
            </li>
            <li className="flex items-center">
              <Users className="mr-3 h-5 w-5 text-accent" />
              <span>{project.client || 'Residential Client'}</span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-serif text-2xl mb-4">Project Overview</h3>
          <p className="text-muted-foreground mb-6">
            {project.description}
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="font-serif text-lg mb-2">The Challenge</h4>
              <p className="text-muted-foreground">
                {project.challenges || "The client needed to transform their space while maintaining functionality and reflecting their personal style and needs."}
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-2">Our Approach</h4>
              <p className="text-muted-foreground">
                {project.approach || "We worked closely with the client to understand their vision and created a design that blended aesthetics with practicality."}
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-2">The Result</h4>
              <p className="text-muted-foreground">
                {project.results || "A beautifully transformed space that perfectly balances style, comfort, and functionality while meeting all the client's requirements."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image gallery */}
      <div>
        <h3 className="font-serif text-2xl mb-6">Project Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02]">
              <img
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <h3 className="font-serif text-2xl mb-4">Ready to transform your space?</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Let's collaborate to create a space that reflects your personality and meets your needs.
        </p>
        <Button asChild className="mt-2" variant="premium">
          <Link to="/contact">Start Your Project</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProjectDetail;
