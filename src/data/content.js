import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const TikTokIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.95-6.43-2.8-1.59-1.87-2.32-4.2-2.06-6.53.26-2.33 1.66-4.44 3.65-5.77 2.02-1.34 4.36-1.95 6.72-1.89.01 2.2.02 4.4-.02 6.6-.08 1.49-.52 2.96-1.33 4.21-1.17 1.79-3.07 2.85-5.12 2.92-1.57.05-3.1-.56-4.12-1.72-1.02-1.17-1.52-2.64-1.5-4.16.02-1.48.48-2.93 1.3-4.16.82-1.22 2.02-2.06 3.43-2.37.01-2.87.01-5.74.02-8.61.02-1.52.53-3.01 1.62-4.15 1.09-1.13 2.6-1.68 4.16-1.78Z" />
  </svg>
);

export const navigationItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' }
];

export const services = [
  {
    title: "Local Marketing",
    description: "Boost your local business presence with targeted campaigns and Google ranking.",
    features: [
      "Google Business Profile Setup & Optimization",
      "Local Listings & Citations Management",
      "Maps Ranking & Local SEO",
      "Customer Review Management",
      "Hyperlocal Ads & Promotions"
    ],
    icon: "📍"
  },
  {
    title: "SEO & Content Marketing",
    description: "Full SEO solutions and content strategies to drive traffic and authority.",
    features: [
      "On-page & Off-page SEO",
      "Technical & Mobile SEO",
      "Local & E-commerce SEO",
      "Keyword Research & Content Strategy",
      "SEO Audits & Reporting"
    ],
    icon: "🎯"
  },
  {
    title: "Website & E-commerce Development",
    description: "Professional, responsive, and high-performing websites for all needs.",
    features: [
      "Portfolio & Agency Websites",
      "Static & Landing Pages",
      "CMS & Shopify/WooCommerce Integration",
      "Theme Customization & App Integration",
      "Performance Optimization & Mobile Responsiveness"
    ],
    icon: "💻"
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive marketing strategies to grow traffic, leads, and sales.",
    features: [
      "Social Media Marketing (Facebook, Instagram, TikTok)",
      "Content Marketing & Blogging",
      "Email Marketing Campaigns",
      "Lead Generation & Funnel Strategy",
      "Brand Strategy & Positioning"
    ],
    icon: "📈"
  },
  {
    title: "Advertising Services",
    description: "Targeted campaigns that maximize ROI and brand visibility.",
    features: [
      "Google Ads & Shopping Campaigns",
      "Facebook & Instagram Ads",
      "LinkedIn & YouTube Ads",
      "Retargeting Campaigns",
      "A/B Testing & Conversion Optimization"
    ],
    icon: "📢"
  },
  {
    title: "AI Solutions & Automation",
    description: "Leverage AI tools and automation for smarter business processes.",
    features: [
      "AI Chatbots & Integrations",
      "Workflow Automation (Zapier, Make.com)",
      "Custom AI Tools for Business",
      "Analytics & Automated Reporting Dashboards"
    ],
    icon: "🤖"
  },
  {
    title: "Telegram Bot Development",
    description: "Custom Telegram bots for automation, engagement, and business efficiency.",
    features: [
      "Custom Telegram Bots with Advanced Features",
      "Session Bots with Proxy & Security",
      "Broadcast, Join Channel & Withdrawal Bots",
      "Telegram-WhatsApp Automation"
    ],
    icon: "💬"
  },
  {
    title: "Branding & Strategy",
    description: "Create a powerful brand identity and strategy that resonates with your audience.",
    features: [
      "Logo & Visual Identity Design",
      "Brand Guidelines & Kits",
      "Market Research & Competitor Analysis",
      "Go-to-Market Strategy for New Brands"
    ],
    icon: "🎨"
  }
];


