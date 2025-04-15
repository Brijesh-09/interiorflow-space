
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from "sonner";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await fetch('https://formsubmit.co/d3b063c6b97a838293e83e8af819c0dds', {
        //comment
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _captcha: false,
          _template: 'table',
        }),
      });
  
      if (response.ok) {
        toast.success("Message sent successfully! We'll be in touch soon.", {
          position: "bottom-right",
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      toast.error("Error submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-secondary/30 border border-border focus:border-primary outline-none rounded-sm transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-secondary/30 border border-border focus:border-primary outline-none rounded-sm transition-colors"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Phone (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-secondary/30 border border-border focus:border-primary outline-none rounded-sm transition-colors"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-secondary/30 border border-border focus:border-primary outline-none rounded-sm transition-colors resize-none"
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground text-sm font-medium transition-all hover:bg-primary/90 disabled:opacity-70"
      >
        {loading ? (
          <>Processing<span className="ml-2 animate-pulse">...</span></>
        ) : (
          <>Send Message <Send size={16} className="ml-2" /></>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
