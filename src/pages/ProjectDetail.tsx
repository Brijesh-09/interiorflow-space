
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import LoadingScreen from '../components/ui/LoadingScreen';

// Import project images
import about_small from '../assets/about.jpg';
import daughters_room from '../assets/daughters.jpg';
import daughters_bedroom from '../assets/daughters_bedroom.jpg';
import common_bathroom from '../assets/common_bathroom.jpg';
import living_tv from '../assets/living_tv.jpg';
import saijalhall from '../assets/saijalhall.jpg';
import MDoffice from '../assets/MD.jpg';

// Project data with extended details for the detailed view
const projectsData = [
  {
    id: 1,
    title: 'Minimalist Urban Apartment',
    category: 'Residential',
    description: 'Create a serene girls bedroom with Japandi and Wabi Sabi influences, blending minimalist elegance and rustic charm. Use natural materials, simple furniture, and subtle pops of color to embrace imperfection and craftsmanship.',
    fullDescription: `This project focused on creating a serene girls bedroom with Japandi and Wabi Sabi influences. The client wanted a space that blended minimalist elegance with rustic charm, embracing the beauty of imperfection and craftsmanship.

We approached this project with a focus on natural materials, simple furniture, and subtle pops of color. The result is a calm, balanced space that feels both sophisticated and welcoming.`,
    challenge: "The main challenge was balancing minimalism with warmth, ensuring the space didn't feel cold or stark while maintaining clean lines and an uncluttered aesthetic.",
    solution: "We incorporated natural wood elements, textured fabrics, and a carefully curated color palette to create a space that feels both refined and cozy. Each element was selected for both function and beauty.",
    outcome: "The completed space successfully embodies the Japandi philosophy, creating a peaceful retreat that's both aesthetically pleasing and practical for everyday living.",
    primaryImage: daughters_room,
    additionalImages: [daughters_bedroom, common_bathroom],
    features: [
      "Custom-built wooden bed frame with integrated storage",
      "Handcrafted textiles and bedding in natural materials",
      "Minimalist lighting fixtures that create a warm ambiance",
      "Carefully curated decorative elements that add character without clutter"
    ],
    year: 2023,
    location: "Mumbai, India",
    featured: true
  },
  {
    id: 2,
    title: 'Modern Japandi Bedroom',
    category: 'Residential',
    description: 'Create a modern Japandi bedroom with a mix of traditional and contemporary elements. Use natural materials, simple furniture, and subtle pops of color to embrace imperfection and craftsmanship.',
    fullDescription: `This modern Japandi bedroom project seamlessly blends Japanese minimalism with Scandinavian functionality, creating a tranquil and elegant retreat.
    
The client desired a space that felt both contemporary and timeless, with an emphasis on natural materials and craftsmanship.`,
    challenge: "Creating a cohesive design that honored both Japanese and Scandinavian design traditions while satisfying the client's preference for modern touches.",
    solution: "We developed a design that focuses on clean lines, natural materials, and functional simplicity. Each element was carefully selected to contribute to the overall harmony of the space.",
    outcome: "The finished bedroom provides a peaceful sanctuary that embodies the principles of both design traditions, with thoughtful details that elevate the everyday experience.",
    primaryImage: daughters_bedroom,
    additionalImages: [daughters_room, living_tv],
    features: [
      "Platform bed crafted from sustainable oak",
      "Custom built-in storage with minimalist hardware",
      "Hand-woven textiles in natural fibers and muted tones",
      "Curated art pieces that reflect the client's personal aesthetic"
    ],
    year: 2022,
    location: "Thane, India",
  },
  {
    id: 3,
    title: 'Modern Office Washroom',
    category: 'Commercial',
    description: 'Create a modern office washroom with a mix of traditional and contemporary elements. Use natural materials, simple furniture, and subtle pops of color to embrace imperfection and craftsmanship.',
    fullDescription: `This commercial office washroom project demonstrates how thoughtful design can transform utilitarian spaces into comfortable, aesthetically pleasing environments.
    
The client wanted to create washroom facilities that would reflect their company's attention to detail and consideration for employee wellbeing.`,
    challenge: "Balancing durability and practicality with sophisticated design elements in a high-traffic commercial space.",
    solution: "We selected commercial-grade materials with beautiful finishes, creating a space that's both practical and visually appealing. Smart space planning ensures efficiency while maintaining comfort.",
    outcome: "The completed washrooms have become an unexpected highlight of the office environment, demonstrating that functional spaces can also be beautifully designed.",
    primaryImage: common_bathroom,
    additionalImages: [living_tv, saijalhall],
    features: [
      "Custom vanities with integrated lighting",
      "High-efficiency fixtures that reduce water consumption",
      "Durable yet elegant tile work in a contemporary pattern",
      "Thoughtful lighting design that enhances the space"
    ],
    year: 2023,
    location: "Mumbai, India",
  },
  {
    id: 4,
    title: 'Living Room',
    category: 'Residential',
    description: 'Create a living room with a mix of traditional and contemporary elements. Use natural materials, simple furniture, and subtle pops of color to embrace imperfection and craftsmanship.',
    fullDescription: `This living room project beautifully merges traditional and contemporary design elements to create a sophisticated yet comfortable gathering space.
    
The clients wanted a living room that would serve as both an elegant space for entertaining and a comfortable area for family relaxation.`,
    challenge: "Creating a cohesive design that incorporated the clients' existing furniture pieces while updating the overall aesthetic.",
    solution: "We developed a layered design approach, using a neutral base palette and adding texture and color through carefully selected textiles, art, and accessories.",
    outcome: "The completed living room successfully balances elegance with approachability, creating a versatile space that adapts to both formal gatherings and casual family time.",
    primaryImage: living_tv,
    additionalImages: [daughters_room, saijalhall],
    features: [
      "Custom upholstery in performance fabrics suitable for family use",
      "Layered lighting scheme with ambient, task, and accent lighting",
      "Mix of new and refurbished furniture pieces to honor the clients' history",
      "Statement area rug that anchors the seating arrangement"
    ],
    year: 2022,
    location: "Thane, India",
  },
  {
    id: 5,
    title: 'Contemporary Family Home',
    category: 'Residential',
    featured: true,
    description: 'A spacious family residence that balances functionality with modern aesthetics, creating a warm and inviting atmosphere.',
    fullDescription: `This comprehensive home design project focused on creating a contemporary family residence that perfectly balances sophistication with livability.
    
The clients, a family of four with diverse needs and interests, wanted a home that would support their active lifestyle while providing beautiful spaces for relaxation and entertainment.`,
    challenge: "Creating distinct zones for different family activities while maintaining an open, connected feel throughout the home.",
    solution: "We developed a design that uses subtle architectural elements and thoughtful space planning to define areas without disconnecting them. Materials and finishes were selected for both beauty and durability.",
    outcome: "The completed home has become a true reflection of the family's lifestyle, with spaces that adapt to their changing needs and provide both functionality and beauty.",
    primaryImage: saijalhall,
    additionalImages: [living_tv, daughters_room],
    features: [
      "Open concept main living area with defined zones for various activities",
      "Custom storage solutions throughout to minimize clutter",
      "Durable, family-friendly materials that don't compromise on style",
      "Indoor-outdoor connection through strategic window placement and patio design"
    ],
    year: 2023,
    location: "Mumbai, India",
  },
  {
    id: 6,
    title: '2500 SQ FEET OFFICE IN THANE',
    category: 'Commercial',
    description: 'A distinctive office interior that reflects the brand\'s commitment to craftsmanship and creates a welcoming, productive environment',
    fullDescription: `This 2,500 square foot office project transformed a standard commercial space into a distinctive work environment that embodies the client's brand and supports their team's workflow.
    
The client, a growing creative agency, wanted an office that would inspire creativity, facilitate collaboration, and impress clients while maintaining practicality.`,
    challenge: "Creating a variety of work settings within a limited footprint, accommodating both focused individual work and team collaboration.",
    solution: "We developed a flexible layout with a mix of open workstations, enclosed meeting spaces, and casual collaboration areas. The design maximizes natural light and incorporates the company's brand elements in subtle, sophisticated ways.",
    outcome: "The completed office has become an important tool for the company's recruitment and retention efforts, while providing a workspace that truly supports their creative process and client relationships.",
    primaryImage: MDoffice,
    additionalImages: [common_bathroom, saijalhall],
    features: [
      "Reconfigurable workstations that adapt to changing team needs",
      "Acoustically designed meeting rooms for privacy and focus",
      "Custom reception area that makes a strong first impression",
      "Break areas that encourage informal interaction and relaxation"
    ],
    year: 2022,
    location: "Thane, India",
  }
];

