
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary/50 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-xl mb-4">S.A. Atelier & Co.</h3>
            <p className="text-muted-foreground mb-6">
              Transforming spaces into extraordinary experiences through thoughtful design and attention to detail.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/saatelierco?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a> */}
              {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a> */}
              <a href="mailto:SAatelier19@gmail.com" className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-serif text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg mb-4">Contact</h3>
            <address className="not-italic text-muted-foreground">
              <p>olympia Building</p>
              <p>Mumbai , India</p>
              <p className="mt-2">+91 7977947369 | +91 9329503909</p>
              <p>saatelier19@gmail.com</p>
            </address>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} S.A. Atelier & Co.. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
