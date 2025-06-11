import { getItemsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function AllDishesPage() {
  const { items } = getItemsData();
  const sortedItems = items.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">All Dishes (A to Z)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {sortedItems.map((item) => (
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
            <p className="text-sm text-gray-500">Set {item.set}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
