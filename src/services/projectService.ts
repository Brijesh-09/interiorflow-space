import { Project } from '@/types/project';
import { loadProjectImages } from '../utils/imageUtils';
import { projects } from '@/data/projects';

export const projectService = {
  // Get all projects with their images
  getAllProjects: (): Project[] => {
    return projects.map(project => ({
      ...project,
      images: loadProjectImages(project.id)
    }));
  },

  // Get a single project by ID with its images
  getProjectById: (id: number): Project | undefined => {
    const project = projects.find(project => project.id === id);
    if (!project) return undefined;
    
    return {
      ...project,
      images: loadProjectImages(id)
    };
  },

  // Get featured projects with their images
  getFeaturedProjects: (): Project[] => {
    return projects
      .filter(project => project.featured)
      .map(project => ({
        ...project,
        images: loadProjectImages(project.id)
      }));
  },

  // Get projects by category with their images
  getProjectsByCategory: (category: 'Residential' | 'Commercial'): Project[] => {
    return projects
      .filter(project => project.category === category)
      .map(project => ({
        ...project,
        images: loadProjectImages(project.id)
      }));
  }
}; 