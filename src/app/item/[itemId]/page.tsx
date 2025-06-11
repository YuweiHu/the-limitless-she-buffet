import { getItemsData } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const data = getItemsData();
  return data.items.map((item) => ({
    itemId: item.id,
  }));
}

export default async function ItemPage({
  params,
}: {
  params: Promise<{ itemId: string }>;
}) {
  const { itemId } = await params;
  const { items } = getItemsData();
  const item = items.find((i) => i.id === itemId);

  if (!item) {
    notFound();
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <Image
          src={item.img}
          alt={item.name}
          width={800}
          height={600}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">{item.name}</h1>
        <p className="text-lg text-gray-700">{item.desc}</p>
      </div>
    </div>
  );
}
