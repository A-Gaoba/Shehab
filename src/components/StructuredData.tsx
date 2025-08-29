import React from 'react';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'service' | 'faq' | 'breadcrumb' | 'product' | 'localbusiness' | 'review' | 'offer' | 'event' | 'article';
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const generateStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          ...data
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          ...data
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          ...data
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          ...data
        };

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          ...data
        };

      case 'product':
        return {
          "@context": "https://schema.org",
          "@type": "Product",
          ...data
        };

      case 'localbusiness':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          ...data
        };

      case 'review':
        return {
          "@context": "https://schema.org",
          "@type": "Review",
          ...data
        };

      case 'offer':
        return {
          "@context": "https://schema.org",
          "@type": "Offer",
          ...data
        };

      case 'event':
        return {
          "@context": "https://schema.org",
          "@type": "Event",
          ...data
        };

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          ...data
        };

      default:
        return data;
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateStructuredData())
      }}
    />
  );
};

export default StructuredData;