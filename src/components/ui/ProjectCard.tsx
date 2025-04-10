import React, { useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectImage } from '../../types/project';

interface ProjectCardProps {
  id: number;
  title: string;
  category: string;
  description: string;
  image?: ProjectImage;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  id, 
  title, 
  category, 
  description, 
  image, 
  featured = false 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef} 
      className={`group overflow-hidden ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      <Link to={`/projects/${id}`} className="block h-full">
        <div className="relative h-full bg-background border border-border hover:border-accent/30 transition-all duration-500 overflow-hidden rounded-lg shadow-sm hover:shadow-md">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/3]">
            {image ? (
              <img 
                src={image.url} 
                alt={image.alt || title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">No image available</span>
              </div>
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          {/* Content */}
          <div className="p-6 transition-all">
            <span className="text-xs uppercase tracking-wider text-accent mb-2 inline-block">
              {category}
            </span>
            <h3 className="font-serif text-xl mb-2 group-hover:text-accent transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {description}
            </p>
            
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs font-medium inline-flex items-center text-accent transition-all group-hover:translate-x-1">
                View Project <ArrowUpRight size={14} className="ml-1" />
              </span>
            </div>
          </div>
          
          {/* Gold accent line */}
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-gradient bg-[length:200%_auto] group-hover:w-full transition-all duration-500"></div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
