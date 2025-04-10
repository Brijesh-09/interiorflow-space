import { Project } from '../types/project';
import { loadProjectImages } from '../utils/imageUtils';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Minimalist Urban Apartment',
    category: 'Residential',
    featured: true,
    description: 'Create a serene girls bedroom with Japandi and Wabi Sabi influences, blending minimalist elegance and rustic charm.',
    fullDescription: 'This project involved transforming a standard bedroom into a serene retreat that combines Japandi and Wabi Sabi design philosophies. The challenge was to create a space that felt both modern and timeless, while incorporating natural elements and embracing the beauty of imperfection.',
    challenge: 'The client wanted a bedroom that would grow with their daughter while maintaining a sense of calm and sophistication. The space needed to be functional for both study and relaxation.',
    solution: 'We implemented a neutral color palette with natural materials, incorporating custom furniture pieces that combine Japanese minimalism with Scandinavian functionality. The design features subtle texture variations and organic shapes.',
    outcome: 'The result is a harmonious space that balances functionality with aesthetic beauty. The room now serves as a peaceful retreat that adapts to different needs throughout the day.',
    year: '2023',
    location: 'Mumbai, India',
    images: loadProjectImages(1),
    features: [
      {
        title: 'Custom Storage Solutions',
        description: 'Built-in wardrobes and shelving that maximize space while maintaining clean lines.'
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
    title: 'Modern Office Space',
    category: 'Commercial',
    featured: true,
    description: 'A contemporary office design that fosters creativity and collaboration while maintaining professional aesthetics.',
    fullDescription: 'This commercial project focused on creating a workspace that balances functionality with modern design. The challenge was to accommodate various work styles while maintaining a cohesive aesthetic.',
    challenge: 'The space needed to support both collaborative work and individual focus, with flexible areas that could adapt to different team sizes and project requirements.',
    solution: 'We created distinct zones for different work modes, using modular furniture and smart space planning. The design incorporates natural light and greenery to enhance productivity and well-being.',
    outcome: 'The office now serves as a dynamic workspace that adapts to the team\'s needs while maintaining a professional and inspiring atmosphere.',
    year: '2023',
    location: 'Bangalore, India',
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
    title: 'Luxury Penthouse',
    category: 'Residential',
    featured: false,
    description: 'A sophisticated penthouse design that combines luxury with functionality, offering panoramic views and premium amenities.',
    fullDescription: 'This high-end residential project focused on creating a luxurious living space that maximizes the stunning views while maintaining practical functionality.',
    challenge: 'The space needed to feel both grand and intimate, with careful consideration of the panoramic views and natural light.',
    solution: 'We used a neutral color palette with rich textures and materials, creating distinct zones while maintaining an open feel. The design incorporates smart home technology and custom storage solutions.',
    outcome: 'The result is a sophisticated living space that balances luxury with practicality, offering both stunning views and comfortable living.',
    year: '2023',
    location: 'Delhi, India',
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
    title: 'Boutique Hotel Lobby',
    category: 'Commercial',
    featured: false,
    description: 'A welcoming hotel lobby that creates a memorable first impression with its unique design and attention to detail.',
    fullDescription: 'This commercial project focused on creating a distinctive hotel lobby that reflects the brand\'s identity while providing a comfortable space for guests.',
    challenge: 'The space needed to accommodate various guest needs while maintaining a cohesive design language.',
    solution: 'We created distinct zones for different functions, using custom furniture and lighting to define spaces. The design incorporates local materials and artwork to create a sense of place.',
    outcome: 'The lobby now serves as both a functional space and a design statement, creating a memorable experience for guests.',
    year: '2023',
    location: 'Goa, India',
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
  {
    id: 5,
    title: 'Family Home Renovation',
    category: 'Residential',
    featured: false,
    description: 'A complete home renovation that modernizes the space while maintaining its character and functionality for a growing family.',
    fullDescription: 'This residential project involved transforming an older home into a modern, functional space for a family while preserving its architectural character.',
    challenge: 'The space needed to accommodate the family\'s current needs while allowing for future growth and changes.',
    solution: 'We maintained the home\'s original character while updating the layout and systems. The design incorporates flexible spaces and smart storage solutions.',
    outcome: 'The renovated home now meets the family\'s needs while maintaining its charm and character.',
    year: '2023',
    location: 'Chennai, India',
    images: loadProjectImages(5),
    features: [
      {
        title: 'Open Plan Living',
        description: 'Connected spaces that promote family interaction.'
      },
      {
        title: 'Smart Storage',
        description: 'Custom storage solutions throughout the home.'
      },
      {
        title: 'Energy Efficiency',
        description: 'Updated systems and insulation for better performance.'
      }
    ]
  },
  {
    id: 6,
    title: 'Restaurant Interior',
    category: 'Commercial',
    featured: false,
    description: 'A distinctive restaurant design that creates a memorable dining experience through thoughtful space planning and unique design elements.',
    fullDescription: 'This commercial project focused on creating a restaurant space that reflects the cuisine while providing a comfortable and engaging dining experience.',
    challenge: 'The space needed to accommodate various dining scenarios while maintaining a cohesive design language.',
    solution: 'We created distinct dining zones with custom furniture and lighting. The design incorporates materials and colors that reflect the restaurant\'s concept.',
    outcome: 'The restaurant now offers a unique dining experience that complements the cuisine and creates a memorable atmosphere.',
    year: '2023',
    location: 'Hyderabad, India',
    images: loadProjectImages(6),
    features: [
      {
        title: 'Custom Furniture',
        description: 'Unique seating and tables designed for the space.'
      },
      {
        title: 'Atmospheric Lighting',
        description: 'Layered lighting that creates the right mood.'
      },
      {
        title: 'Acoustic Design',
        description: 'Materials and layout optimized for sound control.'
      }
    ]
  }
];