export const packages = [
  {
    name: "Essential Local Plan",
    priceUSD: "$120",
    period: "",
    description: "Secure your online presence and start growing locally with confidence. Perfect for small businesses or shops in Sreemangal/Sylhet.",
    features: [
      "Local SEO Setup & Google Maps Optimization",
      "Social Media Profile Optimization (Facebook & Instagram)",
      "1 SEO-Optimized Blog/Article per Month",
      "Basic Online Reputation Monitoring",
      "Monthly Performance Report",
      "Email Support",
      "Delivery: 7-10 Days",
      "Support: 14 Days After Delivery"
    ],
    popular: false
  },
  {
    name: "Advanced Growth Plan",
    priceUSD: "$210",
    period: "",
    description: "Strengthen your local brand and monitor growth safely. Best for businesses aiming to expand visibility and attract more customers.",
    features: [
      "Everything in Essential Local Plan",
      "Advanced Local SEO & Competitor Analysis",
      "2 SEO Blogs/Articles per Month",
      "Social Media Content Creation (4 Posts/Month)",
      "Email Newsletter Setup & Campaign Monitoring",
      "Online Brand Monitoring & Alert System",
      "Monthly Analytics & Strategy Insights",
      "Priority Support via Telegram/Chat",
      "Delivery: 7 Days",
      "Support: 30 Days After Delivery"
    ],
    popular: true
  },
  {
    name: "Premium Digital Presence Plan",
    priceUSD: "$400+",
    period: "",
    description: "Full digital transformation with web presence, content, and real-time monitoring. Ideal for businesses wanting complete control and growth online.",
    features: [
      "Everything in Advanced Growth Plan",
      "Custom Responsive SEO-Friendly Website Development",
      "On-Page SEO & Technical Monitoring",
      "Google Ads & Meta Ads Campaign Setup",
      "Up to 4 SEO Blogs/Articles per Month",
      "24/7 Website & Social Monitoring for Breaches or Downtime",
      "Full Analytics Dashboard & Monthly Strategy Session",
      "Dedicated SEO & Digital Marketing Expert",
      "Priority Telegram/Chat Support",
      "Delivery: 5–7 Days (Ongoing Plan)",
      "Support: 60 Days + Maintenance Optional"
    ],
    popular: false
  }
];


export const caseStudies = [
  {
    title: "E-commerce Store Optimization",
    description: "Increased organic traffic by 300% for a major fashion retailer.",
    results: "300% Traffic Increase",
    duration: "6 months",
    category: "E-commerce SEO"
  },
  {
    title: "Local Business Domination",
    description: "Achieved #1 ranking for 15 high-competition local keywords.",
    results: "#1 Local Rankings",
    duration: "4 months",
    category: "Local SEO"
  },
  {
    title: "SaaS Platform Growth",
    description: "Generated over 500 qualified leads through strategic SEO.",
    results: "500+ Qualified Leads",
    duration: "8 months",
    category: "Technical SEO"
  }
];

export const faqs = [
  {
    question: "How long does it take to see SEO results?",
    answer: "Typically, you'll start seeing improvements within 3-6 months, with significant results in 6-12 months. Our proven strategies ensure consistent growth and a strong ROI."
  },
  {
    question: "Do you guarantee first page rankings?",
    answer: "While no one can ethically guarantee specific rankings due to Google's algorithm changes, our 4+ years of experience and 4.8 rating reflect our consistent success in achieving top rankings for our clients."
  },
  {
    question: "What tools do you use for SEO?",
    answer: "We use a suite of industry-leading tools including SEMrush, Ahrefs, Google Keyword Planner, Ubersuggest, and Google Analytics to deliver data-driven, comprehensive SEO strategies."
  },
  {
    question: "Can you create custom packages?",
    answer: "Absolutely! We believe in tailored solutions. We analyze your specific needs, goals, and budget to create a custom package that delivers the best possible results for your business."
  },
  {
    question: "Do you work with long-term contracts?",
    answer: "We offer both monthly packages and long-term contracts. We find that long-term partnerships yield the best results, allowing us to build sustainable growth and adapt to market changes."
  }
];

export const socialLinks = [
  { name: 'Facebook', icon: Facebook, url: '#' },
  { name: 'Instagram', icon: Instagram, url: '#' },
  { name: 'TikTok', icon: TikTokIcon, url: '#' },
  { name: 'LinkedIn', icon: Linkedin, url: '#' },
  { name: 'WhatsApp', icon: MessageCircle, url: '#' }
];