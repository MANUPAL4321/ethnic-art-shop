"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ✅ Email must be like name@gmail.com or name@domain.org
  const validateEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.name || !form.email || !form.password) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(form.email)) {
      setError("Please enter a valid email (e.g. yourname@gmail.com or example@domain.org)");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
      } else {
        setSuccess("Signup successful! Redirecting to login...");
        setForm({ name: "", email: "", password: "" });

        setTimeout(() => {
          router.push("/auth/signin");
        }, 1500);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong.");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto py-10">
      <h1 className="text-2xl font-bold text-center mb-4">Sign Up</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full border border-gray-300 px-4 py-2 rounded"
        />

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email (e.g. yourname@gmail.com)"
          className="w-full border border-gray-300 px-4 py-2 rounded"
        />

        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password (min 6 characters)"
          className="w-full border border-gray-300 px-4 py-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          Sign Up
        </button>

        {error && <p className="text-red-600 text-sm">{error}</p>}
        {success && <p className="text-green-600 text-sm">{success}</p>}
      </form>

      <p className="text-center text-sm mt-4">
        Already have an account?{" "}
        <a href="/auth/signin" className="text-blue-600 underline">
          Sign in
        </a>
      </p>
    </div>
  );
}
