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
  price: string;
  duration: string;
  category: string;
  difficulty: string;
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

export const travelPackages: Package[] = [
  {
    id: '1',
    name: 'جولة موسكو الكلاسيكية',
    city: 'موسكو',
    price: '1,200 دولار',
    duration: '5 أيام / 4 ليالي',
    image: 'https://images.pexels.com/photos/753339/pexels-photo-753339.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'استكشف عاصمة روسيا الساحرة مع جولة شاملة تشمل الكرملين والساحة الحمراء',
    highlights: ['زيارة الكرملين', 'جولة في الساحة الحمراء', 'متحف الدولة التاريخي', 'مترو موسكو الشهير']
  },
  {
    id: '2',
    name: 'عطلة سوتشي الشاطئية',
    city: 'سوتشي',
    price: '950 دولار',
    duration: '6 أيام / 5 ليالي',
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'استمتع بأجمل الشواطئ والمنتجعات في منطقة البحر الأسود',
    highlights: ['شواطئ البحر الأسود', 'منتجع روزا خوتور', 'حدائق سوتشي النباتية', 'التلفريك الجبلي']
  },
  {
    id: '3',
    name: 'سحر سانت بطرسبرغ',
    city: 'سانت بطرسبرغ',
    price: '1,100 دولار',
    duration: '4 أيام / 3 ليالي',
    image: 'https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'اكتشف عاصمة روسيا الثقافية ومتاحفها العالمية الشهيرة',
    highlights: ['متحف الهيرميتاج', 'قصر كاترين', 'قلعة بطرس وبولس', 'رحلة في القنوات المائية']
  }
];

