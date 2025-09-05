import React from 'react';
import { Facebook, Instagram, MessageCircle, Mail } from 'lucide-react';

export const services = [
  {
    title: "Local Marketing",
    description: "Grow your business locally with targeted campaigns and Google presence.",
    features: [
      "Google Business Profile Setup & Optimization",
      "Local Listings & Citations Management",
      "Maps Ranking & Local SEO Strategies",
      "Customer Review Management",
      "Hyperlocal Ads & Promotions"
    ],
    icon: "📍",
    link: "/services/local-marketing"
  },
  {
    title: "SEO & Content Marketing",
    description: "Comprehensive SEO and content strategies to boost traffic and authority.",
    features: [
      "Full On-Page & Off-Page SEO",
      "Technical SEO & Core Web Vitals Optimization",
      "Keyword Research & Topical Authority Blogging",
      "E-commerce SEO for Shopify, WooCommerce & Custom Stores",
      "YouTube SEO & Video Optimization",
      "SEO Audit & Reporting with Ahrefs/Semrush"
    ],
    icon: "📈",
    link: "/services/seo-content-marketing"
  },
  {
    title: "Website & E-commerce Development",
    description: "Custom websites and online stores that convert visitors into customers.",
    features: [
      "Custom Portfolio & Agency Websites",
      "Shopify, WooCommerce, & Custom Store Development",
      "Landing Pages Optimized for Conversions",
      "Responsive Design & Mobile Optimization",
      "Website Performance & Speed Enhancement"
    ],
    icon: "💻",
    link: "/services/website-development"
  },
  {
    title: "Digital Advertising & Campaigns",
    description: "Drive leads and sales with targeted digital campaigns.",
    features: [
      "Google Ads (Search, Display, Shopping)",
      "Meta Ads (Facebook & Instagram)",
      "Full Funnel Campaign Strategy & Management",
      "Lead Generation & Retargeting Campaigns",
      "Ad Creatives, Copywriting & Split Testing"
    ],
    icon: "📢",
    link: "/services/digital-advertising"
  },
  {
    title: "AI Solutions & Business Automation",
    description: "Streamline processes and improve efficiency with AI-powered tools.",
    features: [
      "Custom AI Tools & Workflow Automation",
      "Chatbot Integration for Websites & Telegram",
      "Automated Reporting Dashboards",
      "Process Automation with Zapier & Make.com"
    ],
    icon: "🤖",
    link: "/services/ai-automation"
  },
  {
    title: "Telegram Bot Development",
    description: "High-performance Telegram bots for business automation and engagement.",
    features: [
      "Custom Telegram Bot Development",
      "Session Bots with Proxy & Security Support",
      "Broadcast, Join Channel & Withdrawal Bots",
      "Telegram-WhatsApp Automation"
    ],
    icon: "💬",
    link: "/services/telegram-bots"
  },
  {
    title: "Branding & Strategy",
    description: "Create a strong brand identity and strategy that connects with your audience.",
    features: [
      "Logo & Visual Identity Design",
      "Brand Guidelines & Kits",
      "Market Research & Competitor Analysis",
      "Go-to-Market Strategy for New Brands"
    ],
    icon: "🎨",
    link: "/services/branding-strategy"
  }
];

export const packages = [
  {
    name: "Essential Local Plan",
    price: "$120",
    period: "",
    description: "Secure your online presence and start growing locally with confidence. Perfect for small businesses or shops in Sreemangal/Sylhet.",
    features: [
      "Local SEO Setup & Google Maps Optimization",
      "Social Media Profile Optimization (Facebook & Instagram)",
      "1 SEO-Optimized Blog/Article per Month",
      "Basic Online Reputation Monitoring",
      "Monthly Performance Report",
      "Email Support Only",
      "Delivery: 7-10 Days",
      "Support: 14 Days After Delivery"
    ],
    popular: false
  },
  {
    name: "Advanced Growth Plan",
    price: "$210",
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
      "Telegram/Chat Support",
      "Delivery: 7 Days",
      "Support: 30 Days After Delivery"
    ],
    popular: true
  },
  {
    name: "Premium Digital Presence Plan",
    price: "$400+",
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
    client: "StreetStitch (Clothing Brand, BD)",
    title: "Local Clothing Brand – From Invisible to Top 3 on Google",
    description: "Boosted local SEO traffic & Google visibility for apparel keywords.",
    results: "700% increase in organic traffic, Ranked Top 3 for “custom t-shirt Bangladesh”, 3X increase in local store visits from Maps, 50+ new Google reviews generated organically.",
    duration: "3 Months",
    category: "Local SEO",
    keyWin: "Transformed their digital footprint from zero to a featured Map Pack listing, driving hundreds of new monthly visitors."
  },
  {
    client: "GlowSkinify (Skincare Niche – US)",
    title: "Shopify Store – $0 to $12K Revenue in 45 Days",
    description: "Built a high-converting Shopify store from scratch, drove targeted traffic, and optimized the entire sales funnel.",
    results: "$12,320 in revenue (first 45 days), 200+ email subscribers, 2.6% average conversion rate, Page speed: 92/100.",
    duration: "6 Weeks",
    category: "Shopify & E-commerce",
    keyWin: "Optimized product pages with SEO and a custom checkout boosted trust and slashed bounce rate."
  },
  {
    client: "ChatAssistPro (AI SaaS Tool – UK)",
    title: "SaaS Company – SEO Growth from 0 to 18K Visitors/Month",
    description: "Built SEO authority from the ground up, ranking for competitive keywords like “AI chatbot” & “customer support automation”.",
    results: "18K/month organic traffic, Top 5 for 12+ high-volume SaaS keywords, 110+ referring domains, Avg time on site: 3.2 minutes.",
    duration: "5 Months",
    category: "SaaS SEO",
    keyWin: "“MiBrand helped us go from 0 to becoming a content authority in our niche. They own SEO.” — Co-founder"
  },
  {
    client: "FinXBot (Crypto Project – Global)",
    title: "Telegram Automation – 5X Client Conversions",
    description: "Developed a custom automation bot for session login & client onboarding via Telegram, handling thousands of users.",
    results: "5X faster onboarding, 3K+ sessions processed monthly, Bot uptime: 99.99%, Clean UI + Admin Panel for full control.",
    duration: "3 Weeks",
    category: "Telegram Automation",
    keyWin: "“Exactly what we needed — automation with scale. MiBrand are problem solvers 💯.”"
  }
];

