export interface TeamMember {
  id: string;
  name: string;
  role: string;
  japaneseRole?: string;
  image: string;
  bio?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "takahashi-aya",
    name: "TAKAHASHI AYA",
    role: "Sous Chef",
    japaneseRole: "副料理長",
    image: "https://framerusercontent.com/images/mXdTg4V8EICXfAhZfrpsSW86cI.png?width=673&height=1200",
    bio: "Passionate about preserving classic culinary traditions while elevating flavor profiles through seasonal Japanese ingredients.",
  },
  {
    id: "sato-kenichi",
    name: "SATO KENICHI",
    role: "Head Chef",
    japaneseRole: "総料理長",
    image: "https://framerusercontent.com/images/aC7UxGoAJfzk2lnkXTUYi0tqU8.png?width=686&height=1200",
    bio: "Over 20 years of mastery in Kaiseki dining and modern gastronomy across Tokyo and Kyoto Michelin-starred kitchens.",
  },
  {
    id: "nakamura-sho",
    name: "NAKAMURA SHO",
    role: "Pastry Chef",
    japaneseRole: "製菓長",
    image: "https://framerusercontent.com/images/MObEHJi7uf8foNuB4JLijvoC9o.png?width=1200&height=979",
    bio: "Creating delicate dessert harmonies of ceremonial grade matcha, yuzu, and French patisserie artistry.",
  },
  {
    id: "hiroshi-tanaka",
    name: "HIROSHI TANAKA",
    role: "Dessert Specialist",
    japaneseRole: "デザート監修",
    image: "https://framerusercontent.com/images/TPH3NtxYWel8ppCZ2WtBWBTooe0.png?width=1200&height=992",
    bio: "Specializing in frozen confections, wagashi infusions, and bespoke plated dessert experiences.",
  },
  {
    id: "luca-moretti",
    name: "LUCA MORETTI",
    role: "Fusion Creator",
    japaneseRole: "フュージョン統轄",
    image: "https://framerusercontent.com/images/xMkOep42quc680XXk4Jb0rPlmcY.jpg?width=2731&height=4096",
    bio: "Blending Mediterranean olive oil and pasta craft with Japanese umami, shiso, and dashi broths.",
  },
  {
    id: "aiko-nakamura",
    name: "AIKO NAKAMURA",
    role: "Sous Chef",
    japaneseRole: "副料理長",
    image: "https://framerusercontent.com/images/5fhmW6OMankHOMcohALJG2wvXjA.jpg?width=4096&height=2296",
    bio: "Precision knife specialist focusing on raw seafood selection, sashimi aging, and pristine table presentation.",
  },
  {
    id: "daniel-carter",
    name: "DANIEL CARTER",
    role: "Grill & Meat Specialist",
    japaneseRole: "炭火焼き職人",
    image: "https://framerusercontent.com/images/vK7rLVxTDAdku7H6E02LP6WW9Q.jpg?width=4032&height=2688",
    bio: "Bincho-tan charcoal enthusiast bringing out unmatched tenderness and smoky aroma from A5 Wagyu and lamb.",
  },
  {
    id: "yumi-sato",
    name: "YUMI SATO",
    role: "Presentation Designer",
    japaneseRole: "盛り付けデザイン",
    image: "https://framerusercontent.com/images/hvprfBJE9dJhCFr1iuXA7V7g30.jpg?width=4096&height=2296",
    bio: "Curating ceramic tableware, seasonal botanicals, and visual harmony for every course served.",
  },
  {
    id: "arjun-mehta",
    name: "ARJUN MEHTA",
    role: "Asian Flavor Consultant",
    japaneseRole: "フレーバー顧問",
    image: "https://framerusercontent.com/images/mKIOazwdTKVBJcpqCPMvuhZTA.jpg?width=4096&height=2802",
    bio: "Integrating aromatic spices, fermentation techniques, and pan-Asian nuance into Dinevo's signature sauces.",
  },
];

