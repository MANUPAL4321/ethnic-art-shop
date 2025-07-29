"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SigninPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email: form.email,
      password: form.password,
    });

    if (res?.error) {
      if (res.status === 401) {
        setError("Invalid credentials. Please check your email or password.");
      } else {
        setError("Something went wrong. Try again.");
      }
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="max-w-md mx-auto py-10">
      <h1 className="text-2xl font-bold text-center mb-4">Sign In</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded shadow"
      >
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-2 rounded"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-2 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          Sign In
        </button>

        {error && <p className="text-red-600 text-sm">{error}</p>}
      </form>

      <p className="text-center text-sm mt-4">
        Don&apos;t have an account?{" "}
        <a href="/auth/signup" className="text-blue-600 underline">
          Sign up
        </a>
      </p>
    </div>
  );
}
