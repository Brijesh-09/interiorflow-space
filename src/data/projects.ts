import { Project } from '../types/project';
import { loadProjectImages } from '../utils/imageUtils';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Minimalist Urban Apartment',
    category: 'Residential',
    featured: true,
    description: '1450 sqft. The client envisioned a contemporary transformation of their space, seeking a refined and stylish ambiance. Our objective was to infuse the interiors with a sophisticated play of color, seamlessly blending vibrant accents with understated elegance. The result is a thoughtfully curated environment that balances modern aesthetics with subtle charm.',
    location: 'Mumbai, India',
    images: loadProjectImages(1),
    features: [
      {
        title: 'Custom Storage Solutions',
        description: 'Built-in wardrobes and shelving that maximize space while maintaining clean lines.with integrating of metals and woods'
      },
      {
        title: 'Natural Materials',
        description: 'Use of wood, stone, and natural fibers to create warmth and texture.'
      },
      {
        title: 'Flexible Layout',
        description: 'Modular furniture that can be rearranged as needs change.'
      }
    ]
  },
  {
    id: 2,
    title: 'The Mordern Muse',
    category: 'Residential',
    featured: true,
    description: 'For this project, the client envisioned a space with ample, thoughtfully designed storage, complemented by a vibrant yet balanced use of color. A key highlight was the living area, which was to be enhanced with an integrated study nook, blending functionality with style.',
    location: 'Mumbai, India',
    images: loadProjectImages(2),
    features: [
      {
        title: 'Collaborative Zones',
        description: 'Flexible meeting spaces that can be reconfigured for different group sizes.'
      },
      {
        title: 'Ergonomic Design',
        description: 'Furniture and layout optimized for comfort and productivity.'
      },
      {
        title: 'Sustainable Materials',
        description: 'Use of eco-friendly materials and energy-efficient lighting.'
      }
    ]
  },
  {
    id: 3,
    title: 'Shibumi living',
    category: 'Residential',
    featured: false,
    description: 'This project is a harmonious blend of Wabi-Sabi and Japandi aesthetics, where the client sought sophistication through carefully curated furniture and a serene, tonal color palette. The overarching vision was to create a home that feels calm, refined, and almost surreal in its tranquility.',
    location: 'Mumbai, India',
    images: loadProjectImages(3),
    features: [
      {
        title: 'Smart Home Integration',
        description: 'Automated lighting, climate control, and entertainment systems.'
      },
      {
        title: 'Premium Materials',
        description: 'Use of high-end finishes and custom millwork throughout.'
      },
      {
        title: 'Outdoor Living',
        description: 'Seamless integration of indoor and outdoor spaces.'
      }
    ]
  },
  {
    id: 4,
    title: 'Ankleshwar 3000 sqft.',
    category: 'Residential',
    featured: false,
    description: 'This project embodies a calm and soothing ambiance, enriched with modern elegance and a seamless blend of comfort and style.',
    location: 'Mumbai, India',
    images: loadProjectImages(4),
    features: [
      {
        title: 'Custom Lighting',
        description: 'Unique lighting fixtures that create ambiance and define spaces.'
      },
      {
        title: 'Local Art',
        description: 'Integration of regional artwork and materials.'
      },
      {
        title: 'Flexible Seating',
        description: 'Varied seating options for different guest needs.'
      }
    ]
  },
];