import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
// import { useCart } from "@/context/CartContext"; // we’ll add this context soon

interface PageProps {
  params: { id: string };
}

export default function ProductDetail({ params }: PageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) return notFound();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Image
        src={product.imageUrl}
        alt={product.title}
        width={600}
        height={400}
        className="rounded shadow-md w-full h-auto"
      />

      <h1 className="text-3xl font-bold mt-6 text-purple-800">{product.title}</h1>
      <p className="text-gray-700 mt-4 text-lg">{product.description}</p>
      <p className="text-green-600 font-semibold text-2xl mt-2">₹{product.price}</p>

      <button
        className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded"
        // onClick={() => addToCart(product)} // Enable after adding cart context
      >
        Add to Cart
      </button>
    </div>
  );
}
