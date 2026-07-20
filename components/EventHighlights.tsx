const highlights = [
  {
    title: "Scenic Rides",
    description: "Experience some of New Zealand's best West Coast roads.",
  },
  {
    title: "Rally Dinner",
    description: "Enjoy an evening meal and social gathering with fellow riders.",
  },
  {
    title: "Entertainment",
    description: "Relax and enjoy the Saturday evening entertainment.",
  },
  {
    title: "Great Company",
    description: "Meet IMRG NZ members from around the country.",
  },
];

export default function EventHighlights() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Event Highlights
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-gray-200 p-6 shadow-sm"
            >
              <h3 className="mb-3 text-2xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}