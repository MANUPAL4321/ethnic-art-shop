"use client";

import { products } from "@/data/products";
import { notFound, useRouter } from "next/navigation"; 
import Image from "next/image";
import { useCart } from "@/context/CartContext";

interface PageProps {
  params: { id: string };
}

export default function ProductDetail({ params }: PageProps) {
  const product = products.find((p) => p.id === params.id);
  const { addToCart } = useCart();
  const router = useRouter(); 

  if (!product) return notFound();

  const handleAddAndGoToCart = () => {
    addToCart(product);
    router.push("/cart"); 
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-white">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={600}
          height={400}
          className="rounded-lg shadow-md border border-gray-200"
        />

        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-purple-700">{product.title}</h1>
          <p className="text-green-700 text-2xl font-semibold">₹{product.price}</p>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          <button
            className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded shadow transition"
            onClick={handleAddAndGoToCart} 
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-300 pb-2">
          Customer Reviews
        </h2>

        {product.reviews?.length ? (
          <ul className="space-y-4">
            {product.reviews.map((review, index) => (
              <li
                key={index}
                className="bg-gray-50 border border-gray-200 p-4 rounded-md shadow-sm"
              >
                <p className="text-purple-800 font-medium">{review.user}</p>
                <p className="text-gray-700 mt-1">{review.comment}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">
            No reviews yet. Be the first to review this product!
          </p>
        )}
      </div>
    </div>
  );
}
