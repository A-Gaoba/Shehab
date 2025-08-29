export interface Package {
  id: string;
  name: string;
  city: string;
  price: string;
  duration: string;
  image: string;
  description: string;
  highlights: string[];
}

export interface Hotel {
  id: string;
  name: string;
  city: string;
  rating: number;
  price: string;
  image: string;
  description: string;
  amenities: string[];
  roomTypes: string[];
}

export interface Tour {
  id: string;
  name: string;
  city: string;
  price: string;
  duration: string;
  image: string;
  description: string;
  includes: string[];
  difficulty: string;
}

export interface Activity {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;
}

export interface Vehicle {
  id: string;
  name: string;
  image: string;
  description: string;
  capacity: string;
  features: string[];
  priceRange: string;
  type: string;
}

export interface Service {
  id: string;
  name: string;
  image: string;
  description: string;
  features: string[];
  category: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  image: string;
  description: string;
}

export const travelPackages: Package[] = [
  {
    id: "1",
    name: "جولة موسكو الكلاسيكية",
    city: "موسكو",
    price: "1,200 دولار",
    duration: "5 أيام / 4 ليالي",
    image:
      "https://images.unsplash.com/photo-1520637836862-4d197d17c838?q=80&w=800&auto=format&fit=crop&fm=webp",
    description:
      "استكشف عاصمة روسيا الساحرة مع جولة شاملة تشمل الكرملين والساحة الحمراء",
    highlights: [
      "زيارة الكرملين",
      "جولة في الساحة الحمراء",
      "متحف الدولة التاريخي",
      "مترو موسكو الشهير",
    ],
  },
  {
    id: "2",
    name: "عطلة سوتشي الشاطئية",
    city: "سوتشي",
    price: "950 دولار",
    duration: "6 أيام / 5 ليالي",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop&fm=webp",
    description: "استمتع بأجمل الشواطئ والمنتجعات في منطقة البحر الأسود",
    highlights: [
      "شواطئ البحر الأسود",
      "منتجع روزا خوتور",
      "حدائق سوتشي النباتية",
      "التلفريك الجبلي",
    ],
  },
  {
    id: "3",
    name: "سحر سانت بطرسبرغ",
    city: "سانت بطرسبرغ",
    price: "1,100 دولار",
    duration: "4 أيام / 3 ليالي",
    image:
      "https://images.unsplash.com/photo-1555993539-1732b0258235?q=80&w=800&auto=format&fit=crop&fm=webp",
    description: "اكتشف عاصمة روسيا الثقافية ومتاحفها العالمية الشهيرة",
    highlights: [
      "متحف الهيرميتاج",
      "قصر كاترين",
      "قلعة بطرس وبولس",
      "رحلة في القنوات المائية",
    ],
  },
];

