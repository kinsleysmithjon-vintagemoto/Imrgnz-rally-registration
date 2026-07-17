export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-red-500">
          IMRG NZ Rally 2027
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Indian Motorcycle Rider Group NZ
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-red-500 sm:text-3xl">
          Rally Registration
        </h2>

        <p className="mt-8 text-lg text-gray-300 sm:text-xl">
          Recreation Hotel, Greymouth
          <br />
          6–7 February 2027
        </p>

        <a
          href="/register"
          className="mt-10 rounded-lg bg-red-700 px-8 py-4 text-lg font-semibold transition hover:bg-red-600"
        >
          Register Now
        </a>
      </section>
    </main>
  );
}