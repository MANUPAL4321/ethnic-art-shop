import Image from "next/image";

interface Product {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border p-4 rounded-lg shadow-md transition-shadow hover:shadow-lg bg-white">
      <div className="relative w-full h-48 rounded overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.title}
          layout="fill"
          objectFit="cover"
          className="rounded"
          unoptimized
        />
      </div>

      <h2 className="mt-4 text-lg font-semibold text-gray-800">
        {product.title}
      </h2>
      <p className="text-green-600 font-bold text-md">₹{product.price}</p>
    </div>
  );
}
