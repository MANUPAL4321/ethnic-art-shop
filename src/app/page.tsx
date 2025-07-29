import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">
        <Hero />

        {/* Call to Action Buttons */}
        <div className="text-center py-12 space-y-4">
        </div>
      </main>

      <Footer />
    </div>
  );
}
