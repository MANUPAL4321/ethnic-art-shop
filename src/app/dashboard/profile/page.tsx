// /app/dashboard/profile/page.tsx

"use client";

import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="text-center mt-10">Loading your profile...</div>;
  }

  if (!session) {
    return (
      <div className="text-center mt-10 text-red-500">
        You are not logged in.
      </div>
    );
  }

  const { name, email, image } = session.user || {};

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
        My Profile
      </h2>

      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          {image && (
            <img
              src={image}
              alt="Profile"
              className="w-16 h-16 rounded-full border border-gray-300"
            />
          )}
          <div>
            <p className="font-semibold text-lg">{name}</p>
            <p className="text-gray-600">{email}</p>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          This is your profile info fetched from your session.
        </p>
      </div>
    </div>
  );
}
