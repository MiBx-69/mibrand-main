import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink, useLocation } from 'react-router-dom';
import { Logo } from '@/components/ui/Logo';
import { services } from '@/data/content.jsx';

const navigationItems = [
  { path: '/', label: 'Home' },
  { 
    label: 'Services', 
    path: '/services',
    subItems: services.map(s => ({ path: s.link, label: s.title, title: s.title }))
  },
  { path: '/case-studies', label: 'Case Studies', title: 'Case Studies of MiBrand' },
  { path: '/faq', label: 'FAQ', title: 'Frequently asked questions – MiBrand' },
  { path: '/contact', label: 'Contact', title: 'Contact the best Digital marketing service provider – MiBrand' }
];

const Header = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50">
      <div className="glass-effect rounded-2xl">
        <div className="flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8">
          <NavLink to="/" aria-label="MiBrand Home Page" title="MiBrand | Rank top 10 on Google">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Logo className="h-12 w-auto" />
            </motion.div>
          </NavLink>

          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            {navigationItems.map((item) => (
              item.subItems ? (
                <div key={item.label} className="relative group">
                  <NavLink
                    to={item.path}
                    title={item.title}
                    className={({ isActive }) =>
                      `flex items-center text-sm font-medium transition-colors hover:text-primary relative py-7 ${
                        isActive || location.pathname.startsWith('/services/') ? 'text-primary' : 'text-muted-foreground'
                      }`
                    }
                  >
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                  </NavLink>
                  <div className="absolute top-full left-0 w-64 bg-background rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                    <div className="py-2">
                      {item.subItems.map(subItem => (
                        <NavLink
                          key={subItem.path}
                          to={subItem.path}
                          title={subItem.title}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-primary"
                        >
                          {subItem.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  title={item.title}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-primary relative ${
                      isActive ? 'text-primary' : 'text-muted-foreground'
                    }`
                  }
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      layoutId="underline"
                    />
                  )}
                </NavLink>
              )
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="hidden md:inline-flex"
              aria-label={darkMode ? "Activate light mode" : "Activate dark mode"}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass-effect border-t border-white/10 mt-2 rounded-2xl"
          >
            <nav className="px-4 pt-2 pb-4 space-y-2" aria-label="Mobile navigation">
              {navigationItems.map((item) => (
                 item.subItems ? (
                  <div key={item.label}>
                    <NavLink
                      to={item.path}
                      onClick={handleMobileLinkClick}
                      title={item.title}
                      className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-white/5 rounded-md transition-colors"
                    >
                      {item.label}
                    </NavLink>
                    <div className="pl-4">
                      {item.subItems.map(subItem => (
                        <NavLink
                          key={subItem.path}
                          to={subItem.path}
                          onClick={handleMobileLinkClick}
                          title={subItem.title}
                          className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-white/5 rounded-md transition-colors"
                        >
                          {subItem.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={handleMobileLinkClick}
                    title={item.title}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-white/5 rounded-md transition-colors"
                  >
                    {item.label}
                  </NavLink>
                )
              ))}
              <div className="border-t border-white/10 pt-4 mt-4 flex justify-end items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleDarkMode}
                  aria-label={darkMode ? "Activate light mode" : "Activate dark mode"}
                >
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;