import { 
  Globe, 
  ShieldCheck, 
  Zap, 
  Users, 
  Ship, 
  Plane, 
  Truck, 
  Car,
  Layout,
  Box,
  BarChart3,
  Mail
} from 'lucide-react';

export const LOGO_URL = "https://i.ibb.co/shb0sLb/1773326395-Global-Business-Link.gif";

export const TRANSLATIONS = {
  en: {
    dir: 'ltr',
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About us',
      news: 'News',
      contact: 'Contact us',
      forms: 'Online Forms',
      tracking: 'Tracking',
      features: 'Features',
      gallery: 'Gallery'
    },
    hero: {
      badge: 'Global Logistics Solutions',
      cta: 'Get Started',
      track: 'Track Shipment'
    },
    stats: {
      projects: 'Completed\nProjects',
      clients: 'Satisfied\nClients',
      experience: 'Years of\nExperience',
      support: 'Emergency\nSupport'
    },
    features: {
      badge: 'Global Business Link',
      title: 'Why Choose GBL?',
      desc: 'Customers choose Global Business Link because we combine experience with direct attention to detail.',
      why: 'Why Choose GBL?',
      whyDesc: 'Customers choose Global Business Link because we combine experience with direct attention to detail. We do not treat shipping as a routine transaction. We treat each shipment as a responsibility that requires planning, awareness, and professional execution.',
      apart: 'What sets us apart?',
      apartDesc: 'Over the years, this approach has helped us build lasting relationships with customers who depend on reliable international freight solutions.',
      problem: 'Our Vision',
      problemDesc: 'Our goal is to continue growing while maintaining the same level of service that has defined our work for more than two decades. We aim to provide shipping solutions that remain practical, dependable, and responsive to changing customer needs in global transportation.'
    },
    services: {
      badge: 'What We Do',
      title: 'Our Logistics Services',
      desc: 'Global Business Link provides a complete range of logistics services designed to support both personal and commercial cargo needs.',
      viewMore: 'View All Services',
      summary: 'Global Business Link provides international freight and logistics services designed to support personal shipments, commercial cargo, and specialized transportation requirements with professionalism and attention to detail. For more than 20 years, our company has helped customers move cargo efficiently from the United States to destinations across global markets by combining operational experience, practical planning, and dependable service. Every shipment is handled with careful coordination to ensure cargo moves safely, efficiently, and according to customer requirements.'
    },
    reviews: {
      badge: 'Rated 4.9 by over 12k users',
      title: 'Words of praise from others\nabout our presence.'
    },
    contact: {
      badge: 'Get in touch',
      title: 'Ready to optimize your supply chain?',
      desc: 'Contact our logistics experts today for a customized solution tailored to your business needs.',
      info: {
        call: 'Call us directly',
        email: 'Send an email'
      },
      form: {
        name: 'Full Name',
        email: 'Email Address',
        message: 'Your Message',
        submit: 'Send Message',
        placeholderName: 'John Doe',
        placeholderEmail: 'john@example.com',
        placeholderMessage: 'How can we help you today?',
        selectService: 'Select a service...'
      }
    },
    sections: {
      shipper: 'Are You A\nShipper?',
      receiver: 'Are You A\nReceiver?',
      checkNow: 'Check Now',
      carriers: 'Connected with Major Ocean Carriers',
      shipperTitle: 'Important Information for Shippers – Personal Vehicle & Household Goods',
      shipperRequirements: {
        title: 'Vehicle Requirements 🚗',
        points: [
          'Vehicle must be in running condition unless otherwise approved.',
          'Fuel level should not exceed 1/4 tank.',
          'Alarm systems must be disabled.',
          'Vehicle must be clean inside and outside for inspection.',
          'Provide original title and copy of photo ID.',
          'Any existing damage should be documented before delivery.'
        ]
      },
      householdGoods: {
        title: 'Household Goods Inside Vehicle 📦',
        points: [
          'Household goods are loaded at shipper’s own risk.',
          'Items must be packed securely to prevent movement during transit.',
          'Do not place items above window level.',
          'No prohibited, hazardous, flammable, or illegal items allowed.',
          'Heavy items should be secured to avoid shifting.',
          'Customs authorities may inspect contents at origin or destination.'
        ]
      },
      shippingRisks: {
        title: 'Important Shipping Risks ⚠️',
        points: [
          'Vehicles and household goods may shift during ocean transit despite careful loading and securing.',
          'Port handling, vessel movement, and container handling can affect cargo.',
          'Minor movement or contact may occur in tightly loaded containers.'
        ]
      },
      customs: {
        title: 'Customs & Documentation 📄',
        points: [
          'Shipper is responsible for accurate inventory of household goods.',
          'Destination customs charges, duties, taxes, and inspections are the customer’s responsibility unless agreed otherwise.',
          'Delays may occur if documents are incomplete.'
        ]
      },
      insurance: {
        title: 'Insurance 💼',
        points: [
          'Marine insurance is strongly recommended.',
          'Carrier liability is limited under shipping terms.'
        ]
      },
      delivery: {
        title: 'Delivery & Arrival 🚢',
        points: [
          'Transit times are estimates and may change.',
          'Storage charges may apply if cargo is not picked up promptly at the destination.'
        ]
      },
      receiverAcknowledgment: {
        title: 'Receiver Acknowledgment',
        points: [
          'The receiver acknowledges that cargo arrival dates are estimates only and may be affected by vessel schedules, port congestion, customs procedures, inspections, or other circumstances beyond Global Business Link\'s control.',
          'The receiver is responsible for clearing the cargo promptly upon arrival and for paying all destination charges, customs duties, taxes, storage fees, inspection fees, and any other charges required by destination authorities unless otherwise agreed in writing.',
          'The receiver must inspect the cargo immediately upon delivery or release. Any visible damage, shortage, or irregularity must be reported before removing the cargo from the terminal or delivery point. Failure to do so may affect the ability to file any claim.',
          'Global Business Link shall not be responsible for damage, delay, loss, or additional charges resulting from customs inspections, port handling, storage, or delays caused by the receiver’s failure to provide documents or complete clearance on time.',
          'If cargo is not collected within the free time allowed by the port or terminal, all storage, demurrage, detention, and related charges shall be the sole responsibility of the receiver.'
        ]
      }
    },
    footer: {
      sitemap: 'Sitemap',
      partners: 'Partners',
      services: 'Services',
      support: 'Support',
      follow: 'Follow us',
      copyright: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookies'
    },
    about: {
      title: 'About Global Business Link',
      subtitle: 'Built on Experience, Driven by Reliability',
      intro: 'Global Business Link is an international freight and logistics company committed to delivering dependable shipping solutions with professionalism, precision, and long-term customer care.',
      location: 'Based in Baltimore, our company has built its reputation through more than two decades of active involvement in global cargo movement, export coordination, and freight logistics. Over the years, we have supported individuals, businesses, and commercial clients by providing practical transportation solutions that simplify international shipping.',
      principle: 'Our work is built around one principle: every shipment matters. Whether moving a single vehicle, multiple containers, commercial goods, or specialized cargo, each shipment receives focused planning and careful execution.',
      desc: 'Global Business Link is an international freight and logistics company committed to delivering dependable shipping solutions with professionalism, precision, and long-term customer care.',
      worldwide: 'Worldwide Shipping',
      worldwideDesc: 'We manage shipments across major international trade routes globally.',
      support: '24/7 Support',
      supportDesc: 'Our team is available around the clock to assist with your logistics needs.',
      more: 'Learn More',
      experience: {
        title: 'Our Experience',
        desc: 'For more than 20 years, Global Business Link has managed shipments across international trade routes connecting the United States with major destinations throughout the Middle East, Africa, and other global markets.',
        practical: 'This long-standing experience has given us practical knowledge of freight operations, cargo preparation, export procedures, terminal coordination, and shipment planning.',
        guidance: 'We understand that international shipping often involves more than booking cargo space. Customers require guidance, clear communication, and dependable solutions when dealing with documentation, timing, and destination requirements. Our role is to make that process easier.'
      },
      whatWeDo: {
        title: 'What We Do',
        desc: 'Global Business Link provides a complete range of logistics services designed to support both personal and commercial cargo needs. We work with shipments of different sizes and cargo types while maintaining the same focus on safety, efficiency, and reliability.',
        services: [
          'Container Shipping',
          'Vehicle Shipping',
          'RORO Cargo',
          'Project Cargo',
          'General Cargo',
          'Warehousing and Storage',
          'Inland Transportation',
          'Export Documentation Support'
        ]
      },
      commitment: {
        title: 'Our Commitment',
        desc: 'We believe successful logistics depends on consistency and trust.',
        points: [
          'Clear communication',
          'Practical solutions',
          'Attention to cargo condition',
          'Careful shipment coordination',
          'Reliable follow-up'
        ],
        footer: 'Our customers return because they know their cargo is handled by people who understand the importance of every shipment.'
      },
      whyChoose: {
        title: 'Why Customers Choose Global Business Link',
        desc: 'Customers choose Global Business Link because we combine experience with direct attention to detail.',
        responsibility: 'We do not treat shipping as a routine transaction. We treat each shipment as a responsibility that requires planning, awareness, and professional execution.',
        relationships: 'Over the years, this approach has helped us build lasting relationships with customers who depend on reliable international freight solutions.'
      },
      vision: {
        title: 'Our Vision',
        desc: 'Our goal is to continue growing while maintaining the same level of service that has defined our work for more than two decades.',
        aim: 'We aim to provide shipping solutions that remain practical, dependable, and responsive to changing customer needs in global transportation.'
      },
      servicesSummary: {
        title: 'Our Services',
        subtitle: 'Comprehensive Shipping and Logistics Solutions',
        desc: 'Global Business Link provides international freight and logistics services designed to support personal shipments, commercial cargo, and specialized transportation requirements with professionalism and attention to detail.',
        experience: 'For more than 20 years, our company has helped customers move cargo efficiently from the United States to destinations across global markets by combining operational experience, practical planning, and dependable service.',
        coordination: 'Every shipment is handled with careful coordination to ensure cargo moves safely, efficiently, and according to customer requirements.'
      }
    }
  },
  ar: {
    dir: 'rtl',
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      about: 'من نحن',
      news: 'الأخبار',
      contact: 'اتصل بنا',
      forms: 'نماذج أونلاين',
      tracking: 'تتبع الشحنات',
      features: 'المميزات',
      gallery: 'المعرض'
    },
    hero: {
      badge: 'حلول لوجستية عالمية',
      cta: 'ابدأ الآن',
      track: 'تتبع الشحنة'
    },
    stats: {
      projects: 'مشاريع\nمكتملة',
      clients: 'عملاء\nراضون',
      experience: 'سنوات من\nالخبرة',
      support: 'دعم\nالطوارئ'
    },
    features: {
      badge: 'جلوبال بيزنس لينك',
      title: 'لماذا تختار GBL؟',
      desc: 'مع أكثر من 20 عاماً من الخبرة، تقدم GBL حلول شحن ومستودعات ولوجستيات موثوقة مصممة خصيصاً لاحتياجات كل عميل.',
      why: 'لماذا تختار GBL؟',
      whyDesc: 'نحن نجمع بين المعرفة الصناعية والخدمة الموثوقة وخيارات النقل المرنة لنقل البضائع بكفاءة وأمان عبر الأسواق الدولية والمحلية.',
      apart: 'ما الذي يميزنا؟',
      apartDesc: 'ما يميزنا هو قدرتنا على تقديم دعم لوجستي كامل في مكان واحد - من الشحن البحري وشحن RORO إلى النقل البري والمستودعات والتتبع.',
      problem: 'المشكلة التي نحلها',
      problemDesc: 'نحن نحل تعقيدات اللوجستيات. تساعد GBL العملاء على نقل البضائع بثقة، في الموعد المحدد، وبدعم مخصص، مع تجنب مشاكل الشحن المكلفة.',
    },
    services: {
      badge: 'ماذا نفعل',
      title: 'خدماتنا اللوجستية',
      desc: 'تقدم جلوبال بيزنس لينك مجموعة كاملة من الخدمات اللوجستية المصممة لدعم احتياجات الشحن الشخصية والتجارية.',
      viewMore: 'عرض جميع الخدمات',
      summary: 'توفر جلوبال بيزنس لينك خدمات الشحن والخدمات اللوجستية الدولية المصممة لدعم الشحنات الشخصية والبضائع التجارية ومتطلبات النقل المتخصصة باحترافية واهتمام بالتفاصيل. لأكثر من 20 عاماً، ساعدت شركتنا العملاء على نقل البضائع بكفاءة من الولايات المتحدة إلى وجهات عبر الأسواق العالمية من خلال الجمع بين الخبرة التشغيلية والتخطيط العملي والخدمة الموثوقة. يتم التعامل مع كل شحنة بتنسيق دقيق لضمان تحرك البضائع بأمان وكفاءة ووفقاً لمتطلبات العميل.'
    },
    reviews: {
      badge: 'تم تقييمه بـ 4.9 من قبل أكثر من 12 ألف مستخدم',
      title: 'كلمات ثناء من الآخرين\nحول تواجدنا.'
    },
    contact: {
      badge: 'تواصل معنا',
      title: 'هل أنت مستعد لتحسين سلسلة التوريد الخاصة بك؟',
      desc: 'اتصل بخبرائنا اللوجستيين اليوم للحصول على حل مخصص يناسب احتياجات عملك.',
      info: {
        call: 'اتصل بنا مباشرة',
        email: 'أرسل بريداً إلكترونياً'
      },
      form: {
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        message: 'رسالتك',
        submit: 'إرسال الرسالة',
        placeholderName: 'جون دو',
        placeholderEmail: 'john@example.com',
        placeholderMessage: 'كيف يمكننا مساعدتك اليوم؟',
        selectService: 'اختر خدمة...'
      }
    },
    sections: {
      shipper: 'هل أنت\nشاحن؟',
      receiver: 'هل أنت\nمستلم؟',
      checkNow: 'تحقق الآن',
      carriers: 'متصل بكبرى شركات الشحن البحري',
      shipperTitle: 'معلومات هامة للشاحنين - المركبات الشخصية والأدوات المنزلية',
      shipperRequirements: {
        title: 'متطلبات المركبة 🚗',
        points: [
          'يجب أن تكون المركبة في حالة صالحة للعمل ما لم يتمت الموافقة على خلاف ذلك.',
          'يجب ألا يتجاوز مستوى الوقود 1/4 الخزان.',
          'يجب تعطيل أنظمة الإنذار.',
          'يجب أن تكون المركبة نظيفة من الداخل والخارج للفحص.',
          'تقديم الملكية الأصلية ونسخة من الهوية الشخصية.',
          'يجب توثيق أي أضرار موجودة قبل التسليم.'
        ]
      },
      householdGoods: {
        title: 'الأدوات المنزلية داخل المركبة 📦',
        points: [
          'يتم تحميل الأدوات المنزلية على مسؤولية الشاحن الخاصة.',
          'يجب تعبئة العناصر بشكل آمن لمنع حركتها أثناء النقل.',
          'لا تضع العناصر فوق مستوى النافذة.',
          'لا يسمح بالمواد المحظورة أو الخطرة أو القابلة للاشتعال أو غير القانونية.',
          'يجب تأمين العناصر الثقيلة لتجنب الانزلاق.',
          'قد تقوم سلطات الجمارك بفحص المحتويات عند المنشأ أو الوجهة.'
        ]
      },
      shippingRisks: {
        title: 'مخاطر الشحن الهامة ⚠️',
        points: [
          'قد تنزلق المركبات والأدوات المنزلية أثناء النقل البحري رغم التحميل والتأمين الدقيق.',
          'يمكن أن تؤثر عمليات مناولة الموانئ وحركة السفن ومناولة الحاويات على الشحنة.',
          'قد تحدث حركة طفيفة أو تلامس في الحاويات المحملة بإحكام.'
        ]
      },
      customs: {
        title: 'الجمارك والوثائق 📄',
        points: [
          'الشاحن مسؤول عن الجرد الدقيق للأدوات المنزلية.',
          'رسوم الجمارك في الوجهة والرسوم والضرائب وعمليات التفتيش هي مسؤولية العميل ما لم يتم الاتفاق على خلاف ذلك.',
          'قد يحدث تأخير إذا كانت الوثائق غير مكتملة.'
        ]
      },
      insurance: {
        title: 'التأمين 💼',
        points: [
          'يوصى بشدة بالتأمين البحري.',
          'مسؤولية الناقل محدودة بموجب شروط الشحن.'
        ]
      },
      delivery: {
        title: 'التسليم والوصول 🚢',
        points: [
          'أوقات العبور هي تقديرات وقد تتغير.',
          'قد يتم فرض رسوم تخزين إذا لم يتم استلام الشحنة على الفور في الوجهة.'
        ]
      },
      receiverAcknowledgment: {
        title: 'إقرار المستلم',
        points: [
          'يقر المستلم بأن تواريخ وصول الشحنة هي تقديرات فقط وقد تتأثر بجداول السفن أو ازدحام الموانئ أو الإجراءات الجمركية أو عمليات التفتيش أو ظروف أخرى خارجة عن سيطرة جلوبال بيزنس لينك.',
          'المستلم مسؤول عن تخليص الشحنة فور وصولها ودفع جميع رسوم الوجهة والرسوم الجمركية والضرائب ورسوم التخزين ورسوم التفتيش وأي رسوم أخرى تطلبها سلطات الوجهة ما لم يتم الاتفاق على خلاف ذلك كتابةً.',
          'يجب على المستلم فحص الشحنة فور التسليم أو الاستلام. يجب الإبلاغ عن أي ضرر مرئي أو نقص أو مخالفة قبل إخراج الشحنة من المحطة أو نقطة التسليم. قد يؤثر الفشل في القيام بذلك على القدرة على تقديم أي مطالبة.',
          'لن تكون جلوبال بيزنس لينك مسؤولة عن الضرر أو التأخير أو الخسارة أو الرسوم الإضافية الناتجة عن عمليات التفتيش الجمركي أو مناولة الموانئ أو التخزين أو التأخير الناتج عن فشل المستلم في تقديم الوثائق أو إكمال التخليص في الوقت المحدد.',
          'إذا لم يتم استلام الشحنة خلال وقت الإعفاء المسموح به من قبل الميناء أو المحطة، فإن جميع رسوم التخزين والغرامات والتأخير والرسوم ذات الصلة تكون على المسؤولية الكاملة للمستلم.'
        ]
      }
    },
    footer: {
      sitemap: 'خريطة الموقع',
      partners: 'الشركاء',
      services: 'الخدمات',
      support: 'الدعم',
      follow: 'تابعنا',
      copyright: 'جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      cookies: 'ملفات تعريف الارتباط'
    },
    about: {
      title: 'حول جلوبال بيزنس لينك',
      subtitle: 'مبني على الخبرة، مدفوع بالموثوقية',
      intro: 'جلوبال بيزنس لينك هي شركة دولية للشحن والخدمات اللوجستية ملتزمة بتقديم حلول شحن موثوقة باحترافية ودقة ورعاية عملاء طويلة الأمد.',
      location: 'يقع مقر شركتنا في بالتيمور، وقد بنت سمعتها من خلال أكثر من عقدين من المشاركة النشطة في حركة الشحن العالمية، وتنسيق الصادرات، والخدمات اللوجستية للشحن. على مر السنين، دعمنا الأفراد والشركات والعملاء التجاريين من خلال توفير حلول نقل عملية تبسط الشحن الدولي.',
      principle: 'عملنا مبني على مبدأ واحد: كل شحنة مهمة. سواء كان نقل مركبة واحدة، أو حاويات متعددة، أو بضائع تجارية، أو شحنات متخصصة، فإن كل شحنة تتلقى تخطيطاً مركزاً وتنفيذاً دقيقاً.',
      desc: 'جلوبال بيزنس لينك هي شركة دولية للشحن والخدمات اللوجستية ملتزمة بتقديم حلول شحن موثوقة باحترافية ودقة ورعاية عملاء طويلة الأمد.',
      worldwide: 'شحن عالمي',
      worldwideDesc: 'ندير الشحنات عبر طرق التجارة الدولية الرئيسية عالمياً.',
      support: 'دعم 24/7',
      supportDesc: 'فريقنا متاح على مدار الساعة للمساعدة في احتياجاتك اللوجستية.',
      more: 'اقرأ المزيد',
      experience: {
        title: 'خبرتنا',
        desc: 'لأكثر من 20 عاماً، أدارت جلوبال بيزنس لينك شحنات عبر طرق التجارة الدولية التي تربط الولايات المتحدة بالوجهات الرئيسية في جميع أنحاء الشرق الأوسط وأفريقيا والأسواق العالمية الأخرى.',
        practical: 'لقد منحتنا هذه الخبرة الطويلة معرفة عملية بعمليات الشحن، وإعداد البضائع، وإجراءات التصدير، وتنسيق المحطات، وتخطيط الشحنات.',
        guidance: 'نحن ندرك أن الشحن الدولي غالباً ما يتضمن أكثر من مجرد حجز مساحة للشحن. يحتاج العملاء إلى التوجيه والتواصل الواضح والحلول الموثوقة عند التعامل مع الوثائق والتوقيت ومتطلبات الوجهة. دورنا هو جعل هذه العملية أسهل.'
      },
      whatWeDo: {
        title: 'ماذا نفعل',
        desc: 'توفر جلوبال بيزنس لينك مجموعة كاملة من الخدمات اللوجستية المصممة لدعم احتياجات الشحن الشخصية والتجارية.',
        services: [
          'شحن الحاويات',
          'شحن المركبات',
          'شحن RORO',
          'شحن المشاريع',
          'الشحن العام',
          'المستودعات والتخزين',
          'النقل البري',
          'دعم وثائق التصدير'
        ]
      },
      commitment: {
        title: 'التزامنا',
        desc: 'نحن نؤمن بأن اللوجستيات الناجحة تعتمد على الاتساق والثقة.',
        points: [
          'تواصل واضح',
          'حلول عملية',
          'الاهتمام بحالة الشحنة',
          'تنسيق دقيق للشحنات',
          'متابعة موثوقة'
        ],
        footer: 'يعود عملاؤنا لأنهم يعرفون أن شحناتهم يتم التعامل معها من قبل أشخاص يفهمون أهمية كل شحنة.'
      },
      whyChoose: {
        title: 'لماذا يختار العملاء جلوبال بيزنس لينك',
        desc: 'يختار العملاء جلوبال بيزنس لينك لأننا نجمع بين الخبرة والاهتمام المباشر بالتفاصيل.',
        responsibility: 'نحن لا نتعامل مع الشحن كمعاملة روتينية. نحن نعامل كل شحنة كمسؤولية تتطلب التخطيط والوعي والتنفيذ الاحترافي.',
        relationships: 'على مر السنين، ساعدنا هذا النهج في بناء علاقات دائمة مع العملاء الذين يعتمدون على حلول الشحن الدولي الموثوقة.'
      },
      vision: {
        title: 'رؤيتنا',
        desc: 'هدفنا هو مواصلة النمو مع الحفاظ على نفس مستوى الخدمة الذي ميز عملنا لأكثر من عقدين.',
        aim: 'نهدف إلى تقديم حلول شحن تظل عملية وموثوقة ومستجيبة لاحتياجات العملاء المتغيرة في النقل العالمي.'
      },
      servicesSummary: {
        title: 'خدماتنا',
        subtitle: 'حلول شحن ولوجستيات شاملة',
        desc: 'توفر جلوبال بيزنس لينك خدمات الشحن والخدمات اللوجستية الدولية المصممة لدعم الشحنات الشخصية والبضائع التجارية ومتطلبات النقل المتخصصة باحترافية واهتمام بالتفاصيل.',
        experience: 'لأكثر من 20 عاماً، ساعدت شركتنا العملاء على نقل البضائع بكفاءة من الولايات المتحدة إلى وجهات عبر الأسواق العالمية من خلال الجمع بين الخبرة التشغيلية والتخطيط العملي والخدمة الموثوقة.',
        coordination: 'يتم التعامل مع كل شحنة بتنسيق دقيق لضمان تحرك البضائع بأمان وكفاءة ووفقاً لمتطلبات العميل.'
      }
    }
  },
  es: {
    dir: 'ltr',
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Nosotros',
      news: 'Noticias',
      contact: 'Contacto',
      forms: 'Formularios',
      tracking: 'Rastreo',
      features: 'Características',
      gallery: 'Galería'
    },
    hero: {
      badge: 'Soluciones Logísticas Globales',
      cta: 'Comenzar',
      track: 'Rastrear Envío'
    },
    stats: {
      projects: 'Proyectos\nCompletados',
      clients: 'Clientes\nSatisfechos',
      experience: 'Años de\nExperiencia',
      support: 'Soporte de\nEmergencia'
    },
    features: {
      badge: 'Global Business Link',
      title: '¿Por qué elegir GBL?',
      desc: 'Con más de 20 años de experiencia, GBL ofrece soluciones confiables de envío, almacenamiento y logística adaptadas a las necesidades de cada cliente.',
      why: '¿Por qué elegir GBL?',
      whyDesc: 'Combinamos el conocimiento de la industria, un servicio confiable y opciones de transporte flexibles para mover la carga de manera eficiente y segura.',
      apart: '¿Qué nos diferencia?',
      apartDesc: 'Lo que nos diferencia es nuestra capacidad para brindar soporte logístico completo en un solo lugar, desde flete marítimo hasta almacenamiento y rastreo.',
      problem: 'El problema que resolvemos',
      problemDesc: 'Resolvemos la complejidad de la logística. GBL ayuda a los clientes a mover mercancías con confianza, a tiempo y con soporte personalizado.',
    },
    services: {
      badge: 'Lo Que Hacemos',
      title: 'Nuestros Servicios Logísticos',
      desc: 'Global Business Link ofrece una gama completa de servicios logísticos diseñados para satisfacer las necesidades de carga tanto personales como comerciales.',
      viewMore: 'Ver todos los servicios',
      summary: 'Global Business Link ofrece servicios internacionales de carga y logística diseñados para respaldar envíos personales, carga comercial y requisitos de transporte especializados con profesionalismo y atención al detalle. Durante más de 20 años, nuestra empresa ha ayudado a los clientes a mover carga de manera eficiente desde los Estados Unidos a destinos en los mercados globales combinando experiencia operativa, planificación práctica y servicio confiable. Cada envío se maneja con una coordinación cuidadosa para garantizar que la carga se mueva de manera segura, eficiente y de acuerdo con los requisitos del cliente.'
    },
    reviews: {
      badge: 'Calificado con 4.9 por más de 12k usuarios',
      title: 'Palabras de elogio de otros\nsobre nuestra presencia.'
    },
    contact: {
      badge: 'Ponte en contacto',
      title: '¿Listo para optimizar su cadena de suministro?',
      desc: 'Contacte a nuestros expertos en logística hoy para una solución personalizada adaptada a sus necesidades comerciales.',
      info: {
        call: 'Llámenos directamente',
        email: 'Enviar un correo'
      },
      form: {
        name: 'Nombre Completo',
        email: 'Correo Electrónico',
        message: 'Tu Mensaje',
        submit: 'Enviar Mensaje',
        placeholderName: 'Juan Pérez',
        placeholderEmail: 'juan@ejemplo.com',
        placeholderMessage: '¿Cómo podemos ayudarte hoy?',
        selectService: 'Selecciona un servicio...'
      }
    },
    sections: {
      shipper: '¿Eres un\nRemitente?',
      receiver: '¿Eres un\nDestinatario?',
      checkNow: 'Consultar Ahora',
      carriers: 'Conectado con las principales navieras',
      shipperTitle: 'Información Importante para Remitentes – Vehículo Personal y Menaje de Casa',
      shipperRequirements: {
        title: 'Requisitos del Vehículo 🚗',
        points: [
          'El vehículo debe estar en condiciones de funcionamiento a menos que se apruebe lo contrario.',
          'El nivel de combustible no debe exceder 1/4 del tanque.',
          'Los sistemas de alarma deben estar desactivados.',
          'El vehículo debe estar limpio por dentro y por fuera para la inspección.',
          'Proporcionar título original y copia de identificación con foto.',
          'Cualquier daño existente debe documentarse antes de la entrega.'
        ]
      },
      householdGoods: {
        title: 'Menaje de Casa dentro del Vehículo 📦',
        points: [
          'El menaje de casa se carga bajo el propio riesgo del remitente.',
          'Los artículos deben empacarse de forma segura para evitar movimientos durante el tránsito.',
          'No coloque artículos por encima del nivel de la ventana.',
          'No se permiten artículos prohibidos, peligrosos, inflamables o ilegales.',
          'Los artículos pesados deben asegurarse para evitar desplazamientos.',
          'Las autoridades aduaneras pueden inspeccionar el contenido en el origen o destino.'
        ]
      },
      shippingRisks: {
        title: 'Riesgos de Envío Importantes ⚠️',
        points: [
          'Los vehículos y el menaje de casa pueden desplazarse durante el tránsito oceánico a pesar de la carga y el aseguramiento cuidadosos.',
          'El manejo portuario, el movimiento del barco y el manejo de contenedores pueden afectar la carga.',
          'Pueden ocurrir movimientos menores o contacto en contenedores cargados herméticamente.'
        ]
      },
      customs: {
        title: 'Aduanas y Documentación 📄',
        points: [
          'El remitente es responsable de un inventario preciso del menaje de casa.',
          'Los cargos de aduana de destino, aranceles, impuestos e inspecciones son responsabilidad del cliente a menos que se acuerde lo contrario.',
          'Pueden ocurrir retrasos si los documentos están incompletos.'
        ]
      },
      insurance: {
        title: 'Seguro 💼',
        points: [
          'Se recomienda encarecidamente el seguro marítimo.',
          'La responsabilidad del transportista está limitada según los términos de envío.'
        ]
      },
      delivery: {
        title: 'Entrega y Llegada 🚢',
        points: [
          'Los tiempos de tránsito son estimaciones y pueden cambiar.',
          'Pueden aplicarse cargos por almacenamiento si la carga no se recoge puntualmente en el destino.'
        ]
      },
      receiverAcknowledgment: {
        title: 'Reconocimiento del Destinatario',
        points: [
          'El destinatario reconoce que las fechas de llegada de la carga son solo estimaciones y pueden verse afectadas por los horarios de los barcos, la congestión portuaria, los procedimientos aduaneros, las inspecciones u otras circunstancias fuera del control de Global Business Link.',
          'El destinatario es responsable de liberar la carga puntualmente a su llegada y de pagar todos los cargos de destino, aranceles aduaneros, impuestos, tarifas de almacenamiento, tarifas de inspección y cualquier otro cargo requerido por las autoridades de destino a menos que se acuerde lo contrario por escrito.',
          'El destinatario debe inspeccionar la carga inmediatamente después de la entrega o liberación. Cualquier daño visible, faltante o irregularidad debe informarse antes de retirar la carga de la terminal o punto de entrega. No hacerlo puede afectar la capacidad de presentar cualquier reclamo.',
          'Global Business Link no será responsable por daños, retrasos, pérdidas o cargos adicionales resultantes de inspecciones aduaneras, manejo portuario, almacenamiento o retrasos causados por la falta del destinatario de proporcionar documentos o completar el despacho a tiempo.',
          'Si la carga no se recoge dentro del tiempo libre permitido por el puerto o la terminal, todos los cargos de almacenamiento, demora, detención y cargos relacionados serán responsabilidad exclusiva del destinatario.'
        ]
      }
    },
    footer: {
      sitemap: 'Mapa del sitio',
      partners: 'Socios',
      services: 'Servicios',
      support: 'Soporte',
      follow: 'Síguenos',
      copyright: 'Todos los derechos reservados.',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      cookies: 'Cookies'
    },
    about: {
      title: 'Acerca de Global Business Link',
      subtitle: 'Basado en la Experiencia, Impulsado por la Confiabilidad',
      intro: 'Global Business Link es una empresa internacional de carga y logística comprometida a brindar soluciones de envío confiables con profesionalismo, precisión y atención al cliente a largo plazo.',
      location: 'Con sede en Baltimore, nuestra empresa ha construido su reputación a través de más de dos décadas de participación activa en el movimiento global de carga, la coordinación de exportaciones y la logística de carga. A lo largo de los años, hemos apoyado a individuos, empresas y clientes comerciales brindando soluciones de transporte prácticas que simplifican el envío internacional.',
      principle: 'Nuestro trabajo se basa en un principio: cada envío importa. Ya sea que se trate de un solo vehículo, varios contenedores, bienes comerciales o carga especializada, cada envío recibe una planificación enfocada y una ejecución cuidadosa.',
      desc: 'Global Business Link es una empresa internacional de carga y logística comprometida a brindar soluciones de envío confiables con profesionalismo, precisión y atención al cliente a largo plazo.',
      worldwide: 'Envío Mundial',
      worldwideDesc: 'Gestionamos envíos a través de las principales rutas comerciales internacionales a nivel mundial.',
      support: 'Soporte 24/7',
      supportDesc: 'Nuestro equipo está disponible las 24 horas para ayudar con sus necesidades logísticas.',
      more: 'Saber más',
      experience: {
        title: 'Nuestra Experiencia',
        desc: 'Durante más de 20 años, Global Business Link ha gestionado envíos a través de rutas comerciales internacionales que conectan a los Estados Unidos con los principales destinos en todo el Medio Oriente, África y otros mercados globales.',
        practical: 'Esta larga trayectoria nos ha brindado conocimientos prácticos sobre operaciones de carga, preparación de carga, procedimientos de exportación, coordinación de terminales y planificación de envíos.',
        guidance: 'Entendemos que el envío internacional a menudo implica más que reservar espacio de carga. Los clientes requieren orientación, comunicación clara y soluciones confiables al tratar con documentación, tiempos y requisitos de destino. Nuestro papel es facilitar ese proceso.'
      },
      whatWeDo: {
        title: 'Qué Hacemos',
        desc: 'Global Business Link ofrece una gama completa de servicios logísticos diseñados para satisfacer las necesidades de carga tanto personales como comerciales.',
        services: [
          'Envío de Contenedores',
          'Envío de Vehículos',
          'Carga RORO',
          'Carga de Proyecto',
          'Carga General',
          'Almacenamiento y Depósito',
          'Transporte Terrestre',
          'Soporte de Documentación de Exportación'
        ]
      },
      commitment: {
        title: 'Nuestro Compromiso',
        desc: 'Creemos que la logística exitosa depende de la consistencia y la confianza.',
        points: [
          'Comunicación clara',
          'Soluciones prácticas',
          'Atención al estado de la carga',
          'Coordinación cuidadosa del envío',
          'Seguimiento confiable'
        ],
        footer: 'Nuestros clientes regresan porque saben que su carga es manejada por personas que entienden la importancia de cada envío.'
      },
      whyChoose: {
        title: 'Por Qué los Clientes Eligen Global Business Link',
        desc: 'Los clientes eligen Global Business Link porque combinamos la experiencia con la atención directa al detalle.',
        responsibility: 'No tratamos el envío como una transacción de rutina. Tratamos cada envío como una responsabilidad que requiere planificación, conciencia y ejecución profesional.',
        relationships: 'A lo largo de los años, este enfoque nos ha ayudado a construir relaciones duraderas con clientes que dependen de soluciones de carga internacional confiables.'
      },
      vision: {
        title: 'Nuestra Visión',
        desc: 'Nuestro objetivo es seguir creciendo manteniendo el mismo nivel de servicio que ha definido nuestro trabajo durante más de dos décadas.',
        aim: 'Nuestro objetivo es proporcionar soluciones de envío que sigan siendo prácticas, confiables y receptivas a las necesidades cambiantes de los clientes en el transporte global.'
      },
      servicesSummary: {
        title: 'Nuestros Servicios',
        subtitle: 'Soluciones Integrales de Envío y Logística',
        desc: 'Global Business Link ofrece servicios internacionales de carga y logística diseñados para respaldar envíos personales, carga comercial y requisitos de transporte especializados con profesionalismo y atención al detalle.',
        experience: 'Durante más de 20 años, nuestra empresa ha ayudado a los clientes a mover carga de manera eficiente desde los Estados Unidos a destinos en los mercados globales combinando experiencia operativa, planificación práctica y servicio confiable.',
        coordination: 'Cada envío se maneja con una coordinación cuidadosa para garantizar que la carga se mueva de manera segura, eficiente y de acuerdo con los requisitos del cliente.'
      }
    }
  }
};

