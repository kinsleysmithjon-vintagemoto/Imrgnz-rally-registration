    export default function Hero() {
  return (
    <section
  className="relative flex h-[70vh] items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/hero-banner.jpg')",
  }}
>

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