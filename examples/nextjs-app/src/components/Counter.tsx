import { revalidatePath } from "next/cache";
import { redis } from "bun";

const COUNTER_KEY = "demo:counter";

async function readValue() {
  const value = await redis.get(COUNTER_KEY);
  return typeof value === "number" ? value : Number(value ?? 0);
}

async function increment() {
  "use server";
  await redis.incrby(COUNTER_KEY, 1);
  revalidatePath("/");
}

async function decrement() {
  "use server";
  await redis.decrby(COUNTER_KEY, 1);
  revalidatePath("/");
}

export async function Counter() {
  const value = await readValue();

  return (
    <div className="border border-gray-300 rounded-md p-6 max-w-sm space-y-4">
      <div>
        <p className="text-sm uppercase tracking-wide text-gray-500">
          Redis Counter
        </p>
        <p className="text-4xl font-semibold" data-testid="counter-value">
          {value}
        </p>
      </div>
      <div className="flex gap-3">
        <form action={decrement} className="flex-1">
          <button
            type="submit"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-center text-base font-medium hover:bg-gray-50"
          >
            -1
          </button>
        </form>
        <form action={increment} className="flex-1">
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-3 py-2 text-center text-base font-medium text-white hover:bg-blue-700"
          >
            +1
          </button>
        </form>
      </div>
      <p className="text-xs text-gray-500">
        Values are persisted in Redis at <code>demo:counter</code> using
        Bun&apos;s native client.
      </p>
    </div>
  );
}
