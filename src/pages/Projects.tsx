
import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProjectCard from '../components/ui/ProjectCard';
import LoadingScreen from '../components/ui/LoadingScreen';
import about_small from '../assets/about.jpg';
import daughters_room from '../assets/daughters.jpg';
import daughters_bedroom from '../assets/daughters_bedroom.jpg';
import common_bathroom from '../assets/common_bathroom.jpg';
import living_tv from '../assets/living_tv.jpg';
import saijalhall from '../assets/saijalhall.jpg';
import MDoffice from '../assets/MD.jpg';

// Sample data
const allProjects = [
  {
    id: 1,
    title: 'Minimalist Urban Apartment',
    category: 'Residential',
    description: 'Create a serene girls bedroom with Japandi and Wabi Sabi influences, blending minimalist elegance and rustic charm. Use natural materials, simple furniture, and subtle pops of color to embrace imperfection and craftsmanship.',
    image: daughters_room,
    featured: true
  },
  {
    id: 2,
    title: 'Modern Japandi Bedroom',
    category: 'Residential',
    description: 'Create a modern Japandi bedroom with a mix of traditional and contemporary elements. Use natural materials, simple furniture, and subtle pops of color to embrace imperfection and craftsmanship.',
    image: daughters_bedroom,
  },
  {
    id: 3,
    title: 'Modern Office Washroom  ',
    category: 'Commercial',
    description: 'Create a modern office washroom with a mix of traditional and contemporary elements. Use natural materials, simple furniture, and subtle pops of color to embrace imperfection and craftsmanship.',
    image: common_bathroom,
  },
  {
    id: 4,
    title: 'Living Room',
    category: 'Residential',
    description: 'Create a living room with a mix of traditional and contemporary elements. Use natural materials, simple furniture, and subtle pops of color to embrace imperfection and craftsmanship.',
    image: living_tv,
  },
  {
    id: 5,
    title: 'Contemporary Family Home',
    category: 'Residential',
    featured: true,
    description: 'A spacious family residence that balances functionality with modern aesthetics, creating a warm and inviting atmosphere.',
    image: saijalhall,
  },
  {
    id: 6,
    title: '2500 SQ FEET OFFICE IN THANE',
    category: 'Commercial',
    description: 'A distinctive office interior that reflects the brand\'s commitment to craftsmanship and creates a welcoming, productive environment',
    image: MDoffice,
  },
];

const categories = ['All', 'Residential', 'Commercial'];

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
            <div className="max-w-4xl animate-fade-in">
              <span className="text-xs uppercase tracking-wider text-muted-foreground mb-3 inline-block">Our Portfolio</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 decorated-title">Showcasing Our Finest Work</h1>
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
            <div className="flex flex-wrap gap-4 mb-12 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
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
        
        <Footer />
      </div>
    </>
  );
};

export default Projects;
