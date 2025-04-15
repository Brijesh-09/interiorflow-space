import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectService } from '../services/projectService';
import { ArrowLeft } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectService.getProjectById(Number(id)) : null;

  if (!project) {
    return (
      <div className="container mx-auto px-6 md:px-12 py-20 text-center">
        <h1 className="text-2xl mb-4">Project not found</h1>
        <Link to="/projects" className="text-accent hover:underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  const primaryImage = project.images?.find(img => img.type === 'primary');
  const additionalImages = project.images?.filter(img => img.type === 'additional') || [];

  return (
    <div className="container mx-auto px-6 md:px-12 py-20">
      <Link 
        to="/projects" 
        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8"
      >
        <ArrowLeft size={16} className="mr-2" />
        Back to Projects
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif mb-6">{project.title}</h1>
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              {project.category}
            </span>
          </div>

          {primaryImage && (
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <img 
                src={primaryImage.url} 
                alt={primaryImage.alt}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>

      {additionalImages.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {additionalImages.map((image, index) => (
            <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <img 
                src={image.url} 
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {project.features?.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl font-serif mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.features.map((feature, index) => (
              <div key={index} className="p-6 bg-secondary/30 rounded-lg">
                <h3 className="font-serif text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
  