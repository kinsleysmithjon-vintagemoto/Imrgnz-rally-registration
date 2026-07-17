export default function Header() {
  return (
    <header className="bg-neutral-900 border-b border-neutral-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold text-white">
            🏍 IMRG NZ Rally Registration
          </h1>
          <p className="text-sm text-gray-400">
            Recreation Hotel • Greymouth • 6–7 February 2027
          </p>
        </div>

        <button className="rounded-md bg-red-700 px-4 py-2 font-semibold text-white hover:bg-red-600">
          Register
        </button>
      </div>
    </header>
  );
}