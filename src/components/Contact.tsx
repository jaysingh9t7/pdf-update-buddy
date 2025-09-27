import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted",
      description: "We'll contact you within 24 hours with a detailed quote.",
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: [
        "210, Grohitam premises APMC Market",
        "Sect 19 Vashi Navi Mumbai - 400703",
        "Maharashtra, India"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers", 
      details: [
        "+91 8454006898",
        "+91 8355921875",
        "24/7 Operations Support"
      ]
    },
    {
      icon: Mail,
      title: "Email Contact",
      details: [
        "operations@indtransfreightsolutions.com",
        "Quick response guaranteed",
        "Professional support team"
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Saturday: 9:00 AM - 7:00 PM",
        "Sunday: 10:00 AM - 5:00 PM", 
        "Emergency: 24/7 Available"
      ]
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Contact <span className="gradient-text">INDTRANS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to move your business forward? Get a free quote for your transportation needs. 
            Our expert team is here to provide customized logistics solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-elevated transition-all duration-300 bg-gradient-card border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-2xl group-hover:bg-primary/20 transition-colors">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-sm text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Website Info */}
            <Card className="bg-gradient-hero text-primary-foreground border-0 shadow-glow">
              <CardContent className="p-6 text-center">
                <MessageSquare className="h-8 w-8 mx-auto mb-3 opacity-90" />
                <h3 className="font-semibold mb-2">Visit Our Website</h3>
                <p className="text-sm opacity-90 mb-4">
                  www.indtransfreightsolutions.com
                </p>
                <p className="text-xs opacity-75">
                  Complete logistics solutions at your fingertips
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quote Request Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-0 shadow-elevated">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">Request a Quote</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you with a competitive quote
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number *</label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Service Required</label>
                      <Input
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        placeholder="FTL, ODC, Container, etc."
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message / Requirements *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your cargo, pickup location, destination, timeline, and any special requirements..."
                      required
                      className="min-h-32 resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      className="bg-gradient-hero hover:shadow-glow transition-all duration-300 flex-1 h-12"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Get Free Quote
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="border-2 hover:bg-primary/5 h-12"
                      onClick={() => window.open('tel:+918454006898')}
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      Call Now
                    </Button>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      By submitting this form, you agree to our terms of service. 
                      We'll respond within 24 hours with a detailed quote.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-0 hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Emergency Support</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Need immediate assistance? Our team is available 24/7
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('tel:+918454006898')}
                  >
                    Call Emergency Line
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Prefer email? Send us your requirements directly
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('mailto:operations@indtransfreightsolutions.com')}
                  >
                    Send Email
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;