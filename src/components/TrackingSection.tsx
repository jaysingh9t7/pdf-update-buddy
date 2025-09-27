import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Package, Clock, AlertCircle, Truck, MapPin } from 'lucide-react';

const TrackingSection = () => {
  const [trackingId, setTrackingId] = useState('');

  const handleTrackingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is disabled since tracking is coming soon
  };

  return (
    <section id="tracking" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
              <Package className="h-4 w-4" />
              Shipment Tracking
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Track Your <span className="gradient-text">Consignment</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real-time tracking and transparent operations for complete visibility of your shipments
            </p>
          </div>

          {/* Coming Soon Notice */}
          <Card className="mb-12 border-2 border-accent/20 bg-gradient-to-r from-accent/5 to-accent/10">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="bg-accent/20 p-3 rounded-full">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 px-4 py-2 text-lg">
                  Coming Soon
                </Badge>
              </div>
              <h3 className="text-2xl font-bold mb-3">Advanced Tracking System</h3>
              <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
                We're building an advanced real-time tracking system that will provide you with live updates, 
                GPS location tracking, and detailed shipment status. This feature will be available shortly.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h4 className="font-semibold">GPS Tracking</h4>
                  <p className="text-sm text-muted-foreground">Real-time location updates</p>
                </div>
                <div className="text-center">
                  <AlertCircle className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h4 className="font-semibold">Status Updates</h4>
                  <p className="text-sm text-muted-foreground">Instant notification alerts</p>
                </div>
                <div className="text-center">
                  <Truck className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h4 className="font-semibold">Delivery ETA</h4>
                  <p className="text-sm text-muted-foreground">Accurate delivery estimates</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tracking Form (Currently Disabled) */}
          <Card className="bg-gradient-card border-0 shadow-elevated opacity-75">
            <CardHeader className="text-center pb-4">
              <CardTitle className="flex items-center justify-center gap-3">
                <Package className="h-6 w-6 text-primary" />
                Enter Tracking Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleTrackingSubmit} className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Input
                      type="text"
                      placeholder="Enter your tracking ID / AWB number"
                      value={trackingId}
                      onChange={(e) => setTrackingId(e.target.value)}
                      disabled={true}
                      className="h-12 text-lg"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={true}
                    className="bg-gradient-hero px-8"
                  >
                    <Search className="h-5 w-5 mr-2" />
                    Track
                  </Button>
                </div>
              </form>

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Currently, you can track your shipments by contacting our operations team directly
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    Call: +91 8454006898
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    Email: operations@indtransfreightsolutions.com
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Current Tracking Features */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-primary" />
                  </div>
                  Manual Tracking Available
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    Phone-based status updates
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    Regular progress reports
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    Delivery confirmation calls
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    WhatsApp updates available
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  Future Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    Real-time GPS tracking
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    Automated SMS/Email alerts
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    Interactive tracking map
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    Mobile app integration
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;