export const faqs = [
  {
    question: "What is MiBrand and what do you offer?",
    answer: "MiBrand is a premium digital agency specializing in SEO, digital marketing, Shopify development, Telegram bot automation, and AI-powered solutions. We help brands grow from 0 to top rankings with proven strategies and expert execution."
  },
  {
    question: "How experienced is your team?",
    answer: "We have a technically expert team with 4+ years of experience, and every team member has at least 2+ years of professional skill in their domain. We’ve completed 1200+ successful projects for over 500+ clients worldwide."
  },
  {
    question: "What makes your SEO services stand out?",
    answer: "We combine data-driven strategies, premium tools like Ahrefs & Semrush, and deep technical expertise. Our SEO service includes on-page, off-page, technical, e-commerce, local SEO, and YouTube SEO – all tailored to your business."
  },
  {
    question: "Do you offer custom SEO packages?",
    answer: "Yes! We offer custom SEO plans based on your goals, website status, and competition level. Whether you're a startup or an enterprise, we’ll tailor a plan that works and brings ROI."
  },
  {
    question: "What is your refund policy?",
    answer: "Due to the nature of our services, all sales are final. We do not offer refunds once an order is confirmed and the project has commenced. We are committed to delivering the highest quality of work and will work with you to ensure you are satisfied with the results."
  },
  {
    question: "What tools do you use for SEO?",
    answer: "We utilize a suite of industry-leading tools including Ahrefs, Semrush, Google Keyword Planner, Google Analytics, and Google Search Console to ensure comprehensive data analysis and strategy execution."
  },
  {
    question: "Can you optimize my Shopify or e-commerce store?",
    answer: "Absolutely. We are Shopify experts. From store setup to speed optimization, SEO to sales funnel integration, we provide full support to maximize your store’s visibility and conversions."
  },
  {
    question: "Do you build custom Telegram bots?",
    answer: "Yes! We specialize in Telegram bot development including session bots, automation tools, multi-account logins, and proxy-based systems. All bots are secure, scalable, and customized for your needs."
  },
  {
    question: "How do I get started with MiBrand?",
    answer: "Click on “Get Started Today” on the homepage, or message us directly via WhatsApp or Email. We'll audit your needs and suggest a winning strategy — free of charge."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer 24/7 support and regular updates. Whether it's tracking SEO performance, adjusting campaigns, or scaling automations — we’re with you every step of the way."
  }
];

export const socialLinks = [
  { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/mibrandofficial', title: 'MiBrand – Official Facebook Page' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/mibrandofficial', title: 'MiBrand – Official Instagram Profile' },
  { name: 'Email', icon: Mail, url: 'mailto:contact@mibrand.agency', title: 'Email us at contact@mibrand.agency' },
  { name: 'WhatsApp', icon: MessageCircle, url: `https://wa.me/8801605956421?text=${encodeURIComponent("Hello! I'm visiting your website and would like to inquire about your services.")}`, title: 'Chat with the best SEO experts – MiBrand' }
];

export const blogPosts = [
  {
    slug: "how-to-rank-shopify-stores-on-google",
    title: "How to Rank Shopify Stores on Google in 2025",
    author: "MiB Bappi",
    date: "July 26, 2025",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=75&fm=webp",
    excerpt: "Unlocking the secrets to Shopify SEO is crucial for e-commerce success. This guide covers everything from technical optimizations to content strategy to get you on page one."
  },
  {
    slug: "telegram-bot-ideas-for-business",
    title: "10 Innovative Telegram Bot Ideas to Automate Your Business",
    author: "MiBrand Team",
    date: "July 22, 2025",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=75&fm=webp",
    excerpt: "Telegram bots are more than just chat tools. Discover how custom bots can handle customer support, process orders, and streamline your entire workflow."
  },
  {
    slug: "seo-vs-paid-ads",
    title: "SEO vs. Paid Ads: Which is Better for Long-Term Growth?",
    author: "MiB Bappi",
    date: "July 18, 2025",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=75&fm=webp",
    excerpt: "It's the ultimate marketing showdown. We break down the pros and cons of organic SEO versus paid advertising to help you decide where to invest your budget."
  }
];