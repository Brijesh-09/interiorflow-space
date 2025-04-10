export interface ProjectImage {
  url: string;
  alt: string;
  type: 'primary' | 'additional';
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: 'Residential' | 'Commercial';
  featured: boolean;
  description: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  outcome: string;
  year: string;
  location: string;
  images: ProjectImage[];
  features: ProjectFeature[];
} 