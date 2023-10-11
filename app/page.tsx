import Image from "next/image";

export default function Home() {
  const dynamicHeight: string = `calc(100vh - 400px)`;

  return (
    <main
      className="flex flex-col items-center justify-between p-24"
      style={{ minHeight: dynamicHeight }}
    >
      <div>Page d&apos;accueil</div>
    </main>
  );
}