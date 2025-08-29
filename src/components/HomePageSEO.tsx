import React from 'react';
import SEOHead from './SEOHead';

const HomePageSEO: React.FC = () => {
  const homePageSEO = {
    title: "شهاب موسكو - أفضل شركة سياحة روسية للعرب | رحلات موسكو وسوتشي وسانت بطرسبرغ",
    description: "أفضل شركة سياحة روسية للعرب. رحلات مميزة إلى موسكو وسوتشي وسانت بطرسبرغ مع مرشدين عرب محترفين. احجز رحلتك الآن بأفضل الأسعار وخدمة 5 نجوم.",
    keywords: "شهاب موسكو, سياحة روسيا, رحلات موسكو, سوتشي, سانت بطرسبرغ, سياحة عربية, مرشد عربي روسيا"
  };

  return <SEOHead {...homePageSEO} />;
};

export default HomePageSEO;
