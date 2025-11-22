import { Counter } from "../components/Counter";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-16">
        <div>
          <p className="text-sm uppercase tracking-wide text-gray-500">Demo</p>
          <h1 className="text-4xl font-semibold">Next.js + Redis counter</h1>
          <p className="mt-2 text-base text-gray-600">
            This server component talks to Redis through Bun&apos;s built-in
            client and exposes increment/decrement actions.
          </p>
        </div>
        <Counter />
      </section>
    </main>
  );
}
