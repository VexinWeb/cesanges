import Image from "next/image";
import Link from "next/link";
import dataPeinture from "../mock/dataPeinture";
import MonTravailCards from "../components/MonTravailCards";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const metadata = {
  title: "Aimé Cesanges | peinture",
};

const PeinturePage = () => {
  const firstImageDataPeinture = dataPeinture[0];

  return (
    <div>
      <div className="flex flex-col items-center justify-between h-screen">
        <Image
          src={firstImageDataPeinture.src}
          alt="Peinture"
          className=" inset-0 w-full h-full object-cover"
          width={600}
          height={600}
        ></Image>
      </div>
      <div className="bg-slate-100 flex gap-4 flex-col sm:flex-row py-32 px-4 sm:px-10">
        <h1 className="w-full flex items-center font-semibold text-5xl justify-start sm:justify-center">
          Peinture
        </h1>
        <p className="w-full flex items-center">
          Mon principal mode d&apos;expression artistique est la peinture à
          l&apos;huile, une technique riche en profondeur et en textures. Je
          crée mes œuvres sur divers supports tels que la toile, le carton, le
          papier spécialement conçu pour l&apos;huile, et le bois, explorant
          ainsi diverses possibilités artistiques. Lorsque j&apos;utilise du
          papier, je choisis un type adapté à la peinture à l&apos;huile,
          éliminant ainsi le besoin de Gesso. Mes créations varient en taille,
          allant du format A5 pour des œuvres plus intimes à des dimensions
          impressionnantes de 1 mètre sur 1,5 mètre, offrant ainsi une diversité
          d&apos;options pour les amateurs d&apos;art. À travers la peinture à
          &apos; l&apos;huile, je partage mes émotions, idées et ma vision
          artistique, racontant des histoires uniques avec passion et
          dévouement.
        </p>
      </div>
      {/*  */}
      {/* Grid of 12 images */}
      {/*  */}
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 w-full p-4 sm:p-10">
        {/* Each image */}
        {/* pb-[75%] for the image to keep a 3/4 ratio */}
        {/*  */}
        {dataPeinture?.map((peinture) => (
          <Link
            href="/contact"
            key={peinture.id}
            className="relative cursor-pointer group w-full pb-[100%] bg-slate-100"
          >
            <MonTravailCards
              title={peinture.title}
              src={peinture.src}
              alt={peinture.alt}
              material={peinture.material}
              dimensions={peinture.dimensions}
              date={peinture.date}
              location={peinture.location}
              price={peinture.price}
            />
          </Link>
        ))}
      </div>
      <div className="flex flex-row justify-between font-bold tracking-wide my-10 px-4 sm:px-10 text-base sm:text-3xl">
        <Link href="/contact" className="flex">
          <div className="flex items-center pe-4">
            <ArrowBackIosIcon style={{ fontSize: "1.5rem" }} />
          </div>
          <div className="flex items-center">Contact</div>
        </Link>
        <Link href="/sculpture" className="flex">
          <div className="flex items-center">Sculpture</div>
          <div className="flex items-center ps-4">
            <ArrowForwardIosIcon style={{ fontSize: "1.5rem" }} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PeinturePage;
