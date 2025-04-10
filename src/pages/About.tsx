import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import TeamMember from '../components/ui/TeamMember';
import LoadingScreen from '../components/ui/LoadingScreen';

// Sample data
const teamMembers = [
  {
    name: 'Sophia Reynolds',
    role: 'Principal Designer & Founder',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    bio: 'With over 15 years of experience in interior design, Sophia has led projects across residential, commercial, and hospitality sectors. Her design philosophy combines functionality with aesthetic beauty, creating spaces that reflect each client\'s unique personality and needs.'
  },
  {
    name: 'Alexander Chen',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop',
    bio: 'Alex brings innovative vision and creative direction to every project. His background in architecture and fine arts informs his holistic approach to design, seamlessly blending structure, materials, and artistic elements.'
  },
  {
    name: 'Olivia Martinez',
    role: 'Senior Interior Designer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
    bio: 'Specializing in residential design, Olivia has a talent for creating warm, inviting spaces that feel both luxurious and livable. Her attention to detail and understanding of material selection sets her work apart.'
  },
  {
    name: 'Ethan Brooks',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    bio: 'Ethan ensures that every project runs smoothly from concept to completion. His organizational skills, communication, and deep knowledge of construction processes help bring design visions to reality on time and within budget.'
  }
];

const values = [
  {
    title: 'Client-Centered Approach',
    description: 'We listen carefully to understand our clients\' needs, preferences, and aspirations, placing them at the center of our design process.'
  },
  {
    title: 'Attention to Detail',
    description: 'We believe that exceptional spaces are born from meticulous attention to every detail, from grand architectural elements to the smallest finishing touches.'
  },
  {
    title: 'Sustainable Design',
    description: 'We integrate environmentally responsible practices and materials into our designs, creating spaces that are beautiful and sustainable.'
  },
  {
    title: 'Collaborative Spirit',
    description: 'We foster open communication and collaboration with clients, architects, craftspeople, and vendors to achieve the best possible outcomes.'
  }
];

const About: React.FC = () => {
  const [loading, setLoading] = useState(true);
  
  const handleFinishedLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loading && <LoadingScreen onFinished={handleFinishedLoading} />}
      
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-secondary/30">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl">
              <span className="text-xs uppercase tracking-wider text-muted-foreground mb-3 inline-block">About Us</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">Crafting Exceptional Interior Experiences</h1>
              <p className="text-lg text-muted-foreground">
                We transform spaces into extraordinary experiences through thoughtful design and meticulous attention to detail.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground mb-3 inline-block">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-serif mb-6">A Passion for Transformative Design</h2>
                <p className="text-muted-foreground mb-6">
                  Founded in 2008 by Sophia Reynolds, S.A. Atelier & Co. began with a simple mission: to create spaces that inspire, 
                  function beautifully, and reflect the unique personality of each client.
                </p>
                <p className="mb-6">
                  What started as a small studio specializing in residential design has grown into a comprehensive interior design 
                  firm with expertise across residential, commercial, and hospitality sectors.
                </p>
                <p className="mb-6">
                  Throughout our journey, our fundamental approach has remained consistent: we listen carefully, collaborate closely, 
                  and execute precisely to bring our clients' visions to life.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop" 
                    alt="Interior design studio" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                  />
                </div>
                
                <div className="aspect-square overflow-hidden row-span-2 translate-y-8">
                  <img 
                    src="https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?q=80&w=1974&auto=format&fit=crop" 
                    alt="Design process" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                  />
                </div>
                
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop" 
                    alt="Office interior" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-wider text-muted-foreground mb-3 inline-block">Our Values</span>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">The Principles That Guide Our Work</h2>
              <p className="text-muted-foreground">
                Our design approach is guided by a set of core values that inform every project we undertake.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="p-8 bg-background border border-border hover:border-primary/20 transition-all duration-300">
                  <h3 className="font-serif text-xl mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs uppercase tracking-wider text-muted-foreground mb-3 inline-block">Our Process</span>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">How We Bring Your Vision to Life</h2>
              <p className="text-muted-foreground">
                Our structured yet flexible design process ensures that we capture your vision and exceed your expectations at every stage.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                  <span className="font-serif text-xl">01</span>
                </div>
                <h3 className="font-serif text-lg mb-3">Discovery</h3>
                <p className="text-sm text-muted-foreground">
                  We begin by understanding your goals, preferences, lifestyle, and the functional requirements of your space.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                  <span className="font-serif text-xl">02</span>
                </div>
                <h3 className="font-serif text-lg mb-3">Concept Development</h3>
                <p className="text-sm text-muted-foreground">
                  We translate your vision into detailed design concepts, including space planning, material selection, and visual direction.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                  <span className="font-serif text-xl">03</span>
                </div>
                <h3 className="font-serif text-lg mb-3">Design Development</h3>
                <p className="text-sm text-muted-foreground">
                  We refine the approved concept into detailed design specifications, sourcing materials and furnishings.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                  <span className="font-serif text-xl">04</span>
                </div>
                <h3 className="font-serif text-lg mb-3">Implementation</h3>
                <p className="text-sm text-muted-foreground">
                  We coordinate with contractors and vendors, overseeing installation to ensure every detail meets our exacting standards.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-wider text-muted-foreground mb-3 inline-block">Our Team</span>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Meet the Designers</h2>
              <p className="text-muted-foreground">
                Our talented team brings diverse expertise and a shared commitment to creating exceptional spaces.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default About;
