import Image from "next/image";

export default function HomePage() {
  return (
    <div className="text-center">
      <div className="absolute top-0 left-0 -z-10 h-screen w-screen">
        <Image src="/home.png" alt="Background" fill className="object-cover" />
      </div>
    </div>
  );
}
