import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-100 text-center p-10">
      <h1 className="text-4xl font-bold text-blue-800">سلام 👋</h1>
      <p className="mt-4 text-lg text-gray-700">به وب‌سایت هم‌خرج خوش آمدی!</p>

      <Link href="/New">
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl">
          ساخت سبد جدید
        </button>
      </Link>
    </main>
  );
}
