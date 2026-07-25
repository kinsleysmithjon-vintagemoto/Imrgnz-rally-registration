export default function RegistrationForm() {
  return (
    <form className="mx-auto max-w-3xl space-y-8 rounded-lg bg-white p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-neutral-900">
        Rally Registration
      </h2>

      <div>
        <h3 className="mb-4 text-xl font-semibold">Rider Details</h3>

        <div className="grid gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="First Name"
            className="rounded border p-3"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="rounded border p-3"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="rounded border p-3"
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            className="rounded border p-3"
          />

          <input
            type="text"
            placeholder="Town / City"
            className="rounded border p-3 md:col-span-2"
          />
        </div>
      </div>
      <div>
  <h3 className="mb-4 text-xl font-semibold">Motorcycle Details</h3>

  <div className="grid gap-4 md:grid-cols-2">
    <input
      type="text"
      placeholder="Motorcycle Model"
      className="rounded border p-3"
    />

    <input
      type="text"
      placeholder="Registration Number (optional)"
      className="rounded border p-3"
    />
  </div>
</div>
      <button
        className="rounded-lg bg-red-700 px-8 py-4 font-semibold text-white hover:bg-red-600"
      >
        Continue
      </button>
    </form>
  );
}   