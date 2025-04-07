import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProjectCard from '../components/ui/ProjectCard';
import LoadingScreen from '../components/ui/LoadingScreen';
import about_small from '../assets/about.jpg';
import daughters_room from '../assets/daughters.jpg';
import common_bathroom from '../assets/common_bathroom.jpg';
// Sample data
const allProjects = [
  {
    id: 1,
    title: 'Minimalist Urban Apartment',
    category: 'Residential',
    description: 'A serene urban retreat designed with minimalist principles for a young professional couple in the heart of the city.',
    image: about_small,
  //  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    featured: true
  },
  {
    id: 2,
    title: 'Coastal Villa Renovation',
    category: 'Residential',
    description: 'Complete renovation of a seaside villa, blending traditional architecture with contemporary interior elements.',
    image: daughters_room,
    // image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Modern Office Space',
    category: 'Commercial',
    description: 'Transforming a corporate environment into a collaborative and inspiring workspace for a tech startup.',
    image: common_bathroom,
    // image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Boutique Hotel Lobby',
    category: 'Hospitality',
    description: 'A sophisticated lobby design for a boutique hotel, creating a memorable first impression for guests.',
    image: common_bathroom,
    // image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=2071&auto=format&fit=crop'
  },
  // {
  //   id: 5,
  //   title: 'Contemporary Family Home',
  //   category: 'Residential',
  //   description: 'A spacious family residence that balances functionality with modern aesthetics, creating a warm and inviting atmosphere.',
  // //   image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop'
  //  },
  // {
  //   id: 6,
  //   title: 'Artisanal Café Design',
  //   category: 'Commercial',
  //   description: 'A distinctive café interior that reflects the brand\'s commitment to craft coffee in a welcoming environment.',
  //   // image: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop'
  // },
  // {
  //   id: 7,
  //   title: 'Mountain Retreat',
  //   category: 'Residential',
  //   description: 'A cozy yet luxurious mountain home that embraces natural materials and panoramic views.',
  //   // image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop',
  //   featured: true
  // },
  // {
  //   id: 8,
  //   title: 'Corporate Headquarters',
  //   category: 'Commercial',
  //   description: 'A comprehensive design for a corporate headquarters that embodies the company\'s values and enhances workplace culture.',
  //   // image: 'https://images.unsplash.com/photo-1613963931023-5dc59437c8a6?q=80&w=1776&auto=format&fit=crop'
  // },
  // {
  //   id: 9,
  //   title: 'Urban Loft Conversion',
  //   category: 'Residential',
  //   description: 'Transformation of an industrial loft space into a sophisticated urban dwelling with character and style.',
  //   // image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop'
  // }
];

const categories = ['All', 'Residential', 'Commercial', 'Hospitality'];

const Projects: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  
  const handleFinishedLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <>
      {loading && <LoadingScreen onFinished={handleFinishedLoading} />}
      
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-secondary/30">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl">
              <span className="text-xs uppercase tracking-wider text-muted-foreground mb-3 inline-block">Our Portfolio</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">Showcasing Our Finest Work</h1>
              <p className="text-lg text-muted-foreground">
                Browse our collection of projects across residential, commercial, and hospitality sectors.
              </p>
            </div>
          </div>
        </section>
        
        {/* Project Gallery Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-4 mb-12 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-6 py-2 text-sm transition-all ${
                    activeCategory === category 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary hover:bg-secondary/80'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-wider text-muted-foreground mb-3 inline-block">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">What Our Clients Say</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-background border border-border">
                <p className="italic text-muted-foreground mb-6">
                  "S.A. Atelier & Co. transformed our home beyond our expectations. Their ability to understand our 
                  lifestyle and translate it into a beautiful, functional design is remarkable."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" 
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Emma Thompson</p>
                    <p className="text-xs text-muted-foreground">Residential Client</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-background border border-border">
                <p className="italic text-muted-foreground mb-6">
                  "Working with the S.A. Atelier & Co. team was a seamless experience from start to finish. Their attention 
                  to detail and commitment to excellence is evident in every aspect of our office design."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop" 
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Michael Chen</p>
                    <p className="text-xs text-muted-foreground">Commercial Client</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-background border border-border">
                <p className="italic text-muted-foreground mb-6">
                  "The team's creativity and problem-solving abilities are unmatched. They took a challenging space 
                  and turned it into a stunning environment that perfectly captures our brand essence."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop" 
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Sophia Rodriguez</p>
                    <p className="text-xs text-muted-foreground">Hospitality Client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default Projects;
