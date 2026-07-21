// BusinessBuddy AI - rule-based business assistant engine.
// Responds only to business-related topics; politely declines unrelated queries.

type Topic =
  | 'ideas'
  | 'marketing'
  | 'naming'
  | 'product_description'
  | 'social_caption'
  | 'customer_engagement'
  | 'branding'
  | 'sales'
  | 'startup'
  | 'greeting'
  | 'thanks'
  | 'off_topic'
  | 'general';

const KEYWORDS: Record<Exclude<Topic, 'general'>, string[]> = {
  ideas: ['idea', 'ideas', 'start a business', 'business idea', 'niche', 'what business'],
  marketing: ['marketing', 'advertise', 'advertising', 'campaign', 'promotion', 'promote', 'seo', 'traffic', 'grow customers'],
  naming: ['name', 'naming', 'business name', 'brand name', 'company name'],
  product_description: ['product description', 'describe product', 'product desc', 'write description', 'ecommerce description'],
  social_caption: ['caption', 'captions', 'social media', 'instagram', 'facebook', 'twitter', 'linkedin post', 'tiktok', 'post caption'],
  customer_engagement: ['engagement', 'retain customer', 'customer retention', 'customer service', 'loyalty', 'customer satisfaction', 'feedback'],
  branding: ['brand', 'branding', 'logo', 'identity', 'brand identity', 'positioning'],
  sales: ['sale', 'sales', 'sell', 'selling', 'pricing', 'revenue', 'close deal', 'leads', 'conversion'],
  startup: ['startup', 'start up', 'launch', 'founder', 'co-founder', 'minimum viable', 'mvp', 'pitch', 'investor', 'funding'],
  greeting: ['hello', 'hi', 'hey', 'salam', 'assalam', 'good morning', 'good evening', 'good afternoon'],
  thanks: ['thank', 'thanks', 'thx', 'appreciate', 'grateful'],
  off_topic: ['weather', 'joke', 'movie', 'song', 'recipe', 'cook', 'football', 'cricket', 'game', 'love', 'relationship', 'health', 'medical', 'doctor', 'politics', 'religion', 'code', 'programming', 'python', 'javascript', 'math', 'solve equation'],
};

function detectTopic(input: string): Topic {
  const text = input.toLowerCase().trim();
  for (const key of Object.keys(KEYWORDS) as Array<Exclude<Topic, 'general'>>) {
    if (KEYWORDS[key].some((kw) => text.includes(kw))) {
      return key as Topic;
    }
  }
  return 'general';
}

function buildResponse(topic: Topic, input: string): string {
  switch (topic) {
    case 'greeting':
      return "Hello! I'm BusinessBuddy AI, your smart assistant for business growth. I can help you with business ideas, marketing strategy, branding, sales, product descriptions, social media captions, and customer engagement. What would you like to work on today?";
    case 'thanks':
      return "You're very welcome! I'm glad I could help. Feel free to ask me anything else about growing your business — I'm here whenever you need guidance.";
    case 'ideas':
      return generateIdeas(input);
    case 'marketing':
      return marketingStrategy(input);
    case 'naming':
      return businessNames(input);
    case 'product_description':
      return productDescription(input);
    case 'social_caption':
      return socialCaptions(input);
    case 'customer_engagement':
      return customerEngagement(input);
    case 'branding':
      return branding(input);
    case 'sales':
      return sales(input);
    case 'startup':
      return startup(input);
    case 'off_topic':
      return "I'm BusinessBuddy AI, an assistant specialized in business guidance only. I can help with topics like business ideas, marketing strategy, branding, sales, product descriptions, and customer engagement. Could you ask me something related to growing your business? I'd be happy to assist!";
    case 'general':
    default:
      return "That's a great question to explore. As BusinessBuddy AI, I specialize in business topics — business ideas, marketing strategy, branding, sales, product descriptions, social media captions, startup advice, and customer engagement. Could you share a bit more about your business goal so I can give you specific, actionable guidance? For example, are you looking to start a new venture, grow an existing one, or improve your marketing?";
  }
}

