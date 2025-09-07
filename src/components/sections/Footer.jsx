import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { socialLinks } from '@/data/content.jsx';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

const Footer = () => {
  const { toast } = useToast();
  const newsletterForm = useRef();
  const [isNewsletterLoading, setNewsletterLoading] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletterLoading(true);

    emailjs.sendForm('service_we8c0fc', 'template_2cfwc5s', newsletterForm.current, 'YOUR_PUBLIC_KEY_HERE') // Replace with your public key
      .then((result) => {
          toast({ title: "✅ Subscribed!", description: "Thanks for joining our newsletter." });
          newsletterForm.current.reset();
      }, (error) => {
          toast({ variant: "destructive", title: "❌ Error", description: "Failed to subscribe. Please try again." });
      }).finally(() => {
        setNewsletterLoading(false);
      });
  };

  return (
    <footer className="section-bg py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="space-y-4 lg:col-span-2">
            <NavLink to="/" aria-label="MiBrand Home Page" title="MiBrand | Rank top 10 on Google">
              <Logo className="h-12 w-auto" isFooter={true} />
            </NavLink>
            <p className="text-muted-foreground text-sm">Your growth partner in the digital world. We combine data-driven strategies with technical expertise to turn clicks into clients and elevate your brand to the top.</p>
            <div className="flex space-x-2">
              {socialLinks.filter(link => link.name !== 'TikTok').map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${link.name}`}
                  title={link.title}
                  className="inline-flex items-center justify-center rounded-full h-9 w-9 text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="font-semibold text-lg">Explore</p>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</NavLink></li>
              <li><NavLink to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</NavLink></li>
              <li><NavLink to="/case-studies" title="Case Studies of MiBrand" className="text-muted-foreground hover:text-primary transition-colors">Case Studies</NavLink></li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="font-semibold text-lg">Company</p>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/faq" title="Frequently asked questions – MiBrand" className="text-muted-foreground hover:text-primary transition-colors">FAQ</NavLink></li>
              <li><NavLink to="/contact" title="Contact the best SEO service provider – MiBrand" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</NavLink></li>
              <li><a href="https://mibrand360.blogspot.com/" target="_blank" rel="noopener noreferrer" title="Tips & tricks to grow your business with SEO & marketing – by MiBrand" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><NavLink to="/privacy-policy" title="Privacy Policy of MiBrand" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</NavLink></li>
              <li><NavLink to="/refund-policy" className="text-muted-foreground hover:text-primary transition-colors">Refund Policy</NavLink></li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="font-semibold text-lg">Join Our Newsletter</p>
            <p className="text-muted-foreground text-sm">Get weekly SEO tips and marketing insights.</p>
            <form ref={newsletterForm} onSubmit={handleNewsletterSubmit} className="flex space-x-2">
              <label htmlFor="newsletter-email" className="sr-only">Email for newsletter</label>
              <input
                id="newsletter-email"
                type="email"
                name="user_email"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="your@email.com"
                required
              />
              <Button type="submit" size="icon" aria-label="Subscribe to newsletter" disabled={isNewsletterLoading} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white flex-shrink-0">
                {isNewsletterLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MIBrand Digital agency. All rights reserved.</p>
          <p>Founded by Moinul Islam Bappi (MiB Bappi) | Proudly based in Bangladesh, serving clients globally.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;