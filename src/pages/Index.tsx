
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProjectCard from '../components/ui/ProjectCard';
import LoadingScreen from '../components/ui/LoadingScreen';
import bgImage from '../assets/bg_image2.jpg'
import about_small from '../assets/about.jpg';
import daughters_room from '../assets/daughters.jpg';
import daughters_bedroom from '../assets/daughters_bedroom.jpg';
import saijalhall from '../assets/saijalhall.jpg';

// Sample data
const featuredProjects = [
  {
    id: 1,
    title: 'Minimalist Urban Apartment',
    category: 'Residential',
    description: 'Create a serene girls bedroom with Japandi and Wabi Sabi influences, blending minimalist elegance and rustic charm. Use natural materials, simple furniture, and subtle pops of color to embrace imperfection and craftsmanship.',
    image: daughters_room,
    featured: true
  },
  {
    id: 5,
    title: 'Contemporary Family Home',
    category: 'Residential',
    featured: true,
    description: 'A spacious family residence that balances functionality with modern aesthetics, creating a warm and inviting atmosphere.',
    image: saijalhall,
  },
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
              style={{ backgroundImage: `url(https://images.unsplash.com/photo-1606744824163-985d376605aa?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
            ></div>
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-4 animate-fade-in relative group overflow-hidden" style={{ animationDelay: '0.3s' }}>
              <span className="bg-clip-text text-transparent bg-gold-gradient animate-morph inline-block">Transform</span> Your Space
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gold-gradient group-hover:w-full transition-all duration-1000"></span>
            </h1>
            <p className="max-w-xl text-lg md:text-xl mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Enhancing interiors with intentional design and a keen eye for detail.
            </p>
            <div className="space-x-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <Link 
                to="/projects" 
                className="premium-button-filled inline-flex items-center"
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
                <h2 className="text-3xl md:text-4xl font-serif mb-6 decorated-title animate-fade-in">Creating Exceptional Living Spaces</h2>
                <p className="text-muted-foreground mb-6">
                AtS.A. ATELIAR, we believe that extraordinary spaces tell compelling stories. Our design philosophy seamlessly integrates functionality, aesthetics, and each client's unique personality to create interiors that inspire.We are professionals who transform your spaces into a canvas, crafting a home that embodies comfort and warmth. With hands-on experience in the field, we've worked alongside designers and architects to create inviting and personalized living spaces.
                </p>
                <Link 
                  to="/about" 
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline relative group"
                >
                  <span>Learn more about our approach</span> 
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </div>
              
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/5 rounded-sm animate-float"></div>
                <img 
                  src={about_small} 
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
              <h2 className="text-3xl md:text-4xl font-serif mb-6 decorated-title animate-fade-in">Featured Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our collection of thoughtfully designed spaces that reflect our commitment to 
                quality, innovation, and the unique vision of each client.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {featuredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className={`
                    ${index === 0 ? 'md:col-span-6 md:row-span-2' : ''}
                    ${index === 1 ? 'md:col-span-6' : ''}
                    ${index === 2 ? 'md:col-span-6' : ''}
                  `}
                >
                  <ProjectCard {...project} featured={index === 0} />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <Link 
                to="/projects" 
                className="premium-button inline-flex items-center"
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
              <h2 className="text-3xl md:text-4xl font-serif mb-6 animate-fade-in">Transform Your Vision Into Reality</h2>
              <p className="text-muted-foreground mb-10">
                Whether you're renovating, building from scratch, or simply refreshing your space, 
                we're here to bring your vision to life with expertise and precision.
              </p>
              <Link 
                to="/contact" 
                className="premium-button-filled inline-flex items-center"
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
