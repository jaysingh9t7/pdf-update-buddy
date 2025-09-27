import React from 'react';
import { Button } from '@/components/ui/button';
import { Truck, Menu, Phone, Mail } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import truckIcon from '@/assets/truck-icon.png';

const Header = () => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Tracking', href: '#tracking' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 8454006898</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>operations@indtransfreightsolutions.com</span>
            </div>
          </div>
          <div className="text-xs font-medium">
            210, Grohitam premises APMC Market, Vashi Navi Mumbai - 400703
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src={truckIcon} alt="INDTRANS Logo" className="h-10 w-10" />
              <div className="flex flex-col">
                <h1 className="text-xl font-bold gradient-text">INDTRANS</h1>
                <span className="text-xs text-muted-foreground">FREIGHT SOLUTIONS</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <Button 
              variant="default" 
              className="hidden md:flex bg-gradient-hero hover:shadow-glow transition-all duration-300"
              onClick={() => scrollToSection('#contact')}
            >
              Get Quote
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-6 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-lg font-medium hover:text-primary transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button 
                    className="bg-gradient-hero w-full mt-4"
                    onClick={() => scrollToSection('#contact')}
                  >
                    Get Quote
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;