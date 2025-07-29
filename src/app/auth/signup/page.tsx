"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage("Signup successful! Redirecting...");
      setTimeout(() => router.push("/auth/signin"), 1500);
    } else {
      setMessage(data.message || "Signup failed");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      {message && <p className="mb-2 text-sm text-red-500">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded">
          Sign Up
        </button>
      </form>

      <p className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <a href="/auth/signin" className="text-purple-600 underline">
          Sign in
        </a>
      </p>
    </div>
  );
}