function generateIdeas(input: string): string {
  const niches = [
    'Eco-friendly packaging supplier for small retailers',
    'Subscription box for artisanal local foods',
    'AI-powered chatbot setup service for small businesses',
    "Mobile car detailing at customers' homes",
    'Online tutoring platform for professional skills',
    'Print-on-demand store for niche hobby communities',
    'Healthy meal-prep delivery for busy professionals',
    'Virtual assistant agency for solopreneurs',
    'Pet grooming and wellness subscription service',
    'Specialty coffee cart for corporate events',
  ];
  const picks = niches.sort(() => 0.5 - Math.random()).slice(0, 5);
  return [
    "Here are 5 promising business ideas you could consider:",
    "",
    ...picks.map((n, i) => `${i + 1}. ${n}`),
    "",
    "Tips for choosing the right idea:",
    "- Match it to your skills, interests, and available capital",
    "- Validate demand by talking to 10+ potential customers first",
    "- Start lean with a minimum viable offer before scaling",
    "- Check competitors and find a unique angle you can own",
  ].join('\n');
}

function marketingStrategy(input: string): string {
  return [
    "Here's a practical marketing strategy you can apply:",
    "",
    "1. Define your target audience — be specific about who they are, their pain points, and where they spend time online.",
    "2. Craft a clear value proposition — one sentence on why customers should choose you over alternatives.",
    "3. Choose 2-3 channels to focus on (e.g., Instagram, email marketing, local SEO) rather than spreading thin.",
    "4. Create consistent, valuable content that educates or entertains your audience.",
    "5. Build an email list early — it's the most cost-effective owned channel.",
    "6. Set a monthly budget, run small tests, and double down on what converts.",
    "7. Track key metrics: cost per acquisition, conversion rate, and customer lifetime value.",
    "",
    "Would you like me to tailor this to a specific industry or budget? Just share more details about your business.",
  ].join('\n');
}

function businessNames(input: string): string {
  const seeds = extractSeed(input);
  const base = seeds || 'Brand';
  return [
    "Here are some business name ideas to inspire you:",
    "",
    `1. ${base}ly — short, modern, easy to remember`,
    `2. ${base}Hub — positions you as a central resource`,
    `3. The ${base} Co. — friendly and approachable`,
    `4. ${base}ify — trendy, great for tech or creative ventures`,
    `5. Nova ${base} — suggests innovation and freshness`,
    `6. ${base}Works — implies craftsmanship and action`,
    `7. Pure ${base} — clean, premium positioning`,
    `8. ${base}Lab — great for experimental or service businesses`,
    "",
    "Before finalizing, check domain availability, social handles, and local trademark registries. Want names in a specific style or language? Tell me more!",
  ].join('\n');
}

function productDescription(input: string): string {
  return [
    "Here's a template for a compelling product description:",
    "",
    "[Product Name] — [One-line benefit headline]",
    "",
    "Meet the [product category] designed to [main benefit]. Crafted with [key feature/material], it helps you [specific outcome] without [common pain point].",
    "",
    "Key features:",
    "- [Feature 1]: [Benefit to customer]",
    "- [Feature 2]: [Benefit to customer]",
    "- [Feature 3]: [Benefit to customer]",
    "",
    "Perfect for [target audience] who want [desired result].",
    "",
    "Why choose [Product Name]? Because [unique selling point]. Order today and experience [end benefit].",
    "",
    "Share your actual product details and I'll write a custom description for you!",
  ].join('\n');
}

function socialCaptions(input: string): string {
  return [
    "Here are 5 ready-to-use social media captions for your business:",
    "",
    '1. "Big things start with small steps. Here\u2019s ours. 🚀 #GrowthMindset #BusinessJourney"',
    '2. "Quality you can feel, service you can trust. Discover the difference today. ✨ #SmallBusiness"',
    '3. "Your success is our mission. Let\u2019s grow together. 🤝 #CommunityFirst"',
    '4. "Behind every great product is a team that cares. Meet the people behind [Your Brand]. 👥"',
    '5. "Limited time, unlimited value. Don\u2019t miss out on what\u2019s new this week. ⏰ #ShopNow"',
    "",
    "Tip: Always add a clear call-to-action (Link in bio, DM us, Shop now) and 3-5 relevant hashtags. Want captions for a specific product or platform? Let me know!",
  ].join('\n');
}