export const hotels: Hotel[] = [
  {
    id: "1",
    name: "OTEL STELLA DI MOSCA",
    city: "موسكو",
    rating: 5,
    price: "ابتداءً من 58000 روبل/ليلة",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=60",
    description:
      "فندق فاخر يقدم مجموعة متنوعة من فئات الغرف مع أسعار خاصة وخصومات للإقامات الطويلة.",
    amenities: [
      "واي فاي مجاني",
      "مطعم",
      "مركز لياقة بدنية",
      "خدمة الغرف على مدار الساعة",
    ],
    roomTypes: ["سوبيير", "ديلوكس", "بولولوكس", "لوكس ديلوكس"],
  },
  {
    id: "2",
    name: "MARRIOTT MOSCOW IMPERIAL PLAZA",
    city: "موسكو",
    rating: 5,
    price: "ابتداءً من 13000 روبل/ليلة",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop&q=60",
    description:
      "فندق متميز مع عروض خاصة للحجوزات الفردية، بما في ذلك خيارات الإفطار.",
    amenities: [
      "واي فاي مجاني",
      "مطعم",
      "مركز لياقة بدنية",
      "خدمة الغرف على مدار الساعة",
    ],
    roomTypes: [
      "غرفة ديلوكس",
      "غرفة ديلوكس بريميوم",
      "غرفة تمثيلية",
      "غرفة لوكس",
    ],
  },
  {
    id: "3",
    name: "HOTEL CONTINENTAL",
    city: "موسكو",
    rating: 5,
    price: "ابتداءً من 11500 روبل/ليلة",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=60",
    description:
      "فندق عالي المستوى يقدم أنواع مختلفة من الغرف مع خيارات للإفطار.",
    amenities: [
      "واي فاي مجاني",
      "مطعم",
      "مركز لياقة بدنية",
      "خدمة الغرف على مدار الساعة",
    ],
    roomTypes: [
      "غرفة ديلوكس",
      "غرفة سوبرير",
      "غرفة لوكس موسكو",
      "غرفة لوكس بوشكين",
    ],
  },
  {
    id: "4",
    name: "STANDART HOTEL",
    city: "موسكو",
    rating: 5,
    price: "ابتداءً من 12550 روبل/ليلة",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&auto=format&fit=crop&q=60",
    description: "فندق قياسي مع أنواع مختلفة من الغرف وخدمات إضافية.",
    amenities: [
      "واي فاي مجاني",
      "مطعم",
      "مركز لياقة بدنية",
      "خدمة الغرف على مدار الساعة",
    ],
    roomTypes: [
      "غرفة كلاسيك",
      "ديلوكس بإطلالة على الفناء الداخلي",
      "ديلوكس بإطلالة على ساحة بوشكين",
      "لوكس",
      "جراند لوكس",
    ],
  },
  {
    id: "5",
    name: "ARBAT STAR HOTEL & APARTMENTS",
    city: "موسكو",
    rating: 5,
    price: "ابتداءً من 10000 روبل/ليلة",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&auto=format&fit=crop&q=60",
    description: "فندق يقدم أنواع مختلفة من الغرف مع تسعير موسمي.",
    amenities: [
      "واي فاي مجاني",
      "مطعم",
      "مركز لياقة بدنية",
      "خدمة الغرف على مدار الساعة",
    ],
    roomTypes: [
      "غرفة ديلوكس كينغ/توين",
      "بريموم ديلوكس كينغ",
      "جونيور سويت كينغ",
      "واحد غرفة نوم سويت كينغ",
    ],
  },
  {
    id: "6",
    name: "ARARAT PARK HOTEL MOSCOW",
    city: "موسكو",
    rating: 5,
    price: "ابتداءً من 22000 روبل/ليلة",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=60",
    description: "فندق مع تسعير موسمي وفئات مختلفة من الغرف.",
    amenities: [
      "واي فاي مجاني",
      "مطعم",
      "مركز لياقة بدنية",
      "خدمة الغرف على مدار الساعة",
    ],
    roomTypes: [
      "بارك كينغ/توين",
      "بارك سيتي فيو",
      "بارك ديلوكس كينغ/توين",
      "بارك سويت كينغ/توين",
    ],
  },
  {
    id: "7",
    name: "RADISSON COLLECTION HOTEL MOSCOW",
    city: "موسكو",
    rating: 5,
    price: "ابتداءً من 14000 روبل/ليلة",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&auto=format&fit=crop&q=60",
    description:
      "فندق مجموعة راديسون يقدم أنواع مختلفة من الغرف مع خيارات للإفطار.",
    amenities: [
      "واي فاي مجاني",
      "مطعم",
      "مركز لياقة بدنية",
      "خدمة الغرف على مدار الساعة",
    ],
    roomTypes: [
      "غرفة كوليكشن سوبرير",
      "غرفة كوليكشن سوبرير بإطلالة على المدينة",
      "غرفة كوليكشن سوبرير بإطلالة على البيت الأبيض",
      "غرفة تمثيلية",
      "غرفة كوليكشن بريميوم",
      "غرفة لوكس",
    ],
  },
  {
    id: "8",
    name: "SWISSOTEL KRASNYE HOTEL MOSCOW",
    city: "موسكو",
    rating: 5,
    price: "ابتداءً من 10000 روبل/ليلة",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop&q=60",
    description: "فندق مع تسعير موسمي وفئات مختلفة من الغرف.",
    amenities: [
      "واي فاي مجاني",
      "مطعم",
      "مركز لياقة بدنية",
      "خدمة الغرف على مدار الساعة",
    ],
    roomTypes: ["كلاسيك", "كلوب", "بانوراما", "لوكس"],
  },
  {
    id: "9",
    name: "METROPOL HOTEL MOSCOW",
    city: "موسكو",
    rating: 5,
    price: "ابتداءً من 22000 روبل/ليلة",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&auto=format&fit=crop&q=60",
    description: "فندق تاريخي يقدم أنواع مختلفة من الغرف مع رموز أسعار مختلفة.",
    amenities: [
      "واي فاي مجاني",
      "مطعم",
      "مركز لياقة بدنية",
      "خدمة الغرف على مدار الساعة",
    ],
    roomTypes: [
      "ستاندرد",
      "سوبيير",
      "إكزيكتيف",
      "سيغناتشر إكزيكتيف",
      "جراند سوبيير",
      "سيغناتشر جراند سوبيير",
      "جونيور سويت",
      "إكزيكتيف سويت",
      "متروبول سويت",
    ],
  },
];

