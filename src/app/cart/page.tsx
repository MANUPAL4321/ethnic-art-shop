"use client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    getTotalPrice,
  } = useCart();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-6">
            {cartItems.map((item) => (
              <li
                key={item.cartItemId}
                className="flex items-center space-x-4 border p-4 rounded-lg shadow-sm"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={100}
                  height={100}
                  unoptimized
                  className="rounded object-cover"
                />
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold text-purple-700">{item.title}</h2>

                  {/*Quantity price calculation */}
                  <p className="text-green-600 font-medium">
                    ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => decreaseQty(item.cartItemId)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="font-medium">{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.cartItemId)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.cartItemId)}
                  className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Show total price at bottom */}
          <div className="mt-10 text-right">
            <h2 className="text-xl font-bold text-purple-800">
              Total: ₹{getTotalPrice()}
            </h2>
            <Link
              href="/checkout"
              className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
