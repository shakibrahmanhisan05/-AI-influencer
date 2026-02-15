// InfluenceAI Landing Page Mock Data

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Blog', href: '#' },
];

export const heroChat = [
  { type: 'user', text: 'Hey! Is the red hoodie available in size M?' },
  { type: 'ai', text: 'Yes! Red Hoodie (M) is in stock 🎉 It\'s $45 with free shipping.' },
  { type: 'user', text: 'Can you send me the buy link?' },
  { type: 'ai', text: 'Here you go 👉 shop.link/hoodie-red-m — Use VIBE10 for 10% off today only! 🔥' },
  { type: 'user', text: 'Awesome, just ordered! Do you have matching joggers?' },
  { type: 'ai', text: 'Great choice! 🙌 Yes — Matching Joggers (M) are $40. Here\'s the link: shop.link/joggers-red-m 💫' },
];

export const heroBadges = [
  { position: 'top-right', text: '247 DMs Replied Today' },
  { position: 'bottom-left', text: '3 Sales While You Slept' },
  { position: 'right-middle', text: 'Inventory Checked' },
];

export const trustBadges = [
  'No credit card required',
  'Connects in 60 seconds',
  'Works with Instagram, WhatsApp & more',
];

export const socialProofStats = [
  { value: '10M+', label: 'messages automated' },
  { value: '99.9%', label: 'uptime' },
  { value: '3x', label: 'avg revenue increase' },
];

export const platforms = [
  { name: 'Instagram', icon: 'instagram' },
  { name: 'WhatsApp', icon: 'whatsapp' },
  { name: 'Facebook Messenger', icon: 'facebook' },
  { name: 'TikTok', icon: 'tiktok' },
  { name: 'Telegram', icon: 'telegram' },
];

export const problemPoints = [
  'Customers text at 2AM — you miss them and lose the sale.',
  'I spend hours copy-pasting the same product info to every single DM.',
  'I forgot to post about my flash sale and missed out on hundreds in revenue.',
  'Followers DM me questions but I can\'t reply fast enough — they unfollow.',
  'I\'m glued to my phone answering DMs instead of actually creating content.',
];

export const solutionPoints = [
  'AI replies to every DM instantly, 24/7 — even while you sleep.',
  'Customers get product info, pricing, and buy links on demand — automatically.',
  'AI auto-posts your deals and promos at peak times without you lifting a finger.',
  'Every follower gets a response in seconds — no one slips through the cracks.',
  'You focus on creating content — your AI handles the selling and support.',
];

export const metricsData = [
  { value: 12000, suffix: '+', label: 'Influencers Using InfluenceAI' },
  { value: 98, suffix: 'M+', label: 'Customer Messages Handled' },
  { value: 3, suffix: 'x', label: 'Avg DM-to-Sale Conversion Lift' },
  { value: 99.9, suffix: '%', label: 'Platform Uptime' },
  { value: 3, prefix: '<', suffix: ' sec', label: 'Avg AI Reply Time' },
];

export const coreFeatures = [
  {
    id: 'smart-reply',
    headline: 'Never Miss a Customer Message — Ever',
    body: 'Your AI agent monitors Instagram DMs, WhatsApp, and Facebook Messenger 24/7. Every message gets an instant, personalized reply — in your tone, at 3PM or 3AM.',
    bullets: [
      'Instant response to all inbound DMs',
      'Trained on your FAQ, product catalog, and personality',
      'Supports Instagram, WhatsApp, Facebook Messenger, Telegram',
      'Human handoff: escalates complex queries to you',
      'Sentiment detection: flags upset customers immediately',
    ],
  },
  {
    id: 'inventory',
    headline: '"Is It Available?" — Your AI Knows Instantly',
    body: 'Connect your product catalog or Shopify/WooCommerce store, and your AI answers availability questions in real time. No more customers waiting hours to find out their item is sold out.',
    bullets: [
      'Real-time product availability checking',
      'Price, size, color variant responses',
      'Low stock alerts ("Only 2 left! Grab it now")',
      'Auto-suggest similar items when out of stock',
      'Integrates with Shopify, WooCommerce, Google Sheets',
    ],
  },
  {
    id: 'personality',
    headline: 'Your AI Sounds Like You — Not a Robot',
    body: 'Train your AI with up to 250,000 characters of context — your brand voice, FAQs, example replies, slang, even your signature catchphrases. Followers won\'t know the difference.',
    bullets: [
      'Upload tone guide, past replies, product descriptions',
      'AI learns from your approved and rejected replies',
      'Emoji + slang support per platform',
      'Multilingual support (50+ languages)',
      'Brand voice testing tool before going live',
    ],
  },
  {
    id: 'crm',
    headline: 'Turn Followers Into a Contact List You Own',
    body: 'Every customer who chats with your AI gets added to your contact database automatically. Capture emails, phone numbers, and purchase intent — building an owned audience that can\'t be taken away by algorithm changes.',
    bullets: [
      'Auto-capture name, email, phone from chat',
      'Tagging system (VIP customer, interested in product X, etc.)',
      'Contact timeline — full history of every interaction',
      'Export to CSV, Mailchimp, Klaviyo, HubSpot',
      'Segmentation by platform, product interest, purchase status',
    ],
  },
];

