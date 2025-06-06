"use client";

import React, { useState, FormEvent } from "react";
import { loadBaskets, saveBaskets } from "@/lib/basketStore";
import { useRouter } from "next/navigation";

export default function NewBasket() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const baskets = loadBaskets();

    baskets.push({
      title,
      description,
      goal: parseInt(goal),
    });

    saveBaskets(baskets);

    router.push("/baskets");
  };

  return (
    <main className="min-h-screen bg-white text-center flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-50 p-6 rounded-2xl shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-blue-800 mb-4">ساخت سبد جدید</h1>

        <input
          type="text"
          placeholder="عنوان سبد"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded-xl text-right"
          required
        />

        <textarea
          placeholder="توضیح کوتاه"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded-xl text-right"
          rows={3}
        />

        <input
          type="number"
          placeholder="هدف (تومان)"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-xl text-right"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700"
        >
          ساخت سبد
        </button>
      </form>
    </main>
  );
}
