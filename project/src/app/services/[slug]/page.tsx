
'use client';

import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Check, ChevronRight, ArrowRight } from 'lucide-react';

const serviceData = {
  'cargo-service': {
    title: 'Cargo Service',
    image: '/images/cargo-container-ship-cargo-maritime-ship-with-con-2024-12-08-00-56-40-utc.jpg',
    aiHint: 'cargo logistics hub',
    description: [
      "Our general cargo services are designed to handle a wide variety of goods with efficiency and reliability. We provide comprehensive solutions for all your standard shipping needs, ensuring your cargo is transported safely and on time. Our network and expertise allow us to manage logistics for a diverse range of products and industries.",
      "From collection to delivery, we offer a seamless experience with real-time tracking and dedicated support. Whether you're shipping locally or globally, our team is committed to providing a high-quality service that meets your expectations."
    ],
    features: [
      'Handling of various types of general cargo',
      'Global and domestic shipping routes',
      'Secure packaging and handling',
      'Real-time tracking and status updates',
      'Dedicated customer service support'
    ]
  },
  'air-freight': {
    title: 'Air Freight',
    image: '/images/air1.jpg',
    aiHint: 'cargo plane tarmac sunset',
    description: [
      "For time-sensitive and high-value shipments, MCCED’s air freight services offer unmatched speed and security. We manage the entire air cargo process, from pickup at your location to final delivery at the destination airport. Our extensive network of airline partners allows us to secure optimal rates and space on flights worldwide, ensuring your urgent shipments depart and arrive as scheduled.",
      "We handle all the intricate details of air freight, including booking, documentation, and compliance with international air transport regulations. Whether it’s perishable goods, sensitive electronics, or urgent samples, our air freight solutions are designed to deliver your cargo quickly, safely, and securely, providing you with real-time tracking and peace of mind throughout the journey."
    ],
    features: [
      'Global network with coverage of all major airports',
      'Express and standard shipping options',
      'Door-to-door service and customs clearance',
      'Specialized handling for sensitive cargo',
      '24/7 customer support and tracking'
    ]
  },
  'sea-freight': {
    title: 'Sea Freight',
    image: '/images/sea1.jpg',
    aiHint: 'container ship at port',
    description: [
        "Sea freight remains the most cost-effective solution for large-volume international shipping, and MCCED is an expert in navigating the world’s oceans. We offer a full range of sea freight services, including Full Container Load (FCL) for exclusive use of a container and Less than Container Load (LCL) for smaller shipments that can be consolidated with others.",
        "Our relationships with major shipping lines ensure competitive rates and reliable sailing schedules from ports worldwide. From the moment your cargo leaves the port of origin to its arrival at the port of destination, we manage every step, including customs clearance, documentation, and ground transportation. Our sea freight services provide the capacity and affordability you need for your heavy or bulky shipments, without compromising on reliability."
    ],
    features: [
        'FCL and LCL options available',
        'Global port coverage and carrier relationships',
        'Consolidation and deconsolidation services',
        'Real-time shipment tracking',
        'Comprehensive cargo insurance options'
    ]
  },
  'road-freight': {
    title: 'Road Freight',
    image: '/images/road1.jpg',
    aiHint: 'fleet of trucks on highway',
    description: [
        "Road freight is the vital last-mile link in any logistics chain, and MCCED’s ground transportation services are the best in the business. Our extensive network of carriers and modern fleet of vehicles ensures that your cargo is transported efficiently and securely across Egypt and the broader MENA region. We offer flexible road freight solutions, from dedicated full-truckload (FTL) services for large shipments to cost-effective less-than-truckload (LTL) options for smaller loads.",
        "We specialize in coordinating ground transportation with our air and sea freight services, providing seamless multi-modal solutions. Our team monitors every shipment in real-time, ensuring timely delivery and providing you with constant updates, making road freight a reliable and predictable part of your supply chain."
    ],
    features: [
        'FTL and LTL shipping services',
        'Domestic and cross-border transportation',
        'Express and economy service levels',
        'Dedicated fleet and specialized equipment',
        'GPS tracking on all vehicles'
    ]
  },
  'rail-freight': {
   title: 'Rail Freight',
   image: '/images/rail1.jpg',
   aiHint: 'freight train mountains',
  description: [
    "For long-distance, high-volume domestic and international cargo, MCCED leverages the power of rail freight. Rail transportation is a highly efficient and environmentally friendly solution for moving large quantities of goods between major hubs. We specialize in integrating rail transport into a seamless multi-modal strategy, using it to connect ports to inland distribution centers or to move goods across vast distances within Egypt and beyond.",
    "Our rail freight services are particularly beneficial for businesses looking to reduce shipping costs and their carbon footprint. We handle all aspects of the rail shipment, from loading and documentation to final delivery coordination, ensuring your cargo travels safely and economically as part of a well-orchestrated logistics plan."
  ],
  'customer-service': {
    title: 'Customer Service',
    image: '/images/pexels-fauxels-3183197.jpg',
    aiHint: 'customer service team',
    description: [
      "At MCCED, customer service is not a department; it's our philosophy. We believe that exceptional service is built on transparency, proactive communication, and a genuine commitment to our clients’ success. From the moment you contact us, you are assigned a dedicated logistics specialist who acts as your single point of contact, ready to answer questions, provide updates, and solve problems in real-time.",
      "We provide real-time tracking and communication so you are always in the loop. Our team is available to assist you at every stage, providing peace of mind and building the long-term relationships that are the foundation of our success. We listen, we respond, and we deliver, because your satisfaction is our highest priority."
    ],
    features: [
      'Dedicated logistics specialist for every client',
      'Real-time tracking and proactive communication',
      '24/7 support and problem resolution',
      'Personalized service and relationship building',
      'Commitment to transparency and client success'
    ]
  },
    features: [
        'Cost-effective long-distance transport',
        'Environmentally friendly shipping option',
        'Block train and single wagon services',
        'Intermodal connectivity with road and sea freight',
        'Secure and reliable transit'
    ]
  },
  'customs': {
    title: 'Customs',
    image: '/images/pexels-julia-m-cameron-6994788.jpg',
    aiHint: 'customs officer inspecting cargo',
    description: [
        "Navigating the complexities of customs clearance is crucial for international trade. Our licensed customs brokerage team provides expert guidance and services to ensure your shipments comply with all regulations and move smoothly across borders. We handle all necessary documentation, duties, and taxes to prevent delays and minimize costs.",
        "With our deep understanding of international trade laws and relationships with customs authorities worldwide, we facilitate a swift and efficient clearance process. We are committed to providing accurate, timely, and compliant customs services to support your global business operations."
    ],
    features: [
        'Licensed and experienced customs brokers',
        'Import and export clearance',
        'Tariff classification and duty calculation',
        'Compliance consulting and trade advisory',
        'Electronic filing and automated processing'
    ]
  }
};

