import React from 'react';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'service' | 'faq' | 'breadcrumb' | 'product';
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