export const plusFeatures = [
  {
    title: 'Scheduled AI Content Posts',
    description: 'AI publishes content at your chosen times — morning, noon, evening. Posts are generated based on your product catalog, promotions, and current trends.',
  },
  {
    title: 'Auto Product Showcases',
    description: 'AI creates and posts visual product spotlights — including photos, descriptions, prices, and buy links — without you lifting a finger.',
  },
  {
    title: 'Live Discount Alerts',
    description: 'Running a flash sale? Set the discount parameters once. AI automatically announces it to your audience with urgency copy and countdown language.',
  },
  {
    title: 'Trend-Aware Content',
    description: 'AI monitors what\'s trending in your niche and weaves it into your posts to maximize reach, hashtag performance, and engagement.',
  },
  {
    title: 'Stock Update Posts',
    description: '"Back in stock!" or "Almost sold out!" — AI monitors your inventory and posts timely stock updates that drive urgency and conversions.',
  },
  {
    title: 'Smart Posting Times + Analytics',
    description: 'AI learns when your audience is most active and schedules posts for peak engagement windows. Review performance with detailed analytics weekly.',
  },
];

export const autoPostFlow = [
  'Your Catalog',
  'AI Writes Post',
  'AI Picks Best Time',
  'Auto-Published',
  'Customer Sees It',
  'Customer DMs You',
  'AI Replies',
  'Sale Made',
];

export const channelIntegrations = [
  {
    name: 'Instagram',
    subtitle: 'DMs + Comments + Story Mentions',
    color: '#E1306C',
    features: ['Instant DM replies', 'Comment auto-responses', 'Story mention triggers'],
  },
  {
    name: 'WhatsApp Business',
    subtitle: 'Customer inquiries & order status',
    color: '#25D366',
    features: ['24/7 inquiry handling', 'Order status updates', 'Product catalog sharing'],
  },
  {
    name: 'Facebook Messenger',
    subtitle: 'Page messages & ad responses',
    color: '#0084FF',
    features: ['Page message automation', 'Ad response handling', 'Lead qualification'],
  },
  {
    name: 'TikTok DMs',
    subtitle: 'Direct messages & comment replies',
    color: '#FF0050',
    features: ['DM auto-replies', 'Comment engagement', 'Viral content responses'],
  },
  {
    name: 'Telegram',
    subtitle: 'Bot & channel integration',
    color: '#0088CC',
    features: ['Bot-powered replies', 'Channel announcements', 'Group moderation'],
  },
  {
    name: 'SMS',
    subtitle: 'Text message automation via Twilio',
    color: '#F22F46',
    features: ['Order confirmations', 'Promo text blasts', 'Two-way conversations'],
  },
  {
    name: 'Email',
    subtitle: 'Automated email via Mailchimp/Klaviyo',
    color: '#FFE01B',
    features: ['Welcome sequences', 'Abandoned cart recovery', 'Product announcements'],
  },
];

export const howItWorks = [
  {
    step: 1,
    title: 'Connect Your Platforms',
    description: 'Link your Instagram, WhatsApp, and other social accounts in one click. Takes under 5 minutes.',
  },
  {
    step: 2,
    title: 'Train Your AI Agent',
    description: 'Upload your product catalog, FAQ list, and example replies. The more context you give, the better your AI sounds like you.',
  },
  {
    step: 3,
    title: 'Go Live & Let AI Work',
    description: 'Activate your AI agent. Every inbound message gets an instant, intelligent reply — and (on Plus) your posts go out on schedule automatically.',
  },
];

