export default function Hero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center bg-neutral-900">
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl font-bold text-white">
          2027 IMRG NZ National Rally
        </h1>

        <p className="mt-6 text-2xl text-gray-200">
          Recreation Hotel • Greymouth
        </p>

        <p className="text-xl text-gray-300">
          6–7 February 2027
        </p>

        <p className="mt-8 text-3xl italic text-red-500">
          Ride the Coast. Share the Journey.
        </p>

        <button className="mt-10 rounded-lg bg-red-700 px-8 py-4 text-xl font-semibold text-white hover:bg-red-600">
          Register Now
        </button>
      </div>
    </section>
  );
}