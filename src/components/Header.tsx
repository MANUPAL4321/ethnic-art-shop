"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
  const { cartItems } = useCart();
  const { data: session } = useSession();

  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      {/* Logo and Brand */}
      <Link href="/" className="flex items-center space-x-3">
        <img
          src="/images/logoe-commerce.jpg"
          alt="Logo"
          className="h-10 w-auto rounded"
        />
        <h1 className="text-2xl font-extrabold text-purple-700 tracking-wide">
          MithilaKart
        </h1>
      </Link>

      {/* Nav links */}
      <nav className="flex space-x-4 items-center">
        <Link
          href="/"
          className="px-4 py-2 rounded-lg text-sm text-gray-700 font-medium hover:bg-purple-100 hover:text-purple-700 shadow-sm transition"
        >
          Home
        </Link>
        <Link
          href="/products"
          className="px-4 py-2 rounded-lg text-sm text-gray-700 font-medium hover:bg-purple-100 hover:text-purple-700 shadow-sm transition"
        >
          Shop
        </Link>
        <Link
          href="/cart"
          className="relative px-4 py-2 rounded-lg text-sm text-gray-700 font-medium hover:bg-purple-100 hover:text-purple-700 shadow-sm transition"
        >
          🛒 Cart
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1.5">
              {cartItems.length}
            </span>
          )}
        </Link>

        {/* Authentication buttons */}
        {session ? (
          <button
            onClick={() => signOut()}
            className="px-4 py-2 rounded-lg text-sm bg-red-500 text-white font-medium hover:bg-red-600 transition"
          >
            Sign out
          </button>
        ) : (
          <button
            onClick={() => signIn("github")}
            className="px-4 py-2 rounded-lg text-sm bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
          >
            Sign in
          </button>
        )}
      </nav>
    </header>
  );
}