export const hotels: Hotel[] = [
  {
    id: "1",
    name: "OTEL STELLA DI MOSCA",
    city: "موسكو",
    rating: 5,
    price: "ابتداءً من 58000 روبل/ليلة",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=60",
    description: "فندق فاخر يقدم مجموعة متنوعة من فئات الغرف مع أسعار خاصة وخصومات للإقامات الطويلة.",
    amenities: ["واي فاي مجاني", "مطعم", "مركز لياقة بدنية", "خدمة الغرف على مدار الساعة"],
    roomTypes: ["سوبيير", "ديلوكس", "بولولوكس", "لوكس ديلوكس"]
  },
  {
    id: "2",
    name: "MARRIOTT MOSCOW IMPERIAL PLAZA",
    city: "موسكو",
    rating: 5,
    price: "ابتداءً من 13000 روبل/ليلة",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop&q=60",
    description: "فندق متميز مع عروض خاصة للحجوزات الفردية، بما في ذلك خيارات الإفطار.",
    amenities: ["واي فاي مجاني", "مطعم", "مركز لياقة بدنية", "خدمة الغرف على مدار الساعة"],
    roomTypes: ["غرفة ديلوكس", "غرفة ديلوكس بريميوم", "غرفة تمثيلية", "غرفة لوكس"]
  },
  {
    id: "3",
    name: "HOTEL CONTINENTAL",
    city: "موسكو",
    rating: 5,
    price: "ابتداءً من 11500 روبل/ليلة",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=60",
    description: "فندق عالي المستوى يقدم أنواع مختلفة من الغرف مع خيارات للإفطار.",
    amenities: ["واي فاي مجاني", "مطعم", "مركز لياقة بدنية", "خدمة الغرف على مدار الساعة"],
    roomTypes: ["غرفة ديلوكس", "غرفة سوبرير", "غرفة لوكس موسكو", "غرفة لوكس بوشكين"]
  },
  {
    id: "4",
    name: "STANDART HOTEL",
    city: "موسكو",
    rating: 5,
    price: "ابتداءً من 12550 روبل/ليلة",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&auto=format&fit=crop&q=60",
    description: "فندق قياسي مع أنواع مختلفة من الغرف وخدمات إضافية.",
    amenities: ["واي فاي مجاني", "مطعم", "مركز لياقة بدنية", "خدمة الغرف على مدار الساعة"],
    roomTypes: ["غرفة كلاسيك", "ديلوكس بإطلالة على الفناء الداخلي", "ديلوكس بإطلالة على ساحة بوشكين", "لوكس", "جراند لوكس"]
  },
  {
    id: "5",
    name: "ARBAT STAR HOTEL & APARTMENTS",
    city: "موسكو",
    rating: 5,
    price: "ابتداءً من 10000 روبل/ليلة",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&auto=format&fit=crop&q=60",
    description: "فندق يقدم أنواع مختلفة من الغرف مع تسعير موسمي.",
    amenities: ["واي فاي مجاني", "مطعم", "مركز لياقة بدنية", "خدمة الغرف على مدار الساعة"],
    roomTypes: ["غرفة ديلوكس كينغ/توين", "بريموم ديلوكس كينغ", "جونيور سويت كينغ", "واحد غرفة نوم سويت كينغ"]
  },
  {
    id: "6",
    name: "ARARAT PARK HOTEL MOSCOW",
    city: "موسكو",
    rating: 5,
    price: "ابتداءً من 22000 روبل/ليلة",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=60",
    description: "فندق مع تسعير موسمي وفئات مختلفة من الغرف.",
    amenities: ["واي فاي مجاني", "مطعم", "مركز لياقة بدنية", "خدمة الغرف على مدار الساعة"],
    roomTypes: ["بارك كينغ/توين", "بارك سيتي فيو", "بارك ديلوكس كينغ/توين", "بارك سويت كينغ/توين"]
  },
  {
    id: "7",
    name: "RADISSON COLLECTION HOTEL MOSCOW",
    city: "موسكو",
    rating: 5,
    price: "ابتداءً من 14000 روبل/ليلة",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&auto=format&fit=crop&q=60",
    description: "فندق مجموعة راديسون يقدم أنواع مختلفة من الغرف مع خيارات للإفطار.",
    amenities: ["واي فاي مجاني", "مطعم", "مركز لياقة بدنية", "خدمة الغرف على مدار الساعة"],
    roomTypes: ["غرفة كوليكشن سوبرير", "غرفة كوليكشن سوبرير بإطلالة على المدينة", "غرفة كوليكشن سوبرير بإطلالة على البيت الأبيض", "غرفة تمثيلية", "غرفة كوليكشن بريميوم", "غرفة لوكس"]
  },
  {
    id: "8",
    name: "SWISSOTEL KRASNYE HOTEL MOSCOW",
    city: "موسكو",
    rating: 5,
    price: "ابتداءً من 10000 روبل/ليلة",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop&q=60",
    description: "فندق مع تسعير موسمي وفئات مختلفة من الغرف.",
    amenities: ["واي فاي مجاني", "مطعم", "مركز لياقة بدنية", "خدمة الغرف على مدار الساعة"],
    roomTypes: ["كلاسيك", "كلوب", "بانوراما", "لوكس"]
  },
  {
    id: "9",
    name: "METROPOL HOTEL MOSCOW",
    city: "موسكو",
    rating: 5,
    price: "ابتداءً من 22000 روبل/ليلة",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&auto=format&fit=crop&q=60",
    description: "فندق تاريخي يقدم أنواع مختلفة من الغرف مع رموز أسعار مختلفة.",
    amenities: ["واي فاي مجاني", "مطعم", "مركز لياقة بدنية", "خدمة الغرف على مدار الساعة"],
    roomTypes: ["ستاندرد", "سوبيير", "إكزيكتيف", "سيغناتشر إكزيكتيف", "جراند سوبيير", "سيغناتشر جراند سوبيير", "جونيور سويت", "إكزيكتيف سويت", "متروبول سويت"]
  }
];

export const tours: Tour[] = [
  {
    id: '1',
    name: 'جولة الكرملين المقدس',
    city: 'موسكو',
    price: '85 دولار',
    duration: '4 ساعات',
    image: 'https://images.pexels.com/photos/1438992/pexels-photo-1438992.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'جولة مرشدة شاملة داخل الكرملين مع زيارة الكاتدرائيات التاريخية',
    includes: ['مرشد سياحي عربي', 'تذاكر الدخول', 'سماعات صوتية'],
    difficulty: 'سهل'
  },
  {
    id: '2',
    name: 'مغامرة جبال القوقاز',
    city: 'سوتشي',
    price: '150 دولار',
    duration: 'يوم كامل',
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'رحلة مثيرة في جبال القوقاز مع التلفريك والأنشطة الجبلية',
    includes: ['النقل', 'وجبة الغداء', 'معدات التسلق', 'مرشد محترف'],
    difficulty: 'متوسط'
  },
  {
    id: '3',
    name: 'رحلة القصور الإمبراطورية',
    city: 'سانت بطرسبرغ',
    price: '110 دولار',
    duration: '6 ساعات',
    image: 'https://images.pexels.com/photos/2506028/pexels-photo-2506028.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'زيارة قصور بتروهوف وكاترين مع الحدائق الملكية الخلابة',
    includes: ['حافلة مكيفة', 'تذاكر القصور', 'مرشد متخصص', 'وقت حر للتصوير'],
    difficulty: 'سهل'
  }
];

