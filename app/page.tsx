import Image from "next/image";

export default function Home() {
  const emotions = [
    { value: 0, label: "😔 Down", color: "from-blue-500/50" },
    { value: 25, label: "😊 Content", color: "from-green-500/50" },
    { value: 50, label: "😌 Peaceful", color: "from-purple-500/50" },
    { value: 75, label: "🤗 Happy", color: "from-yellow-500/50" },
    { value: 100, label: "✨ Excited", color: "from-pink-500/50" },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <section className="relative min-h-[90vh] mt-20 flex flex-col items-center justify-center py-12 px-4">
        OE
      </section>
    </div>
  );
}
