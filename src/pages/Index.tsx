import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, Palette, Ruler, Lightbulb, Home, Star, Phone } from 'lucide-react';
import ProjectCard from '../components/ui/ProjectCard';
import about from '../assets/about.jpg';
import { projectService } from '../services/projectService';
import { Project } from '../types/project';

// Hook for scroll-triggered animations
const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return { ref, isVisible };
};

const RevealSection: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = '', delay = 0 }) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const services = [
  { icon: Palette, title: 'Interior Design', desc: 'Complete residential & commercial interior design tailored to your lifestyle.' },
  { icon: Ruler, title: 'Space Planning', desc: 'Optimized layouts that maximize every square foot of your space.' },
  { icon: Lightbulb, title: 'Design Consultation', desc: 'Expert guidance to bring clarity and direction to your design vision.' },
  { icon: Home, title: 'Turnkey Execution', desc: 'End-to-end project management from concept to handover.' },
];

const stats = [
  { number: '10+', label: 'Projects Completed' },
  { number: '2+', label: 'Years Experience' },
  { number: '100%', label: 'Client Satisfaction' },
  { number: '6', label: 'Cities Covered' },
];

const testimonials = [
  { name: 'Priya Sharma', location: 'Mumbai', text: 'S.A. Ateliar transformed our apartment into a dream home. The attention to detail was extraordinary.' },
  { name: 'Rajesh Patel', location: 'Ankleshwar', text: 'Their ability to blend functionality with aesthetics is unmatched. Highly recommend their services.' },
  { name: 'Meera Desai', location: 'Bangalore', text: 'Professional, creative, and delivered beyond our expectations. Our boutique space looks stunning.' },
];

const Index: React.FC = () => {
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const projects = projectService.getAllProjects();
    setAllProjects(projects);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="h-screen relative overflow-hidden -mt-20">
        <div className="parallax-container">
          <div
            ref={parallaxRef}
            className="parallax-bg hero-mask"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1606744824163-985d376605aa?q=80&w=1932&auto=format&fit=crop)` }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-4 animate-fade-in text-white" style={{ animationDelay: '0.3s' }}>
            <span className="bg-clip-text text-transparent bg-gold-gradient inline-block">Transform</span> Your Space
          </h1>
          <p className="max-w-xl text-lg md:text-xl mb-8 animate-fade-in text-white/80" style={{ animationDelay: '0.6s' }}>
            Enhancing interiors with intentional design and a keen eye for detail.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <Link to="/projects" className="premium-button-filled inline-flex items-center">
              View Our Work <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link to="/contact" className="premium-button inline-flex items-center">
              Get Free Consultation <Phone size={16} className="ml-2" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-accent" />
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="py-12 bg-accent/10 border-y border-accent/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <RevealSection key={i} delay={i * 150} className="text-center">
                <div className="text-3xl md:text-4xl font-serif bg-clip-text text-transparent bg-gold-gradient mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ─── */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <RevealSection>
              <span className="text-xs uppercase tracking-wider text-muted-foreground mb-3 inline-block">About Us</span>
              <h2 className="text-3xl md:text-4xl font-serif mb-6 decorated-title">Creating Exceptional Living Spaces</h2>
              <p className="text-muted-foreground mb-6">
                At S.A. ATELIAR, we believe that extraordinary spaces tell compelling stories. Our design philosophy seamlessly integrates functionality, aesthetics, and each client's unique personality to create interiors that inspire.
              </p>
              <Link to="/about" className="inline-flex items-center text-sm font-medium text-primary hover:underline relative group">
                <span>Learn more about our approach</span>
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </RevealSection>
            <RevealSection delay={200}>
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img src={about} alt="About our studio" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="section-padding">
        <div className="container mx-auto">
          <RevealSection className="text-center mb-16">
            <span className="text-xs uppercase tracking-wider text-muted-foreground mb-3 inline-block">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4 decorated-title">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">From concept to completion, we offer a comprehensive range of interior design services.</p>
          </RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <RevealSection key={i} delay={i * 150}>
                <div className="group p-8 rounded-lg border border-border bg-card hover:border-accent/40 hover:shadow-lg transition-all duration-500 text-center h-full">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ALL PROJECTS SHOWCASE ─── */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto">
          <RevealSection className="text-center mb-16">
            <span className="text-xs uppercase tracking-wider text-muted-foreground mb-3 inline-block">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4 decorated-title">Our Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Every project tells a unique story. Explore our collection of thoughtfully designed spaces.</p>
          </RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allProjects.map((project, i) => (
              <RevealSection key={project.id} delay={(i % 4) * 100}>
                <ProjectCard id={project.id} title={project.title} category={project.category} description={project.description} image={project.images[0]} featured={project.featured} />
              </RevealSection>
            ))}
          </div>
          <RevealSection className="text-center mt-12">
            <Link to="/projects" className="premium-button inline-flex items-center">
              View All Projects <ArrowRight size={16} className="ml-2" />
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="section-padding">
        <div className="container mx-auto">
          <RevealSection className="text-center mb-16">
            <span className="text-xs uppercase tracking-wider text-muted-foreground mb-3 inline-block">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4 decorated-title">What Our Clients Say</h2>
          </RevealSection>
          <RevealSection>
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6 gap-1">
                {[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 fill-accent text-accent" />))}
              </div>
              <div className="relative min-h-[140px]">
                {testimonials.map((t, i) => (
                  <div key={i} className="absolute inset-0 transition-all duration-700" style={{ opacity: activeTestimonial === i ? 1 : 0, transform: activeTestimonial === i ? 'translateY(0)' : 'translateY(20px)', pointerEvents: activeTestimonial === i ? 'auto' : 'none' }}>
                    <p className="text-lg md:text-xl italic text-foreground mb-6 leading-relaxed">"{t.text}"</p>
                    <p className="font-serif text-accent">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.location}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActiveTestimonial(i)} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeTestimonial === i ? 'bg-accent w-8' : 'bg-accent/30'}`} />
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        <RevealSection className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">
            Ready to <span className="bg-clip-text text-transparent bg-gold-gradient">Transform</span> Your Space?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">Book a free consultation and let's bring your dream space to life.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="premium-button-filled inline-flex items-center text-base px-8 py-4">
              Book Free Consultation <ArrowRight size={18} className="ml-2" />
            </Link>
            <a href="tel:+919876543210" className="premium-button inline-flex items-center text-base px-8 py-4">
              <Phone size={18} className="mr-2" /> Call Us Now
            </a>
          </div>
        </RevealSection>
      </section>
    </>
  );
};

export default Index;
