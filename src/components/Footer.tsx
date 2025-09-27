import React from 'react';
import { MapPin, Phone, Mail, Truck } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Track Shipment', href: '#tracking' },
    { label: 'Contact Us', href: '#contact' }
  ];

  const services = [
    'Full Truck Load (FTL)',
    'Over Dimensional Cargo (ODC)',
    'Container Transportation',
    'Real-time Tracking'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="INDTRANS Logo" className="h-10 w-10" />
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">INDTRANS</h3>
                <span className="text-xs opacity-90">FREIGHT SOLUTIONS</span>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Your reliable transportation partner providing comprehensive end-to-end 
              road transportation solutions across India. We specialize in FTL and ODC 
              cargo with expert handling and real-time tracking.
            </p>
            <div className="text-lg font-semibold italic opacity-95">
              "We don't just move cargo—we move businesses forward."
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm opacity-90 hover:opacity-100 hover:underline transition-all duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-2 text-sm opacity-90">
                  <Truck className="h-4 w-4 flex-shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 opacity-90" />
                <div className="text-sm opacity-90">
                  <p>210, Grohitam premises</p>
                  <p>APMC Market, Sect 19</p>
                  <p>Vashi Navi Mumbai - 400703</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 opacity-90" />
                <div className="text-sm opacity-90">
                  <p>+91 8454006898</p>
                  <p>+91 8355921875</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 opacity-90" />
                <div className="text-sm opacity-90">
                  <p>operations@indtransfreightsolutions.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm opacity-90">
              © {currentYear} INDTRANS Freight Solutions. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm opacity-90">
              <span>Mumbai-based Partnership Firm</span>
              <span>•</span>
              <span>www.indtransfreightsolutions.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;