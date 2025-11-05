import { Project } from '../types/project';
import { loadProjectImages } from '../utils/imageUtils';

export const projects: Project[] = [
  // 1. Minimalist Urban Apartment (id: 1)
  {
    id: 1,
    title: 'Minimalist Urban Apartment',
    category: 'Residential',
    featured: true,
    description: '1450 sqft. The client envisioned a contemporary transformation of their space, seeking a refined and stylish ambiance...',
    location: 'Mumbai, India',
    images: loadProjectImages(1),
    features: [
      { title: 'Custom Storage Solutions', description: 'Built-in wardrobes...' },
      { title: 'Natural Materials', description: 'Use of wood...' },
      { title: 'Flexible Layout', description: 'Modular furniture...' }
    ]
  },

  // 2. Timeless Elegance (id: 7)
  {
    id: 7,
    title: 'Timeless Elegance: A Showflat Bedroom Where Colonial Charm Meets Contemporary Luxury',
    category: 'Residential',
    featured: false,
    description: 'When designing showflats, it’s easy to get caught up...',
    location: 'Mumbai, India',
    images: loadProjectImages(7),
    features: []
  },

  // 3. Boutique (id: 6)
  {
    id: 6,
    title: 'Boutique & Fashion Studio – A Bespoke Space for a Bangalore Designer',
    category: 'Commercial',
    featured: false,
    description: 'Starting from scratch, we developed the complete vision...',
    location: 'Banglore, India',
    images: loadProjectImages(6),
    features: [
      { title: 'Custom Lighting', description: 'Unique lighting fixtures...' },
      { title: 'Local Art', description: 'Integration of regional artwork...' },
      { title: 'Flexible Seating', description: 'Varied seating options...' }
    ]
  },

  // 4. Bungalow Uttarakhand (id: 5)
  {
    id: 5,
    title: 'A bungalow converted into a charming Airbnb in Uttarakhand',
    category: 'Residential',
    featured: false,
    description: 'This project involved the complete design of both...',
    location: 'Uttarakhand, India',
    images: loadProjectImages(5),
    features: []
  },

  // 5. Ankleshwar (id: 4)
  {
    id: 4,
    title: 'Ankleshwar 3000 sqft.',
    category: 'Residential',
    featured: false,
    description: 'This project embodies a calm and soothing ambiance...',
    location: 'Mumbai, India',
    images: loadProjectImages(4),
    features: [
      { title: 'Custom Lighting', description: 'Unique lighting fixtures...' },
      { title: 'Local Art', description: 'Integration of regional artwork...' },
      { title: 'Flexible Seating', description: 'Varied seating options...' }
    ]
  },

  // 6. Shibumi living (id: 3)
  {
    id: 3,
    title: 'Shibumi living',
    category: 'Residential',
    featured: false,
    description: 'This project is a harmonious blend of Wabi-Sabi and Japandi aesthetics...',
    location: 'Mumbai, India',
    images: loadProjectImages(3),
    features: [
      { title: 'Smart Home Integration', description: 'Automated lighting...' },
      { title: 'Premium Materials', description: 'Use of high-end finishes...' },
      { title: 'Outdoor Living', description: 'Seamless integration...' }
    ]
  },

  // 7. G+1 (id: 8)
  {
    id: 8,
    title: 'Ongoing Residential Project in Satna – G+1 Structure',
    category: 'Residential',
    featured: false,
    description: '',
    location: 'Madhya Pradesh, India',
    images: loadProjectImages(8),
    features: []
  },

  // 8. The Modern Muse (id: 2)
  {
    id: 2,
    title: 'The Mordern Muse',
    category: 'Residential',
    featured: true,
    description: 'For this project, the client envisioned a space with ample storage...',
    location: 'Mumbai, India',
    images: loadProjectImages(2),
    features: [
      { title: 'Collaborative Zones', description: 'Flexible meeting spaces...' },
      { title: 'Ergonomic Design', description: 'Furniture and layout optimized...' },
      { title: 'Sustainable Materials', description: 'Use of eco-friendly materials...' }
    ]
  }
];