export const tours: Tour[] = [
  {
    id: "1",
    name: "جولة الكرملين المقدس",
    city: "موسكو",
    price: "85 دولار",
    duration: "4 ساعات",
    image:
      "https://images.unsplash.com/photo-1520637736862-4d197d17c838?q=80&w=800&auto=format&fit=crop&fm=webp",
    description:
      "جولة مرشدة شاملة داخل الكرملين مع زيارة الكاتدرائيات التاريخية",
    includes: ["مرشد سياحي عربي", "تذاكر الدخول", "سماعات صوتية"],
    difficulty: "سهل",
  },
  {
    id: "2",
    name: "مغامرة جبال القوقاز",
    city: "سوتشي",
    price: "150 دولار",
    duration: "يوم كامل",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop&fm=webp",
    description: "رحلة مثيرة في جبال القوقاز مع التلفريك والأنشطة الجبلية",
    includes: ["النقل", "وجبة الغداء", "معدات التسلق", "مرشد محترف"],
    difficulty: "متوسط",
  },
  {
    id: "3",
    name: "رحلة القصور الإمبراطورية",
    city: "سانت بطرسبرغ",
    price: "110 دولار",
    duration: "6 ساعات",
    image:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=800&auto=format&fit=crop&fm=webp",
    description: "زيارة قصور بتروهوف وكاترين مع الحدائق الملكية الخلابة",
    includes: ["حافلة مكيفة", "تذاكر القصور", "مرشد متخصص", "وقت حر للتصوير"],
    difficulty: "سهل",
  },
];

