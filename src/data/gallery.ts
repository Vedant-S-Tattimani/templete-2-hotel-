export interface GalleryItem {
  id: string;
  title: string;
  category: "dining" | "kitchen" | "drinks" | "dishes";
  categoryLabel: string;
  image: string;
  alt: string;
  span?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Artisan Pour & Infusion",
    category: "drinks",
    categoryLabel: "DRINKS",
    image: "https://framerusercontent.com/images/Zun0X4RvslhPywXYyno6xIy5Q.jpg?width=2731&height=4096",
    alt: "Bartender crafting a bespoke craft beverage",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: "gallery-2",
    title: "Warm Dining Ambiance",
    category: "dining",
    categoryLabel: "DINING",
    image: "https://framerusercontent.com/images/Zx6jvZoaaTG4XRyxIpFXs4rHi8c.png?width=1200&height=1200",
    alt: "Minimalist Japanese restaurant ambiance with warm lantern lighting",
    span: "col-span-1",
  },
  {
    id: "gallery-3",
    title: "Knife Mastery & Sashimi",
    category: "kitchen",
    categoryLabel: "KITCHEN",
    image: "https://framerusercontent.com/images/LMBF9UFSKlwHcMgR2H1NLi6956Q.jpg?width=2828&height=3535",
    alt: "Chef delicately slicing fresh salmon on cedar block",
    span: "col-span-1",
  },
  {
    id: "gallery-4",
    title: "The Omakase Counter",
    category: "kitchen",
    categoryLabel: "KITCHEN",
    image: "https://framerusercontent.com/images/ILtVaTIA0ghvAssncdfX7NNbeU.jpg?width=4096&height=2304",
    alt: "Sushi counter with handcrafted dishes ready for guests",
    span: "col-span-1 md:col-span-2",
  },
  {
    id: "gallery-5",
    title: "Evening Veranda Atmosphere",
    category: "dining",
    categoryLabel: "DINING",
    image: "https://framerusercontent.com/images/iE5dQhLIOgzryQZWWigILYFVw.jpg?width=3467&height=2000",
    alt: "Outdoor dining veranda surrounded by tranquil greenery",
    span: "col-span-1",
  },
  {
    id: "gallery-6",
    title: "Plating Perfection",
    category: "dishes",
    categoryLabel: "DISHES",
    image: "https://framerusercontent.com/images/v8mlDkp824Firr5nofpAy4.jpg?width=4096&height=2341",
    alt: "Chef finishing a signature entrée with microgreens and reduction",
    span: "col-span-1",
  },
  {
    id: "gallery-7",
    title: "Simmered Broth & Hand-Pulled Noodles",
    category: "dishes",
    categoryLabel: "DISHES",
    image: "https://framerusercontent.com/images/KubDvFb6yj6Y6RysQU6mdUeWXQk.jpg?width=3328&height=2080",
    alt: "Steaming bowl of artisan ramen noodles",
    span: "col-span-1",
  },
  {
    id: "gallery-8",
    title: "Curated Wine & Sake Cellar",
    category: "drinks",
    categoryLabel: "DRINKS",
    image: "https://framerusercontent.com/images/lz9Ea3J8q7GUjZeR7YS9VWTmq8.jpg?width=4096&height=2755",
    alt: "Sommelier wine and vintage sake glassware",
    span: "col-span-1",
  },
  {
    id: "gallery-9",
    title: "Binchotan Charcoal Grill",
    category: "kitchen",
    categoryLabel: "KITCHEN",
    image: "https://framerusercontent.com/images/RZucJSbSvRGQmH1WdWkRtEnhsSs.jpg?width=4096&height=2304",
    alt: "Smoky charcoal yakitori and robata grilling in progress",
    span: "col-span-1 md:col-span-2",
  },
];

