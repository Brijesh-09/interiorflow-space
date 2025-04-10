import { ProjectImage } from '../types/project';

export const loadProjectImages = (projectId: number | string): ProjectImage[] => {
  try {
    // Dynamically import all images from the project folder
    const images = import.meta.glob('../assets/Project_*/*.{jpg,jpeg,png,webp}', {
      eager: true,
      import: 'default'
    });

    console.log('Found images:', Object.keys(images)); // Debug log

    // Filter images for the specific project
    const projectImages = Object.entries(images)
      .filter(([path]) => {
        const projectFolder = path.split('/').find(part => part.startsWith('Project_'));
        return projectFolder === `Project_${projectId}`;
      })
      .map(([path, url]) => {
        const fileName = path.split('/').pop() || '';
        const isPrimary = fileName.toLowerCase().includes('primary') || 
                          fileName.toLowerCase().includes('main') || 
                          fileName.toLowerCase().includes('cover');
        
        // Convert the URL to a string if it's not already
        const imageUrl = typeof url === 'string' ? url : (url as any).default;
        
        return {
          url: imageUrl,
          alt: `Project ${projectId} - ${fileName.split('.')[0]}`,
          type: isPrimary ? 'primary' as const : 'additional' as const
        };
      });

    console.log(`Found ${projectImages.length} images for Project_${projectId}`); // Debug log
    return projectImages;
  } catch (error) {
    console.error('Error loading project images:', error);
    return [];
  }
}; 