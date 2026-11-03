export interface SpecialOffer {
  id: string;
  badge: string;
  discount: string;
  title: string;
  description: string;
  image: string;
  validUntil: string;
  highlights: string[];
}

export const specialOffersData: SpecialOffer[] = [
  {
    id: "deluxe-dining",
    badge: "EXCLUSIVE PROMOTION",
    discount: "20% OFF",
    title: "ENJOY EXCLUSIVE 20% OFF TODAY DINEVO DELUXE DINING EXPERIENCE",
    description:
      "Experience elegance at its finest with our Dinevo Deluxe Dining offer — now with an exclusive 20% discount. Delight in a curated multi-course menu crafted with authentic Japanese culinary artistry, seasonal produce, and exquisite wine pairings.",
    image: "https://framerusercontent.com/images/T7tdFww3wPM27Iut3QP3OG8kGU.png?width=1200&height=923",
    validUntil: "Valid Weekdays (Tuesday to Friday)",
    highlights: [
      "5-Course Chef Tasting Menu",
      "Complimentary Sakura Welcome Drink",
      "Priority Table Seating",
      "Bespoke Dessert Tasting Flight",
    ],
  },
  {
    id: "premium-feast",
    badge: "WEEKEND SPECIAL",
    discount: "30% OFF",
    title: "ENJOY 30% OFF NOW TODAY ON THE DINEVO PREMIUM FEAST",
    description:
      "Savor the taste of perfection with 30% off our exclusive Dinevo Premium Feast menu — featuring our chef’s most celebrated creations, A5 Wagyu specialties, and hand-rolled seasonal sashimi selections.",
    image: "https://framerusercontent.com/images/biUNrHP0nyH4RGBcl10HyqwHc.png?width=1200&height=904",
    validUntil: "Valid Weekends (Saturday & Sunday)",
    highlights: [
      "7-Course Signature Grand Feast",
      "Artisanal Sake Pairing Included",
      "Private Room Option Available",
      "Chef Presentation at Table",
    ],
  },
];

