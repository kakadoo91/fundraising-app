"use client";

import { useState, useEffect } from "react";
import { loadBaskets } from "@/lib/basketStore";

import type { Basket } from "@/lib/basketStore";

export default function BasketList() {
  const [baskets, setBaskets] = useState<Basket[]>([]);

  useEffect(() => {
    setBaskets(loadBaskets());
  }, []);

  return (
    <main className="min-h-screen bg-blue-100 p-6 text-right">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">سبدهای ساخته شده</h1>
      {baskets.length === 0 ? (
        <p className="text-gray-600">فعلاً هیچ سبدی وجود ندارد.</p>
      ) : (
        <ul className="space-y-4">
          {baskets.map((basket, index) => (
            <li key={index} className="bg-white p-4 rounded-xl shadow-md">
              <h2 className="text-xl font-bold text-blue-700">{basket.title}</h2>
              <p className="text-gray-600 mt-1">{basket.description}</p>
              <p className="text-gray-800 mt-2 font-medium">
                هدف: {basket.goal.toLocaleString()} تومان
              </p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
