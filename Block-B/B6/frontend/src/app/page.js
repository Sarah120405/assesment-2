import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-zinc-50 to-slate-200 px-4 dark:from-black dark:via-zinc-900 dark:to-slate-950">
      <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-xl shadow-slate-200/80 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/40">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
          Bike rental
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Bike Rent
        </h1>
        <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
          Explore available bikes and choose the perfect ride for your next
          trip.
        </p>

        <Link
          href="/bike"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-slate-700 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400"
        >
          View Bike List
        </Link>
      </div>
    </main>
  );
}
