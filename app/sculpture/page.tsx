import Image from "next/image";
import Link from "next/link";
import dataSculpture from "../mock/dataSculpture";
import MonTravailCards from "../components/MonTravailCards";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const metadata = {
  title: "Aimé Cesanges | sculpture",
};

const SculpturePage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-between h-screen">
        <Image
          src="/images/sculpture/1.png"
          alt="Sculpture"
          className=" inset-0 w-full h-full object-contain"
          width={600}
          height={600}
        ></Image>
      </div>
      <div className="bg-slate-100 flex gap-4 flex-col sm:flex-row py-32 px-4 sm:px-10">
        <h1 className="w-full flex items-center font-semibold text-5xl justify-start sm:justify-center">
          Sculpture
        </h1>
        <p className="w-full flex items-center">
          Mes sculptures sont créées en utilisant une armature, du tissu et de
          l&apos;argile, puis elles sont peintes en couches successives avec de
          l&apos;acrylique ou de l&apos;huile. Elles donnent vie à une variété
          de créatures, réelles ou imaginaires, inspirées du monde vivant. Leurs
          tailles varient, allant de 20 à 30 cm pour des pièces plus petites et
          détaillées, jusqu&apos;à des formats à échelle humaine pour des œuvres
          plus imposantes. À travers ma sculpture, j&apos;exprime la vie et
          l&apos;imaginaire, créant des œuvres uniques qui racontent des
          histoires à travers la texture, la forme et la couleur. Je suis ravi
          de partager cette dimension artistique avec vous.
        </p>
      </div>
      {/*  */}
      {/* Grid of 12 images */}
      {/*  */}
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 w-full p-4 sm:p-10">
        {/* Each image */}
        {/* pb-[75%] for the image to keep a 3/4 ratio */}
        {/*  */}
        {dataSculpture?.map((peinture) => (
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
        <Link href="/peinture" className="flex">
          <div className="flex items-center pe-4">
            <ArrowBackIosIcon style={{ fontSize: "1.5rem" }} />
          </div>
          <div className="flex items-center ">Peinture</div>
        </Link>
        <Link href="/photographie" className="flex">
          <div className="flex items-center">Photographie</div>
          <div className="flex items-center ps-4">
            <ArrowForwardIosIcon style={{ fontSize: "1.5rem" }} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SculpturePage;
