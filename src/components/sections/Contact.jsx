import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MessageSquare, ArrowRight, MapPin, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/data/content.jsx';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const contactForm = useRef();
  const newsletterForm = useRef();
  const [isContactLoading, setContactLoading] = useState(false);
  const [isNewsletterLoading, setNewsletterLoading] = useState(false);

  const whatsappUrl = `https://wa.me/8801605956421?text=${encodeURIComponent("Hello! I'm visiting your website and would like to inquire about your services.")}`;

  const sendContactEmail = (e) => {
    e.preventDefault();
    setContactLoading(true);

    emailjs.sendForm('service_5ltvlkb', 'template_ealijsa', contactForm.current, 'YOUR_PUBLIC_KEY_HERE') // Replace with your public key
      .then((result) => {
          toast({ title: "✅ Message Sent!", description: "We'll get back to you shortly." });
          contactForm.current.reset();
      }, (error) => {
          toast({ variant: "destructive", title: "❌ Error", description: "Something went wrong. Please try again." });
      }).finally(() => {
        setContactLoading(false);
      });
  };

  const sendNewsletterEmail = (e) => {
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
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full hero-pattern opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your digital presence? Let's discuss how we can help your business reach the top of Google.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8 space-y-8"
          >
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-6">
              <InfoItem icon={<Mail className="h-6 w-6 text-primary" />} title="Email" content="contact@mibrand.agency" href="mailto:contact@mibrand.agency" />
              <InfoItem icon={<Phone className="h-6 w-6 text-primary" />} title="Phone" content="+8801605956421" href="tel:+8801605956421" linkTitle="Call MiBrand – Your Trusted SEO Service Provider" />
              <InfoItem icon={<MessageSquare className="h-6 w-6 text-primary" />} title="WhatsApp" content="Chat with us" href={whatsappUrl} target="_blank" linkTitle="Chat with the best SEO experts – MiBrand" />
              <InfoItem icon={<MapPin className="h-6 w-6 text-primary" />} title="Location" content="Dhaka, Bangladesh" />
            </div>
            <div className="pt-6 border-t border-border">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.filter(link => link.name !== 'TikTok').map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${link.name}`}
                    title={link.title}
                    className="inline-flex items-center justify-center rounded-full h-12 w-12 border-2 border-border bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:border-primary hover:scale-110"
                  >
                    <link.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form ref={contactForm} onSubmit={sendContactEmail} className="space-y-6">
                <div>
                  <label htmlFor="name-input" className="block text-sm font-medium mb-2">Name</label>
                  <input id="name-input" type="text" name="user_name" className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="email-input" className="block text-sm font-medium mb-2">Email</label>
                  <input id="email-input" type="email" name="user_email" className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" placeholder="your@email.com" required />
                </div>
                <div>
                  <label htmlFor="message-textarea" className="block text-sm font-medium mb-2">Message</label>
                  <textarea id="message-textarea" rows={4} name="message" className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" placeholder="Tell us about your project..." required></textarea>
                </div>
                <Button type="submit" disabled={isContactLoading} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold">
                  {isContactLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <ArrowRight className="mr-2 h-4 w-4" />}
                  Send Message
                </Button>
              </form>
            </div>
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Join Our Newsletter</h3>
              <form ref={newsletterForm} onSubmit={sendNewsletterEmail} className="space-y-4">
                <div>
                  <label htmlFor="newsletter-email-input" className="block text-sm font-medium mb-2">Email</label>
                  <input id="newsletter-email-input" type="email" name="user_email" className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" placeholder="your@email.com" required />
                </div>
                <Button type="submit" disabled={isNewsletterLoading} className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold">
                  {isNewsletterLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Mail className="mr-2 h-4 w-4" />}
                  Subscribe
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({ icon, title, content, href, target, linkTitle }) => (
  <div className="flex items-start space-x-4">
    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-xl font-semibold">{title}</h4>
      {href ? (
        <a href={href} target={target} rel={target ? "noopener noreferrer" : ""} className="text-muted-foreground hover:text-primary transition-colors" title={linkTitle}>{content}</a>
      ) : (
        <p className="text-muted-foreground">{content}</p>
      )}
    </div>
  </div>
);

export default Contact;