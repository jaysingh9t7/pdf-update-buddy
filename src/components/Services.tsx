import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Truck, Container, Shield, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import ftlTruckImage from '@/assets/ftl-truck.webp';
import odcTruckImage from '@/assets/odc-truck.webp';

const Services = () => {
  const ftlServices = [
    "Full body trucks for general cargo",
    "Closed Container Trucks for secure transport",
    "Reefer Container Trucks for temperature-sensitive goods",
    "Import/Export Container handling"
  ];

  const odcServices = [
    "ODC/Open 20'-32' Truck transport",
    "High bed and Semi Low bed Trailers",
    "Low bed trailers for heavy machinery",
    "Customized solutions with proper lashing and choking"
  ];

  const truckTypes = [
    {
      title: "Body Trucks",
      description: "Strong network across all major cities in India with competitive rates for both inbound and outbound shipments.",
      features: ["20ft to 32ft capacity", "General cargo transport", "Nationwide coverage"]
    },
    {
      title: "Container Trucks (20-32ft)",
      description: "Availability of Dry Container Trucks for general cargo and Reefer Container Trucks for temperature-sensitive goods.",
      features: ["Dry containers for general cargo", "Reefer containers for cold chain", "Timely and reliable solutions"]
    },
    {
      title: "ODC Trucks (20-32ft)", 
      description: "Specialized trucks for oversized machinery, construction materials, and project cargo with safety measures.",
      features: ["Oversized cargo handling", "Construction material transport", "Proper safety compliance"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Comprehensive <span className="gradient-text">Transportation Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in Full Truck Load (FTL) and Over-Dimensional Cargo (ODC) transportation, 
            ensuring safe and efficient delivery across India with real-time tracking and expert planning.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* FTL Service */}
          <Card className="group hover:shadow-elevated transition-all duration-300 border-0 bg-gradient-card overflow-hidden">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={ftlTruckImage} 
                alt="Full Truck Load (FTL) service" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary p-2 rounded-lg">
                    <Container className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Full Truck Load (FTL)</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our Full Truck Load (FTL) service offers dedicated, direct transportation for large shipments, 
                ensuring faster delivery and enhanced security. Ideal for high-volume or bulky cargo, we provide 
                cost-effective and reliable solutions tailored to meet the specific needs of your business.
              </p>
              <div className="space-y-3 mb-6">
                {ftlServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-gradient-hero hover:shadow-glow transition-all duration-300 w-full">
                Learn More About FTL
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* ODC Service */}
          <Card className="group hover:shadow-elevated transition-all duration-300 border-0 bg-gradient-card overflow-hidden">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={odcTruckImage} 
                alt="Over Dimensional Cargo (ODC) service" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-accent p-2 rounded-lg">
                    <Truck className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">ODC (Over Dimensional Cargo)</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We specialize in transporting Over Dimensional Cargo (ODC) that exceeds standard size or weight limits, 
                using customized trailers and expert handling to ensure safe and compliant delivery across India. 
                Our personnel are physically present during loading to ensure all safety compliances are followed.
              </p>
              <div className="space-y-3 mb-6">
                {odcServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-gradient-accent hover:shadow-glow transition-all duration-300 w-full">
                Learn More About ODC
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Truck Types */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Our Fleet Capabilities</h3>
            <p className="text-muted-foreground">
              We have attached fleet from genuine vendors and trusted channel partners, ensuring reliability and compliance at all times.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {truckTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-elevated transition-all duration-300 bg-gradient-card border-0">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Truck className="h-5 w-5 text-primary" />
                    </div>
                    {type.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {type.description}
                  </p>
                  <div className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Features */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          {[
            { icon: Shield, title: "Safety First", desc: "Complete safety of cargo during transit" },
            { icon: Clock, title: "Timely Delivery", desc: "On-time delivery with live tracking" },
            { icon: CheckCircle, title: "Quality Service", desc: "Expert handling and loading" },
            { icon: Truck, title: "Modern Fleet", desc: "Well-maintained vehicles and trailers" }
          ].map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;