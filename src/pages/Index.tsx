
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProjectCard from '../components/ui/ProjectCard';
import LoadingScreen from '../components/ui/LoadingScreen';
import bgImage from '../assets/bg_image2.jpg'

// Sample data
const featuredProjects = [
  {
    id: 1,
    title: 'Minimalist Urban Apartment',
    category: 'Residential',
    description: 'A serene urban retreat designed with minimalist principles for a young professional couple in the heart of the city.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    featured: true
  },
  {
    id: 2,
    title: 'Coastal Villa Renovation',
    category: 'Residential',
    description: 'Complete renovation of a seaside villa, blending traditional architecture with contemporary interior elements.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Modern Office Space',
    category: 'Commercial',
    description: 'Transforming a corporate environment into a collaborative and inspiring workspace for a tech startup.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop'
  }
];

const Index: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const parallaxRef = useRef<HTMLDivElement>(null);

  const handleFinishedLoading = () => {
    setLoading(false);
  };

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {loading && <LoadingScreen onFinished={handleFinishedLoading} />}
      
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        
        {/* Hero Section */}
        <section className="h-screen relative overflow-hidden">
          <div className="parallax-container">
            <div 
              ref={parallaxRef}
              className="parallax-bg hero-mask"
              style={{ backgroundImage: `url(${bgImage})` }}
            ></div>
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Transform Your Space
            </h1>
            <p className="max-w-xl text-lg md:text-xl mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Enhancing interiors with intentional design and a keen eye for detail.
            </p>
            <div className="space-x-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <Link 
                to="/projects" 
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-sm font-medium transition-all hover:bg-primary/90"
              >
                View Our Work <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="text-white/80" />
          </div>
        </section>
        
        {/* About Preview Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground mb-3 inline-block">About Us</span>
                <h2 className="text-3xl md:text-4xl font-serif mb-6">Creating Exceptional Living Spaces</h2>
                <p className="text-muted-foreground mb-6">
                At SAATELIER, we believe that extraordinary spaces tell compelling stories. Our design philosophy seamlessly integrates functionality, aesthetics, and each client’s unique personality to create interiors that inspire.We are professionals who transform your spaces into a canvas, crafting a home that embodies comfort and warmth. With hands-on experience in the field, we've worked alongside designers and architects to create inviting and personalized living spaces.
                </p>
                {/* <p className="mb-8">
                  With over 15 years of experience in residential and commercial design, our team brings expertise, 
                  creativity, and attention to detail to every project.
                </p> */}
                <Link 
                  to="/about" 
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Learn more about our approach <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
              
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/5 rounded-sm animate-float"></div>
                <img 
                  src="https://images.unsplash.com/photo-1632829882891-5047ccc421bc?q=80&w=2070&auto=format&fit=crop" 
                  alt="Interior design studio" 
                  className="relative w-full h-auto rounded-sm object-cover z-10"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Projects Section */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-wider text-muted-foreground mb-3 inline-block">Our Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Featured Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our collection of thoughtfully designed spaces that reflect our commitment to 
                quality, innovation, and the unique vision of each client.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map(project => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
            
            <div className="text-center mt-16">
              <Link 
                to="/projects" 
                className="inline-flex items-center px-6 py-3 border border-primary bg-transparent hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
              >
                View All Projects <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div 
              className="w-full h-full bg-cover bg-center bg-fixed"
              style={{ 
                backgroundImage: 'url(https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2080&auto=format&fit=crop)',
                opacity: 0.2
              }}
            ></div>
          </div>
          
          <div className="container mx-auto relative z-10 px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Transform Your Vision Into Reality</h2>
              <p className="text-muted-foreground mb-10">
                Whether you're renovating, building from scratch, or simply refreshing your space, 
                we're here to bring your vision to life with expertise and precision.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground text-sm font-medium transition-all hover:bg-primary/90"
              >
                Start Your Project <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
