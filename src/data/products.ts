export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  reviews?: { user: string; comment: string }[];
}

export const products: Product[] = [
  {
    id: "1",
    title: "Madhubani Peacock",
    description: "Hand-painted traditional peacock art from the Mithila region.",
    price: 1299,
    imageUrl: "/images/peacock.jpg",
    reviews: [
      { user: "Aarti", comment: "Loved the detailing!" },
      { user: "Rohit", comment: "Amazing piece of artwork!" },
    ],
  },
  {
    id: "2",
    title: "Rajasthani Camel Art",
    description: "Colorful camel artwork representing Rajasthan’s rich culture.",
    price: 1499,
    imageUrl: "/images/camel.jpg",
    reviews: [{ user: "Nikita", comment: "Looks exactly like shown!" }],
  },
  {
    id: "3",
    title: "Village Women Artwork",
    description: "Traditional painting depicting rural Indian women in Madhubani style.",
    price: 999,
    imageUrl: "/images/madhubani-women-1.jpg",
    reviews: [{ user: "Sanjay", comment: "Very authentic feel." }],
  },
  {
    id: "4",
    title: "Madhubani Temple Style",
    description: "Detailed religious painting inspired by temple walls in Bihar.",
    price: 1799,
    imageUrl: "/images/madhubani-painting-bihar-india-10635846.jpg",
    reviews: [],
  },
];
