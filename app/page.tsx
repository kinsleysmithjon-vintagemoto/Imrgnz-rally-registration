import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-neutral-950 text-white">
        <section className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
          <h2 className="text-5xl font-bold tracking-tight">
            Indian Motorcycle Rider Group NZ
          </h2>

          <h3 className="mt-4 text-3xl text-red-600">
            Rally Registration 2027
          </h3>

          <p className="mt-8 text-xl text-gray-300">
            Recreation Hotel
            <br />
            Greymouth
            <br />
            6–7 February 2027
          </p>

          <button className="mt-12 rounded-lg bg-red-700 px-8 py-4 text-lg font-semibold transition hover:bg-red-600">
            Register Now
          </button>
        </section>
      </main>
    </>
  );
}