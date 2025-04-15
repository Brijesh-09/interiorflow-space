import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ContactForm from '../components/ui/ContactForm';
import LoadingScreen from '../components/ui/LoadingScreen';
import { Mail, MapPin, Phone, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';

export const Contact = () => {
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
              <span className="text-xs uppercase tracking-wider text-muted-foreground mb-3 inline-block">Contact Us</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">Get In Touch</h1>
              <p className="text-lg text-muted-foreground">
                Let's discuss how we can transform your space into something extraordinary.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Grid Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-6">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Have a question or ready to start a project? Fill out the form below, and we'll get back to you shortly.
                </p>
                <ContactForm />
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Feel free to reach out to us through any of the channels below. We're here to help you create the space you've always wanted.
                </p>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-start">
                    <MapPin className="mr-4 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Our Studio</h3>
                      <address className="not-italic text-muted-foreground">
                        Olympia Building<br />
                        Mumbai , India <br />
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="mr-4 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-muted-foreground">+91 7977947369 | +91 9329503909</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="mr-4 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground">info@saatelier.in</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="mr-4 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Working Hours</h3>
                      <p className="text-muted-foreground">Monday – Friday: 9:00 AM – 6:00 PM</p>
                      {/* <p className="text-muted-foreground">Saturday: By appointment only</p>
                      <p className="text-muted-foreground">Sunday: Closed</p> */}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/saatelierco?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary/50 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Instagram">
                      <Instagram size={20} />
                    </a>
                    <a href="mailto:info@saatelier.in" className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
                    {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary/50 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
                      <Linkedin size={20} />
                    </a> */}
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

export default Contact;