export const activities: Activity[] = [
  {
    id: "1",
    name: "الهاسكي",
    image:
      "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=800&auto=format&fit=crop&q=60",
    description: "استمتع بتجربة التزلج على الثلج مع كلاب الهاسكي في موسكو.",
    category: "مغامرة",
  },
  {
    id: "2",
    name: "حديقه الغزلان",
    image:
      "https://images.unsplash.com/photo-1615190623796-5cb582fa4182?w=800&auto=format&fit=crop&q=60",
    description:
      "قم بزيارة حديقة الغزلان واستمتع بمشاهدة الحيوانات في أجواء طبيعية هادئة.",
    category: "طبيعة",
  },
  {
    id: "3",
    name: "الأكواخ الريفية",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&auto=format&fit=crop&q=60",
    description:
      "استرخِ في الأكواخ الريفية واستمتع بأجواء هادئة بعيداً عن صخب المدينة.",
    category: "إقامة",
  },
  {
    id: "4",
    name: "الهليكوبتر",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=60",
    description: "جولة مثيرة فوق موسكو بمروحية لرؤية المناظر من السماء.",
    category: "مغامرة",
  },
  {
    id: "5",
    name: "المنطاد",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop&q=60",
    description: "رحلة بالمنطاد تمنحك مشهداً بانورامياً مذهلاً للمدينة والريف.",
    category: "مغامرة",
  },
  {
    id: "6",
    name: "المعسكر الروسي",
    image:
      "https://images.unsplash.com/photo-1590080875637-12b37e0f62a3?w=800&auto=format&fit=crop&q=60",
    description: "تجربة فريدة للتعرف على الحياة في المعسكر الروسي التقليدي.",
    category: "ثقافة",
  },
  {
    id: "7",
    name: "الدب توم",
    image:
      "https://images.unsplash.com/photo-1601637152120-50768d4933c9?w=800&auto=format&fit=crop&q=60",
    description: "تعرف على الدب الروسي الشهير توم في مغامرة ممتعة.",
    category: "حيوانات",
  },
  {
    id: "8",
    name: "ركوب الخيل",
    image:
      "https://images.unsplash.com/photo-1502508744502-c4b998aaed1c?w=800&auto=format&fit=crop&q=60",
    description: "جولات ممتعة على ظهور الخيل وسط الطبيعة الروسية.",
    category: "مغامرة",
  },
  {
    id: "9",
    name: "الدريفت",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&auto=format&fit=crop&q=60",
    description: "تجربة مليئة بالإثارة مع سباقات ودريفت السيارات.",
    category: "رياضة",
  },
  {
    id: "10",
    name: "الكروز",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60",
    description: "رحلة بحرية على متن الكروز عبر نهر موسكو.",
    category: "رحلات",
  },
  {
    id: "11",
    name: "السيرك",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=60",
    description: "استمتع بمشاهدة عروض السيرك الروسية التقليدية.",
    category: "ترفيه",
  },
  {
    id: "12",
    name: "التلفريك",
    image:
      "https://images.unsplash.com/photo-1600871824170-c93f26d7c0e2?w=800&auto=format&fit=crop&q=60",
    description: "جولة تلفريك تمنحك إطلالة رائعة على موسكو.",
    category: "مغامرة",
  },
  {
    id: "13",
    name: "عروض الباليه",
    image:
      "https://images.unsplash.com/photo-1529973565456-c1ed3d6f3d6f?w=800&auto=format&fit=crop&q=60",
    description: "شاهد روائع عروض الباليه الروسية في أجواء مميزة.",
    category: "فن",
  },
  {
    id: "14",
    name: "الزيبلاين",
    image:
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=800&auto=format&fit=crop&q=60",
    description: "مغامرة مشوقة عبر الزيبلاين بين الجبال والوديان.",
    category: "مغامرة",
  },
  {
    id: "15",
    name: "برج التلفزيون",
    image:
      "https://images.unsplash.com/photo-1576076421037-7c72b0c1e8da?w=800&auto=format&fit=crop&q=60",
    description: "زيارة برج التلفزيون والاستمتاع بالمشاهدة من الأعلى.",
    category: "معالم",
  },
  {
    id: "16",
    name: "عرض الدلافين",
    image:
      "https://images.unsplash.com/photo-1614011207296-2074fa3437ea?w=800&auto=format&fit=crop&q=60",
    description: "عروض ممتعة مع الدلافين في أجواء بحرية ساحرة.",
    category: "ترفيه",
  },
  {
    id: "17",
    name: "الزحليقة",
    image:
      "https://images.unsplash.com/photo-1603112574217-bf2a76e6a1b6?w=800&auto=format&fit=crop&q=60",
    description: "تجربة مثيرة على الزحليقة الجليدية في موسكو.",
    category: "مغامرة",
  },
  {
    id: "18",
    name: "البقي العملاق",
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&auto=format&fit=crop&q=60",
    description: "جولة مليئة بالحماس باستخدام مركبة البقي العملاق.",
    category: "مغامرة",
  },
  {
    id: "19",
    name: "عين موسكو",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60",
    description: "مشاهدة بانورامية مذهلة لمدينة موسكو من عين موسكو.",
    category: "معالم",
  },
];

