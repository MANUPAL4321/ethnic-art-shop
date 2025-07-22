import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Hero />

      {/* Call to Action */}
      <div className="text-center py-12">
        <Link href="/products">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded shadow transition">
            Shop Now
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
