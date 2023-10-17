import Image from "next/image";
import Link from "next/link";
import dataPeinture from "./mock/dataPeinture";
import dataPhotographie from "./mock/dataPhotographie";
import dataSculpture from "./mock/dataSculpture";

export default function Home() {
  const dynamicHeight: string = `calc(100vh - 400px)`;
  const firstImageDataPeinture = dataPeinture[0];
  const firstImageDataPhotographie = dataPhotographie[0];
  const firstImageDataSculpture = dataSculpture[0];

  return (
    <main
      className="flex flex-col items-center justify-between my-32"
      style={{ minHeight: dynamicHeight }}
    >
      {/* Grid of 4 images */}
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 w-full p-4 sm:p-10">
        {/*  */}
        {/* Each image */}
        {/*  */}
        {/* 1/ Peinture image card */}
        <Link
          href="/peinture"
          className="relative group cursor-pointer w-full pb-[75%]"
        >
          <Image
            src={firstImageDataPeinture.src}
            alt={firstImageDataPeinture.alt}
            className="absolute inset-0 w-full h-full object-cover transition-opacity group-hover:opacity-90"
            width={600}
            height={450}
          />
          <div className="absolute inset-0 w-full h-full flex items-center justify-center md:opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-white text-3xl font-semibold tracking-wider">
              Peinture
            </p>
          </div>
        </Link>
        {/* 2/ Sculpture image card */}
        <Link
          href="/sculpture"
          className="relative group cursor-pointer w-full pb-[75%] bg-slate-200 border border-slate-300"
          // className="relative group cursor-pointer w-full pb-[75%] bg-white"
        >
          <Image
            src={firstImageDataSculpture.src}
            alt={firstImageDataSculpture.alt}
            className="absolute inset-0 w-full h-full object-contain transition-opacity group-hover:opacity-90"
            width={600}
            height={450}
          />
          <div className="absolute inset-0 w-full h-full flex items-center justify-center md:opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-white text-3xl font-semibold tracking-wider">
              Sculpture
            </p>
          </div>
        </Link>
        {/* 3/ Photographie image card */}
        <Link
          href="/photographie"
          className="relative group cursor-pointer w-full pb-[75%]"
        >
          <Image
            src={firstImageDataPhotographie.src}
            alt={firstImageDataPhotographie.alt}
            className="absolute inset-0 w-full h-full object-cover transition-opacity group-hover:opacity-90"
            width={600}
            height={450}
          />
          <div className="absolute inset-0 w-full h-full flex items-center justify-center md:opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-white text-3xl font-semibold tracking-wider">
              Photographie
            </p>
          </div>
        </Link>
        {/* 4/ Contact image card */}
        <Link
          href="/contact"
          className="relative group cursor-pointer w-full pb-[75%] border-2 border-slate-200"
        >
          <Image
            // src="/images/contact/contact_portrait_nobg.png"
            src="/images/contact/contact_portrait_square.jpg"
            alt="Image 4"
            // className="absolute inset-0 w-full h-full object-cover transition-opacity group-hover:opacity-90"
            className="absolute inset-0 w-full h-full object-cover transition-opacity group-hover:opacity-90"
            width={600}
            height={450}
          />
          <div className="absolute inset-0 w-full h-full flex items-center justify-center md:opacity-0 group-hover:opacity-100 transition-opacity">
            {/* <p className="text-slate-200 text-3xl font-semibold tracking-wider"> */}
            <p className="text-white text-3xl font-semibold tracking-wider">
              Contact
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}