export const vehicles: Vehicle[] = [
  {
    id: "1",
    name: "Mercedes M Class",
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&auto=format&fit=crop&q=60",
    description:
      "سيارة فاخرة من ماركة مرسيدس توفر الراحة والأناقة في جميع رحلاتك.",
    capacity: "4-5 أشخاص",
    features: [
      "مقاعد جلدية فاخرة",
      "نظام تكييف متطور",
      "نظام ملاحة GPS",
      "واي فاي مجاني",
    ],
    priceRange: "80-120 دولار/يوم",
    type: "سيارة فاخرة",
  },
  {
    id: "2",
    name: "Mercedes-Benz Sprinter",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=60",
    description:
      "حافلة فاخرة من ماركة مرسيدس مثالية للمجموعات الكبيرة والرحلات الطويلة.",
    capacity: "12-16 شخص",
    features: [
      "مقاعد مريحة قابلة للتعديل",
      "نظام ترفيه متكامل",
      "تكييف مركزي",
      "مساحة تخزين واسعة",
    ],
    priceRange: "150-200 دولار/يوم",
    type: "حافلة صغيرة",
  },
  {
    id: "3",
    name: "Mercedes Viano Minivan",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop&q=60",
    description:
      "ميني فان فاخرة من ماركة مرسيدس تجمع بين الراحة والعملية للعائلات.",
    capacity: "6-8 أشخاص",
    features: [
      "مقاعد جلدية مريحة",
      "أبواب منزلقة كهربائية",
      "نوافذ معتمة",
      "نظام صوتي متطور",
    ],
    priceRange: "100-140 دولار/يوم",
    type: "ميني فان",
  },
  {
    id: "4",
    name: "Mercedes Maybach",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&auto=format&fit=crop&q=60",
    description:
      "سيارة فاخرة من الطراز الأول توفر تجربة قيادة استثنائية ومستوى راحة لا مثيل له.",
    capacity: "3-4 أشخاص",
    features: [
      "مقاعد مدلكة",
      "نظام ترفيه خلفي",
      "ثلاجة صغيرة",
      "إضاءة محيطية فاخرة",
    ],
    priceRange: "200-300 دولار/يوم",
    type: "سيارة فاخرة جداً",
  },
  {
    id: "5",
    name: "Bus",
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&auto=format&fit=crop&q=60",
    description:
      "حافلة كبيرة مريحة مثالية للرحلات الجماعية والمجموعات الكبيرة.",
    capacity: "25-45 شخص",
    features: [
      "مقاعد مريحة",
      "نظام تكييف قوي",
      "ميكروفون ونظام صوتي",
      "مساحة تخزين كبيرة",
    ],
    priceRange: "180-250 دولار/يوم",
    type: "حافلة كبيرة",
  },
];