const ProjectDetail: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState<typeof projectsData[0] | null>(null);
  const { id } = useParams<{ id: string }>();
  
  const handleFinishedLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    // Find the project that matches the ID
    const projectId = parseInt(id || "0");
    const foundProject = projectsData.find(p => p.id === projectId);
    
    if (foundProject) {
      setProject(foundProject);
      // Scroll to top when project changes
      window.scrollTo(0, 0);
    }
    
  }, [id]);

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-3xl md:text-4xl font-serif mb-6">Project Not Found</h1>
          <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Link to="/projects" className="premium-button inline-flex items-center">
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      {loading && <LoadingScreen onFinished={handleFinishedLoading} />}
      
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-secondary/30">
          <div className="container mx-auto px-6 md:px-12">
            <Link to="/projects" className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-8 group">
              <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Link>
            
            <div className="max-w-4xl animate-fade-in">
              <span className="text-xs uppercase tracking-wider text-muted-foreground mb-3 inline-block">{project.category}</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 decorated-title">{project.title}</h1>
              <p className="text-lg text-muted-foreground">
                {project.description}
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-12">
            <div className="w-full h-[60vh] overflow-hidden rounded-lg animate-fade-in shadow-xl">
              <img 
                src={project.primaryImage} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
              />
            </div>
          </div>
        </section>
        
        {/* Project Details Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="md:col-span-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-3xl font-serif mb-8 decorated-title">About This Project</h2>
                <div className="prose max-w-none">
                  <p className="text-muted-foreground whitespace-pre-line">{project.fullDescription}</p>
                  
                  <h3 className="text-xl font-serif mt-10 mb-4">The Challenge</h3>
                  <p className="text-muted-foreground">{project.challenge}</p>
                  
                  <h3 className="text-xl font-serif mt-10 mb-4">Our Solution</h3>
                  <p className="text-muted-foreground">{project.solution}</p>
                  
                  <h3 className="text-xl font-serif mt-10 mb-4">The Outcome</h3>
                  <p className="text-muted-foreground">{project.outcome}</p>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="bg-background p-8 border border-border rounded-lg">
                  <h3 className="text-xl font-serif mb-6">Project Details</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Year</h4>
                      <p>{project.year}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Location</h4>
                      <p>{project.location}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Category</h4>
                      <p>{project.category}</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-sm font-medium text-muted-foreground mb-4">Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check size={16} className="text-primary mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Additional Images Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-serif mb-12 decorated-title text-center">Project Gallery</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.additionalImages.map((image, index) => (
                <div key={index} className="w-full overflow-hidden rounded-lg shadow-md animate-fade-in" style={{ animationDelay: `${0.3 + (index * 0.2)}s` }}>
                  <img 
                    src={image} 
                    alt={`${project.title} - View ${index + 1}`} 
                    className="w-full h-[50vh] object-cover transition-transform hover:scale-105 duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-secondary/30 text-center">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-serif mb-6 animate-fade-in">Ready to Transform Your Space?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
              Let us help you create a space that reflects your unique style and meets your specific needs.
            </p>
            <Link to="/contact" className="premium-button-filled inline-flex items-center">
              Start Your Project
            </Link>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default ProjectDetail;
