import React from 'react';
import { notFound } from 'next/navigation';
import { SERVICES_DATA } from '@/lib/constants';
import ServiceDetailClient from './ServiceDetailClient';

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Find the service by slug on the server
  const service = SERVICES_DATA.find(s => s.slug === slug);
  
  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