export const SERVICES_DATA = [
  {
    id: 1,
    title: {
      en: "Container\nShipping",
      ar: "شحن\nالحاويات",
      mx: "Envío de\nContenedores"
    },
    description: {
      en: "Secure Container Transportation for Personal and Commercial Cargo. We provide shipping solutions using 20-foot, 40-foot, and 40-foot high cube containers, planned carefully to maximize space and safety.",
      ar: "حلول شحن الحاويات الكاملة (FCL) وأقل من حمولة حاوية (LCL) آمنة وفعالة في جميع أنحاء العالم.",
      mx: "Soluciones de envío de carga de contenedor completo (FCL) y carga inferior a un contenedor (LCL) seguras y eficientes en todo el mundo."
    },
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800&auto=format&fit=crop",
    shortTitle: { en: "Container", ar: "حاويات", mx: "Contenedor" },
    label: { en: "Container Shipping", ar: "شحن الحاويات", mx: "Envío de Contenedores" },
    slug: "container-shipping",
    details: {
      en: {
        subtitle: "Secure Container Transportation for Personal and Commercial Cargo",
        intro: "Container shipping remains one of the most reliable methods for international cargo transport.",
        sections: [
          {
            text: "We provide shipping solutions using:",
            bullets: ["20-foot containers", "40-foot containers", "40-foot high cube containers"]
          },
          {
            text: "Container shipments are planned carefully to maximize available space while maintaining cargo safety throughout ocean transit.\nOur team supports container loading for:",
            bullets: ["Vehicles", "Household goods", "Commercial merchandise", "Machinery", "Consolidated cargo"]
          },
          {
            text: "We also assist customers in preparing cargo correctly before loading to reduce risk during transport."
          }
        ]
      }
    }
  },
  {
    id: 2,
    title: {
      en: "Vehicle\nShipping",
      ar: "شحن\nالمركبات",
      mx: "Envío de\nVehículos"
    },
    description: {
      en: "Professional Vehicle Export Services for sedans, SUVs, pickup trucks, luxury, and commercial vehicles. Each vehicle is loaded using secure strapping systems to minimize movement.",
      ar: "نقل احترافي للسيارات والشاحنات والآلات الثقيلة مع معالجة ورعاية متخصصة.",
      mx: "Transporte profesional para automóviles, camiones y maquinaria pesada con manejo y cuidado especializados."
    },
    image: "https://i.ibb.co/KccjbKS2/Vehicle-shipping.jpg",
    shortTitle: { en: "Vehicle", ar: "مركبات", mx: "Vehículo" },
    label: { en: "Vehicle Shipping", ar: "شحن المركبات", mx: "Envío de Vehículos" },
    slug: "vehicle-shipping",
    details: {
      en: {
        subtitle: "Professional Vehicle Export Services",
        intro: "Vehicle shipping is one of our core specialties.",
        sections: [
          {
            text: "We handle exports for:",
            bullets: ["Sedans", "SUVs", "Pickup trucks", "Luxury vehicles", "Commercial vehicles"]
          },
          {
            text: "Each vehicle is loaded using secure strapping systems and carefully positioned inside containers to minimize movement during shipment.\nOur loading methods focus on:",
            bullets: ["Safe securing", "Efficient use of space", "Protection of vehicle condition"]
          }
        ]
      }
    }
  },
  {
    id: 3,
    title: {
      en: "RORO\nCargo",
      ar: "شحن\nRORO",
      mx: "Carga\nRORO"
    },
    description: {
      en: "Efficient Roll-On / Roll-Off transport for operable vehicles. Vehicles are driven directly onto specialized vessels, suitable for passenger vehicles, trucks, and commercial rolling equipment.",
      ar: "شحن الـ Roll-on/Roll-off للبضائع ذات العجلات، مما يوفر طريقة نقل فعالة ومنخفضة التكلفة.",
      mx: "Envío Roll-on/Roll-off para carga con ruedas, que ofrece un método de transporte rentable y eficiente."
    },
    image: "https://i.ibb.co/cXtd4hQG/RORO.jpg",
    shortTitle: { en: "RORO", ar: "RORO", mx: "RORO" },
    label: { en: "RORO Cargo", ar: "شحن RORO", mx: "Carga RORO" },
    slug: "roro-shipping",
    details: {
      en: {
        subtitle: "Roll-On / Roll-Off Vehicle Transport",
        intro: "For operable vehicles, RORO shipping provides an efficient international transport solution.\nVehicles are driven directly onto specialized vessels and secured for sea transport.",
        sections: [
          {
            text: "This option is often suitable for:",
            bullets: ["Passenger vehicles", "Trucks", "Commercial rolling equipment"]
          },
          {
            text: "We guide customers on vessel schedules, port procedures, and destination handling requirements."
          }
        ]
      }
    }
  },
  {
    id: 4,
    title: {
      en: "Project\nCargo",
      ar: "شحن\nالمشاريع",
      mx: "Carga de\nProyecto"
    },
    description: {
      en: "Specialized handling for oversized and heavy cargo, including heavy equipment and industrial machinery. Each project is evaluated individually for optimal loading and transport planning.",
      ar: "لوجستيات متخصصة للبضائع الضخمة والثقيلة والمعقدة التي تتطلب تخطيطاً وتنفيذاً مخصصاً.",
      mx: "Logística especializada para carga de gran tamaño, pesada y compleja que requiere planificación y ejecución personalizadas."
    },
    image: "https://i.ibb.co/8g1gr2Gy/project-cargo.jpg",
    shortTitle: { en: "Project", ar: "مشاريع", mx: "Proyecto" },
    label: { en: "Project Cargo", ar: "شحن المشاريع", mx: "Carga de Proyecto" },
    slug: "project-cargo",
    details: {
      en: {
        subtitle: "Specialized Handling for Oversized and Heavy Cargo",
        intro: "Project cargo requires detailed preparation and coordination.",
        sections: [
          {
            text: "We manage shipments involving:",
            bullets: ["Heavy equipment", "Industrial machinery", "Oversized cargo", "Special transport requirements"]
          },
          {
            text: "Each project shipment is evaluated individually to determine loading method, port handling requirements, and transport planning."
          }
        ]
      }
    }
  },
  {
    id: 5,
    title: {
      en: "General\nCargo",
      ar: "الشحن\nالعام",
      mx: "Carga\nGeneral"
    },
    description: {
      en: "Flexible freight for commercial goods, equipment, and packaged cargo. We help customers prepare shipments correctly to improve loading efficiency and protect cargo during transit.",
      ar: "نقل موثوق لمجموعة واسعة من السلع التجارية والأغراض الشخصية عبر الطرق العالمية.",
      mx: "Transporte confiable para una amplia variedad de bienes comerciales y artículos personales a través de rutas globales."
    },
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop",
    shortTitle: { en: "General", ar: "عام", mx: "General" },
    label: { en: "General Cargo", ar: "الشحن العام", mx: "Carga General" },
    slug: "general-cargo",
    details: {
      en: {
        subtitle: "Flexible Freight for Commercial Goods",
        intro: "Global Business Link handles general cargo shipments for businesses and exporters requiring reliable freight movement.",
        sections: [
          {
            text: "This includes:",
            bullets: ["Commercial products", "Equipment", "Packaged cargo", "Consolidated freight"]
          },
          {
            text: "We help customers prepare shipments correctly to improve loading efficiency and protect cargo during transit."
          }
        ]
      }
    }
  },
  {
    id: 6,
    title: {
      en: "Warehouse\n& Storage",
      ar: "المستودعات\nوالتخزين",
      mx: "Almacén y\nAlmacenamiento"
    },
    description: {
      en: "Secure cargo staging, temporary storage, and shipment organization before export. Our warehousing solutions ensure your cargo is prepared properly before port delivery.",
      ar: "مرافق تخزين آمنة وقابلة للتطوير وحديثة مجهزة للتعامل مع جميع احتياجات المخزون والتخزين الخاصة بك.",
      mx: "Instalaciones de almacenamiento seguras, escalables y modernas equipadas para manejar todas sus necesidades de inventario y almacenamiento."
    },
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800&auto=format&fit=crop",
    shortTitle: { en: "Storage", ar: "تخزين", mx: "Almacén" },
    label: { en: "Warehouse", ar: "المستودع", mx: "Almacén" },
    slug: "warehousing-and-storage",
    details: {
      en: {
        subtitle: "Cargo Holding and Preparation Before Export",
        intro: "Warehousing services support customers who need secure cargo staging before shipment.",
        sections: [
          {
            text: "Our warehousing solutions include:",
            bullets: ["Temporary storage", "Shipment organization", "Cargo preparation before loading"]
          },
          {
            text: "This allows shipments to be prepared properly before port delivery."
          }
        ]
      }
    }
  },
  {
    id: 7,
    title: {
      en: "Inland\nTransportation",
      ar: "النقل\nالبري",
      mx: "Transporte\nTerrestre"
    },
    description: {
      en: "Efficient inland pickup and port delivery coordination for vehicles and cargo, simplifying shipment preparation and ensuring timely terminal delivery.",
      ar: "خدمات شحن بري وسكك حديدية فعالة لحركة البضائع الداخلية والمحلية وعبر الحدود.",
      mx: "Servicios eficientes de camiones y ferrocarriles para el movimiento de carga terrestre nacional y transfronterizo."
    },
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop",
    shortTitle: { en: "Inland", ar: "بري", mx: "Terrestre" },
    label: { en: "Inland Transport", ar: "النقل البري", mx: "Transporte Terrestre" },
    slug: "inland-transportation",
    details: {
      en: {
        subtitle: "Inland Pickup and Port Delivery Coordination",
        intro: "We arrange inland transport to move cargo from pickup location to export terminal efficiently.",
        sections: [
          {
            text: "This includes:",
            bullets: ["Vehicle pickup", "Cargo transport to port", "Coordination with terminal delivery schedules"]
          },
          {
            text: "This helps simplify shipment preparation for customers."
          }
        ]
      }
    }
  },
  {
    id: 8,
    title: {
      en: "Export\nDocumentation",
      ar: "وثائق\nالتصدير",
      mx: "Documentación\nde Exportación"
    },
    description: {
      en: "Expert guidance through shipping documentation requirements, assisting with shipping instructions and required export documents for smooth compliance.",
      ar: "دعم خبير لجميع الأوراق اللازمة للتصدير، مما يضمن الامتثال والتخليص الجمركي السلس.",
      mx: "Soporte experto para todos los trámites de exportación necesarios, garantizando el cumplimiento y un despacho de aduana sin problemas."
    },
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
    shortTitle: { en: "Docs", ar: "وثائق", mx: "Docs" },
    label: { en: "Documentation", ar: "الوثائق", mx: "Documentación" },
    slug: "export-documentation",
    details: {
      en: {
        subtitle: "Guidance Through Shipping Documentation",
        intro: "International shipping requires accurate paperwork.\nWe assist customers with export documentation requirements to help shipments move smoothly through export procedures.",
        sections: [
          {
            text: "This includes support related to:",
            bullets: ["Shipping instructions", "Required export documents", "Cargo preparation details"]
          }
        ]
      }
    }
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    text: {
      en: "Global Business Link provided an amazing experience from start to finish. The custom logistics solutions they built are perfect for our needs.",
      ar: "قدمت جلوبال بيزنس لينك تجربة مذهلة من البداية إلى النهاية. الحلول اللوجستية المخصصة التي بنوها مثالية لاحتياجاتنا.",
      mx: "Global Business Link brindó una experiencia increíble de principio a fin. Las soluciones logísticas personalizadas que crearon son perfectas para nuestras necesidades."
    },
    name: "Karly Mintz",
    title: { en: "Marketing Coordinator", ar: "منسق تسويق", mx: "Coordinador de Marketing" },
    company: "Matrix New World",
    logo: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=100&auto=format&fit=crop",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
  },
  {
    id: 2,
    text: {
      en: "The team was great to work with and super efficient and professional in delivering a quality logistics plan for our global distribution!",
      ar: "كان الفريق رائعًا في التعامل معه وفعالًا للغاية ومحترفًا في تقديم خطة لوجستية عالية الجودة لتوزيعنا العالمي!",
      mx: "¡Fue genial trabajar con el equipo y fueron súper eficientes y profesionales al entregar un plan logístico de calidad para nuestra distribución global!"
    },
    name: "Connie Wong",
    title: { en: "Director of Marketing", ar: "مدير التسويق", mx: "Director de Marketing" },
    company: "GrowthPath",
    logo: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=100&auto=format&fit=crop",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
  },
  {
    id: 3,
    text: {
      en: "We hired Global Business Link as an A-to-Z solution for our brand launch. They offer high-end professional planning and executions.",
      ar: "استأجرنا جلوبال بيزنس لينك كحل شامل لإطلاق علامتنا التجارية. إنهم يقدمون تخطيطًا وتنفيذًا احترافيًا عالي المستوى.",
      mx: "Contratamos a Global Business Link como una solución de la A a la Z para el lanzamiento de nuestra marca. Ofrecen planificación y ejecuciones profesionales de alta gama."
    },
    name: "Eyal Azoulay",
    title: { en: "CO-FOUNDER AND CEO", ar: "المؤسس المشارك والمدير التنفيذي", mx: "COFUNDADOR Y CEO" },
    company: "Rollink",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=100&auto=format&fit=crop",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
  },
  {
    id: 4,
    text: {
      en: "The Global Business Link team was great. Their overall quality of work is second to none. They handled our complex shipping needs with ease.",
      ar: "كان فريق جلوبال بيزنس لينك رائعًا. جودة عملهم الإجمالية لا يعلى عليها. لقد تعاملوا مع احتياجات الشحن المعقدة لدينا بسهولة.",
      mx: "El equipo de Global Business Link fue genial. Su calidad de trabajo en general es insuperable. Manejaron nuestras complejas necesidades de envío con facilidad."
    },
    name: "Stephen Dressner",
    title: { en: "Marketing Director", ar: "مدير تسويق", mx: "Director de Marketing" },
    company: "BeniGro",
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=100&auto=format&fit=crop",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
  }
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: {
      en: "Full service in\nfreight transport",
      ar: "خدمة كاملة في\nنقل البضائع",
      mx: "Servicio completo en\ntransporte de carga"
    },
    description: {
      en: "Railway transportation solutions is not only particularly sustainable, but is also fast and cost effective.",
      ar: "حلول النقل بالسكك الحديدية ليست مستدامة بشكل خاص فحسب، بل هي أيضًا سريعة وفعالة من حيث التكلفة.",
      mx: "Las soluciones de transporte ferroviario no solo son particularmente sostenibles, sino que también son rápidas y rentables."
    },
    image: "https://i.ibb.co/3yrMgSF9/Logistics-Cover.jpg",
    label: { en: "1 Rail freight", ar: "1 الشحن بالسكك الحديدية", mx: "1 Flete ferroviario" }
  },
  {
    id: 2,
    title: {
      en: "Reliable & fast\nroad transport",
      ar: "نقل بري\nموثوق وسريع",
      mx: "Transporte por carretera\nconfiable y rápido"
    },
    description: {
      en: "Our extensive road network ensures your cargo reaches its destination safely and on time, every time.",
      ar: "تضمن شبكة الطرق الواسعة لدينا وصول حمولتك إلى وجهتها بأمان وفي الوقت المحدد، في كل مرة.",
      mx: "Nuestra extensa red de carreteras garantiza que su carga llegue a su destino de forma segura y a tiempo, siempre."
    },
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop",
    label: { en: "2 Road transport", ar: "2 النقل البري", mx: "2 Transporte por carretera" }
  },
  {
    id: 3,
    title: {
      en: "Global reach via\nsea freight",
      ar: "وصول عالمي عبر\nالشحن البحري",
      mx: "Alcance global vía\nflete marítimo"
    },
    description: {
      en: "Connect your business globally with our comprehensive ocean freight forwarding services and partnerships.",
      ar: "اربط عملك عالميًا من خلال خدمات وشراكات الشحن البحري الشاملة لدينا.",
      mx: "Conecte su negocio globalmente con nuestros servicios y asociaciones integrales de transporte marítimo."
    },
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2000&auto=format&fit=crop",
    label: { en: "3 Sea freight", ar: "3 الشحن البحري", mx: "3 Flete marítimo" }
  }
];