export const testimonials = [
  {
    quote: 'I was manually answering 300+ DMs per day about my skincare line. Now my AI does it and I\'ve literally 3x\'d my sales because no one is getting left on read.',
    name: '@glowwithmia',
    details: '280K Instagram followers, Beauty Influencer',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=glowwithmia',
  },
  {
    quote: 'The Plus tier auto-posting feature is a game changer. I set up my product catalog on Sunday night and my AI posted about my merch drop every day that week. I woke up to 47 orders Monday morning.',
    name: '@fitwithjose',
    details: '190K TikTok, Fitness Creator',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=fitwithjose',
  },
  {
    quote: 'My customers used to wait 6-8 hours for a response from me. Now they get an answer in 3 seconds. My DM engagement went from 12% to 89%. This literally pays for itself in one sale.',
    name: '@thriftqueenrose',
    details: '95K Instagram, Thrift & Fashion Creator',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=thriftqueenrose',
  },
  {
    quote: 'I was losing so many sales because people would DM me at midnight asking about sizes. InfluenceAI handles all of that now. My revenue jumped 40% in the first month.',
    name: '@styledbynina',
    details: '520K Instagram followers, Fashion & Lifestyle',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=styledbynina',
  },
  {
    quote: 'The personality training is insane. My followers literally can\'t tell it\'s AI. It uses my catchphrases, my emojis, everything. It\'s like having a clone of me answering DMs.',
    name: '@chaboricardo',
    details: '340K YouTube, Tech & Gadgets Creator',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=chaboricardo',
  },
  {
    quote: 'I run a coaching business and used to spend 3 hours a day just answering the same questions. Now my AI qualifies leads, answers FAQs, and books calls for me. Total game changer.',
    name: '@coachwithleah',
    details: '150K Instagram, Business Coach',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=coachwithleah',
  },
];

export const corePlanFeatures = [
  'AI reply agent — up to 500 DMs/month',
  '1 connected platform',
  'Product catalog (up to 20 products)',
  'Basic FAQ training',
  'Keyword triggers',
  'Contact capture & basic CRM',
  'Human handoff (manual takeover)',
];

export const corePlanExcluded = [
  'AI auto-posting',
  'Multi-platform',
  'Analytics dashboard',
  'Unlimited DMs',
];

export const plusPlanFeatures = [
  'Everything in Core',
  'Unlimited AI replies across all platforms',
  'Connect ALL platforms (Instagram, WhatsApp, FB, TikTok, Telegram)',
  'AI Auto-Posting Engine (daily scheduled posts)',
  'Unlimited product catalog',
  'Discount & promo announcement automation',
  'Stock update auto-posts',
  'AI voice training (up to 250K characters)',
  'Advanced analytics & performance dashboard',
  'Priority customer support (live chat)',
  'Shopify, WooCommerce, Google Sheets integration',
  'Multilingual AI (50+ languages)',
];

export const pricingFAQ = [
  { question: 'Can I cancel anytime?', answer: 'Yes, no lock-in. Cancel your subscription at any time with no penalties.' },
  { question: 'Will it sound like a bot to my followers?', answer: 'No. You train it with your voice, your slang, and your style. Most followers can\'t tell the difference.' },
  { question: 'What platforms does it connect to?', answer: 'Instagram, WhatsApp, Facebook Messenger, TikTok, Telegram, and SMS.' },
  { question: 'Is there a setup fee?', answer: 'None. Start free in minutes. No hidden fees, ever.' },
];

export const integrationLogos = [
  'Shopify', 'WooCommerce', 'Google Sheets', 'Zapier',
  'Mailchimp', 'Klaviyo', 'HubSpot', 'Stripe',
  'Notion', 'Airtable', 'Twilio', 'Meta Business Suite',
];

export const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Changelog', href: '#' },
    { label: 'Roadmap', href: '#' },
  ],
  useCases: [
    { label: 'For Fashion Influencers', href: '#use-cases' },
    { label: 'For Fitness Creators', href: '#use-cases' },
    { label: 'For Beauty', href: '#use-cases' },
    { label: 'For Merch Sellers', href: '#use-cases' },
    { label: 'For Coaches', href: '#use-cases' },
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Affiliates', href: '#' },
  ],
  support: [
    { label: 'Help Center', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'API Docs', href: '#' },
    { label: 'Status Page', href: '#' },
  ],
};

export const developerInfo = {
  name: 'Shakib Rahman Hisan',
  role: 'Full-Stack Developer & Founder',
  bio: 'Shakib built InfluenceAI from the ground up to solve a real problem he witnessed firsthand — creators losing sales simply because they couldn\'t keep up with their DMs. Every feature, every flow, and every line of code reflects a deep obsession with making creators\' lives easier and their businesses more powerful.',
  photo: 'https://customer-assets.emergentagent.com/job_d05d680f-abc2-4f72-93ec-3519d49876ca/artifacts/qmvl9unh_IMG_20251109_211735~2.jpg',
  linkedin: 'https://www.linkedin.com/in/shakib-rahman-hisan-0263a4382',
  github: 'https://github.com/shakibrahmanhisan05',
};
