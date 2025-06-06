type Basket = {
  title: string;
  description: string;
  goal: number;
};

// Save baskets to localStorage
export function saveBaskets(baskets: Basket[]) {
  if (typeof window !== "undefined") {
    localStorage.setItem("baskets", JSON.stringify(baskets));
  }
}

// Load baskets from localStorage
export function loadBaskets(): Basket[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem("baskets");
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}
