import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, MapPin, Award } from 'lucide-react';

const About = () => {
  const features = [
    "Specialized Expertise in FTL & ODC cargo handling",
    "Real-Time Tracking with transparent operations",
    "Cost-Effective Solutions without compromising quality", 
    "Reliable & On-Time Delivery commitments",
    "Customer-Centric Approach with tailored services",
    "Trusted Partner across FMCG, Pharma, Manufacturing industries"
  ];

  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Expert Team Members",
      description: "Highly experienced professionals"
    },
    {
      icon: MapPin,
      number: "25+",
      label: "Cities Connected",
      description: "Strong network across India"
    },
    {
      icon: Award,
      number: "5+",
      label: "Years Experience",
      description: "Proven track record"
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                About INDTRANS
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Your Reliable <span className="gradient-text">Transportation Partner</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Indtrans Freight Solutions is a Mumbai-based Partnership firm logistics company providing 
                comprehensive end-to-end road transportation solutions across the nation. With a highly 
                enthusiastic and experienced team, we specialize in optimizing transportation processes 
                for a variety of industries.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground">
                Our experts possess in-depth knowledge of road logistics, ensuring efficient and 
                cost-effective solutions. We pride ourselves on delivering timely and reliable services 
                that meet the unique needs of our clients. From freight management to last-mile delivery, 
                we offer tailored services to support businesses throughout the country.
              </p>
              
              <p className="text-muted-foreground">
                With a strong network and modern fleet, we guarantee seamless connectivity across regions. 
                Our commitment to innovation and customer satisfaction makes us a trusted partner in the logistics sector.
              </p>

              <div className="bg-gradient-card p-6 rounded-2xl border shadow-soft">
                <h3 className="text-xl font-semibold mb-4 text-primary">Why Choose INDTRANS?</h3>
                <div className="grid gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-xl font-semibold text-primary italic">
              "At Indtrans, we don't just move cargo—we move businesses forward."
            </div>
          </div>

          {/* Stats Cards */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="group hover:shadow-elevated transition-all duration-300 bg-gradient-card border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-2xl group-hover:bg-primary/20 transition-colors">
                        <stat.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">{stat.number}</div>
                        <div className="font-semibold">{stat.label}</div>
                        <div className="text-sm text-muted-foreground">{stat.description}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mission Statement */}
            <Card className="bg-gradient-hero text-primary-foreground border-0 shadow-glow">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg opacity-90">
                  To provide reliable, efficient, and cost-effective transportation solutions 
                  that exceed our clients' expectations while ensuring the highest standards 
                  of safety and service quality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;