export const services: Service[] = [
  {
    id: "1",
    name: "إصدار التأشيرات الخاصة",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop&q=60",
    description:
      "نساعدك في الحصول على التأشيرة الروسية بسهولة وسرعة مع ضمان الموافقة",
    features: [
      "استشارة مجانية",
      "متابعة حتى الحصول على التأشيرة",
      "ضمان الموافقة",
      "خدمة سريعة",
    ],
    category: "تأشيرات",
    icon: "🛂",
  },
  {
    id: "2",
    name: "استخراج التأشيرات السياحية",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=60",
    description:
      "خدمة استخراج التأشيرات السياحية لروسيا بأسرع وقت وأفضل الأسعار",
    features: [
      "معالجة سريعة",
      "أسعار تنافسية",
      "دعم على مدار الساعة",
      "خبرة 10 سنوات",
    ],
    category: "تأشيرات",
    icon: "✈️",
  },
  {
    id: "4",
    name: "حجوز الطيران",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=60",
    description:
      "احجز رحلاتك الجوية إلى روسيا بأفضل الأسعار والخطوط الجوية المميزة",
    features: [
      "أسعار مخفضة",
      "خطوط جوية موثوقة",
      "مرونة في التواريخ",
      "دعم فني متخصص",
    ],
    category: "طيران",
    icon: "🛫",
  },
  {
    id: "5",
    name: "الحجز الفندقي",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&auto=format&fit=crop&q=60",
    description: "احجز في أفضل الفنادق الروسية مع ضمان أفضل الأسعار والخدمات",
    features: ["فنادق 5 نجوم", "أسعار حصرية", "إلغاء مجاني", "خدمة عملاء 24/7"],
    category: "إقامة",
    icon: "🏨",
  },
  {
    id: "6",
    name: "الاستقبال في المطار",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=60",
    description: "خدمة استقبال VIP في المطار مع النقل المباشر إلى الفندق",
    features: ["استقبال شخصي", "نقل فاخر", "مساعدة في الإجراءات", "مرشد عربي"],
    category: "نقل",
    icon: "🚗",
  },
  {
    id: "7",
    name: "التأمين على السفر",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60",
    description: "تأمين شامل لرحلتك يغطي جميع المخاطر والطوارئ الطبية",
    features: ["تغطية شاملة", "تأمين طبي", "تأمين الأمتعة", "مساعدة 24/7"],
    category: "تأمين",
    icon: "🛡️",
  },
  {
    id: "8",
    name: "رحلات سياحية",
    image:
      "https://images.unsplash.com/photo-1520637836862-4d197d17c838?w=800&auto=format&fit=crop&q=60",
    description: "رحلات سياحية منظمة لأهم المعالم الروسية مع مرشدين عرب",
    features: ["مرشدين عرب", "برامج مخصصة", "مجموعات صغيرة", "وجبات مشمولة"],
    category: "جولات",
    icon: "🗺️",
  },
  {
    id: "9",
    name: "حجز التذاكر",
    image:
      "https://images.unsplash.com/photo-1594736797933-d0d4bfb00de3?w=800&auto=format&fit=crop&q=60",
    description: "احجز تذاكر القطارات والحافلات والعروض المسرحية والرياضية",
    features: ["تذاكر القطار", "تذاكر العروض", "تذاكر المتاحف", "حجز مسبق"],
    category: "تذاكر",
    icon: "🎫",
  },
  {
    id: "10",
    name: "ترجمة الوثائق",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=60",
    description: "ترجمة معتمدة لجميع الوثائق المطلوبة للسفر والإقامة في روسيا",
    features: ["ترجمة معتمدة", "ترجمة فورية", "جميع اللغات", "تسليم سريع"],
    category: "خدمات",
    icon: "📄",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&auto=format&fit=crop&q=80",
    description:
      "محادثة واتساب مع أحمد محمد من السعودية حول رحلة موسكو الكلاسيكية",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1611262588019-db6b814e6d7a?w=600&auto=format&fit=crop&q=80",
    description:
      "تقييم عبر سناب شات من فاطمة الزهراء من الإمارات عن عطلة سوتشي",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&auto=format&fit=crop&q=80",
    description: "رسائل واتساب من محمد العلي من الكويت عن تجربة سانت بطرسبرغ",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1611262588019-db6b814e6d7a?w=600&auto=format&fit=crop&q=80",
    description: "محادثة مع عائشة أحمد من قطر حول الباقة الشاملة",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&auto=format&fit=crop&q=80",
    description: "تقييم عبدالرحمن خالد من البحرين للرحلة العائلية",
  },
  {
    id: "6",
    image:
      "https://images.unsplash.com/photo-1611262588019-db6b814e6d7a?w=600&auto=format&fit=crop&q=80",
    description: "رسائل نورا سالم من عمان عن تجربة الهاسكي",
  },
  {
    id: "7",
    image:
      "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&auto=format&fit=crop&q=80",
    description: "محادثة يوسف المنصوري من الأردن حول الجولة الثقافية",
  },
  {
    id: "8",
    image:
      "https://images.unsplash.com/photo-1611262588019-db6b814e6d7a?w=600&auto=format&fit=crop&q=80",
    description: "تقييم مريم الحمادي من الإمارات لباقة شهر العسل",
  },
  {
    id: "9",
    image:
      "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&auto=format&fit=crop&q=80",
    description: "رسائل خالد التميمي من السعودية عن خدمات النقل VIP",
  },
  {
    id: "10",
    image:
      "https://images.unsplash.com/photo-1611262588019-db6b814e6d7a?w=600&auto=format&fit=crop&q=80",
    description: "محادثة ليلى القاسمي من الكويت حول جولة تذوق الطعام",
  },
  {
    id: "11",
    image:
      "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&auto=format&fit=crop&q=80",
    description: "تقييم سعد الدوسري من قطر لرحلة الأعمال",
  },
  {
    id: "12",
    image:
      "https://images.unsplash.com/photo-1611262588019-db6b814e6d7a?w=600&auto=format&fit=crop&q=80",
    description: "رسائل هدى العبدالله من البحرين عن جولة التسوق",
  },
];