export const activities: Activity[] = [
  {
    id: '1',
    name: 'الهاسكي',
    image: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=800&auto=format&fit=crop&q=60',
    description: 'استمتع بتجربة التزلج على الثلج مع كلاب الهاسكي في موسكو.',
    price: '120 دولار',
    duration: '3 ساعات',
    category: 'مغامرة',
    difficulty: 'متوسط'
  },
  {
    id: '2',
    name: 'دوريات الرنة',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&auto=format&fit=crop&q=60',
    description: 'جولة فريدة مع الرنة في الغابات الثلجية.',
    price: '95 دولار',
    duration: '2.5 ساعة',
    category: 'طبيعة',
    difficulty: 'سهل'
  },
  {
    id: '3',
    name: 'الأكواخ الريفية',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=60',
    description: 'استمتع بالإقامة في أكواخ ريفية جميلة وسط الطبيعة الخلابة.',
    price: '200 دولار',
    duration: 'ليلة واحدة',
    category: 'إقامة',
    difficulty: 'سهل'
  },
  {
    id: '4',
    name: 'الهليكوبتر',
    image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&auto=format&fit=crop&q=60',
    description: 'جولة جوية مدهشة فوق مناظر موسكو الخلابة بواسطة الهليكوبتر.',
    price: '350 دولار',
    duration: '45 دقيقة',
    category: 'مغامرة',
    difficulty: 'سهل'
  },
  {
    id: '5',
    name: 'المعسكر الروسي',
    image: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=800&auto=format&fit=crop&q=60',
    description: 'انضم إلى معسكر روسي تقليدي واستمتع بالأنشطة الثقافية والرياضية.',
    price: '180 دولار',
    duration: 'يوم كامل',
    category: 'ثقافة',
    difficulty: 'متوسط'
  },
  {
    id: '6',
    name: 'الدب البني',
    image: 'https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?w=800&auto=format&fit=crop&q=60',
    description: 'تعرف على الدببة في بيئتها الطبيعية واستمتع بمشاهدة هذه الحيوانات الرائعة.',
    price: '140 دولار',
    duration: '4 ساعات',
    category: 'طبيعة',
    difficulty: 'متوسط'
  },
  {
    id: '7',
    name: 'الأسواق التقليدية',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60',
    description: 'استمتع بتجربة تسوق فريدة في أسواق موسكو التقليدية.',
    price: '45 دولار',
    duration: '2 ساعة',
    category: 'تسوق',
    difficulty: 'سهل'
  },
  {
    id: '8',
    name: 'الشورخ الروسي',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop&q=60',
    description: 'استمتع بتجربة تناول الشورخ الروسي التقليدي.',
    price: '35 دولار',
    duration: '1.5 ساعة',
    category: 'طعام',
    difficulty: 'سهل'
  },
  {
    id: '9',
    name: 'الحرف اليدوية',
    image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&auto=format&fit=crop&q=60',
    description: 'استكشف المشروعات المحلية واستمتع بالمنتجات اليدوية.',
    price: '60 دولار',
    duration: '2.5 ساعة',
    category: 'ثقافة',
    difficulty: 'سهل'
  },
  {
    id: '10',
    name: 'عروض الباليه',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=60',
    description: 'استمتع بمشاهدة عروض الباليه الكلاسيكية في موسكو.',
    price: '85 دولار',
    duration: '2 ساعة',
    category: 'ثقافة',
    difficulty: 'سهل'
  },
  {
    id: '11',
    name: 'الزيبلاين',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&auto=format&fit=crop&q=60',
    description: 'تجربة مثيرة عبر الزيبلاين فوق الغابات الخلابة.',
    price: '75 دولار',
    duration: '1 ساعة',
    category: 'مغامرة',
    difficulty: 'متوسط'
  },
  {
    id: '12',
    name: 'برج التلفزيون',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&auto=format&fit=crop&q=60',
    description: 'استمتع بإطلالة بانورامية على موسكو من برج التلفزيون.',
    price: '25 دولار',
    duration: '1 ساعة',
    category: 'معالم',
    difficulty: 'سهل'
  },
  {
    id: '13',
    name: 'عرض الدلافين',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=60',
    description: 'استمتع بمشاهدة عروض الدلافين المدهشة.',
    price: '55 دولار',
    duration: '1.5 ساعة',
    category: 'ترفيه',
    difficulty: 'سهل'
  },
  {
    id: '14',
    name: 'البحيرة المجمدة',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&auto=format&fit=crop&q=60',
    description: 'استكشف البحيرة المجمدة واستمتع بالمناظر الطبيعية الخلابة.',
    price: '90 دولار',
    duration: '3 ساعات',
    category: 'طبيعة',
    difficulty: 'متوسط'
  },
  {
    id: '15',
    name: 'التسوق الفاخر',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60',
    description: 'استمتع بتجربة تسوق فريدة في أسواق موسكو الفاخرة.',
    price: '40 دولار',
    duration: '2 ساعة',
    category: 'تسوق',
    difficulty: 'سهل'
  }
];

