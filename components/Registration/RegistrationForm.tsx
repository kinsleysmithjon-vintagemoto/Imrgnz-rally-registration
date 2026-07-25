"use client";

import { useState } from "react";
export default function RegistrationForm() {
  const [hasPassenger, setHasPassenger] = useState(false);
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
  <select className="rounded border p-3">
  <option value="">Rider T-Shirt Size</option>
  <option>XS</option>
  <option>S</option>
  <option>M</option>
  <option>L</option>
  <option>XL</option>
  <option>2XL</option>
  <option>3XL</option>
  <option>4XL</option>
  <option>5XL</option>
</select>
</div>
<div>
  <h3 className="mb-4 text-xl font-semibold">Passenger</h3>

  <label className="flex items-center gap-2">
    <input
      type="checkbox"
      checked={hasPassenger}
      onChange={(e) => setHasPassenger(e.target.checked)}
    />
    Bringing a passenger
  </label>

  {hasPassenger && (
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      <input
        type="text"
        placeholder="Passenger First Name"
        className="rounded border p-3"
      />

      <input
        type="text"
        placeholder="Passenger Last Name"
        className="rounded border p-3"
      />
      <select className="rounded border p-3 md:col-span-2">
  <option value="">Passenger T-Shirt Size</option>
  <option>XS</option>
  <option>S</option>
  <option>M</option>
  <option>L</option>
  <option>XL</option>
  <option>2XL</option>
  <option>3XL</option>
  <option>4XL</option>
  <option>5XL</option>
</select>
    </div>
  )}
  </div>
  <div>
  <h3 className="mb-4 text-xl font-semibold">Emergency Contact</h3>

  <div className="grid gap-4 md:grid-cols-2">
    <input
      type="text"
      placeholder="Emergency Contact Name"
      className="rounded border p-3"
    />

    <input
      type="tel"
      placeholder="Emergency Contact Phone"
      className="rounded border p-3"
    />
  </div>
</div>
<div>
  <h3 className="mb-4 text-xl font-semibold">Rally Information</h3>

  <div className="grid gap-4 md:grid-cols-2">
    <div>
      <label className="mb-2 block font-medium">Arrival Date</label>
      <input
        type="date"
        className="w-full rounded border p-3"
      />
    </div>

    <div>
      <label className="mb-2 block font-medium">Departure Date</label>
      <input
        type="date"
        className="w-full rounded border p-3"
      />
    </div>
  </div>

  <div className="mt-6">
    <label className="mb-2 block font-medium">
      Additional Comments
    </label>

    <textarea
      className="w-full rounded border p-3"
      rows={4}
      placeholder="Anything else you'd like the organisers to know?"
    />
</div>
<div className="rounded-lg bg-neutral-100 p-6">
  <h3 className="text-xl font-semibold">
    Registration Fees
  </h3>

  <div className="mt-4 space-y-2">
    <p>Rider: NZ$TBC</p>
    <p>Passenger: NZ$TBC</p>
  </div>

  <p className="mt-4 text-sm text-gray-600">
    Payment will be arranged offline by the rally organisers.
  </p>
</div>
<label className="flex items-start gap-3">
  <input type="checkbox" className="mt-1" />

  <span>
    I understand that my information will only be used to administer the
    2027 IMRG NZ National Rally.
  </span>
</label>
</div>
      <button
        className="rounded-lg bg-red-700 px-8 py-4 font-semibold text-white hover:bg-red-600"
      >
        Continue
      </button>
    </form>
  );
}   