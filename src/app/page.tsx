import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const dummyProducts = [
  {
    id: "1",
    title: "Madhubani Peacock",
    price: 1299,
    imageUrl: "/images/peacock.jpg",
  },
  {
    id: "2",
    title: "Rajasthani Camel Art",
    price: 1499,
    imageUrl: "/images/camel.jpg",
  },
];


export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Hero />

      <section className="px-4 sm:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dummyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
