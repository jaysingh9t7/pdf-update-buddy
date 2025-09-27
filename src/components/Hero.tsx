import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, Shield, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-logistics.webp';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional logistics and freight transportation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
              <Truck className="h-4 w-4" />
              Trusted Transportation Partner Since 2020
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">INDTRANS</span><br />
                <span className="text-foreground">FREIGHT</span><br />
                <span className="text-foreground">SOLUTIONS</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Your Reliable transportation partner for comprehensive end-to-end road transportation solutions across India
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 p-4 bg-card/80 backdrop-blur-sm rounded-lg border shadow-soft">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">FTL & ODC</div>
                  <div className="text-sm text-muted-foreground">Specialized Transport</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-card/80 backdrop-blur-sm rounded-lg border shadow-soft">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold">Safe & Secure</div>
                  <div className="text-sm text-muted-foreground">Real-time Tracking</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-card/80 backdrop-blur-sm rounded-lg border shadow-soft">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">On-Time</div>
                  <div className="text-sm text-muted-foreground">Reliable Delivery</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-hero hover:shadow-glow transition-all duration-300 text-lg px-8 py-3"
                onClick={() => scrollToSection('#services')}
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 hover:bg-primary/5 text-lg px-8 py-3"
                onClick={() => scrollToSection('#tracking')}
              >
                Track Shipment
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Shipments Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99.8%</div>
                <div className="text-sm text-muted-foreground">On-Time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute right-10 top-1/3 hidden xl:block">
        <div className="float-animation">
          <div className="w-20 h-20 bg-gradient-hero rounded-full opacity-20" />
        </div>
      </div>
      <div className="absolute right-32 bottom-1/4 hidden xl:block">
        <div className="float-animation" style={{ animationDelay: '1s' }}>
          <div className="w-12 h-12 bg-gradient-accent rounded-full opacity-30" />
        </div>
      </div>
    </section>
  );
};

export default Hero;