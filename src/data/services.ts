export interface ServiceTier {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

export const servicesData: ServiceTier[] = [
  {
    id: "occasion-dining",
    number: "01",
    title: "MAKE EVERY OCCASION DELICIOUSLY MEMORABLE",
    subtitle: "OCCASION DINING",
    description:
      "We transform every celebration into an unforgettable dining experience. From cozy gatherings to grand banquets, our tailored menus, impeccable service, and elegant settings ensure your moments are cherished forever.",
    image: "https://framerusercontent.com/images/pHJmUKJsFBrZf1F1BIRczPV4S0.jpg?width=5344&height=4008",
    features: [
      "Birthday Celebrations",
      "Corporate Dinners",
      "Wedding Receptions",
      "Anniversary Parties",
      "Private Dining Nights",
      "Holiday Banquets",
    ],
  },
  {
    id: "private-dining",
    number: "02",
    title: "EXPERIENCE THE ART OF PRIVATE DINING",
    subtitle: "PRIVATE ROOMS",
    description:
      "Step into a world of exclusivity with Dinevo’s private dining experience. Perfect for intimate gatherings, romantic dinners, or VIP meetings, our dedicated spaces offer personalized menus, dedicated servers, and sophisticated ambiance.",
    image: "https://framerusercontent.com/images/QP3N3I9BztPa07Z13VNGCRAl0.jpg?width=5344&height=4008",
    features: [
      "The Sakura Room",
      "Chef’s Table Experience",
      "Golden Lounge",
      "The Harmony Suite",
      "Zen Garden Room",
      "Crystal Dining Hall",
    ],
  },
  {
    id: "gourmet-catering",
    number: "03",
    title: "BRINGING GOURMET EXCELLENCE TO YOUR EVENT",
    subtitle: "CATERING SERVICES",
    description:
      "Dinevo Catering transforms any occasion into a culinary celebration. From corporate gatherings to weddings and private parties, our team delivers exquisite menus crafted with fresh, premium ingredients, served with unmatched elegance.",
    image: "https://framerusercontent.com/images/AQSyZVgc4tMY8qL9AddDlf98rV4.jpg?width=7144&height=4765",
    features: [
      "Dinevo Gourmet Catering",
      "Elite Feast Catering",
      "Sakura Signature",
      "Premier Platter",
      "Savory Moments",
      "Culinary Elegance",
    ],
  },
];

