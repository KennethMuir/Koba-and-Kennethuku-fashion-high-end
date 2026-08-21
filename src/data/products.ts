export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  color: string;
}

export const products: Product[] = [
  {
    id: "koba-01",
    name: "Koba No. 01",
    category: "Signature Handbag",
    price: "KSh 85,000",
    color: "Obsidian",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=90",
    description:
      "A sculptural signature silhouette defined by quiet proportions and considered detailing.",
  },
  {
    id: "koba-02",
    name: "Koba No. 02",
    category: "Shoulder Bag",
    price: "KSh 72,000",
    color: "Espresso",
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1200&q=90",
    description:
      "An elegant everyday companion balancing structure, softness and effortless movement.",
  },
  {
    id: "koba-03",
    name: "Koba No. 03",
    category: "Mini Bag",
    price: "KSh 58,000",
    color: "Ivory",
    image:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1200&q=90",
    description:
      "A compact statement piece designed for evenings, occasions and everything between.",
  },
  {
    id: "koba-04",
    name: "Koba No. 04",
    category: "Travel",
    price: "KSh 110,000",
    color: "Mocha",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=90",
    description:
      "A spacious travel silhouette designed for those who carry with intention.",
  },
];
