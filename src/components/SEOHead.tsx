import React from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  locale?: string;
  siteName?: string;
  robots?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "سفر روسيا - أفضل شركة سياحة روسية للعرب | رحلات فاخرة 2024",
  description = "أفضل شركة سياحة روسية للعرب ⭐ رحلات فاخرة إلى موسكو وسوتشي وسانت بطرسبرغ مع مرشدين عرب محترفين ✈️ حجز فوري وأسعار تنافسية",
  keywords = "سفر روسيا, سياحة روسيا, رحلات موسكو, سوتشي, سانت بطرسبرغ, مرشد عربي روسيا, باقات سفر روسيا, فنادق روسيا, حجز رحلات روسيا",
  image = "https://russia-travel.com/og-image.jpg",
  url = "https://russia-travel.com",
  type = "website",
  author = "سفر روسيا",
  publishedTime,
  modifiedTime,
  locale = "ar_SA",
  siteName = "سفر روسيا - أفضل شركة سياحة روسية للعرب",
  robots = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
}) => {
  React.useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', image);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', url);
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }

    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }

    const twitterImage = document.querySelector('meta[property="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', image);
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url);
    }

    // Add/Update additional SEO meta tags
    const updateOrCreateMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Enhanced SEO meta tags
    updateOrCreateMeta('robots', robots);
    updateOrCreateMeta('author', author);
    updateOrCreateMeta('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');
    updateOrCreateMeta('theme-color', '#1f2937');
    updateOrCreateMeta('format-detection', 'telephone=yes');

    // Open Graph additional tags
    updateOrCreateMeta('og:locale', locale, true);
    updateOrCreateMeta('og:site_name', siteName, true);
    updateOrCreateMeta('og:type', type, true);

    // Twitter Card tags
    updateOrCreateMeta('twitter:card', 'summary_large_image', true);
    updateOrCreateMeta('twitter:site', '@RussiaTravelAR', true);
    updateOrCreateMeta('twitter:creator', '@RussiaTravelAR', true);

    // Additional SEO tags
    if (publishedTime) {
      updateOrCreateMeta('article:published_time', publishedTime, true);
    }
    if (modifiedTime) {
      updateOrCreateMeta('article:modified_time', modifiedTime, true);
    }

    // Language and region
    updateOrCreateMeta('language', 'Arabic');
    updateOrCreateMeta('geo.region', 'RU');
    updateOrCreateMeta('geo.placename', 'Russia');

    // Business information
    updateOrCreateMeta('business:contact_data:phone_number', '+79174828474');
    updateOrCreateMeta('business:contact_data:website', 'https://russia-travel.com');

  }, [title, description, keywords, image, url, type, author, publishedTime, modifiedTime, locale, siteName, robots]);

  return null;
};

export default SEOHead;