export default function Accommodation() {
  return (
    <section className="bg-neutral-100 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-center text-4xl font-bold text-neutral-900">
          Accommodation
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-2xl font-semibold">
              Recreation Hotel
            </h3>

            <p className="mt-4 text-gray-600">
              The official rally venue, offering accommodation, meals and the
              perfect place to meet fellow riders.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-2xl font-semibold">
              Nearby Motels
            </h3>

            <p className="mt-4 text-gray-600">
              Greymouth has a range of motels and apartments within a short
              distance of the rally venue.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-2xl font-semibold">
              Camping
            </h3>

            <p className="mt-4 text-gray-600">
              Travelling with a camper or caravan? We'll provide nearby camping
              options before registrations open.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}