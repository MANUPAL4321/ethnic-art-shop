import Link from "next/link";

interface Product {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md p-4 transition-transform hover:scale-105 hover:shadow-lg cursor-pointer">
        <div className="w-full h-48 overflow-hidden rounded">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-full object-cover rounded"
          />
        </div>

        <h2 className="mt-4 text-lg font-bold text-gray-800">{product.title}</h2>
        <p className="text-green-600 font-semibold">₹{product.price}</p>

        <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
          View Product
        </button>
      </div>
    </Link>
  );
}
