import React, { useEffect } from 'react';
import ContactForm from '../components/ui/ContactForm';
import { Mail, MapPin, Phone, Clock, Instagram } from 'lucide-react';

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-12 pb-20 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-wider text-muted-foreground mb-3 inline-block">
              Interior Design Studio — Mumbai
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
              Let's Design Your Space
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Whether you're planning a luxury home interior, a commercial space, or 
              a complete office redesign in Mumbai — we'd love to hear about your project. 
              Reach out for a free consultation with our design team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left — Form */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl mb-4">
                Start Your Project
              </h2>
              <p className="text-muted-foreground mb-8">
                Tell us about your space, your vision, and your budget. 
                We'll get back to you within 24 hours to schedule a free 
                design consultation at our Mumbai studio or over a video call.
              </p>
              <ContactForm />
            </div>

            {/* Right — Contact Info */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl mb-4">
                Visit Our Studio
              </h2>
              <p className="text-muted-foreground mb-8">
                Our design studio is based in Mumbai. We work with residential 
                and commercial clients across Bandra, Juhu, Worli, Powai, 
                Andheri, Lower Parel, and all of Mumbai.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <MapPin className="mr-4 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Our Studio</h3>
                    <address className="not-italic text-muted-foreground">
                      Olympia Building<br />
                      Mumbai, Maharashtra, India
                    </address>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="mr-4 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+917075947369" className="hover:text-primary transition-colors">
                        +91 70759 47369
                      </a>
                      {' '}|{' '}
                      <a href="tel:+917977947369" className="hover:text-primary transition-colors">
                        +91 79779 47369
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="mr-4 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@saatelier.in" className="hover:text-primary transition-colors">
                        info@saatelier.in
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="mr-4 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Studio Hours</h3>
                    <p className="text-muted-foreground">Monday – Friday: 9:00 AM – 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: By appointment</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-medium mb-3">Follow Our Work</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  See our latest interior design projects on Instagram — 
                  from Mumbai homes to commercial spaces.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/saatelierco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary/50 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Follow S.A. Atelier on Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  
                    <a href="mailto:info@saatelier.in"
                    className="p-3 bg-secondary/50 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Email S.A. Atelier"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-10 p-6 bg-secondary/30 rounded-lg">
                <h3 className="font-medium mb-2">Prefer WhatsApp?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Send us a message directly on WhatsApp and we'll respond within a few hours.
                </p>
                <a
                  href="https://wa.me/917075947369?text=Hi%20S.A.%20Atelier%2C%20I%27m%20interested%20in%20your%20interior%20design%20services%20in%20Mumbai."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-6 py-3 text-sm rounded-lg hover:bg-green-700 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Footer Strip */}
      <section className="py-8 bg-secondary/20 border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="text-sm text-muted-foreground">
            S.A. Atelier & Co. — Luxury Interior Design Studio in Mumbai. 
            Serving clients across Bandra, Juhu, Worli, Powai, Andheri West, 
            Lower Parel, Cuffe Parade, Versova & all of Mumbai.
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;