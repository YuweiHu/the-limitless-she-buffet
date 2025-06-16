import Image from "next/image";

const chefs = [
  {
    name: "Ani Syu",
    subtitle: "Head Chef of Set A – The Pilgrimage of Play",
    description:
      "Ani is an editor, researcher, and creative director. Drawing from a background in philosophy and political science at National Taiwan University, she is currently based in London, pursuing an MFA at the Royal College of Art. Her practice explores cultural identity, local narratives, and community engagement through curatorial and editorial methodologies. She has collaborated with communities, governments, and institutions to develop projects such as tien faˊ and Very Pingtung, amplifying underrepresented voices and rethinking regional narratives.",
    image: "/author/A.jpg",
  },
  {
    name: "Clementine Hei-man Cheung",
    subtitle: "Head Chef of Set B – The Tender Equations",
    description:
      "Clementine is a freelance writer, copywriter, and translator, with her curious heart scattered across the fields of art, literature, culture, humanities, and imaginations. After attaining degrees in public and urban policy, and politics and sociology in Glasgow, Scotland, her thoughts are inevitably infused with a blended touch of accent.",
    image: "/author/B.JPEG",
  },
  {
    name: "An Chen",
    subtitle: "Head Chef of Set C – The Pretty Girl Mantra",
    description:
      "An Chen is a Taiwanese illustrator based in London, known for her distinctive use of clean, angular lines and geometric forms. She transforms organic elements into bold, dynamic compositions that strike a balance between structure and movement. Her work spans various mediums and has been commissioned by clients including Apple, YouTube, The New York Times, and many others.",
    image: "/author/C.jpg",
  },
  {
    name: "정지은 Ji-eun Jung",
    subtitle: "Head Chef of Set D – The Nice Things",
    description:
      "Ji-eun Jung is A boundary-crossing observer crafting sustainable content through sharp insight, creative balance, and a deep urge to question and connect.",
    image: "/author/D.jpg",
  },
];

export default function ChefsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Chefs</h1>
      <div className="space-y-12">
        {chefs.map((chef) => (
          <div
            key={chef.name}
            className={`flex flex-col md:flex-row items-center gap-16 my-20`}
          >
            <div className="md:w-1/3">
              <Image
                src={chef.image}
                alt={chef.name}
                width={400}
                height={400}
                style={{ objectFit: "contain", borderRadius: "10px" }}
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-2">{chef.name}</h2>
              <h6 className=" font-bold mb-2">{chef.subtitle}</h6>
              <p>{chef.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
