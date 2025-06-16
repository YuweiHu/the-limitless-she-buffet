import { getItemsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const data = getItemsData();
  const sets = [...new Set(data.items.map((item) => item.set))];
  return sets.map((set) => ({
    setId: set,
  }));
}

export default async function SetPage({
  params,
}: {
  params: Promise<{ setId: string }>;
}) {
  const { setId } = await params;
  const { items } = getItemsData();
  const itemsInSet = items.filter((item) => item.set === setId);

  const setName = {
    A: "The Pilgrimage of Play",
    B: "The Tender Equations",
    C: "The Pretty Girl Mantra",
    D: "The Nice Things",
  };

  if (itemsInSet.length === 0) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Set {setId} | {setName[setId as keyof typeof setName]}
      </h1>
      <h2 className="text-xl font-bold mb-8">By {itemsInSet[0].author}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {itemsInSet.map((item) => (
          <Link href={`/item/${item.id}`} key={item.id} className="group">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={item.img}
                alt={item.name}
                width={400}
                height={300}
                className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h2 className="mt-4 text-xl font-semibold">{item.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