const allServices = [
  { slug: 'cargo-service', title: 'Cargo Service' },
  { slug: 'air-freight', title: 'Air Freight' },
  { slug: 'sea-freight', title: 'Sea Freight' },
  { slug: 'road-freight', title: 'Road Freight' },
  { slug: 'rail-freight', title: 'Rail Freight' },
  { slug: 'customs', title: 'Customs' },
];

const faqItems = [
    { value: 'faq-1', question: 'What is the typical transit time?', answer: 'Transit times vary based on the destination and service level selected. For specific details, please request a quote or contact our support team.' },
    { value: 'faq-2', question: 'How is the cost calculated?', answer: 'Costs are calculated based on weight, volume, origin, destination, and the type of service. We provide detailed, transparent quotes for all shipments.' },
    { value: 'faq-3', question: 'Is my shipment insured?', answer: 'We offer comprehensive cargo insurance options to protect your goods against loss or damage during transit. Please ask your service representative for more details.' },
];

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = serviceData[slug as keyof typeof serviceData];

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={service.title}
        breadcrumb="Service Details"
        backgroundImage="/images/containers-ready-to-be-shipped-logistic-global-m-2025-01-27-22-46-41-utc.jpg"
        backgroundImageHint="warehouse background"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Image
              src={service.image}
              alt={service.title}
              width={1200}
              height={500}
              className="w-full rounded-lg mb-8"
              data-ai-hint={service.aiHint}
            />
            <div className="prose max-w-none">
              {service.description.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground">{paragraph}</p>
              ))}
            </div>

            <div className="my-12">
              <div className="w-16 h-1 bg-primary mb-4"></div>
              <h2 className="text-2xl font-bold font-headline mb-6">Service Features</h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="my-12">
              <div className="w-16 h-1 bg-primary mb-4"></div>
              <h2 className="text-2xl font-bold font-headline mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item) => (
                    <AccordionItem key={item.value} value={item.value}>
                        <AccordionTrigger className="text-left hover:no-underline font-semibold data-[state=open]:text-primary">
                            {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
              </Accordion>
            </div>

          </div>
          <aside className="lg:col-span-1 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>
                    <div className="w-12 h-1 bg-primary mb-2"></div>
                    ALL SERVICES
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {allServices.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors group">
                        <span className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4 text-primary/50 group-hover:text-primary transition-colors" />
                            {s.title}
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
    </>
  );
}
