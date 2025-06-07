import Image from "next/image";

export default async function Home() {
  const res = await fetch("https://www.melivecode.com/api/attractions", {
    next: { revalidate: 3600 },
  });
  const attractions = await res.json();

  return (
    <div className="max-w-6xl mx-auto p-6 sm:p-8">
      <h1 className="text-3xl font-semibold mb-8 text-center">Popular Attractions</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {attractions.map((attraction) => (
          <div
            key={attraction.id}
            className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow"
          >
            <Image
              src={attraction.coverimage}
              alt={attraction.name}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-medium text-lg mb-1">{attraction.name}</h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                {attraction.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