function customerEngagement(input: string): string {
  return [
    "Here are proven customer engagement tips to build loyalty:",
    "",
    "1. Respond fast — aim to reply to messages and reviews within a few hours.",
    "2. Personalize communication — use customer names and reference past purchases.",
    "3. Launch a loyalty program — reward repeat customers with points, discounts, or perks.",
    "4. Ask for feedback regularly — surveys show you care and reveal improvement areas.",
    "5. Share user-generated content — feature customers on your social channels.",
    "6. Create a community — a Facebook group or Discord where customers connect.",
    "7. Send value-first emails — tips and resources, not just promotions.",
    "8. Surprise and delight — occasional freebies or handwritten thank-you notes.",
    "",
    "Consistent engagement turns one-time buyers into lifelong advocates. Want tactics for a specific platform or industry?",
  ].join('\n');
}

function branding(input: string): string {
  return [
    "Here's how to build a strong, memorable brand:",
    "",
    "1. Define your brand purpose — why you exist beyond making money.",
    "2. Know your audience — speak their language and address their aspirations.",
    "3. Create a visual identity — logo, color palette, and typography that reflect your personality.",
    "4. Develop a consistent brand voice — friendly, professional, bold, or calm; pick one and stay consistent.",
    "5. Craft a memorable tagline — short, clear, and emotionally resonant.",
    "6. Be consistent everywhere — website, social, packaging, and customer service.",
    "7. Tell your story — people connect with the journey behind the business.",
    "",
    "Strong branding builds trust before the first sale. Want help refining your brand positioning? Share what your business does!",
  ].join('\n');
}

function sales(input: string): string {
  return [
    "Here are practical strategies to boost your sales:",
    "",
    "1. Understand your customer's pain — sell the solution, not the features.",
    "2. Price with confidence — avoid racing to the bottom; communicate value.",
    "3. Create urgency ethically — limited-time offers, seasonal bundles, low-stock alerts.",
    "4. Follow up — most sales happen after the 3rd-5th contact. Don't give up early.",
    "5. Upsell and cross-sell — offer complementary products at checkout.",
    "6. Use social proof — testimonials, reviews, and case studies reduce buyer hesitation.",
    "7. Remove friction — simplify checkout and reduce steps to purchase.",
    "8. Build relationships, not transactions — repeat customers cost less and buy more.",
    "",
    "Want a tailored sales playbook for your industry or product type? Share more details!",
  ].join('\n');
}

function startup(input: string): string {
  return [
    "Here's a practical roadmap for launching your startup:",
    "",
    "1. Validate the problem — talk to 20+ potential customers before building anything.",
    "2. Build a minimum viable product (MVP) — the simplest version that solves the core problem.",
    "3. Define your business model — how you'll make money (subscription, one-time, freemium, etc.).",
    "4. Register your business and handle legal basics — licenses, contracts, and tax setup.",
    "5. Bootstrap or raise funds — start lean; only raise capital when you have traction.",
    "6. Focus on first 10 customers — deliver exceptional service and gather testimonials.",
    "7. Track key metrics — customer acquisition cost, churn, and monthly recurring revenue.",
    "8. Iterate based on feedback — your first version is a starting point, not the final product.",
    "",
    "Want specific advice on funding, pitching, or finding co-founders? Tell me where you are in the journey!",
  ].join('\n');
}

function extractSeed(input: string): string {
  const cleaned = input
    .replace(/[^a-zA-Z\s]/g, '')
    .replace(/\b(name|business|company|brand|for|my|the|a|an|please|generate|suggest|me|some|ideas?)\b/gi, '')
    .trim();
  const word = cleaned.split(/\s+/).find((w) => w.length > 2);
  if (!word) return '';
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export type ChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
};

export function generateReply(userInput: string): string {
  const topic = detectTopic(userInput);
  return buildResponse(topic, userInput);
}

// Estimate a realistic "thinking" delay for the typing animation.
export function replyDelay(text: string): number {
  return Math.min(2200, Math.max(700, text.length * 8));
}

export const SUGGESTED_PROMPTS = [
  'Give me 5 small business ideas',
  'How do I market my business on a low budget?',
  'Suggest a catchy business name for a coffee shop',
  'Write a product description for handmade candles',
  'Give me 5 social media captions for my brand',
  'How can I keep my customers engaged?',
];
