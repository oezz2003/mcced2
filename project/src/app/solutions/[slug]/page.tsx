
'use client';

import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Check, ChevronRight, ArrowRight } from 'lucide-react';

const solutionData = {
  'consultation': {
    title: 'Consultation',
    image: '/images/pexels-fauxels-3183197.jpg',
    aiHint: 'business consultation meeting',
    description: [
      "Effective logistics begins with a conversation, not a contract. At MCCED, our consultation service is a cornerstone of our partnership approach. Our expert team sits down with you to perform a deep dive into your current supply chain, identifying bottlenecks, inefficiencies, and untapped opportunities. We analyze your needs, your industry’s specific challenges, and your long-term business goals. Based on this thorough assessment, we provide tailored, data-driven recommendations designed to optimize your entire process. Our consultation is not just about logistics; it’s about providing strategic advice that can transform your operations, enhance your competitive edge, and set you on a path for sustainable growth. We believe that by understanding your business from the ground up, we can build a logistics solution that is truly transformative."
    ],
    features: [
      'In-depth supply chain analysis and assessment',
      'Customized strategy development',
      'Performance benchmarking and KPI tracking',
      'Technology and automation consulting',
      'Risk management and contingency planning'
    ]
  },
  'supply-chain': {
    title: 'Supply Chain Management',
    image: '/images/containers-ready-to-be-shipped-logistic-global-m-2025-01-27-22-46-41-utc.jpg',
    aiHint: 'global supply chain network',
    description: [
        "A supply chain is a complex ecosystem, and MCCED provides the expertise to manage it all. We view the supply chain as a continuous, end-to-end journey that encompasses every process, from the sourcing of raw materials to the final delivery of the product to the end consumer. Our role is to provide a single point of contact for this entire journey, ensuring every component—from manufacturing and inventory to transportation and distribution—works together seamlessly.",
        "We employ advanced technology and robust network management to provide full visibility and control over your supply chain, mitigating risks, and adapting quickly to unexpected challenges. With MCCED, your supply chain is no longer a series of disconnected steps; it is a fluid, integrated system that operates with maximum efficiency and reliability."
    ],
    features: [
        'End-to-end supply chain visibility',
        'Procurement and supplier management',
        'Global warehousing and distribution network',
        'Order fulfillment and reverse logistics',
        'Data analytics and performance reporting'
    ]
  },
  'logistics': {
    title: 'Logistics',
    image: '/images/pexels-elevate-1267338.jpg',
    aiHint: 'logistics coordination hub',
    description: [
        "Our logistics services are designed to be flexible, scalable, and tailored to meet the unique needs of your business. We offer a full range of transportation, warehousing, and value-added services to ensure your goods are moved and managed efficiently. Our commitment to operational excellence means you can count on us for reliable, on-time performance.",
        "Whether you require a single service or a fully integrated logistics solution, we have the capabilities and expertise to deliver. We leverage our extensive network and technology to provide seamless coordination and complete visibility across all your logistics activities."
    ],
    features: [
        'Multimodal transportation management',
        'Flexible warehousing and storage solutions',
        'Value-added services (kitting, assembly, labeling)',
        'Cross-docking and consolidation',
        'Dedicated and shared logistics operations'
    ]
  },
   'business-development': {
  title: 'Business Development',
  image: '/images/Company Founded.jpg',
  aiHint: 'business growth strategy chart',
  description: [
    "Your logistics partner should be a catalyst for growth, not just a service provider. At MCCED, we view our services as a direct driver of your business development. By providing reliable and efficient international shipping, we empower you to expand into new global markets with confidence. Our cost-effective solutions help you reduce overhead, freeing up capital to invest in innovation and expansion.",
    "We help you meet and exceed customer expectations by ensuring timely deliveries, which enhances your brand reputation and fosters customer loyalty. We act as a strategic partner, offering insights and support that help you make informed decisions about market entry and supply chain strategy, ultimately enabling you to seize new opportunities and grow your business on a global scale."
  ],
    features: [
        'Market research and opportunity analysis',
        'Go-to-market strategy development',
        'Lead generation and sales channel development',
        'Strategic partnership and alliance building',
        'International trade and expansion support'
    ]
  }
};

const allSolutions = [
  { slug: 'consultation', title: 'Consultation' },
  { slug: 'supply-chain', title: 'Supply Chain' },
  { slug: 'logistics', title: 'Logistics' },
  { slug: 'business-development', title: 'Business Development' },
];

const faqItems = [
    { value: 'faq-1', question: 'How do you tailor solutions to our industry?', answer: 'We start with a deep-dive analysis of your specific industry challenges and requirements. Our team has experience across various sectors, allowing us to apply best practices while customizing every aspect of the solution to fit your unique business context.' },
    { value: 'faq-2', question: 'What is the typical ROI on your solutions?', answer: 'Return on investment varies depending on the scope of the solution, but our clients typically see significant cost savings, improved efficiency, and enhanced customer satisfaction. We work with you to define key performance indicators (KPIs) and track progress against them.' },
    { value: 'faq-3', question: 'How do you ensure a smooth implementation?', answer: 'Our project management team follows a structured implementation methodology, ensuring clear communication, defined milestones, and minimal disruption to your operations. We work collaboratively with your team every step of the way.' },
];

export default function SolutionDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const solution = solutionData[slug as keyof typeof solutionData];

  if (!solution) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={solution.title}
        breadcrumb="Solution Details"
        backgroundImage="/images/group-of-workers-in-an-empty-container-storage-yar-2025-01-08-09-17-31-utc.jpg"
        backgroundImageHint="office background"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Image
              src={solution.image}
              alt={solution.title}
              width={1200}
              height={500}
              className="w-full rounded-lg mb-8"
              data-ai-hint={solution.aiHint}
            />
            <div className="prose max-w-none">
              {solution.description.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground">{paragraph}</p>
              ))}
            </div>

            <div className="my-12">
              <div className="w-16 h-1 bg-primary mb-4"></div>
              <h2 className="text-2xl font-bold font-headline mb-6">Solution Features</h2>
              <ul className="space-y-4">
                {solution.features.map((feature, index) => (
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
                    ALL SOLUTIONS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {allSolutions.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/solutions/${s.slug}`} className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors group">
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
                    <p className="text-sm mb-4">Contact us if you have any questions about our solutions. Our team is happy to help.</p>
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
