export interface BlogPost {
  slug: string;
  title: string;
  category: "CHINESE FOOD" | "RESTAURANT";
  date: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  excerpt: string;
  image: string;
  content: {
    lead: string;
    sections: {
      heading: string;
      body: string;
      steps?: { title: string; desc: string }[];
    }[];
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "sustainability-on-a-plate-how-we-cook-with-care",
    title: "SUSTAINABILITY ON A PLATE: COOKING WITH CARE, RESPONSIBILITY, AND RESPECT FOR NATURE",
    category: "CHINESE FOOD",
    date: "Apr 25, 2025",
    author: {
      name: "Takahashi Aya",
      role: "Sous Chef & Sustainability Lead",
    },
    excerpt:
      "Explore how Dinevo curates zero-waste kitchen practices, partners with regenerative organic farms, and honors culinary heritage responsibly.",
    image: "https://framerusercontent.com/images/iE5dQhLIOgzryQZWWigILYFVw.jpg?width=3467&height=2000",
    content: {
      lead: "At DINEVO, food is an act of care — not only for the diners seated at our tables, but for the soil, water, and communities that nourish every harvest.",
      sections: [
        {
          heading: "RESPECTING INGREDIENTS FROM SEED TO EMBERS",
          body: "Every peel, stem, and bone has culinary value when approached with reverence. Our broth foundations simmer for up to 24 hours to extract complete nutrients and deep gelatinous umami before compost return.",
        },
        {
          heading: "LOCAL PARTNERSHIPS OVER LONG MILES",
          body: "By sourcing seasonal vegetables from farmers located within a two-hour radius of Tokyo and the Hudson Valley, we minimize transport emissions while capturing optimal flavor peaks.",
        },
      ],
    },
  },
  {
    slug: "how-dinevo-blends-culture-and-creativity-in-every-dish",
    title: "DINEVO MASTERFULLY COMBINES CULTURE, CREATIVITY, AND DISTINCT FLAVORS IN EVERY DISH",
    category: "RESTAURANT",
    date: "Apr 29, 2025",
    author: {
      name: "Sato Kenichi",
      role: "Head Chef",
    },
    excerpt:
      "A deep dive into how traditional Japanese craftsmanship intersects with contemporary culinary perspectives to forge unforgettable flavor profiles.",
    image: "https://framerusercontent.com/images/UWwjgJvvuiWNFVJqXmZ1Nwk7FGk.jpg?width=4096&height=2706",
    content: {
      lead: "True culinary innovation doesn't reject tradition — it dialogues with it. At Dinevo, timeless centuries-old knife and fermentation arts are given modern expression.",
      sections: [
        {
          heading: "THE PHILOSOPHY OF HARMONY (WA)",
          body: "In classical Japanese gastronomy, balance is achieved across five colors, five tastes, and five cooking techniques. Our menu thoughtfully reflects this holistic balance across every service.",
        },
        {
          heading: "CREATIVITY ROOTED IN DISCIPLINE",
          body: "Before any modern sauce or fusion element touches a plate, our culinary team spends weeks perfecting the baseline dashi broth and rice seasoning consistency.",
        },
      ],
    },
  },
  {
    slug: "exploring-japanese-cuisine-a-journey-of-taste-and-tradition",
    title: "EXPLORE JAPANESE CUISINE: A DELIGHTFUL CULINARY JOURNEY OF FLAVORS, CULTURE, AND TRADITION",
    category: "CHINESE FOOD",
    date: "May 1, 2025",
    author: {
      name: "Nakamura Sho",
      role: "Pastry & Culinary Artisan",
    },
    excerpt:
      "From delicate sashimi slicing techniques to the subtle warmth of cedar-smoked robata, discover what makes Japanese gastronomy revered worldwide.",
    image: "https://framerusercontent.com/images/rdNijEaZYRIdnDggjpgjm8GECqs.jpg?width=3277&height=4096",
    content: {
      lead: "Japanese cuisine celebrates restraint. Rather than masking the essence of fish, meat, or vegetables with heavy sauces, the master chef coaxes pure identity forward.",
      sections: [
        {
          heading: "THE ART OF RAW PREPARATION",
          body: "Handling fish at precise temperatures with hand-forged blades preserves cellular integrity, resulting in a clean texture and luscious mouthfeel.",
        },
        {
          heading: "FERMENTATION AND TIME",
          body: "Miso, shoyu, and mirin represent months and years of microbial craftsmanship. They bring subtle depth that cannot be rushed by modern shortcuts.",
        },
      ],
    },
  },
  {
    slug: "from-kitchen-to-table-the-art-of-culinary-perfection",
    title: "FROM KITCHEN TO TABLE: MASTERING THE TRUE ART OF THE ULTIMATE SUPER CULINARY EXPERIENCE",
    category: "RESTAURANT",
    date: "May 29, 2025",
    author: {
      name: "Luca Moretti",
      role: "Fusion Creator",
    },
    excerpt:
      "The choreography of dining: how front-of-house warmth and back-of-house precision harmonize into a seamless sensory performance.",
    image: "https://framerusercontent.com/images/0zdXqNBwIWPHDOUsZhxcFcu3290.jpg?width=4096&height=2731",
    content: {
      lead: "A great meal is an orchestration. The temperature of the ceramic bowl, the speed of delivery, and the quiet attentiveness of service are as vital as the salt in the pan.",
      sections: [
        {
          heading: "SYNCHRONIZED KITCHEN TIMING",
          body: "Our stations communicate in quiet choreography so that hot elements arrive sizzling and delicate chilled crudo retains pristine coolness.",
        },
        {
          heading: "INTENTIONAL HOSPITALITY (OMOTENASHI)",
          body: "Anticipating guests' needs before they are voiced is the foundation of our dining room philosophy.",
        },
      ],
    },
  },
  {
    slug: "why-fresh-ingredients-make-all-the-difference",
    title: "WHY USING FRESH, HIGH-QUALITY INGREDIENTS ALWAYS TRULY MAKES THE BIGGEST DELICIOUS DIFFERENCE",
    category: "CHINESE FOOD",
    date: "Jun 6, 2025",
    author: {
      name: "Daniel Carter",
      role: "Grill & Sourcing Specialist",
    },
    excerpt:
      "Why our chefs awaken at dawn to inspect morning fish arrivals and forage seasonal botanical accents for our nightly service.",
    image: "https://framerusercontent.com/images/lVYIos6DMyyETqmIJM8gvrwd6w.jpg?width=2731&height=4096",
    content: {
      lead: "There is no culinary technique that can compensate for a lack of ingredient vitality. Freshness is the single greatest flavor amplifier in the world.",
      sections: [
        {
          heading: "THE DAWN SELECTION",
          body: "Every morning begins with direct checks at Tsukiji fish market suppliers and local green grocers to ensure only prime catches enter our kitchen.",
        },
        {
          heading: "TRANSPARENCY AND SEASONALITY",
          body: "Our menu shifts subtly with seasonal micro-climates, celebrating the brief weeks when sweet peas or matsutake mushrooms are at their absolute peak.",
        },
      ],
    },
  },
  {
    slug: "the-secret-behind-dinevo-s-signature-flavors",
    title: "UNVEILING THE SECRET BEHIND DINEVO TRULY EXQUISITE AND THE BELOVED SUPER SIGNATURE FLAVORS",
    category: "RESTAURANT",
    date: "Jun 7, 2025",
    author: {
      name: "Sato Kenichi",
      role: "Head Chef",
    },
    excerpt:
      "Behind the scenes of our signature dishes: aged dashi, secret house tare glazes, and the delicate balance of acidity and smoke.",
    image: "https://framerusercontent.com/images/KubDvFb6yj6Y6RysQU6mdUeWXQk.jpg?width=3328&height=2080",
    content: {
      lead: "Guests frequently ask about the signature profile of Dinevo's glazes. The secret lies in decade-old master pots enriched with roasted chicken bones, sake, and sun-dried kelp.",
      sections: [
        {
          heading: "LAYERED DEPTH",
          body: "Rather than hitting the palate with singular sweetness or salt, our tare glaze unfolds across three waves: savory first, then rich umami, finishing with delicate citrus zest.",
        },
        {
          heading: "BINCHOTAN INFUSION",
          body: "White oak charcoal burns pure and hot without flare-ups, caramelizing sugars instantly while imparting an intoxicating smoky perfume.",
        },
      ],
    },
  },
  {
    slug: "behind-the-scenes-a-day-in-the-life-of-our-chefs",
    title: "BEHIND THE SCENES: A COMPLETE LOOK INSIDE A CHEF’S BUSY DAILY ROUTINE IN THE KITCHEN",
    category: "CHINESE FOOD",
    date: "Aug 9, 2025",
    author: {
      name: "Takahashi Aya",
      role: "Sous Chef",
    },
    excerpt:
      "Follow our culinary brigade from 7:00 AM mise en place and knife sharpening to the high-energy rush of dinner service.",
    image: "https://framerusercontent.com/images/f5BEdFtWgk00behtJ5n65gdNw.png?width=1200&height=1200",
    content: {
      lead: "Before the dining room lights dim and candles flicker, twelve hours of focused preparation have already unfolded behind closed kitchen doors.",
      sections: [
        {
          heading: "MORNING SHARPENING & STOCK",
          body: "Whetstones are soaked and Japanese high-carbon steel knives are ground by hand. Huge stainless stock pots begin their slow simmer.",
        },
        {
          heading: "THE 6:00 PM BRIGADE LINEUP",
          body: "Chef Kenichi tastes every sauce, inspects garnishes, and reviews VIP reservations with the dining room managers before doors open.",
        },
      ],
    },
  },
  {
    slug: "pairing-perfection-finding-the-right-drink-for-every-meal",
    title: "PAIRING PERFECTION: DISCOVERING THE PERFECT DRINK TO COMPLEMENT ANY MEAL DELIGHT",
    category: "RESTAURANT",
    date: "Nov 6, 2025",
    author: {
      name: "John Smith",
      role: "Food Vlogger & Sommelier",
    },
    excerpt:
      "How to unlock transcendent culinary moments by pairing delicate junmai sake, biodynamic natural wines, and crafted botanical teas with our menu.",
    image: "https://framerusercontent.com/images/WMj8F1DlbcbrNv5jiPJ6LmxB1w.png?width=900&height=1200",
    content: {
      lead: "At DINEVO, food is more than flavor — it’s feeling. The right drink transforms a delicious bite into an unforgettable memory.",
      sections: [
        {
          heading: "THE EMOTION OF DINING: DESIGNING FOR CONNECTION",
          body: "Every dish is inspired by a moment, place, or mood. We look for harmonies that soothe, excite, or provide surprising contrast.",
          steps: [
            {
              title: "STEP 1 — DEFINE THE EMOTION",
              desc: "Warmth, excitement, nostalgia, or surprise?",
            },
            {
              title: "STEP 2 — CHOOSE EMOTIONAL CONTRASTS",
              desc: "Soothing dishes with bright drinks, comfort with fragrant teas.",
            },
            {
              title: "STEP 3 — DESIGN THE MOOD",
              desc: "Lighting, color, and plating complete the story.",
            },
          ],
        },
        {
          heading: "FOOD THAT SPEAKS EMOTION",
          body: "The best dining memories are not just tasted — they are felt. When a glass of chilled Daiginjo meets caramelized miso cod, both are elevated.",
        },
      ],
    },
  },
];

