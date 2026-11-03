export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  rating: number;
  content: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "review-1",
    name: "Sakura Tanaka",
    role: "Business Executive",
    rating: 5,
    content:
      "The flavors at Dinevo are simply unforgettable! Every single dish feels like a journey through authentic taste. The private dining room was executed flawlessly for our corporate team.",
  },
  {
    id: "review-2",
    name: "Aiko Matsuda",
    role: "Culinary Reviewer",
    rating: 5,
    content:
      "The talented chefs at Dinevo truly know how to perfectly balance authentic flavor with modern style and experience. The binchotan charcoal grill aromas elevate every meat selection.",
  },
  {
    id: "review-3",
    name: "Marcus Vance",
    role: "Private Event Host",
    rating: 5,
    content:
      "From the warm ambiance to the friendly staff, Dinevo provides an extraordinary culinary setting every visit. Our anniversary celebration will remain etched in our memories.",
  },
  {
    id: "review-4",
    name: "Elena Rostova",
    role: "Food & Travel Journalist",
    rating: 5,
    content:
      "A masterclass in precision, hospitality, and unforgettable gastronomy. The matcha cheesecake and dragon maki alone are worth traveling across the city for.",
  },
];

