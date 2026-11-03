export interface NavItem {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
}

export const siteConfig = {
  name: "Dinevo",
  tagline: "Restaurant, Food & Cafe",
  description:
    "A symphony of tradition and modern taste. Experience authentic dining, handcrafted seasonal delicacies, and an unforgettable culinary journey.",
  phone: "(555) 555-5555",
  email: "dinevo.help@gmail.com",
  contactEmail: "support@pantacly.com",
  contactPhone: "+00123 789 7465",
  addressMain: "2-5-9 Itabashi, Tokyo",
  mapsMainUrl: "https://maps.app.goo.gl/j1pGsCFodz9BS4YE9",
  locations: [
    {
      city: "Tokyo, Japan",
      address: "123 Sakura Street, Tokyo, Japan",
      phone: "+81 3 5555 0192",
      hours: "Tue - Sun: 11:30 AM - 10:30 PM",
      mapsUrl: "https://maps.app.goo.gl/j1pGsCFodz9BS4YE9",
      image: "https://framerusercontent.com/images/u0NRZGeECtcMFY363bpArFWHHo.png?width=896&height=1200",
      tag: "FLAGSHIP RESTAURANT",
    },
    {
      city: "New York, USA",
      address: "45 Green Avenue, New York, USA",
      phone: "+1 212 555 0148",
      hours: "Tue - Sun: 12:00 PM - 11:00 PM",
      mapsUrl: "https://maps.app.goo.gl/j1pGsCFodz9BS4YE9",
      image: "https://framerusercontent.com/images/PbVZNPYesP3sdT54AACKc3Vrjk.png?width=1200&height=673",
      tag: "MANHATTAN BRANCH",
    },
  ],
  openingHours: [
    { day: "Mon", time: "CLOSED", closed: true },
    { day: "Tue to Fri", time: "11 AM – 10 PM" },
    { day: "Sat to Sun", time: "12 PM – 7 PM" },
  ],
  socialLinks: [
    { name: "Facebook", href: "https://www.facebook.com/pentaclay/" },
    { name: "Instagram", href: "https://www.instagram.com/pentaclayui/" },
    { name: "Twitter (X)", href: "https://x.com/pentaclay" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/pentaclay" },
  ],
  navLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Menu", href: "/menu" },
    {
      name: "Pages",
      href: "#",
      children: [
        { name: "About Us", href: "/about" },
        { name: "Menu", href: "/menu" },
        { name: "Book a Table", href: "/book-a-table" },
        { name: "Our Team", href: "/our-team" },
        { name: "Services", href: "/services" },
        { name: "Special Offers", href: "/special-offers" },
        { name: "Gallery", href: "/gallery" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
        { name: "404 Page", href: "/404" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ],
  footerLinks: {
    pages: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Menu", href: "/menu" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
    utilities: [
      { name: "404", href: "/404" },
      { name: "Gallery", href: "/gallery" },
      { name: "Our Team", href: "/our-team" },
      { name: "Services", href: "/services" },
      { name: "Special Offers", href: "/special-offers" },
    ],
  },
};

