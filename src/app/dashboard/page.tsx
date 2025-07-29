// /app/dashboard/page.tsx

"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!session) {
    return (
      <div className="text-center mt-10 text-red-500">
        You are not logged in. Please{" "}
        <Link href="/auth/signup" className="text-blue-600 underline">
          Sign In
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">
        Welcome, {session.user?.name || "User"}!
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <Link
          href="/products"
          className="bg-purple-100 hover:bg-purple-200 text-center py-6 px-4 rounded-lg shadow"
        >
          🛍️ <br />
          <span className="text-lg font-semibold">Shop Products</span>
        </Link>

        <Link
          href="/cart"
          className="bg-green-100 hover:bg-green-200 text-center py-6 px-4 rounded-lg shadow"
        >
          🛒 <br />
          <span className="text-lg font-semibold">My Cart</span>
        </Link>

        <Link
          href="/dashboard/profile"
          className="bg-yellow-100 hover:bg-yellow-200 text-center py-6 px-4 rounded-lg shadow"
        >
          🙍‍♂️ <br />
          <span className="text-lg font-semibold">My Profile</span>
        </Link>
      </div>
    </div>
  );
}
