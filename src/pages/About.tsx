import React, { useEffect } from 'react';
import TeamMember from '../components/ui/TeamMember';
import motu from '../assets/motu.jpeg';
import ayushi from '../assets/ayushi.jpeg';
import about_1 from '../assets/about_1.jpg';
import about_2 from '../assets/about_2.jpg';
import about_3 from '../assets/about_3.jpg';

const teamMembers = [
  {
    name: 'Saijal Srivastava',
    role: 'Principal Designer & Founder',
    image: motu,
    bio: "As the Principal Designer of SA Atelier we specializes in curating sophisticated, high-end interiors that exude understated luxury. With a focus on textures, materials, and bespoke detailing, they craft spaces that are visually striking yet effortlessly functional. Their design philosophy revolves around creating experiences, not just spaces.",
  },
  {
    name: 'Ayushi Jain',
    role: 'Principal Designer & Founder',
    image: ayushi,
    bio: "Believes in designing homes that feel timeless, elegant, and deeply personal. Through a sensitive use of materials, color, and form, she creates spaces that are layered, expressive, and full of character.",
  },
];

const values = [
  { title: 'Client-Centered Approach', description: 'We listen carefully to understand our clients\' needs, preferences, and aspirations, placing them at the center of our design process.' },
  { title: 'Attention to Detail', description: 'We believe that exceptional spaces are born from meticulous attention to every detail, from grand architectural elements to the smallest finishing touches.' },
  { title: 'Sustainable Design', description: 'We integrate environmentally responsible practices and materials into our designs, creating spaces that are beautiful and sustainable.' },
  { title: 'Collaborative Spirit', description: 'We foster open communication and collaboration with clients, architects, craftspeople, and vendors to achieve the best possible outcomes.' },
];

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-12 pb-20 bg-secondary/30">
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
                At S.A. ATELIAR, we believe that extraordinary spaces tell compelling stories. Our design philosophy seamlessly integrates functionality, aesthetics, and each client's unique personality to create interiors that inspire.
              </p>
              <p className="mb-6">
                What started as a small studio specializing in residential design has grown into a comprehensive interior design firm with expertise across residential, commercial, and hospitality sectors.
              </p>
              <p className="mb-6">
                Throughout our journey, our fundamental approach has remained consistent: we listen carefully, collaborate closely, and execute precisely to bring our clients' visions to life.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden">
                <img src={about_1} alt="Interior design studio" className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" />
              </div>
              <div className="aspect-square overflow-hidden row-span-2 translate-y-8">
                <img src={about_2} alt="Design process" className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" />
              </div>
              <div className="aspect-square overflow-hidden">
                <img src={about_3} alt="Office interior" className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" />
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
            <p className="text-muted-foreground">Our design approach is guided by a set of core values that inform every project we undertake.</p>
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
            <p className="text-muted-foreground">Designing spaces that reflect your essence — elegant, functional, and uniquely you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {['Discovery', 'Concept Development', 'Design Development', 'Implementation', 'Completion'].map((step, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                  <span className="font-serif text-xl">0{i + 1}</span>
                </div>
                <h3 className="font-serif text-lg mb-3">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-wider text-muted-foreground mb-3 inline-block">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Meet the Designers</h2>
            <p className="text-muted-foreground">Our talented team brings diverse expertise and a shared commitment to creating exceptional spaces.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;