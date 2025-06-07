import Image from "next/image";
import { notFound } from "next/navigation";

export default async function AttractionPage({ params }) {
  const { id } = params;
  const res = await fetch(`https://www.melivecode.com/api/attractions/${id}`);

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();

  if (data.status !== "ok") {
    notFound();
  }

  const { attraction } = data;

  return (
    <div className="max-w-3xl mx-auto p-6 sm:p-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        {attraction.name}
      </h1>
      <Image
        src={attraction.coverimage}
        alt={attraction.name}
        width={600}
        height={400}
        className="w-full h-72 object-cover rounded-lg shadow mb-6"
      />
      <p className="text-lg leading-relaxed">{attraction.detail}</p>
    </div>
  );
}