export const vehicles: Vehicle[] = [
  {
    id: '1',
    name: 'Mercedes M Class',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&auto=format&fit=crop&q=60',
    description: 'سيارة فاخرة من ماركة مرسيدس توفر الراحة والأناقة في جميع رحلاتك.',
    capacity: '4-5 أشخاص',
    features: ['مقاعد جلدية فاخرة', 'نظام تكييف متطور', 'نظام ملاحة GPS', 'واي فاي مجاني'],
    priceRange: '80-120 دولار/يوم',
    type: 'سيارة فاخرة'
  },
  {
    id: '2',
    name: 'Mercedes-Benz Sprinter',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=60',
    description: 'حافلة فاخرة من ماركة مرسيدس مثالية للمجموعات الكبيرة والرحلات الطويلة.',
    capacity: '12-16 شخص',
    features: ['مقاعد مريحة قابلة للتعديل', 'نظام ترفيه متكامل', 'تكييف مركزي', 'مساحة تخزين واسعة'],
    priceRange: '150-200 دولار/يوم',
    type: 'حافلة صغيرة'
  },
  {
    id: '3',
    name: 'Mercedes Viano Minivan',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop&q=60',
    description: 'ميني فان فاخرة من ماركة مرسيدس تجمع بين الراحة والعملية للعائلات.',
    capacity: '6-8 أشخاص',
    features: ['مقاعد جلدية مريحة', 'أبواب منزلقة كهربائية', 'نوافذ معتمة', 'نظام صوتي متطور'],
    priceRange: '100-140 دولار/يوم',
    type: 'ميني فان'
  },
  {
    id: '4',
    name: 'Mercedes Maybach',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&auto=format&fit=crop&q=60',
    description: 'سيارة فاخرة من الطراز الأول توفر تجربة قيادة استثنائية ومستوى راحة لا مثيل له.',
    capacity: '3-4 أشخاص',
    features: ['مقاعد مدلكة', 'نظام ترفيه خلفي', 'ثلاجة صغيرة', 'إضاءة محيطية فاخرة'],
    priceRange: '200-300 دولار/يوم',
    type: 'سيارة فاخرة جداً'
  },
  {
    id: '5',
    name: 'Bus',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&auto=format&fit=crop&q=60',
    description: 'حافلة كبيرة مريحة مثالية للرحلات الجماعية والمجموعات الكبيرة.',
    capacity: '25-45 شخص',
    features: ['مقاعد مريحة', 'نظام تكييف قوي', 'ميكروفون ونظام صوتي', 'مساحة تخزين كبيرة'],
    priceRange: '180-250 دولار/يوم',
    type: 'حافلة كبيرة'
  }
];