
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ChevronRight, ArrowRight, Heart, Users, Award, Zap } from 'lucide-react';

const categories = [
  'Air Freight',
  'Contract Logistics',
  'Ground Freight',
  'Ocean Freight',
  'SCS Management',
  'Special Offers',
];

const coreValues = [
    {
        icon: <Heart className="h-10 w-10 text-primary" />,
        title: 'Integrity',
        description: 'We uphold the highest standards of integrity and ethical behavior in all of our actions.'
    },
    {
        icon: <Users className="h-10 w-10 text-primary" />,
        title: 'Customer Focus',
        description: 'Our success is tied to our customers\' success. We are committed to providing solutions that meet their needs.'
    },
    {
        icon: <Award className="h-10 w-10 text-primary" />,
        title: 'Excellence',
        description: 'We pursue excellence in everything we do, striving for the highest quality in our services and operations.'
    },
    {
        icon: <Zap className="h-10 w-10 text-primary" />,
        title: 'Innovation',
        description: 'We embrace innovation and technology to continuously improve our services and provide cutting-edge solutions.'
    }
]

export default function AboutPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div>
      <PageHeader
        title="About Us"
        breadcrumb="About Us"
        backgroundImage="/images/International Expansion.jpg"
        backgroundImageHint="office background"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              <div className="w-16 h-1 bg-primary mb-4"></div>
              <h2 className="text-3xl font-bold font-headline mb-4">About Us</h2>
              <p className="text-muted-foreground mb-4">
                MCCED is a premier logistics and worldwide shipping company strategically headquartered in Egypt, a nation at the crossroads of international trade. Our story began with a clear vision: to bridge the gap between businesses and global markets with a level of precision, efficiency, and trust that was unmatched. From our roots in Egypt, we have grown into a sophisticated global network, offering end-to-end solutions that simplify the complexities of international supply chains.
              </p>
              <p className="text-muted-foreground mb-4">
                Our team is composed of seasoned logistics professionals who possess a deep understanding of local regulations in the MENA region, combined with an extensive knowledge of global shipping routes and protocols. We are more than just a service provider; we are a dedicated partner committed to the success of our clients, ensuring that every shipment, no matter its size or destination, is handled with the utmost care and professionalism.
              </p>
              <div className="my-12">
                <div className="w-16 h-1 bg-primary mb-4"></div>
                <h2 className="text-3xl font-bold font-headline mb-8">Logistics</h2>
                <p className="text-muted-foreground">
                  Logistics is the central nervous system of global trade, and at MCCED, we have perfected its science. Our approach to logistics extends far beyond simply moving goods from point A to point B. We meticulously plan, implement, and control the efficient, forward, and reverse flow and storage of goods, services, and related information between the point of origin and the point of consumption. This includes everything from initial project planning and route optimization to inventory management, warehousing, and distribution. Our logistics solutions are custom-built to fit the unique needs of each client, taking into account factors like cost, speed, security, and compliance. We manage the entire lifecycle of your shipment, ensuring every single step is synchronized and executed flawlessly, eliminating delays and reducing operational costs.
                </p>
              </div>
              <div className="my-12">
                <div className="w-16 h-1 bg-primary mb-4"></div>
                <h2 className="text-3xl font-bold font-headline mb-8">Our Mission</h2>
                <p className="text-muted-foreground">
                  Our mission is to be the indispensable link in our clients’ global supply chains by providing comprehensive, reliable, and cost-effective logistics solutions. We are driven to consistently exceed expectations through meticulous planning, transparent communication, and an unwavering commitment to operational excellence. We aim to leverage our strategic location in Egypt and our global network to empower businesses to thrive in an interconnected world. By focusing on innovation, customer-centric service, and continuous improvement, we strive to transform complex logistics challenges into seamless opportunities for growth and success. Our mission is to deliver not just cargo, but peace of mind.
                </p>
              </div>
              <div className="my-12">
                <div className="w-16 h-1 bg-primary mb-4"></div>
                <h2 className="text-3xl font-bold font-headline mb-8">Our Vision</h2>
                <p className="text-muted-foreground">
                  Our vision is to become the recognized global leader in logistics and shipping, renowned for our innovation, integrity, and exceptional service. We envision a future where MCCED is the first and only choice for businesses seeking to navigate the international marketplace with confidence. We aspire to be at the forefront of industry technology, implementing cutting-edge solutions that provide unparalleled efficiency and real-time visibility for our clients. We see ourselves as a force for positive change, contributing to a more connected and sustainable global trade environment. Our vision is to build a legacy of excellence, rooted in Egypt, that reaches every corner of the world.
                </p>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-1 space-y-8">
            <Card>
              <CardContent className="p-4">
                <form className="relative">
                  <Input placeholder="Search..." className="pr-10" />
                  <Button type="submit" variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground">
                    <Search className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                    <div className="w-12 h-1 bg-primary mb-2"></div>
                    CATEGORIES
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {categories.map((category) => (
                    <li key={category}>
                      <Link href="/services" className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors group">
                        <span className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4 text-primary/50 group-hover:text-primary transition-colors" />
                            {category}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                    <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm mb-4">Contact us if you have any questions about our services. Our team is happy to help.</p>
                    <Button asChild variant="secondary" className="w-full">
                        <Link href="/contact">Contact Us <ArrowRight /></Link>
                    </Button>
                </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
